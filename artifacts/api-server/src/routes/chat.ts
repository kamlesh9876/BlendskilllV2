import { Router, type Request, type Response } from "express";
import { GoogleGenAI } from "@google/genai";

const chatRouter = Router();

const SYSTEM_INSTRUCTION = `You are the AI Assistant for BlendSkills (https://blendskills.co.in), a premier digital marketing, software engineering, and AI automation agency based in India with offices in Pune and Gaya.

Key Company Facts & Capabilities:
- About: BlendSkills combines modern web/mobile app engineering, performance marketing, and AI workflow automation to scale startups and enterprise brands.
- Core Services:
  1. Custom Software & App Development: Web apps (React, Node, Next.js), mobile apps (iOS/Android), custom CRMs, ERPs, and portal platforms.
  2. AI & Workflow Automation: 24/7 intelligent chatbots, Voice AI support, WhatsApp integration bots, predictive revenue analytics, and CRM automation pipelines.
  3. Performance Marketing & SEO: High-ROI Meta/Google ads campaigns, organic growth SEO, conversion rate optimization (CRO), and social media funnels.
  4. Branding & UI/UX Design: Brand identity systems, modern UI/UX design, high-converting landing pages.
  5. Data & Business Intelligence: Custom analytics dashboards, lead attribution tracking.

- Case Studies & Clients:
  • Imagicaa Water Park: Rebuilt online ticket booking engine + WhatsApp alerts leading to +340% online booking growth and 65% bounce rate reduction.
  • Wet N Joy Water Park: Automated year-round funnels & social community driving +180% annual revenue growth.
  • ADYPU University: Built student admission portal & WhatsApp bot increasing applications by +220%.
  • Toy World E-Commerce: Scaled mobile revenue by +210% with 3.2x target ROAS.

- Offices: Pune & Gaya, India. Serving clients nationwide & globally.
- Contact Info:
  • Email: info@blendskills.co.in
  • Phone: +91 85308 19966
  • Consultation: Free AI Audit & Strategy Call available via the website.

Instructions for your persona:
- Always be polite, professional, concise, and helpful.
- Answer user questions thoroughly using the knowledge above.
- Recommend booking a free AI strategy call or contacting info@blendskills.co.in / +91 85308 19966 for customized quotes or proposals.
- Keep formatting clean with bullet points and clear sections when necessary.`;

chatRouter.post("/chat", async (req: Request, res: Response): Promise<void> => {
  try {
    const { message, history } = req.body;

    if (!message || typeof message !== "string") {
      res.status(400).json({ error: "A valid message string is required." });
      return;
    }

    const apiKey = process.env.GEMINI_API_KEY;

    if (apiKey) {
      try {
        const ai = new GoogleGenAI({
          apiKey,
          httpOptions: {
            headers: {
              "User-Agent": "aistudio-build",
            },
          },
        });

        // Format history into contents if provided
        const contents = [];
        if (Array.isArray(history)) {
          for (const item of history) {
            if (item.sender === "user") {
              contents.push({ role: "user", parts: [{ text: item.text }] });
            } else if (item.sender === "bot") {
              contents.push({ role: "model", parts: [{ text: item.text }] });
            }
          }
        }
        contents.push({ role: "user", parts: [{ text: message }] });

        const response = await ai.models.generateContent({
          model: "gemini-2.5-flash",
          contents,
          config: {
            systemInstruction: SYSTEM_INSTRUCTION,
            temperature: 0.7,
          },
        });

        if (response.text) {
          res.json({ reply: response.text });
          return;
        }
      } catch (geminiError) {
        console.warn("Gemini API call failed, using intelligent fallback:", geminiError);
      }
    }

    // Intelligent Fallback responses if API key is not present or API call failed
    const lower = message.toLowerCase();
    let reply = "";

    if (lower.includes("service") || lower.includes("what do you do") || lower.includes("offer")) {
      reply = "BlendSkills offers 5 key solutions:\n\n1. **Custom Software & App Development** (Web, Mobile, CRMs, Portals)\n2. **AI & Automation** (24/7 Chatbots, Voice AI, CRM Workflows)\n3. **Performance Marketing** (Google/Meta Ads, SEO, Lead Funnels)\n4. **Branding & UI/UX Design** (Identity, High-Converting Landing Pages)\n5. **Data & Analytics** (Custom Dashboards, Lead Attribution)\n\nWould you like details on any specific service or a free consultation?";
    } else if (lower.includes("contact") || lower.includes("phone") || lower.includes("email") || lower.includes("location") || lower.includes("office") || lower.includes("address")) {
      reply = "You can reach BlendSkills directly:\n\n📧 **Email**: info@blendskills.co.in\n📞 **Phone**: +91 85308 19966\n📍 **Offices**: Pune & Gaya, India\n\nYou can also click the 'Book Consultation' button to schedule a free 30-minute AI strategy session!";
    } else if (lower.includes("case study") || lower.includes("client") || lower.includes("result") || lower.includes("imagicaa") || lower.includes("work")) {
      reply = "Here are a few of our flagship client successes:\n\n• **Imagicaa Water Park**: +340% online bookings with custom ticket engine & WhatsApp alerts.\n• **Wet N Joy Water Park**: +180% annual revenue growth with automated funnels.\n• **ADYPU University**: +220% qualified applications via custom student portal.\n• **Toy World E-Commerce**: +210% mobile revenue boost & 3.2x ROAS.\n\nCheck out our Results page for full case studies!";
    } else if (lower.includes("price") || lower.includes("cost") || lower.includes("roi") || lower.includes("budget") || lower.includes("quote")) {
      reply = "Every project is tailored to your business goals! We offer customized proposals after assessing your scope.\n\nTry our interactive **AI ROI & Growth Estimator** on the home page to calculate your potential time & revenue savings, or book a free consultation for an exact quote.";
    } else if (lower.includes("ai") || lower.includes("bot") || lower.includes("automation")) {
      reply = "We build custom AI Chatbots, Voice AI agents, and workflow pipelines that run 24/7. They help automate customer support, qualify leads, and sync your CRM automatically to save up to 70% of manual operational hours!";
    } else {
      reply = `Thank you for reaching out! BlendSkills is a digital agency specializing in Custom App Development, AI Automation, and Performance Marketing.\n\nHow can I help you today? You can ask about our services, case studies, pricing, or reach us directly at **info@blendskills.co.in** / **+91 85308 19966**.`;
    }

    res.json({ reply });
  } catch (err) {
    console.error("Error in /api/chat route:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default chatRouter;
