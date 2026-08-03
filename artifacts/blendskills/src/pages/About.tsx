import { useEffect } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import { motion } from 'framer-motion';
import { Sparkles, Users, Target, Award, MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'wouter';
import Expertise from '@/components/Expertise';
import WhyChooseUs from '@/components/WhyChooseUs';

const TEAM_MEMBERS = [
  {
    name: 'Rahul Kumar',
    role: 'Founder & CEO',
    expertise: 'Digital Strategy & Growth Engineering',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80',
  },
  {
    name: 'Priya Sharma',
    role: 'Head of Technology',
    expertise: 'Full-Stack Architecture & AI Integration',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=80',
  },
  {
    name: 'Amit Patel',
    role: 'Lead Performance Marketer',
    expertise: 'PPC, SEO & Conversion Optimization',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&q=80',
  },
  {
    name: 'Sneha Gupta',
    role: 'Creative Director',
    expertise: 'Brand Identity & UI/UX Design',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&auto=format&fit=crop&q=80',
  },
];

const VALUES = [
  {
    icon: Target,
    title: 'Results-First',
    description: 'Every decision we make is driven by measurable business outcomes and ROI for our clients.',
  },
  {
    icon: Users,
    title: 'Client Partnership',
    description: 'We work as an extension of your team, maintaining transparency and close collaboration.',
  },
  {
    icon: Sparkles,
    title: 'Innovation',
    description: 'We stay ahead of the curve with cutting-edge technology and creative problem-solving.',
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'We deliver premium quality work that exceeds expectations and builds long-term trust.',
  },
];

const TIMELINE = [
  {
    year: '2020',
    title: 'Foundation',
    description: 'BlendSkills was founded with a vision to bridge the gap between technology and marketing.',
  },
  {
    year: '2021',
    title: 'Expansion',
    description: 'Opened our second office in Gaya, extending our reach across India.',
  },
  {
    year: '2023',
    title: 'AI Integration',
    description: 'Launched comprehensive AI automation services, transforming client operations.',
  },
  {
    year: '2024',
    title: 'Growth Milestone',
    description: 'Achieved 95% client retention rate and served 100+ businesses globally.',
  },
];

export default function About() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  useScrollReveal();
  useDocumentTitle('About Us — BlendSkills', 'Learn about BlendSkills, our team, mission, values, and dual-location offices in Pune and Gaya, India.');

  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-gradient-to-b from-[#0a0e14] via-[#0e141d] to-[#0f1418] overflow-hidden">
        <div className="absolute inset-0">
          <div className="hero-mesh absolute inset-0 opacity-60" />
          <div className="absolute left-[10%] top-[20%] h-96 w-96 rounded-full bg-[#FF6B35]/10 blur-[8rem]" />
          <div className="absolute right-[10%] bottom-[20%] h-96 w-96 rounded-full bg-[#00F5D4]/10 blur-[8rem]" />
        </div>

        <div className="max-w-[1400px] mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#FF6B35]/20 to-[#FF6B35]/10 border border-[#FF6B35]/30 text-[#FF8557] font-mono text-xs font-bold uppercase tracking-wider mb-6">
              <Sparkles size={14} />
              <span>About BlendSkills</span>
            </div>
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-white leading-tight mb-6">
              We're a digital growth
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] via-[#6B3FB5] to-[#00F5D4]"> engineering studio</span>
            </h1>
            <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              BlendSkills combines cutting-edge software engineering, performance marketing, and AI automation to help businesses scale with clarity and momentum.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 md:py-32 bg-[#0f1418]">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 rounded-3xl bg-gradient-to-br from-[#FF6B35]/10 to-transparent border border-[#FF6B35]/20"
            >
              <h2 className="font-display font-bold text-2xl text-white mb-4">Our Mission</h2>
              <p className="text-slate-300 leading-relaxed">
                To empower businesses with integrated digital solutions that drive measurable growth. We bridge the gap between technology and marketing, creating seamless experiences that convert visitors into customers.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 rounded-3xl bg-gradient-to-br from-[#00F5D4]/10 to-transparent border border-[#00F5D4]/20"
            >
              <h2 className="font-display font-bold text-2xl text-white mb-4">Our Vision</h2>
              <p className="text-slate-300 leading-relaxed">
                To become the most trusted digital growth partner for businesses worldwide, known for delivering exceptional results through innovation, transparency, and client-centric solutions.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-[#0f1418] to-[#1a1f2e]">
        <div className="max-w-[1400px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="font-mono text-xs font-bold uppercase tracking-widest text-[#FF6B35] mb-4">What Drives Us</p>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white leading-tight">
              Core Values That Guide <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#00F5D4]">Everything We Do</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {VALUES.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#FF6B35]/40 transition-all duration-300 text-center"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#FF6B35] to-[#FF8557] text-white flex items-center justify-center mx-auto mb-4">
                  <value.icon size={24} />
                </div>
                <h3 className="font-display font-bold text-lg text-white mb-2">{value.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-24 md:py-32 bg-[#1a1f2e]">
        <div className="max-w-[1400px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="font-mono text-xs font-bold uppercase tracking-widest text-[#FF6B35] mb-4">Our Journey</p>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white leading-tight">
              Building Success <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#00F5D4]">Year by Year</span>
            </h2>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-[#FF6B35] via-[#6B3FB5] to-[#00F5D4]" />
            <div className="space-y-12">
              {TIMELINE.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                >
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <div className="inline-block px-4 py-2 rounded-full bg-[#FF6B35]/20 border border-[#FF6B35]/40 text-[#FF8557] font-mono text-sm font-bold mb-2">
                      {item.year}
                    </div>
                    <h3 className="font-display font-bold text-xl text-white mb-2">{item.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-[#FF6B35] border-4 border-[#0f1418]" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-[#1a1f2e] to-[#0f1418]">
        <div className="max-w-[1400px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="font-mono text-xs font-bold uppercase tracking-widest text-[#FF6B35] mb-4">The Team</p>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white leading-tight">
              Meet the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#00F5D4]">Experts Behind Your Success</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {TEAM_MEMBERS.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-2xl mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f1418] via-transparent to-transparent" />
                </div>
                <h3 className="font-display font-bold text-lg text-white">{member.name}</h3>
                <p className="text-[#FF6B35] text-sm font-medium mb-1">{member.role}</p>
                <p className="text-slate-400 text-xs">{member.expertise}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mt-12"
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-[#FF6B35] to-[#FF8557] text-white font-semibold hover:-translate-y-1 transition-transform shadow-lg"
            >
              <span>Join Our Team</span>
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-24 md:py-32 bg-[#0f1418]">
        <div className="max-w-[1400px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="font-mono text-xs font-bold uppercase tracking-widest text-[#FF6B35] mb-4">Our Locations</p>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white leading-tight">
              Serving Clients <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#00F5D4]">Across India & Globally</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 rounded-3xl bg-gradient-to-br from-[#FF6B35]/10 to-transparent border border-[#FF6B35]/20"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-[#FF6B35] text-white flex items-center justify-center shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl text-white mb-1">Pune Office</h3>
                  <p className="text-slate-400 text-sm">Technology Hub</p>
                </div>
              </div>
              <p className="text-slate-300 leading-relaxed mb-4">
                Our Pune office serves as our technology and innovation center, housing our core development and AI teams.
              </p>
              <p className="text-slate-400 text-sm">Maharashtra, India</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 rounded-3xl bg-gradient-to-br from-[#00F5D4]/10 to-transparent border border-[#00F5D4]/20"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-[#00F5D4] text-slate-900 flex items-center justify-center shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl text-white mb-1">Gaya Office</h3>
                  <p className="text-slate-400 text-sm">Operations & Client Relations</p>
                </div>
              </div>
              <p className="text-slate-300 leading-relaxed mb-4">
                Our Gaya office focuses on client relationships, project management, and business development operations.
              </p>
              <p className="text-slate-400 text-sm">Bihar, India</p>
            </motion.div>
          </div>
        </div>
      </section>

      <Expertise />
      <div className="blend-rule" />
      <WhyChooseUs />
    </main>
  );
}
