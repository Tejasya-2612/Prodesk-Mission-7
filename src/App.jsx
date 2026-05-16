import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Building2, Moon, Sun } from 'lucide-react'
import ProgressBar from './components/ProgressBar'
import SuccessMessage from './components/SuccessMessage'
import StepOne from './steps/StepOne'
import StepTwo from './steps/StepTwo'
import StepThree from './steps/StepThree'

const initialFormData = {
  firstName: '',
  lastName: '',
  dateOfBirth: '',
  email: '',
  password: '',
  confirmPassword: '',
}

function App() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState(initialFormData)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)

  const personalDefaults = {
    firstName: formData.firstName,
    lastName: formData.lastName,
    dateOfBirth: formData.dateOfBirth,
  }

  const accountDefaults = {
    email: formData.email,
    password: formData.password,
    confirmPassword: formData.confirmPassword,
  }

  const updateFormData = (values) => {
    setFormData((currentData) => ({ ...currentData, ...values }))
  }

  const handlePersonalNext = (values) => {
    updateFormData(values)
    setStep(2)
  }

  const handleAccountNext = (values) => {
    updateFormData(values)
    setStep(3)
  }

  const handleSubmit = () => {
    console.log(formData)
    setIsSubmitted(true)
  }

  const handleRestart = () => {
    setFormData(initialFormData)
    setStep(1)
    setIsSubmitted(false)
  }

  return (
    <main className={isDarkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-slate-100 text-slate-950 transition-colors duration-300 dark:bg-slate-950 dark:text-white">
        <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-4 py-5 sm:px-6 lg:px-8">
          <header className="mb-6 flex items-center justify-between gap-4">
            <a href="/" className="inline-flex items-center gap-3 rounded-lg focus:outline-none focus:ring-4 focus:ring-cyan-500/20" aria-label="Registration Wizard home">
              <span className="grid h-11 w-11 place-items-center rounded-lg bg-cyan-600 text-white shadow-lg shadow-cyan-700/20">
                <Building2 size={22} aria-hidden="true" />
              </span>
              <span>
                <span className="block text-sm font-bold text-slate-950 dark:text-white">Registration Wizard</span>
                <span className="block text-xs font-medium text-slate-500 dark:text-slate-400">Account setup</span>
              </span>
            </a>

            <button
              type="button"
              onClick={() => setIsDarkMode((value) => !value)}
              className="grid h-11 w-11 place-items-center rounded-lg border border-slate-200 bg-white text-slate-600 shadow-sm transition hover:bg-slate-50 hover:text-slate-950 focus:outline-none focus:ring-4 focus:ring-cyan-500/20 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
              aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDarkMode ? <Sun size={20} aria-hidden="true" /> : <Moon size={20} aria-hidden="true" />}
            </button>
          </header>

          <div className="grid flex-1 items-center gap-6 lg:grid-cols-[0.9fr_1.35fr]">
            <aside className="space-y-6">
              <ProgressBar currentStep={step} />
              <section className="hidden rounded-lg border border-white/70 bg-white/70 p-6 shadow-xl shadow-slate-200/60 backdrop-blur-xl lg:block dark:border-slate-700/80 dark:bg-slate-900/70 dark:shadow-black/20" aria-label="Operational context">
                <p className="text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">Form progress</p>
                <h2 className="mt-3 text-2xl font-bold leading-tight text-slate-950 dark:text-white">
                  Three quick steps, saved as you go.
                </h2>
                <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Go back anytime to edit details. The next button stays locked until the current step is valid.
                </p>
              </section>
            </aside>

            <section className="rounded-lg border border-white/70 bg-white/90 p-5 shadow-2xl shadow-slate-200/70 backdrop-blur-xl sm:p-8 dark:border-slate-700/80 dark:bg-slate-900/90 dark:shadow-black/30" aria-live="polite">
              {isSubmitted ? (
                <SuccessMessage onRestart={handleRestart} />
              ) : (
                <AnimatePresence mode="wait">
                  <motion.div key={step}>
                    {step === 1 && <StepOne defaultValues={personalDefaults} onNext={handlePersonalNext} />}
                    {step === 2 && (
                      <StepTwo
                        defaultValues={accountDefaults}
                        onBack={() => setStep(1)}
                        onNext={handleAccountNext}
                      />
                    )}
                    {step === 3 && (
                      <StepThree formData={formData} onBack={() => setStep(2)} onSubmit={handleSubmit} />
                    )}
                  </motion.div>
                </AnimatePresence>
              )}
            </section>
          </div>
        </div>
      </div>
    </main>
  )
}

export default App
