import { ArrowLeft, ArrowRight, Send } from 'lucide-react'

function FormNavigation({
  isFirstStep = false,
  isLastStep = false,
  isNextDisabled = false,
  onBack,
}) {
  return (
    <div className="mt-8 flex flex-col-reverse gap-3 border-t border-slate-200/70 pt-6 sm:flex-row sm:items-center sm:justify-between dark:border-slate-700/80">
      <button
        type="button"
        onClick={onBack}
        disabled={isFirstStep}
        className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-slate-300 hover:bg-slate-50 focus:outline-none focus:ring-4 focus:ring-cyan-500/20 disabled:cursor-not-allowed disabled:opacity-40 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
        aria-label="Go back to the previous step"
      >
        <ArrowLeft size={18} aria-hidden="true" />
        Back
      </button>

      <button
        type="submit"
        disabled={isNextDisabled}
        className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-cyan-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-700/20 transition hover:bg-cyan-700 focus:outline-none focus:ring-4 focus:ring-cyan-500/30 disabled:cursor-not-allowed disabled:bg-slate-300 disabled:text-slate-500 disabled:shadow-none dark:disabled:bg-slate-700 dark:disabled:text-slate-400"
        aria-label={isLastStep ? 'Submit registration' : 'Continue to the next step'}
      >
        {isLastStep ? 'Submit' : 'Next'}
        {isLastStep ? <Send size={18} aria-hidden="true" /> : <ArrowRight size={18} aria-hidden="true" />}
      </button>
    </div>
  )
}

export default FormNavigation

