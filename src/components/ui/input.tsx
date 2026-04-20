import { forwardRef } from "react"

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  error?: boolean
}

export const Input = forwardRef<HTMLInputElement, Props>(
  ({ error, className = "", ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={`
          font-sans text-body
          border rounded-sm
          px-3 py-2
          w-full
          focus:outline-none focus:ring-2 focus:ring-primary-light
          transition
          ${error ? "border-danger" : "border-border"}
          ${className}
        `}
        {...props}
      />
    )
  }
)

Input.displayName = "Input"
