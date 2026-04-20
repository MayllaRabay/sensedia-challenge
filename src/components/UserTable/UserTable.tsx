"use client"

import { useDebounce } from "@/hooks/useDebounce"
import { createUser } from "@/services/user"
import { User, UserView } from "@/types/user"
import { formatDateTime } from "@/utils/date"
import { useState } from "react"
import { UserBlockModal } from "../UserBlockModal/UserBlockModal"
import {
  UserCreateFormData,
  UserCreateModal
} from "../UserCreateModal/UserCreateModal"
import { Button } from "../ui/button"
import { Input } from "../ui/input"

type Props = {
  users: UserView[]
}

export function UserTable({ users }: Props) {
  const [usersState, setUsersState] = useState<UserView[]>(users)
  const [isBlockModalOpen, setIsBlockModalOpen] = useState<boolean>(false)
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false)
  const [selectedUser, setSelectedUser] = useState<UserView | null>(null)
  const [page, setPage] = useState(1)
  const [search, setSearch] = useState("")
  const debouncedSearch = useDebounce(search, 300)
  const [sortAsc, setSortAsc] = useState(true)
  const [blockedUsers, setBlockedUsers] = useState<string[]>([])

  const headers = [
    "Name",
    "Email",
    "Albums",
    "Posts",
    "Created At",
    "Updated At",
    "Weekday",
    "City",
    "Actions"
  ]
  const pageSize = 10
  const filteredUsers = usersState.filter((user) => {
    const name = user?.name ?? ""
    const email = user?.email ?? ""

    return `${name}${email}`
      .toLowerCase()
      .includes(debouncedSearch.toLowerCase())
  })
  const sortedUsers = [...filteredUsers].sort((a, b) =>
    sortAsc ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
  )
  const currentPageUsers = sortedUsers.slice(
    (page - 1) * pageSize,
    page * pageSize
  )
  const totalPages = Math.ceil(sortedUsers.length / pageSize) || 1

  const handleOpen = (user: UserView) => {
    setSelectedUser(user)
    setIsBlockModalOpen(true)
  }
  const handleClose = () => {
    setIsBlockModalOpen(false)
    setSelectedUser(null)
  }
  const handleConfirm = () => {
    if (!selectedUser) return
    setBlockedUsers((prev) => [...prev, selectedUser.id])
    handleClose()
  }

  const handleSearch = (value: string) => {
    setSearch(value)
    setPage(1)
  }

  const handleSort = () => {
    setSortAsc((asc) => !asc)
    setPage(1)
  }

  const handleCreateUser = async (data: UserCreateFormData): Promise<User> => {
    const response = await createUser(data)
    return response
  }

  const handleUserCreated = (createdUser: User) => {
    console.log("createdUser", createdUser)
    setUsersState((prev) => [
      {
        id: createdUser.id,
        name: createdUser.name,
        email: createdUser.email,
        albumCount: 0,
        postCount: 0,
        createdAt: formatDateTime(createdUser.created_at),
        updatedAt: formatDateTime(createdUser.updated_at),
        weekday: "-",
        city: "-"
      },
      ...prev
    ])
  }

  return (
    <div className="p-8 flex flex-col gap-8 h-[100vh]">
      <h1 className="text-h1">Users</h1>
      <div className="flex justify-between items-center gap-4">
        <Input
          value={search}
          onChange={(e) => handleSearch(e.target.value)}
          placeholder="Search users..."
        />
        <Button onClick={() => setIsCreateModalOpen(true)}>+ New user</Button>
      </div>
      <div className="bg-surface shadow-sm rounded-md border border-border overflow-x-auto overflow-y-auto max-h-[75vh]">
        <table
          className="w-full border-collapse"
          aria-label="Users table with name, email, posts and albums information"
        >
          <thead className="sticky top-0">
            <tr className="border-b border-border">
              {headers.map((header) =>
                header === "Name" ? (
                  <th
                    key={header}
                    className="font-mono p-4 text-caption text-left text-text-secondary bg-surface cursor-pointer whitespace-nowrap"
                    onClick={handleSort}
                    aria-sort={sortAsc ? "ascending" : "descending"}
                  >
                    {header} {sortAsc ? "▲" : "▼"}
                  </th>
                ) : (
                  <th
                    key={header}
                    className="font-mono p-4 text-caption text-left text-text-secondary bg-surface cursor-pointer whitespace-nowrap"
                  >
                    {header}
                  </th>
                )
              )}
            </tr>
          </thead>
          <tbody>
            {currentPageUsers?.length > 0 ? (
              currentPageUsers.map((user) => (
                <tr
                  key={user.id}
                  className={`border-t border-border hover:bg-surface transition group ${blockedUsers.includes(user.id) ? "opacity-50 cursor-not-allowed" : ""}`}
                >
                  <td className="p-4 text-body text-text-primary">
                    {user.name}
                  </td>
                  <td className="p-4 text-body text-text-primary">
                    {user.email}
                  </td>
                  <td className="p-4 text-body text-text-primary">
                    {user.albumCount}
                  </td>
                  <td className="p-4 text-body text-text-primary">
                    {user.postCount}
                  </td>
                  <td className="p-4 text-body text-text-primary">
                    {user.createdAt}
                  </td>
                  <td className="p-4 text-body text-text-primary">
                    {user.updatedAt}
                  </td>
                  <td className="p-4 text-body text-text-primary">
                    {user.weekday}
                  </td>
                  <td className="p-4 text-body text-text-primary">
                    {user.city}
                  </td>
                  <td className="p-4 text-center text-text-primary">
                    <button
                      onClick={() => {
                        if (blockedUsers.includes(user.id)) return
                        handleOpen(user)
                      }}
                      className="opacity-0 group-hover:opacity-100 transition cursor-pointer text-danger hover:scale-120"
                      aria-label={`Block user ${user.name}`}
                      hidden={blockedUsers.includes(user.id)}
                    >
                      🗑
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  className="p-4 text-body text-center"
                  colSpan={headers.length}
                >
                  No users found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div className="flex justify-between mt-auto">
        <Button
          onClick={() => setPage((p) => Math.max(p - 1, 1))}
          disabled={page === 1}
        >
          Prev
        </Button>
        <span className="font-mono text-body text-text-secondary">
          Page {page} of {totalPages}
        </span>
        <Button
          onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
          disabled={page === totalPages}
        >
          Next
        </Button>
      </div>
      <UserBlockModal
        open={isBlockModalOpen}
        onClose={handleClose}
        onConfirm={handleConfirm}
      />
      <UserCreateModal
        open={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        onSubmit={handleCreateUser}
        onSuccess={handleUserCreated}
      />
    </div>
  )
}
