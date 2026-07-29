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
    <section className="relative" style={{ minHeight: '200px', background: '#ffffff', padding: '80px 24px' }}>
      <div className="max-w-[1400px] mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <p
            className="font-mono text-[0.75rem] font-normal uppercase tracking-widest"
            style={{ color: '#94a3b8' }}
          >
            Trusted by industry leaders
          </p>
        </motion.div>

        {/* Logo Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-16"
          style={{ marginBottom: '40px' }}
        >
          {clientLogos.map((logo, index) => (
            <motion.div
              key={logo.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="font-semibold text-lg cursor-pointer transition-all duration-300 hover:scale-110"
              style={{
                color: '#64748b',
                opacity: 0.6,
                height: '40px',
                display: 'flex',
                alignItems: 'center',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#1e293b';
                e.currentTarget.style.opacity = '1';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#64748b';
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
