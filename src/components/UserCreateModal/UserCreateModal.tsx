"use client"

import { Button } from "@/components/ui/button"
import { FormField } from "@/components/ui/form-field"
import { Input } from "@/components/ui/input"
import { User } from "@/types/user"
import { useState } from "react"
import { useForm } from "react-hook-form"

export type UserCreateFormData = {
  name: string
  email: string
  password: string
}

interface UserCreateModalProps {
  open: boolean
  onClose: () => void
  onSubmit: (data: UserCreateFormData) => Promise<User>
  onSuccess: (user: User) => void
}

export function UserCreateModal({
  open,
  onClose,
  onSubmit,
  onSuccess
}: UserCreateModalProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid, isSubmitting }
  } = useForm<UserCreateFormData>({
    mode: "onBlur"
  })

  const [apiError, setApiError] = useState<string | null>(null)

  const submit = async (data: UserCreateFormData) => {
    try {
      setApiError(null)

      const response = await onSubmit(data)

      onSuccess(response)
      reset()
      onClose()
    } catch (err: any) {
      if (err.message.includes("users_email_key")) {
        setApiError("Email already exists")
        return
      }

      setApiError("Failed to create user")
    }
  }

  if (!open) return null

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
      <div className="bg-surface p-6 rounded-md w-[420px] flex flex-col gap-4">
        <h2 className="text-h1">Create user</h2>
        {apiError && <p className="text-danger text-caption">{apiError}</p>}
        <FormField label="Name" error={errors.name?.message} required>
          <Input
            {...register("name", {
              required: "Name is required"
            })}
          />
        </FormField>

        <FormField label="Email" error={errors.email?.message} required>
          <Input
            {...register("email", {
              required: "Email is required"
            })}
          />
        </FormField>

        <FormField label="Password" error={errors.password?.message} required>
          <Input
            type="password"
            {...register("password", {
              required: "Password is required"
            })}
          />
        </FormField>

        <div className="flex gap-2 justify-end">
          <Button variant="secondary" onClick={onClose}>
            Cancel
          </Button>
          <Button
            onClick={handleSubmit(submit)}
            loading={isSubmitting}
            disabled={!isValid || isSubmitting}
          >
            Create user
          </Button>
        </div>
      </div>
    </div>
  )
}
