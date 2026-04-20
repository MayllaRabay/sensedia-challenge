import { getUserAlbums, getUserPosts, getUsers } from "@/services/user"
import { User, UserView } from "@/types/user"
import { formatDateTime } from "@/utils/date"

async function getMeta() {
  const res = await fetch("http://localhost:3000/api/meta")
  return res.json()
}

export async function getUsersWithStats(): Promise<UserView[]> {
  const users = await getUsers()

  const usersWithStats = await Promise.all(
    users.map(async (user: User, index: number) => {
      try {
        const [albums, posts, { weekdays, cities }] = await Promise.all([
          getUserAlbums(user.id),
          getUserPosts(user.id),
          getMeta()
        ])
        return {
          id: user.id,
          name: user?.name ?? "-",
          email: user?.email ?? "-",
          albumCount: albums?.length ?? 0,
          postCount: posts?.length ?? 0,
          createdAt: formatDateTime(user?.created_at),
          updatedAt: formatDateTime(user?.updated_at),
          weekday: weekdays[index % weekdays.length],
          city: cities[index % cities.length]
        }
      } catch {
        return {
          id: user.id,
          name: user.name ?? "-",
          email: user.email ?? "-",
          albumCount: 0,
          postCount: 0,
          createdAt: "-",
          updatedAt: "-",
          weekday: "-",
          city: "-"
        }
      }
    })
  )

  return usersWithStats
}
