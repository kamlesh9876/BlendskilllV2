import { motion } from 'framer-motion';
import { AlertTriangle, TrendingDown, Cpu, BarChart3, CheckCircle2 } from 'lucide-react';

const problems = [
  {
    icon: AlertTriangle,
    color: 'from-amber-500 to-orange-600',
    borderColor: 'hover:border-amber-500/40',
    title: 'Technology Debt',
    text: 'Legacy systems that slow you down, security risks, and high maintenance costs.',
  },
  {
    icon: TrendingDown,
    color: 'from-rose-500 to-pink-600',
    borderColor: 'hover:border-rose-500/40',
    title: 'Marketing Waste',
    text: 'Budget spent on campaigns that don\'t convert, unclear ROI, and fragmented channels.',
  },
  {
    icon: Cpu,
    color: 'from-[#0066cc] to-cyan-500',
    borderColor: 'hover:border-[#0066cc]/40',
    title: 'Operational Chaos',
    text: 'Manual repetitive processes, disconnected tools, and teams working in silos.',
  },
  {
    icon: BarChart3,
    color: 'from-indigo-500 to-purple-600',
    borderColor: 'hover:border-indigo-500/40',
    title: 'Growth Stagnation',
    text: 'Unable to scale, losing customers to faster competitors, and missing market windows.',
  },
];

export default function BusinessProblems() {
  return (
    <section id="about" className="relative py-24 md:py-32 bg-slate-50 text-slate-900">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="font-mono text-xs font-bold uppercase tracking-widest text-[#0066cc] mb-4">
            The Industry Challenge
          </p>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-slate-900 leading-tight max-w-3xl">
            Most businesses struggle with fragmented vendors, outdated technology, and marketing that doesn't scale.
          </h2>
        </motion.div>

        {/* Problem Cards with Vibrant Color Accent Badges */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`p-8 rounded-3xl bg-white border border-slate-200/80 ${problem.borderColor} transition-all duration-300 shadow-sm hover:shadow-xl space-y-4`}
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${problem.color} text-white flex items-center justify-center shadow-lg shadow-black/5`}>
                <problem.icon size={26} />
              </div>

              <div>
                <h3 className="font-display font-bold text-xl text-slate-900 mb-2">
                  {problem.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {problem.text}
                </p>
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
          className="p-8 rounded-3xl bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white border border-slate-800 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-cyan-400/20 border border-cyan-400/40 text-cyan-300 flex items-center justify-center shrink-0">
              <CheckCircle2 size={24} />
            </div>
            <div>
              <div className="font-display font-extrabold text-xl text-white">
                The BlendSkills Integrated Solution
              </div>
              <div className="text-sm text-slate-300 mt-1">
                We combine custom software engineering, data performance marketing, and neural AI automation into one unified engine.
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
