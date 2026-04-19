"use client"

import { UserView } from "@/types/user"

type Props = {
  users: UserView[]
}

export function UserTable({ users }: Props) {
  const headers = [
    "Name",
    "Email",
    "Albums",
    "Posts",
    "Created At",
    "Updated At",
    "Actions"
  ]

  return (
    <div className="bg-white shadow-sm rounded-md overflow-hidden">
      <table className="w-full border-collapse">
        <thead className="bg-surface text-text-secondary text-left">
          <tr>
            {headers.map((header) => (
              <th key={header} className="p-4 text-caption">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr
              key={user.id}
              className="border-t border-border hover:bg-gray-50 transition"
            >
              <td className="p-4 text-body">{user.name}</td>
              <td className="p-4 text-body">{user.email}</td>
              <td className="p-4 text-body">{user.albumCount}</td>
              <td className="p-4 text-body">{user.postCount}</td>
              <td className="p-4 text-body">{user.createdAt}</td>
              <td className="p-4 text-body">{user.updatedAt}</td>
              <td className="p-4">
                <button className="text-accent text-sm hover:underline">
                  ❌
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
