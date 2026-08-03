import { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Workflow, TrendingUp, Sparkles, ArrowRight, Play, Pause, Clock, Zap, Target, Shield, Users, ChevronRight } from 'lucide-react';
import { Link } from 'wouter';
import AIRoiCalculator from './AIRoiCalculator';
import { VideoSkeleton } from './Skeleton';

const features = [
  {
    icon: MessageSquare,
    title: 'Intelligent Chatbots & Voice AI',
    text: '24/7 customer support that understands context, resolves issues automatically, and qualifies leads.',
    progress: 92,
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Workflow,
    title: 'Smart Workflow Automation',
    text: 'Eliminate manual repetitive tasks with custom pipelines that sync your CRM, tools, and databases.',
    progress: 88,
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: TrendingUp,
    title: 'Predictive Growth Analytics',
    text: 'Forecast customer churn, optimize pricing dynamically, and deploy data-backed conversion tactics.',
    progress: 85,
    color: 'from-emerald-500 to-teal-500',
  },
  {
    icon: Sparkles,
    title: 'Hyper-Personalization at Scale',
    text: 'Deliver tailored messaging, dynamic recommendations, and custom landing pages powered by AI.',
    progress: 95,
    color: 'from-orange-500 to-red-500',
  },
];

export default function AISection() {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);

  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-b from-[#0f1418] to-[#1a1f2e]">
      {/* Premium gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, rgba(255, 107, 53, 0.08) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-[1400px] mx-auto relative z-[5]">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ maxWidth: '600px' }}
          >
            <p
              className="font-mono text-[0.75rem] font-bold uppercase tracking-widest mb-6"
              style={{ color: '#FF6B35' }}
            >
              AI-Powered Growth
            </p>
            <h2
              className="font-display font-bold leading-tight mb-6"
              style={{
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                color: '#1e293b',
              }}
            >
              Automation that works<br />
              while you sleep
            </h2>
            <p
              className="font-normal mb-10"
              style={{
                fontSize: '1.1rem',
                color: '#64748b',
                lineHeight: 1.7,
              }}
            >
              From intelligent AI assistants and automated revenue funnels to predictive intelligence—we build custom AI solutions that turn routine workloads into scalable growth engines.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center transition-all duration-300 hover:scale-[1.02]"
              style={{
                background: 'linear-gradient(135deg, #0066cc, #0052a3)',
                color: '#ffffff',
                padding: '16px 36px',
                borderRadius: '12px',
                fontWeight: 600,
                fontSize: '0.95rem',
                boxShadow: '0 8px 24px -6px rgba(0, 102, 204, 0.25)',
              }}
            >
              Request AI Strategy Call
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </motion.div>

          {/* Right Content - Bento Grid Features */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            {/* Large Featured Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="col-span-2 p-6 rounded-2xl bg-gradient-to-br from-[#0066cc]/10 to-[#0066cc]/5 border border-[#0066cc]/30 relative overflow-hidden"
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#0066cc]/10 rounded-full blur-3xl" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0066cc] to-[#0052a3] flex items-center justify-center text-white">
                    <MessageSquare size={24} />
                  </div>
                  <h3 className="font-display font-bold text-xl text-white">
                    {features[0].title}
                  </h3>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed mb-4">
                  {features[0].text}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-400">AI Readiness</span>
                  <span className="text-2xl font-bold text-white">{features[0].progress}%</span>
                </div>
                <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden mt-2">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${features[0].progress}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="h-full bg-gradient-to-r from-[#0066cc] to-[#00F5D4] rounded-full"
                  />
                </div>
              </div>
            </motion.div>

            {/* Tall Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="row-span-2 p-6 rounded-2xl bg-gradient-to-br from-[#6B3FB5]/10 to-[#6B3FB5]/5 border border-[#6B3FB5]/30 relative overflow-hidden"
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#6B3FB5]/10 rounded-full blur-3xl" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#6B3FB5] to-[#8B5FD4] flex items-center justify-center text-white mb-4">
                  <Workflow size={24} />
                </div>
                <h3 className="font-display font-bold text-lg text-white mb-2">
                  {features[1].title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-4">
                  {features[1].text}
                </p>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-slate-400">Automation</span>
                  <span className="text-2xl font-bold text-white">{features[1].progress}%</span>
                </div>
                <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${features[1].progress}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="h-full bg-gradient-to-r from-[#6B3FB5] to-[#8B5FD4] rounded-full"
                  />
                </div>
                <div className="mt-4 flex gap-2">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className={`h-1.5 flex-1 rounded-full ${
                        i < 2 ? 'bg-[#6B3FB5]' : 'bg-white/20'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Standard Cards */}
            {features.slice(2, 4).map((feature, index) => {
              const FeatureIcon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="p-5 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-[#0066cc]/30 transition-all relative overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{
                        background: `linear-gradient(135deg, ${feature.color})`,
                      }}
                    >
                      <FeatureIcon size={22} className="text-white" />
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-white">{feature.progress}%</div>
                      <div className="text-xs text-slate-400">Impact</div>
                    </div>
                  </div>
                  <h3 className="font-display font-semibold mb-2 text-white">
                    {feature.title}
                  </h3>
                  <p className="font-normal text-xs text-slate-300 leading-relaxed">
                    {feature.text}
                  </p>
                  <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden mt-3">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${feature.progress}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                      className="h-full bg-gradient-to-r from-gray-400 to-gray-600 rounded-full"
                    />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Video Feature & Interactive AI Calculator Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch mb-16">
          {/* AI Tech Video Showcase Card without watermark */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 relative rounded-3xl overflow-hidden border border-[#0066cc]/20 shadow-xl bg-slate-950 group flex flex-col justify-between min-h-[380px]"
          >
            {/* Video Skeleton while buffering */}
            {!videoLoaded && (
              <div className="absolute inset-0 z-0">
                <VideoSkeleton />
              </div>
            )}

            {/* Poster image fallback always present as backdrop */}
            <img
              src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1000&auto=format&fit=crop&q=80"
              alt="AI Neural Automation"
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                videoLoaded ? 'opacity-30' : 'opacity-80'
              }`}
            />

            {/* Royalty-Free Tech AI Video Loop */}
            <video
              autoPlay={isPlaying}
              loop
              muted
              playsInline
              poster="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1000&auto=format&fit=crop&q=80"
              onLoadedData={() => setVideoLoaded(true)}
              className="absolute inset-0 w-full h-full object-cover opacity-65 group-hover:scale-105 transition-transform duration-700 pointer-events-none"
              src="https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-screens-and-data-43224-large.mp4"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent pointer-events-none" />

            <div className="relative z-10 p-6 flex justify-between items-start">
              <span className="px-3.5 py-1.5 rounded-full bg-[#0066cc]/30 border border-[#0066cc]/50 backdrop-blur-md text-cyan-300 font-mono text-[11px] font-bold uppercase tracking-wider flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                Live AI Pipeline Demo
              </span>
              <button
                onClick={() => setIsPlaying((p) => !p)}
                className="w-9 h-9 rounded-full bg-slate-900/80 border border-white/20 flex items-center justify-center text-white hover:bg-[#0066cc] transition-colors"
                title={isPlaying ? 'Pause Demo' : 'Play Demo'}
              >
                {isPlaying ? <Pause size={14} /> : <Play size={14} />}
              </button>
            </div>

            <div className="relative z-10 p-6 text-white">
              <div className="inline-flex items-center gap-2 text-emerald-400 text-xs font-mono font-bold mb-2 bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                99.98% Automation Precision
              </div>
              <h3 className="font-display font-bold text-xl text-white mb-2">
                Real-Time Neural Automation
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Watch how our custom AI pipelines orchestrate customer support, lead qualification, and multi-channel marketing synchronization 24/7 without human intervention.
              </p>
              <div className="grid grid-cols-3 gap-2">
                <div className="p-3 rounded-xl bg-white/10 border border-white/10">
                  <div className="text-xs text-slate-400 mb-1">Tasks</div>
                  <div className="text-lg font-bold text-white">2.4K+</div>
                </div>
                <div className="p-3 rounded-xl bg-white/10 border border-white/10">
                  <div className="text-xs text-slate-400 mb-1">Speed</div>
                  <div className="text-lg font-bold text-white">0.3s</div>
                </div>
                <div className="p-3 rounded-xl bg-white/10 border border-white/10">
                  <div className="text-xs text-slate-400 mb-1">Uptime</div>
                  <div className="text-lg font-bold text-white">99.9%</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Interactive AI Calculator */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <AIRoiCalculator />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
