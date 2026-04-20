import { ButtonHTMLAttributes } from "react"

type ButtonVariant = "primary" | "secondary" | "danger"

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant
  loading?: boolean
}

export function Button({
  variant = "primary",
  loading = false,
  disabled,
  children,
  className = "",
  ...props
}: Props) {
  const base =
    "px-4 py-2 rounded-sm font-mono text-body transition flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"

  const variants: Record<ButtonVariant, string> = {
    primary: "bg-primary text-white hover:bg-primary-light",
    secondary: "border border-border text-text-primary hover:bg-surface",
    danger: "bg-danger text-white hover:opacity-90"
  }

  return (
    <button
      disabled={disabled || loading}
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    >
      {loading && <span className="animate-pulse">...</span>}
      {children}
    </button>
  )
}
