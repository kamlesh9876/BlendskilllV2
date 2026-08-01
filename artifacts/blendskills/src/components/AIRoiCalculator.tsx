import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, Sparkles, TrendingUp, Clock, Zap, ArrowRight, Check, Share2, Copy } from 'lucide-react';
import { Link, useLocation } from 'wouter';

type DomainType = 'app' | 'ai' | 'marketing';

export default function AIRoiCalculator() {
  const [, setLocation] = useLocation();
  const [domain, setDomain] = useState<DomainType>('ai');
  const [monthlySpend, setMonthlySpend] = useState<number>(5000);
  const [manualHours, setManualHours] = useState<number>(25);
  const [conversionRate, setConversionRate] = useState<number>(2.5);
  const [copied, setCopied] = useState(false);

  // Calculations based on domain
  const efficiencyMultiplier = domain === 'ai' ? 0.75 : domain === 'app' ? 0.6 : 0.45;
  const hoursSavedPerMonth = Math.round(manualHours * efficiencyMultiplier * 4.33);
  const estCostSavedPerMonth = hoursSavedPerMonth * 45; // $45/hr avg internal cost
  
  const conversionMultiplier = domain === 'marketing' ? 2.2 : domain === 'app' ? 1.6 : 1.8;
  const projectedConversionRate = (conversionRate * conversionMultiplier).toFixed(1);
  const projectedRevenueMultiplier = (2.1 + (monthlySpend / 8000) * 0.9).toFixed(1);

  const handleBookWithQuote = () => {
    const serviceName =
      domain === 'ai'
        ? 'AI & Automation'
        : domain === 'app'
        ? 'Custom Web & Mobile Apps'
        : 'Performance Marketing';
    const budgetStr =
      monthlySpend < 5000
        ? '< $5,000'
        : monthlySpend <= 15000
        ? '$5,000 - $15,000'
        : monthlySpend <= 30000
        ? '$15,000 - $30,000'
        : '$30,000+';

    const msg = `ROI Estimator Summary: Est. ${hoursSavedPerMonth} hrs/mo saved ($${estCostSavedPerMonth.toLocaleString()} value), target conversion ${projectedConversionRate}%, projected ROI ${projectedRevenueMultiplier}x.`;

    setLocation(
      `/contact?service=${encodeURIComponent(serviceName)}&budget=${encodeURIComponent(
        budgetStr
      )}&msg=${encodeURIComponent(msg)}`
    );
  };

  const handleCopyQuote = () => {
    const summary = `BlendSkills ROI Estimate:
- Service: ${domain.toUpperCase()} Solutions
- Budget: $${monthlySpend.toLocaleString()}/mo
- Time Saved: ~${hoursSavedPerMonth} hours/month
- Est. Monthly Savings: $${estCostSavedPerMonth.toLocaleString()}
- Target Conversion Rate: ${projectedConversionRate}% (from ${conversionRate}%)
- Estimated Growth Multiplier: ${projectedRevenueMultiplier}x`;

    navigator.clipboard.writeText(summary);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="rounded-3xl p-6 sm:p-8 md:p-10 bg-white border border-slate-200 shadow-xl space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#0066cc] to-[#0052a3] text-white flex items-center justify-center shadow-lg shadow-[#0066cc]/20">
            <Calculator size={24} />
          </div>
          <div>
            <h3 className="font-display font-extrabold text-xl sm:text-2xl text-slate-900">
              Interactive ROI & Growth Estimator
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
              Simulate operational savings and conversion lifts powered by BlendSkills.
            </p>
          </div>
        </div>

        {/* Domain Selector Chips */}
        <div className="flex items-center gap-1.5 p-1 rounded-2xl bg-slate-100 border border-slate-200/80 self-start sm:self-auto">
          {(
            [
              { id: 'ai', label: 'AI & Automations' },
              { id: 'app', label: 'Web & Apps' },
              { id: 'marketing', label: 'Marketing' },
            ] as const
          ).map((t) => (
            <button
              key={t.id}
              onClick={() => setDomain(t.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                domain === t.id
                  ? 'bg-white text-[#0066cc] shadow-sm font-bold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid lg:grid-cols-12 gap-8 items-center">
        {/* Sliders Column */}
        <div className="lg:col-span-7 space-y-6">
          {/* Slider 1 */}
          <div>
            <div className="flex justify-between items-center text-xs sm:text-sm font-semibold mb-2">
              <span className="text-slate-700">Monthly Dev & Marketing Budget</span>
              <span className="font-mono text-[#0066cc] font-extrabold text-base">
                ${monthlySpend.toLocaleString()}
              </span>
            </div>
            <input
              type="range"
              min={1000}
              max={30000}
              step={1000}
              value={monthlySpend}
              onChange={(e) => setMonthlySpend(Number(e.target.value))}
              className="w-full accent-[#0066cc] cursor-pointer h-2 bg-slate-200 rounded-lg"
            />
            <div className="flex justify-between text-[11px] text-slate-400 font-mono mt-1">
              <span>$1,000/mo</span>
              <span>$15,000</span>
              <span>$30,000+/mo</span>
            </div>
          </div>

          {/* Slider 2 */}
          <div>
            <div className="flex justify-between items-center text-xs sm:text-sm font-semibold mb-2">
              <span className="text-slate-700">Weekly Hours Spent on Manual Work</span>
              <span className="font-mono text-[#0066cc] font-extrabold text-base">
                {manualHours} hrs / week
              </span>
            </div>
            <input
              type="range"
              min={5}
              max={80}
              step={5}
              value={manualHours}
              onChange={(e) => setManualHours(Number(e.target.value))}
              className="w-full accent-[#0066cc] cursor-pointer h-2 bg-slate-200 rounded-lg"
            />
            <div className="flex justify-between text-[11px] text-slate-400 font-mono mt-1">
              <span>5 hrs/wk</span>
              <span>40 hrs</span>
              <span>80+ hrs/wk</span>
            </div>
          </div>

          {/* Slider 3 */}
          <div>
            <div className="flex justify-between items-center text-xs sm:text-sm font-semibold mb-2">
              <span className="text-slate-700">Current Conversion Rate</span>
              <span className="font-mono text-[#0066cc] font-extrabold text-base">
                {conversionRate}%
              </span>
            </div>
            <input
              type="range"
              min={0.5}
              max={8.0}
              step={0.1}
              value={conversionRate}
              onChange={(e) => setConversionRate(Number(e.target.value))}
              className="w-full accent-[#0066cc] cursor-pointer h-2 bg-slate-200 rounded-lg"
            />
            <div className="flex justify-between text-[11px] text-slate-400 font-mono mt-1">
              <span>0.5%</span>
              <span>4.0%</span>
              <span>8.0%</span>
            </div>
          </div>
        </div>

        {/* Results Box Column */}
        <div className="lg:col-span-5 rounded-2xl p-6 bg-gradient-to-br from-slate-900 to-slate-950 text-white shadow-xl space-y-5 border border-slate-800">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Sparkles size={16} className="text-cyan-400" />
              <span className="font-mono text-xs uppercase font-bold text-cyan-300 tracking-wider">
                Simulated Impact
              </span>
            </div>
            <button
              onClick={handleCopyQuote}
              className="text-xs text-slate-400 hover:text-white flex items-center gap-1 transition-colors"
              title="Copy details"
            >
              {copied ? (
                <>
                  <Check size={14} className="text-emerald-400" />
                  <span className="text-emerald-400 font-bold">Copied!</span>
                </>
              ) : (
                <>
                  <Copy size={14} />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <motion.div
              key={hoursSavedPerMonth}
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              className="p-3.5 rounded-xl bg-white/10 border border-white/10"
            >
              <div className="flex items-center gap-1.5 text-xs text-slate-300 mb-1">
                <Clock size={14} className="text-cyan-400" />
                <span>Time Reclaimed</span>
              </div>
              <div className="font-display font-bold text-xl text-white">
                ~{hoursSavedPerMonth} <span className="text-xs text-slate-400 font-normal">hrs/mo</span>
              </div>
              <div className="text-[11px] text-emerald-400 font-semibold mt-0.5">
                +${estCostSavedPerMonth.toLocaleString()} value
              </div>
            </motion.div>

            <motion.div
              key={projectedConversionRate}
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              className="p-3.5 rounded-xl bg-white/10 border border-white/10"
            >
              <div className="flex items-center gap-1.5 text-xs text-slate-300 mb-1">
                <TrendingUp size={14} className="text-cyan-400" />
                <span>Target Conversion</span>
              </div>
              <div className="font-display font-bold text-xl text-white">
                {projectedConversionRate}%
              </div>
              <div className="text-[11px] text-cyan-300 font-semibold mt-0.5">
                Up from {conversionRate}%
              </div>
            </motion.div>
          </div>

          <div className="p-4 rounded-xl bg-gradient-to-r from-[#0066cc] to-indigo-600 border border-cyan-400/30 flex items-center justify-between">
            <div>
              <div className="text-[11px] text-cyan-100 font-medium uppercase tracking-wide">
                Projected Growth Revenue
              </div>
              <div className="font-display font-extrabold text-2xl text-white">
                {projectedRevenueMultiplier}x Net Return
              </div>
            </div>
            <Zap size={26} className="text-amber-300 animate-pulse" />
          </div>

          <button
            onClick={handleBookWithQuote}
            className="w-full py-3.5 px-5 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-extrabold text-sm shadow-lg shadow-cyan-500/20 transition-all flex items-center justify-center gap-2 active:scale-95 cursor-pointer"
          >
            <span>Book Consultation With This Estimate</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
