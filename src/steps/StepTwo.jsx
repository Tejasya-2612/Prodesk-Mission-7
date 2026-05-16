import { useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, useWatch } from 'react-hook-form'
import { Eye, EyeOff, ShieldCheck } from 'lucide-react'
import { motion } from 'framer-motion'
import FormNavigation from '../components/FormNavigation'
import { accountDetailsSchema } from '../schemas/validationSchema'

function getPasswordScore(password = '') {
  const checks = [
    password.length >= 8,
    /[A-Z]/.test(password),
    /[0-9]/.test(password),
    /[^A-Za-z0-9]/.test(password),
  ]

  return checks.filter(Boolean).length
}

function StepTwo({ defaultValues, onBack, onNext }) {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm({
    defaultValues,
    resolver: zodResolver(accountDetailsSchema),
    mode: 'onChange',
  })
  const password = useWatch({ control, name: 'password' })
  const strength = getPasswordScore(password)
  const strengthLabel = ['Very weak', 'Weak', 'Good', 'Strong', 'Excellent'][strength]

  return (
    <motion.form
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      onSubmit={handleSubmit(onNext)}
      noValidate
      className="space-y-6"
      aria-label="Account details"
    >
      <div>
        <p className="text-sm font-semibold uppercase tracking-wide text-cyan-700 dark:text-cyan-300">Step 2</p>
        <h2 className="mt-2 text-2xl font-bold text-slate-950 dark:text-white">Account Details</h2>
        <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
          Add the email and password you want to use.
        </p>
      </div>

      <div className="space-y-5">
        <label className="block">
          <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">Email</span>
          <input
            type="email"
            autoComplete="email"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? 'email-error' : undefined}
            className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/15 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
            placeholder="tejas@example.com"
            {...register('email')}
          />
          {errors.email && <p id="email-error" className="mt-2 text-sm font-medium text-rose-600">{errors.email.message}</p>}
        </label>

        <label className="block">
          <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">Password</span>
          <div className="relative mt-2">
            <input
              type={showPassword ? 'text' : 'password'}
              autoComplete="new-password"
              aria-invalid={Boolean(errors.password)}
              aria-describedby={errors.password ? 'password-error password-strength' : 'password-strength'}
              className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 pr-12 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/15 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
              placeholder="Minimum 8 characters"
              {...register('password')}
            />
            <button
              type="button"
              onClick={() => setShowPassword((value) => !value)}
              className="absolute right-3 top-1/2 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-lg text-slate-500 transition hover:bg-slate-100 hover:text-slate-900 focus:outline-none focus:ring-4 focus:ring-cyan-500/20 dark:hover:bg-slate-800 dark:hover:text-white"
              aria-label={showPassword ? 'Hide password' : 'Show password'}
            >
              {showPassword ? <EyeOff size={18} aria-hidden="true" /> : <Eye size={18} aria-hidden="true" />}
            </button>
          </div>
          {errors.password && <p id="password-error" className="mt-2 text-sm font-medium text-rose-600">{errors.password.message}</p>}
        </label>

        <div id="password-strength" className="rounded-lg border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-950/60">
          <div className="flex items-center justify-between gap-3">
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-200">
              <ShieldCheck size={16} aria-hidden="true" />
              Password strength
            </span>
            <span className="text-sm font-semibold text-cyan-700 dark:text-cyan-300">{strengthLabel}</span>
          </div>
          <div className="mt-3 grid grid-cols-4 gap-2" aria-hidden="true">
            {[1, 2, 3, 4].map((item) => (
              <span
                key={item}
                className={`h-2 rounded-full transition ${
                  item <= strength ? 'bg-cyan-600' : 'bg-slate-200 dark:bg-slate-800'
                }`}
              />
            ))}
          </div>
        </div>

        <label className="block">
          <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">Confirm Password</span>
          <div className="relative mt-2">
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              autoComplete="new-password"
              aria-invalid={Boolean(errors.confirmPassword)}
              aria-describedby={errors.confirmPassword ? 'confirmPassword-error' : undefined}
              className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 pr-12 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/15 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
              placeholder="Re-enter password"
              {...register('confirmPassword')}
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword((value) => !value)}
              className="absolute right-3 top-1/2 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-lg text-slate-500 transition hover:bg-slate-100 hover:text-slate-900 focus:outline-none focus:ring-4 focus:ring-cyan-500/20 dark:hover:bg-slate-800 dark:hover:text-white"
              aria-label={showConfirmPassword ? 'Hide confirm password' : 'Show confirm password'}
            >
              {showConfirmPassword ? <EyeOff size={18} aria-hidden="true" /> : <Eye size={18} aria-hidden="true" />}
            </button>
          </div>
          {errors.confirmPassword && <p id="confirmPassword-error" className="mt-2 text-sm font-medium text-rose-600">{errors.confirmPassword.message}</p>}
        </label>
      </div>

      <FormNavigation onBack={onBack} isNextDisabled={!isValid} />
    </motion.form>
  )
}

export default StepTwo
