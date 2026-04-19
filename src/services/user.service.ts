import { getUserAlbums, getUserPosts, getUsers } from "@/services/user"
import { User, UserView } from "@/types/user"

export async function getUsersWithStats(): Promise<UserView[]> {
  const users = await getUsers()

  const usersWithStats = await Promise.all(
    users.map(async (user: User) => {
      const [albums, posts] = await Promise.all([
        getUserAlbums(user.id),
        getUserPosts(user.id)
      ])

      return {
        id: user.id,
        name: user?.name ?? "-",
        email: user?.email ?? "-",
        albumCount: albums?.length ?? 0,
        postCount: posts?.length ?? 0,
        createdAt: user?.created_at ?? "-",
        updatedAt: user?.updated_at ?? "-"
      }
    })
  )

  return usersWithStats
}
