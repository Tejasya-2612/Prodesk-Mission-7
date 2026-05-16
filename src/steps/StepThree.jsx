import { Mail, UserRound } from 'lucide-react'
import { motion } from 'framer-motion'
import FormNavigation from '../components/FormNavigation'

function SummaryItem({ label, value }) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-950/70">
      <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">{label}</dt>
      <dd className="mt-1 break-words text-sm font-semibold text-slate-950 dark:text-white">{value || 'Not provided'}</dd>
    </div>
  )
}

function StepThree({ formData, onBack, onSubmit }) {
  return (
    <motion.form
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      onSubmit={(event) => {
        event.preventDefault()
        onSubmit()
      }}
      className="space-y-6"
      aria-label="Review and submit"
    >
      <div>
        <p className="text-sm font-semibold uppercase tracking-wide text-cyan-700 dark:text-cyan-300">Step 3</p>
        <h2 className="mt-2 text-2xl font-bold text-slate-950 dark:text-white">Review & Submit</h2>
        <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
          Check everything once before submitting.
        </p>
      </div>

      <div className="grid gap-5 lg:grid-cols-2">
        <section className="rounded-lg border border-slate-200 bg-slate-50 p-5 dark:border-slate-700 dark:bg-slate-950/50" aria-labelledby="personal-summary">
          <div className="mb-4 flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-lg bg-cyan-100 text-cyan-700 dark:bg-cyan-500/15 dark:text-cyan-300">
              <UserRound size={20} aria-hidden="true" />
            </span>
            <h3 id="personal-summary" className="text-lg font-bold text-slate-950 dark:text-white">Personal Information</h3>
          </div>
          <dl className="grid gap-3">
            <SummaryItem label="First Name" value={formData.firstName} />
            <SummaryItem label="Last Name" value={formData.lastName} />
            <SummaryItem label="Date of Birth" value={formData.dateOfBirth} />
          </dl>
        </section>

        <section className="rounded-lg border border-slate-200 bg-slate-50 p-5 dark:border-slate-700 dark:bg-slate-950/50" aria-labelledby="account-summary">
          <div className="mb-4 flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-lg bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300">
              <Mail size={20} aria-hidden="true" />
            </span>
            <h3 id="account-summary" className="text-lg font-bold text-slate-950 dark:text-white">Account Details</h3>
          </div>
          <dl className="grid gap-3">
            <SummaryItem label="Email" value={formData.email} />
            <SummaryItem label="Password" value={formData.password ? '********' : ''} />
            <SummaryItem label="Confirm Password" value={formData.confirmPassword ? '********' : ''} />
          </dl>
        </section>
      </div>

      <FormNavigation isLastStep onBack={onBack} />
    </motion.form>
  )
}

export default StepThree
