"use client"

interface BlockUserModalProps {
  open: boolean
  onConfirm: () => void
  onClose: () => void
}

export function BlockUserModal({
  open,
  onConfirm,
  onClose
}: BlockUserModalProps) {
  if (!open) return null
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
      <div className="bg-white p-6 rounded-md shadow-md space-y-4 max-w-sm w-full">
        <h2 className="text-h1 text-text-primary">Confirm Action</h2>

        <p className="text-body text-text-secondary">
          Are you sure you want to block this user?
        </p>

        <div className="flex gap-4 justify-end">
          <button
            onClick={onClose}
            className="text-body text-text-secondary hover:text-text-primary transition"
          >
            Cancel
          </button>

          <button
            onClick={onConfirm}
            className="bg-danger text-white px-4 py-2 rounded-sm hover:opacity-90 transition"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  )
}
