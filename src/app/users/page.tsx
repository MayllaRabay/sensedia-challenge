import { UserTable } from "@/components/UserTable/UserTable"
import { getUsersWithStats } from "@/services/user.service"

export default async function UsersPage() {
  const users = await getUsersWithStats()

  return (
    <main className="p-6 space-y-6">
      <h1 className="text-h1">Users</h1>
      <UserTable users={users} />
    </main>
  )
}
