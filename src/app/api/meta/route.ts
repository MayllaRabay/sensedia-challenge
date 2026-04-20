export async function GET() {
  return Response.json({
    weekdays: [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    cities: ["São Paulo", "Salvador", "Curitiba"]
  })
}
