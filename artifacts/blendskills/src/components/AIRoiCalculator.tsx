import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, Sparkles, TrendingUp, Clock, Zap } from 'lucide-react';
import { Link } from 'wouter';

export default function AIRoiCalculator() {
  const [monthlySpend, setMonthlySpend] = useState<number>(5000);
  const [manualHours, setManualHours] = useState<number>(25);
  const [conversionRate, setConversionRate] = useState<number>(2.5);

  // Calculations
  const hoursSavedPerMonth = Math.round(manualHours * 0.7 * 4.33); // 70% efficiency boost
  const estCostSavedPerMonth = hoursSavedPerMonth * 40; // $40/hr avg valuation
  const projectedConversionRate = (conversionRate * 1.85).toFixed(1);
  const projectedRevenueMultiplier = (2.2 + (monthlySpend / 10000) * 0.8).toFixed(1);

  return (
    <div
      className="glass-card overflow-hidden"
      style={{
        borderRadius: '24px',
        padding: '36px',
        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(248, 250, 252, 0.98))',
        border: '1px solid rgba(0, 102, 204, 0.2)',
        boxShadow: '0 20px 50px -10px rgba(0, 102, 204, 0.12)',
      }}
    >
      <div className="flex items-center gap-3 mb-6">
        <div
          className="flex items-center justify-center"
          style={{
            width: '42px',
            height: '42px',
            borderRadius: '12px',
            background: 'linear-gradient(135deg, #0066cc, #0052a3)',
            color: '#fff',
          }}
        >
          <Calculator size={22} />
        </div>
        <div>
          <h3 className="font-display font-bold text-xl text-[#1e293b]">
            Interactive AI ROI & Growth Estimator
          </h3>
          <p className="text-xs text-[#64748b]">
            Adjust the metrics below to estimate your operational time savings & growth potential.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* Sliders Column */}
        <div className="space-y-6">
          {/* Slider 1 */}
          <div>
            <div className="flex justify-between items-center text-sm font-semibold mb-2">
              <span className="text-[#475569]">Monthly Marketing & Dev Budget</span>
              <span className="font-mono text-[#0066cc] font-bold">${monthlySpend.toLocaleString()}</span>
            </div>
            <input
              type="range"
              min={1000}
              max={30000}
              step={1000}
              value={monthlySpend}
              onChange={(e) => setMonthlySpend(Number(e.target.value))}
              className="w-full accent-[#0066cc] cursor-pointer h-2 bg-[#e2e8f0] rounded-lg"
            />
            <div className="flex justify-between text-[10px] text-[#94a3b8] mt-1">
              <span>$1,000</span>
              <span>$30,000+</span>
            </div>
          </div>

          {/* Slider 2 */}
          <div>
            <div className="flex justify-between items-center text-sm font-semibold mb-2">
              <span className="text-[#475569]">Weekly Hours Spent on Manual Tasks</span>
              <span className="font-mono text-[#0066cc] font-bold">{manualHours} hrs/wk</span>
            </div>
            <input
              type="range"
              min={5}
              max={80}
              step={5}
              value={manualHours}
              onChange={(e) => setManualHours(Number(e.target.value))}
              className="w-full accent-[#0066cc] cursor-pointer h-2 bg-[#e2e8f0] rounded-lg"
            />
            <div className="flex justify-between text-[10px] text-[#94a3b8] mt-1">
              <span>5 hrs</span>
              <span>80 hrs</span>
            </div>
          </div>

          {/* Slider 3 */}
          <div>
            <div className="flex justify-between items-center text-sm font-semibold mb-2">
              <span className="text-[#475569]">Current Conversion Rate</span>
              <span className="font-mono text-[#0066cc] font-bold">{conversionRate}%</span>
            </div>
            <input
              type="range"
              min={0.5}
              max={8.0}
              step={0.1}
              value={conversionRate}
              onChange={(e) => setConversionRate(Number(e.target.value))}
              className="w-full accent-[#0066cc] cursor-pointer h-2 bg-[#e2e8f0] rounded-lg"
            />
            <div className="flex justify-between text-[10px] text-[#94a3b8] mt-1">
              <span>0.5%</span>
              <span>8.0%</span>
            </div>
          </div>
        </div>

        {/* Results Box */}
        <div
          className="p-6 rounded-2xl relative"
          style={{
            background: 'linear-gradient(135deg, rgba(0, 102, 204, 0.08), rgba(0, 102, 204, 0.02))',
            border: '1px solid rgba(0, 102, 204, 0.2)',
          }}
        >
          <div className="flex items-center gap-2 mb-4">
            <Sparkles size={16} className="text-[#0066cc]" />
            <span className="font-mono text-xs uppercase font-bold text-[#0066cc] tracking-wider">
              Projected Impact
            </span>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <motion.div key={hoursSavedPerMonth} initial={{ scale: 0.95 }} animate={{ scale: 1 }} className="p-3 bg-white/80 rounded-xl border border-black/5">
              <div className="flex items-center gap-1.5 text-xs text-[#64748b] mb-1">
                <Clock size={14} className="text-[#0066cc]" />
                <span>Time Saved</span>
              </div>
              <div className="font-display font-bold text-xl text-[#1e293b]">
                ~{hoursSavedPerMonth} <span className="text-xs text-[#64748b] font-normal">hrs/mo</span>
              </div>
              <div className="text-[11px] text-[#10b981] font-semibold mt-0.5">
                +${estCostSavedPerMonth.toLocaleString()} value
              </div>
            </motion.div>

            <motion.div key={projectedConversionRate} initial={{ scale: 0.95 }} animate={{ scale: 1 }} className="p-3 bg-white/80 rounded-xl border border-black/5">
              <div className="flex items-center gap-1.5 text-xs text-[#64748b] mb-1">
                <TrendingUp size={14} className="text-[#0066cc]" />
                <span>Conv. Target</span>
              </div>
              <div className="font-display font-bold text-xl text-[#1e293b]">
                {projectedConversionRate}%
              </div>
              <div className="text-[11px] text-[#0066cc] font-semibold mt-0.5">
                Up from {conversionRate}%
              </div>
            </motion.div>
          </div>

          <div className="p-3 bg-gradient-to-r from-[#0066cc] to-[#0052a3] text-white rounded-xl mb-5 flex items-center justify-between">
            <div>
              <div className="text-[11px] text-white/80 font-medium">Est. Revenue Multiplier</div>
              <div className="font-display font-extrabold text-2xl">{projectedRevenueMultiplier}x ROI</div>
            </div>
            <Zap size={24} className="text-amber-300 animate-pulse" />
          </div>

          <Link
            href="/contact"
            className="btn w-full justify-center text-sm font-semibold"
            style={{
              background: '#1e293b',
              color: '#ffffff',
              padding: '12px 20px',
              borderRadius: '10px',
            }}
          >
            Claim Free AI Audit →
          </Link>
        </div>
      </div>
    </div>
  );
}
