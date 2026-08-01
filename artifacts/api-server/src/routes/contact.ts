import { Router, type Request, type Response } from "express";
import { logger } from "../lib/logger";

const router = Router();

interface ContactBody {
  name: string;
  email: string;
  phone?: string;
  service?: string;
  budget?: string;
  message?: string;
  roiEstimate?: {
    monthlySpend?: number;
    hoursSavedPerMonth?: number;
    estCostSavedPerMonth?: number;
    projectedConversionRate?: string;
  };
}

router.post("/contact", (req: Request<{}, {}, ContactBody>, res: Response) => {
  try {
    const { name, email, phone, service, budget, message, roiEstimate } = req.body;

    if (!name || !email) {
      return res.status(400).json({ error: "Name and email are required fields." });
    }

    logger.info(
      { name, email, phone, service, budget, roiEstimate },
      "Received new consultation request"
    );

    // Generate reference ID
    const referenceId = `BS-${Math.floor(100000 + Math.random() * 900000)}`;

    return res.status(200).json({
      success: true,
      message: "Consultation request submitted successfully!",
      referenceId,
      details: {
        name,
        email,
        service: service || "General Strategy Consultation",
        budget: budget || "Flexible",
        message: message || "No message provided",
      },
    });
  } catch (error) {
    logger.error({ error }, "Error handling contact submission");
    return res.status(500).json({ error: "Failed to process consultation request" });
  }
});

export default router;
