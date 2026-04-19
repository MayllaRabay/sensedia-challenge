export function formatDateTime(dateString: string | null | undefined): string {
  if (!dateString) return "-"

  const date = new Date(dateString)

  if (isNaN(date.getTime())) return "-"

  return date.toLocaleString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric"
  })
}
