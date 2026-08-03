import { motion } from 'framer-motion';

interface SectionHeaderProps {
    eyebrow: string;
    title: string;
    description: string;
    align?: 'left' | 'center';
}

export default function SectionHeader({ eyebrow, title, description, align = 'left' }: SectionHeaderProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}
        >
            <p className="font-mono text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-[#FF6B35] mb-4">
                {eyebrow}
            </p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-white leading-tight mb-6">
                {title}
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-8">
                {description}
            </p>
        </motion.div>
    );
}
