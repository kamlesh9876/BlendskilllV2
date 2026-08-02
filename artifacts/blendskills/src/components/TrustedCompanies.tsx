import { motion } from 'framer-motion';

const clientLogos = [
  { name: 'Imagicaa', alt: 'Imagicaa Water Park' },
  { name: 'Wet N Joy', alt: 'Wet N Joy' },
  { name: 'ADYPU', alt: 'ADYPU University' },
  { name: 'Toy World', alt: 'Toy World E-Commerce' },
  { name: 'Community Stay', alt: 'Community Stay Hospitality' },
  { name: 'Symphony Tech', alt: 'Symphony Software' },
  { name: 'Orbit Health', alt: 'Orbit Health' },
];

export default function TrustedCompanies() {
  return (
    <section className="relative py-16 md:py-20 bg-gradient-to-b from-[#0f1418] to-[#1a1f2e] border-t border-white/10">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p
            className="font-mono text-[0.7rem] font-bold uppercase tracking-widest"
            style={{ color: '#FF6B35' }}
          >
            Trusted by 200+ Companies
          </p>
        </motion.div>

        {/* Logo Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-12 md:gap-16"
        >
          {clientLogos.map((logo, index) => (
            <motion.div
              key={logo.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="font-semibold text-base md:text-lg cursor-pointer transition-all duration-500 hover:scale-125 group"
              style={{
                color: '#CBD5E1',
                opacity: 0.7,
                height: '40px',
                display: 'flex',
                alignItems: 'center',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#FF6B35';
                e.currentTarget.style.opacity = '1';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#CBD5E1';
                e.currentTarget.style.opacity = '0.6';
              }}
            >
              {logo.name}
            </motion.div>
          ))}
        </motion.div>

        {/* Divider */}
        <div
          className="mx-auto"
          style={{
            height: '1px',
            maxWidth: '900px',
            background: 'radial-gradient(ellipse at center, rgba(0, 102, 204, 0.2) 0%, transparent 70%)',
          }}
        />
      </div>
    </section>
  );
}
