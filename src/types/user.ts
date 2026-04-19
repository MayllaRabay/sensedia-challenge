export type User = {
  created_at: string
  email: string
  id: string
  name: string
  updated_at: string
}

export type UserView = {
  id: string
  name: string
  email: string
  albumCount: number
  postCount: number
  createdAt: string
  updatedAt: string
}

export type GetUsersResponse = {
  users: User[]
}

export type UserAlbum = {
  created_at: string
  description: string
  id: string
  title: string
  updated_at: string
}

export type GetUserAlbumsResponse = {
  albums: UserAlbum[]
}

export type UserPost = {
  content: string
  created_at: string
  id: string
  updated_at: string
  user_id: string
}

export type GetUserPostsResponse = {
  posts: UserPost[]
}
