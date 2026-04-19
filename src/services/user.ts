import {
  GetUserAlbumsResponse,
  GetUserPostsResponse,
  GetUsersResponse
} from "@/types/user"
import { request } from "./api"

export async function getUsers(): Promise<GetUsersResponse["users"]> {
  const data = await request<GetUsersResponse>("/users")
  return data.users
}

export async function getUserAlbums(
  userId: string
): Promise<GetUserAlbumsResponse["albums"]> {
  const data = await request<GetUserAlbumsResponse>(`/users/${userId}/albums`)
  return data.albums
}

export async function getUserPosts(
  userId: string
): Promise<GetUserPostsResponse["posts"]> {
  const data = await request<GetUserPostsResponse>(`/users/${userId}/posts`)
  return data.posts
}
