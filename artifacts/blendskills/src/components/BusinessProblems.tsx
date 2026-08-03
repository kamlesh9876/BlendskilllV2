import { motion } from 'framer-motion';
import { AlertTriangle, TrendingDown, Cpu, BarChart3, CheckCircle2, Zap, Shield, Rocket, Target } from 'lucide-react';

const problems = [
  {
    icon: AlertTriangle,
    color: 'from-amber-500 to-orange-600',
    borderColor: 'hover:border-amber-500/50',
    bgColor: 'hover:bg-amber-50/5',
    glowColor: 'shadow-amber-500/20',
    title: 'Technology Debt',
    text: 'Legacy systems that slow you down, security risks, and high maintenance costs.',
    stat: '40%',
    statLabel: 'of budget wasted',
  },
  {
    icon: TrendingDown,
    color: 'from-rose-500 to-pink-600',
    borderColor: 'hover:border-rose-500/50',
    bgColor: 'hover:bg-rose-50/5',
    glowColor: 'shadow-rose-500/20',
    title: 'Marketing Waste',
    text: 'Budget spent on campaigns that don\'t convert, unclear ROI, and fragmented channels.',
    stat: '68%',
    statLabel: 'failed campaigns',
  },
  {
    icon: Cpu,
    color: 'from-[#0066cc] to-cyan-500',
    borderColor: 'hover:border-[#0066cc]/50',
    bgColor: 'hover:bg-blue-50/5',
    glowColor: 'shadow-[#0066cc]/20',
    title: 'Operational Chaos',
    text: 'Manual repetitive processes, disconnected tools, and teams working in silos.',
    stat: '25+',
    statLabel: 'hrs/week lost',
  },
  {
    icon: BarChart3,
    color: 'from-indigo-500 to-purple-600',
    borderColor: 'hover:border-indigo-500/50',
    bgColor: 'hover:bg-indigo-50/5',
    glowColor: 'shadow-indigo-500/20',
    title: 'Growth Stagnation',
    text: 'Unable to scale, losing customers to faster competitors, and missing market windows.',
    stat: '2.5x',
    statLabel: 'slower growth',
  },
];

const solutionBenefits = [
  { icon: Zap, label: 'Faster Development', color: 'from-yellow-400 to-orange-500' },
  { icon: Shield, label: 'Secure & Scalable', color: 'from-emerald-400 to-cyan-500' },
  { icon: Rocket, label: 'Growth Focused', color: 'from-purple-400 to-pink-500' },
  { icon: Target, label: 'Data Driven', color: 'from-blue-400 to-indigo-500' },
];

export default function BusinessProblems() {
  return (
    <section id="about" className="relative py-24 md:py-32 bg-gradient-to-b from-[#1a1f2e] via-[#0f1418] to-[#1a1f2e] overflow-hidden" aria-labelledby="challenge-heading">
      {/* Video Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        >
          <source
            src="https://videos.pexels.com/video-files/3129671/3129671-hd_1920_1080_30fps.mp4"
            type="video/mp4"
          />
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-software-developer-working-on-code-screen-close-up-1728-large.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1f2e]/70 via-[#0f1418]/70 to-[#1a1f2e]/70" />
        
        {/* Animated Background Gradients */}
        <div className="absolute left-[10%] top-[20%] w-96 h-96 rounded-full bg-[#FF6B35]/5 blur-[8rem]" />
        <div className="absolute right-[10%] bottom-[20%] w-96 h-96 rounded-full bg-[#00F5D4]/5 blur-[8rem]" />
        <div className="absolute left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-[#FF6B35]/3 via-transparent to-[#00F5D4]/3 blur-[12rem]" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-red-500/20 to-orange-500/10 border border-red-500/30 text-red-400 font-mono text-xs font-bold uppercase tracking-wider mb-6">
            <AlertTriangle size={14} />
            <span>The Challenge</span>
          </div>
          <h2 id="challenge-heading" className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white leading-tight mx-auto max-w-4xl mb-6">
            Most businesses struggle with
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] via-[#6B3FB5] to-[#00F5D4]"> fragmented systems</span>
            <br className="hidden md:block" />
            and outdated technology.
          </h2>
          <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            These challenges create bottlenecks that slow growth, drain resources, and prevent your business from reaching its full potential.
          </p>
        </motion.div>

        {/* Problem Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className={`group relative p-8 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 ${problem.borderColor} ${problem.bgColor} transition-all duration-500 shadow-lg hover:shadow-2xl hover:${problem.glowColor} backdrop-blur-xl overflow-hidden`}
            >
              {/* Background Glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${problem.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              
              {/* Icon */}
              <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${problem.color} text-white flex items-center justify-center shadow-xl shadow-black/20 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <problem.icon size={28} />
              </div>

              {/* Content */}
              <div className="relative">
                <h3 className="font-display font-bold text-2xl text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-300 transition-all duration-300">
                  {problem.title}
                </h3>
                <p className="text-slate-400 text-base leading-relaxed mb-4">
                  {problem.text}
                </p>
                
                {/* Stat */}
                <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                  <div className="font-display font-extrabold text-3xl text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#00F5D4]">
                    {problem.stat}
                  </div>
                  <div className="text-sm text-slate-500 font-medium">
                    {problem.statLabel}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Transition Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="relative p-10 md:p-12 rounded-3xl bg-gradient-to-r from-slate-900 via-[#1a1f2e] to-slate-900 text-white border border-slate-800 shadow-2xl overflow-hidden"
        >
          {/* Animated Background */}
          <div className="absolute inset-0">
            <div className="absolute left-0 top-0 w-64 h-64 rounded-full bg-[#FF6B35]/10 blur-[6rem]" />
            <div className="absolute right-0 bottom-0 w-64 h-64 rounded-full bg-[#00F5D4]/10 blur-[6rem]" />
          </div>

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#00F5D4]/20 to-[#FF6B35]/20 border border-[#00F5D4]/40 text-[#00F5D4] flex items-center justify-center shrink-0 shadow-lg shadow-[#00F5D4]/20">
                <CheckCircle2 size={32} />
              </div>
              <div className="max-w-xl">
                <div className="font-display font-extrabold text-2xl md:text-3xl text-white mb-3">
                  The BlendSkills Integrated Solution
                </div>
                <div className="text-base md:text-lg text-slate-300 leading-relaxed">
                  We combine custom software engineering, data performance marketing, and neural AI automation into one unified engine.
                </div>
              </div>
            </div>

            {/* Benefits Grid */}
            <div className="grid grid-cols-2 gap-4 w-full lg:w-auto">
              {solutionBenefits.map((benefit, index) => (
                <motion.div
                  key={benefit.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                  className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300"
                >
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${benefit.color} text-white flex items-center justify-center shrink-0`}>
                    <benefit.icon size={20} />
                  </div>
                  <span className="text-sm font-semibold text-white">{benefit.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
