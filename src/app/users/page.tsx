import { UserTable } from "@/components/UserTable/UserTable"
import { getUsersWithStats } from "@/services/user.service"

export default async function UsersPage() {
  const users = await getUsersWithStats()

  return <UserTable users={users} />
}
