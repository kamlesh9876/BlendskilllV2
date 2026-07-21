const ITEMS = [
  'Performance Marketing',
  'Web Development',
  'Brand Strategy',
  'SEO',
  'Software Development',
  'Social Media Growth',
  'PPC Advertising',
  'Content Marketing',
];

export default function Marquee() {
  return (
    <section aria-label="Our specialties" className="overflow-hidden select-none flex border-t border-b border-[rgba(255,255,255,0.05)] py-7" style={{ background: 'rgba(255,255,255,0.01)' }}>
      <div className="flex whitespace-nowrap w-max">
        {[0, 1].map((group) => (
          <div
            key={group}
            className="marquee-group flex items-center justify-around min-w-full gap-10 pr-10"
            aria-hidden={group === 1}
          >
            {ITEMS.map((item, i) => (
              <span key={`${item}-${i}`} className="flex items-center gap-10">
                <span className="font-display text-xl md:text-2xl font-semibold tracking-tight text-white transition-colors duration-300 hover:text-[#00f5d4]">
                  {item}
                </span>
                <span className="text-[#00f5d4] text-base">✦</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
