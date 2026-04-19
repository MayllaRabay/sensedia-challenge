export async function GET() {
  return Response.json({
    weekdays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    cities: ["São Paulo", "Salvador", "Curitiba"]
  })
}
