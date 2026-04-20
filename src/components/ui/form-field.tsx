import { ReactNode } from "react"

type Props = {
  label?: string
  error?: string
  children: ReactNode
  required?: boolean
}

export function FormField({ label, error, children, required }: Props) {
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label className="text-caption text-text-secondary font-mono">
          {label}
          {required && <span className="text-danger ml-1">*</span>}
        </label>
      )}

      {children}

      {error && <span className="text-caption text-danger">{error}</span>}
    </div>
  )
}
