import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import FormNavigation from '../components/FormNavigation'
import { personalInfoSchema } from '../schemas/validationSchema'

function StepOne({ defaultValues, onNext }) {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues,
    resolver: zodResolver(personalInfoSchema),
    mode: 'onChange',
  })

  return (
    <motion.form
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      onSubmit={handleSubmit(onNext)}
      noValidate
      className="space-y-6"
      aria-label="Personal information"
    >
      <div>
        <p className="text-sm font-semibold uppercase tracking-wide text-cyan-700 dark:text-cyan-300">Step 1</p>
        <h2 className="mt-2 text-2xl font-bold text-slate-950 dark:text-white">Personal Information</h2>
        <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
          Start with the basic details for this account.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">First Name</span>
          <input
            type="text"
            autoComplete="given-name"
            aria-invalid={Boolean(errors.firstName)}
            aria-describedby={errors.firstName ? 'firstName-error' : undefined}
            className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/15 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
            placeholder="Tejas"
            {...register('firstName')}
          />
          {errors.firstName && <p id="firstName-error" className="mt-2 text-sm font-medium text-rose-600">{errors.firstName.message}</p>}
        </label>

        <label className="block">
          <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">Last Name</span>
          <input
            type="text"
            autoComplete="family-name"
            aria-invalid={Boolean(errors.lastName)}
            aria-describedby={errors.lastName ? 'lastName-error' : undefined}
            className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/15 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
            placeholder="Patel"
            {...register('lastName')}
          />
          {errors.lastName && <p id="lastName-error" className="mt-2 text-sm font-medium text-rose-600">{errors.lastName.message}</p>}
        </label>

        <label className="block sm:col-span-2">
          <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">Date of Birth</span>
          <input
            type="date"
            aria-invalid={Boolean(errors.dateOfBirth)}
            aria-describedby={errors.dateOfBirth ? 'dateOfBirth-error' : undefined}
            className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/15 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
            {...register('dateOfBirth')}
          />
          {errors.dateOfBirth && <p id="dateOfBirth-error" className="mt-2 text-sm font-medium text-rose-600">{errors.dateOfBirth.message}</p>}
        </label>
      </div>

      <FormNavigation isFirstStep isNextDisabled={!isValid} />
    </motion.form>
  )
}

export default StepOne
