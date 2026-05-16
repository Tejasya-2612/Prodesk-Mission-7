import { CheckCircle2, RotateCcw } from 'lucide-react'
import { motion } from 'framer-motion'

function SuccessMessage({ onRestart }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-lg border border-white/70 bg-white/90 p-8 text-center shadow-2xl shadow-slate-200/70 backdrop-blur-xl dark:border-slate-700/80 dark:bg-slate-900/90 dark:shadow-black/30"
      aria-live="polite"
    >
      <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-500/15 dark:text-emerald-300">
        <CheckCircle2 size={34} aria-hidden="true" />
      </div>
      <h2 className="mt-6 text-3xl font-bold text-slate-950 dark:text-white">Registration Successful</h2>
      <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-slate-600 dark:text-slate-300">
        The form data was submitted. You can restart if you want to try another entry.
      </p>
      <button
        type="button"
        onClick={onRestart}
        className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-cyan-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-700/20 transition hover:bg-cyan-700 focus:outline-none focus:ring-4 focus:ring-cyan-500/30"
        aria-label="Restart registration form"
      >
        <RotateCcw size={18} aria-hidden="true" />
        Restart Form
      </button>
    </motion.section>
  )
}

export default SuccessMessage
