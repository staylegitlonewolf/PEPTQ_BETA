import { Contrast, Type, MoveHorizontal } from 'lucide-react';
import { useAccessibility } from '../context/AccessibilityContext';

const rowClass = 'rounded-2xl border border-brand-navy/10 dark:border-white/10 bg-white dark:bg-black/15 p-4 mb-3 flex flex-col sm:flex-row sm:items-center justify-between gap-3';
const buttonGroupClass = 'flex flex-col gap-2 rounded-xl border border-brand-navy/15 dark:border-white/15 bg-white/80 dark:bg-white/5 p-1 w-full sm:w-auto';

const ToggleRow = ({ icon, title, description, enabled, onToggle }) => {
  const IconComponent = icon;

  return (
    <div className={rowClass}>
      <div className="flex items-start gap-3">
        <span className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-xl border border-brand-orange/25 bg-brand-orange/10 text-brand-orange">
          <IconComponent size={18} aria-hidden="true" />
        </span>
        <div>
          <h3 className="text-sm font-black uppercase tracking-wider text-brand-navy dark:text-white">{title}</h3>
          <p className="text-xs text-brand-navy/70 dark:text-gray-300 leading-relaxed mt-1">{description}</p>
        </div>
      </div>
      <button
        type="button"
        role="switch"
        aria-checked={enabled}
        onClick={onToggle}
        className={`relative inline-flex h-7 w-13 shrink-0 items-center rounded-full border transition-colors ${enabled ? 'bg-brand-orange border-brand-orange' : 'bg-[#1f3a5f] border-[#1f3a5f] dark:bg-[#2563eb] dark:border-[#2563eb]'}`}
        aria-label={`Toggle ${title}`}
      >
        <span className={`inline-block h-5 w-5 rounded-full bg-white shadow-sm transition-transform ${enabled ? 'translate-x-7' : 'translate-x-1'}`} />
      </button>
    </div>
  );
};

const fontScaleLabels = {
  default: 'Default',
  large: 'Large',
  xlarge: 'Extra Large',
};

const FontScaleRow = ({ value, onChange }) => (
  <div className={rowClass}>
    <div className="flex items-start gap-3">
      <span className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-xl border border-brand-orange/25 bg-brand-orange/10 text-brand-orange">
        <Type size={18} aria-hidden="true" />
      </span>
      <div>
        <h3 className="text-sm font-black uppercase tracking-wider text-brand-navy dark:text-white">Scientific Text Size</h3>
        <p className="text-xs text-brand-navy/70 dark:text-gray-300 leading-relaxed mt-1">
          Current: {fontScaleLabels[value]}. Pick the reading size for formulas and technical copy.
        </p>
      </div>
    </div>
    <div className={buttonGroupClass} role="group" aria-label="Scientific text size">
      {['default', 'large', 'xlarge'].map((option) => {
        const active = value === option;
        return (
          <button
            key={option}
            type="button"
            onClick={() => onChange(option)}
            className={`w-full sm:w-auto min-w-18 rounded-lg px-3 py-2 text-[11px] font-black uppercase tracking-wider transition-colors text-center ${
              active
                ? 'bg-brand-orange text-white'
                : 'text-brand-navy dark:text-gray-200 hover:text-brand-orange'
            }`}
            aria-pressed={active}
          >
            {fontScaleLabels[option]}
          </button>
        );
      })}
    </div>
  </div>
);

function QuickAccessibilityPanel() {
  const {
    highContrast,
    setHighContrast,
    reduceMotion,
    setReduceMotion,
    fontScaleLevel,
    setFontScaleLevel,
    dyslexiaFont,
    setDyslexiaFont,
  } = useAccessibility();

  return (
    <div>
      <ToggleRow
        icon={Contrast}
        title="High Contrast"
        description="Stronger contrast for bright labs."
        enabled={highContrast}
        onToggle={() => setHighContrast((prev) => !prev)}
      />
      <FontScaleRow value={fontScaleLevel} onChange={setFontScaleLevel} />
      <ToggleRow
        icon={MoveHorizontal}
        title="Reduced Motion"
        description="Minimize animations for motion sensitivity."
        enabled={reduceMotion}
        onToggle={() => setReduceMotion((prev) => !prev)}
      />
      <ToggleRow
        icon={Type}
        title="Dyslexia-Friendly Font"
        description="Switch to a more readable font stack."
        enabled={dyslexiaFont}
        onToggle={() => setDyslexiaFont((prev) => !prev)}
      />
    </div>
  );
}

export default QuickAccessibilityPanel;
