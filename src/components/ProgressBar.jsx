import { Check } from 'lucide-react'

const steps = ['Personal information', 'Account details', 'Review and submit']

function ProgressBar({ currentStep }) {
  const progress = ((currentStep - 1) / (steps.length - 1)) * 100

  return (
    <section className="rounded-lg border border-white/70 bg-white/80 p-5 shadow-xl shadow-slate-200/60 backdrop-blur-xl dark:border-slate-700/80 dark:bg-slate-900/80 dark:shadow-black/20" aria-label="Registration progress">
      <div className="mb-5 flex items-center justify-between gap-4">
        <div>
          <p className="text-sm font-semibold text-cyan-700 dark:text-cyan-300">
            Step {currentStep} of {steps.length}
          </p>
          <h1 className="mt-1 text-2xl font-bold text-slate-950 sm:text-3xl dark:text-white">
            Registration Wizard
          </h1>
        </div>
        <span className="rounded-lg bg-slate-100 px-3 py-2 text-xs font-semibold uppercase tracking-wide text-slate-600 dark:bg-slate-800 dark:text-slate-300">
          Signup
        </span>
      </div>

      <div className="relative h-2 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
        <div
          className="h-full rounded-full bg-cyan-600 transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
          role="progressbar"
          aria-valuemin="1"
          aria-valuemax={steps.length}
          aria-valuenow={currentStep}
          aria-label={`Step ${currentStep} of ${steps.length}`}
        />
      </div>

      <ol className="mt-5 grid gap-3 sm:grid-cols-3">
        {steps.map((label, index) => {
          const stepNumber = index + 1
          const isComplete = stepNumber < currentStep
          const isActive = stepNumber === currentStep

          return (
            <li
              key={label}
              className={`flex items-center gap-3 rounded-lg border p-3 transition ${
                isActive
                  ? 'border-cyan-200 bg-cyan-50 text-cyan-950 dark:border-cyan-500/30 dark:bg-cyan-500/10 dark:text-cyan-100'
                  : 'border-slate-200 bg-white/60 text-slate-600 dark:border-slate-800 dark:bg-slate-900/50 dark:text-slate-400'
              }`}
            >
              <span
                className={`grid h-8 w-8 shrink-0 place-items-center rounded-full text-sm font-bold ${
                  isComplete
                    ? 'bg-emerald-500 text-white'
                    : isActive
                      ? 'bg-cyan-600 text-white'
                      : 'bg-slate-200 text-slate-600 dark:bg-slate-800 dark:text-slate-300'
                }`}
                aria-hidden="true"
              >
                {isComplete ? <Check size={16} /> : stepNumber}
              </span>
              <span className="text-sm font-semibold">{label}</span>
            </li>
          )
        })}
      </ol>
    </section>
  )
}

export default ProgressBar
