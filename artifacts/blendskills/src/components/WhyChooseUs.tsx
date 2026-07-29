import { Link } from 'wouter';

export default function WhyChooseUs() {

  return (
    <section className="relative z-[2] py-24 md:py-32">
      <div className="max-w-[1200px] mx-auto px-6 grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div className="reveal">
          <p className="eyebrow">Why Choose BlendSkills</p>
          <h2 className="h2">
            Your success is
            <br />
            our mission.
          </h2>
          <p className="lead mt-6">
            We don't just provide services — we build long-term digital strategies that deliver real
            business impact. We increase your brand visibility, generate quality leads, and boost
            conversions with strategies tailored to your goals. When you grow, we grow.
          </p>
          <Link
            href="/contact"
            className="btn btn-outline mt-8"
          >
            <span>Let's Talk Strategy</span>
          </Link>
        </div>

        <div className="reveal relative h-[380px] md:h-[480px] rounded-3xl overflow-hidden border border-black/10 shadow-xl flex items-center justify-center">
          {/* Studio Team Photography without watermark */}
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1000&auto=format&fit=crop&q=80"
            alt="BlendSkills Studio Team Collaboration"
            className="absolute inset-0 w-full h-full object-cover filter brightness-[0.7] contrast-[1.05]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent" />

          {/* Floating Metric Card 1 */}
          <div
            className="absolute top-[12%] left-[6%] p-6 rounded-2xl backdrop-blur-xl bg-white/90 border border-white/30 shadow-2xl transition-transform duration-500 hover:scale-105 z-10"
            style={{ transform: 'rotate(-2deg)' }}
          >
            <span className="font-mono text-xs text-[#0066cc] font-bold block mb-1 uppercase tracking-wider">Campaign Growth</span>
            <strong className="font-display text-3xl font-extrabold text-[#1e293b] block leading-tight">+248%</strong>
            <p className="text-[#64748b] text-xs font-medium mt-1">Avg. conversion lift</p>
          </div>

          {/* Floating Metric Card 2 */}
          <div
            className="absolute bottom-[12%] right-[6%] p-6 rounded-2xl backdrop-blur-xl bg-white/90 border border-white/30 shadow-2xl transition-transform duration-500 hover:scale-105 z-10"
            style={{ transform: 'rotate(2deg)' }}
          >
            <span className="font-mono text-xs text-[#0066cc] font-bold block mb-1 uppercase tracking-wider">Client Partnership</span>
            <strong className="font-display text-2xl font-extrabold text-[#1e293b] block leading-tight">Long-Term</strong>
            <p className="text-[#64748b] text-xs font-medium mt-1">95% client retention rate</p>
          </div>
        </div>
      </div>
    </section>
  );
}
