"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";

interface User {
  id: number;
  name: string;
  email: string;
  status: "active" | "inactive" | "pending";
  role: string;
  lastLogin: string;
}

interface SortConfig {
  key: keyof User | null;
  direction: "asc" | "desc";
}

export default function TablesPage() {
  const [users, setUsers] = useState<User[]>([
    {
      id: 1,
      name: "John Smith",
      email: "john.smith@example.com",
      status: "active",
      role: "Admin",
      lastLogin: "2023-03-15"
    },
    {
      id: 2,
      name: "Sarah Johnson",
      email: "sarah@example.com",
      status: "active",
      role: "Editor",
      lastLogin: "2023-03-12"
    },
    {
      id: 3,
      name: "Michael Brown",
      email: "mbrown@example.com",
      status: "inactive",
      role: "Viewer",
      lastLogin: "2023-02-28"
    },
    {
      id: 4,
      name: "Jessica Williams",
      email: "jwilliams@example.com",
      status: "pending",
      role: "Editor",
      lastLogin: "2023-03-14"
    },
    {
      id: 5,
      name: "David Miller",
      email: "david@example.com",
      status: "active",
      role: "Admin",
      lastLogin: "2023-03-10"
    },
    {
      id: 6,
      name: "Emma Davis",
      email: "emma@example.com",
      status: "inactive",
      role: "Viewer",
      lastLogin: "2023-02-15"
    },
    {
      id: 7,
      name: "Robert Wilson",
      email: "rwilson@example.com",
      status: "active",
      role: "Editor",
      lastLogin: "2023-03-08"
    },
    {
      id: 8,
      name: "Jennifer Taylor",
      email: "jtaylor@example.com",
      status: "pending",
      role: "Viewer",
      lastLogin: "2023-03-01"
    },
  ]);

  const [sortConfig, setSortConfig] = useState<SortConfig>({ key: null, direction: "asc" });
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRows, setSelectedRows] = useState<number[]>([]);

  const handleSort = (key: keyof User) => {
    let direction: "asc" | "desc" = "asc";

    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }

    setSortConfig({ key, direction });
  };

  const sortedUsers = [...users].sort((a, b) => {
    if (!sortConfig.key) return 0;

    const aValue = a[sortConfig.key];
    const bValue = b[sortConfig.key];

    if (aValue < bValue) {
      return sortConfig.direction === "asc" ? -1 : 1;
    }
    if (aValue > bValue) {
      return sortConfig.direction === "asc" ? 1 : -1;
    }
    return 0;
  });

  const filteredUsers = sortedUsers.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelectRow = (id: number) => {
    setSelectedRows((prev) => {
      if (prev.includes(id)) {
        return prev.filter((rowId) => rowId !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  const handleSelectAll = () => {
    if (selectedRows.length === filteredUsers.length) {
      setSelectedRows([]);
    } else {
      setSelectedRows(filteredUsers.map((user) => user.id));
    }
  };

  const SortableHeader = ({ column, label }: { column: keyof User; label: string }) => (
    <TableHead
      className="cursor-pointer hover:bg-zinc-100 transition-colors"
      onClick={() => handleSort(column)}
      data-testid={`sort-header-${column}`}
    >
      <div className="flex items-center space-x-1">
        <span>{label}</span>
        {sortConfig.key === column ? (
          sortConfig.direction === "asc" ? (
            <ChevronUpIcon className="h-4 w-4" />
          ) : (
            <ChevronDownIcon className="h-4 w-4" />
          )
        ) : (
          <ChevronUpIcon className="h-4 w-4 opacity-50" />
        )}
      </div>
    </TableHead>
  );

  const statusStyles = {
    active: "bg-green-100 text-green-800 border-green-200",
    inactive: "bg-red-100 text-red-800 border-red-200",
    pending: "bg-yellow-100 text-yellow-800 border-yellow-200",
  };

  return (
    <div className="space-y-8" data-testid="tables-page">
      <div>
        <h1 className="text-2xl font-bold tracking-tight" data-testid="page-title">Tables</h1>
        <p className="text-sm text-zinc-500" data-testid="page-description">
          Practice automation with sortable and filterable tables.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>User Management</CardTitle>
          <CardDescription>
            A sortable and filterable user table with selectable rows.
            Click on column headers to sort.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex justify-between">
              <Input
                placeholder="Search users..."
                className="max-w-xs"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                data-testid="user-search"
              />
              <div className="space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  disabled={selectedRows.length === 0}
                  data-testid="delete-selected"
                >
                  Delete Selected ({selectedRows.length})
                </Button>
                <Button
                  size="sm"
                  disabled={selectedRows.length === 0}
                  data-testid="export-selected"
                >
                  Export Selected
                </Button>
              </div>
            </div>

            <div className="rounded-md border">
              <Table data-testid="users-table">
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-10">
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          checked={
                            filteredUsers.length > 0 &&
                            selectedRows.length === filteredUsers.length
                          }
                          onChange={handleSelectAll}
                          className="h-4 w-4 rounded border-zinc-300"
                          data-testid="select-all"
                        />
                      </div>
                    </TableHead>
                    <SortableHeader column="id" label="ID" />
                    <SortableHeader column="name" label="Name" />
                    <SortableHeader column="email" label="Email" />
                    <SortableHeader column="status" label="Status" />
                    <SortableHeader column="role" label="Role" />
                    <SortableHeader column="lastLogin" label="Last Login" />
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredUsers.length === 0 ? (
                    <TableRow>
                      <TableCell
                        colSpan={7}
                        className="h-24 text-center"
                        data-testid="no-results"
                      >
                        No results found.
                      </TableCell>
                    </TableRow>
                  ) : (
                    filteredUsers.map((user) => (
                      <TableRow
                        key={user.id}
                        className={selectedRows.includes(user.id) ? "bg-zinc-50" : ""}
                        data-testid={`user-row-${user.id}`}
                      >
                        <TableCell>
                          <div className="flex items-center">
                            <input
                              type="checkbox"
                              checked={selectedRows.includes(user.id)}
                              onChange={() => handleSelectRow(user.id)}
                              className="h-4 w-4 rounded border-zinc-300"
                              data-testid={`select-user-${user.id}`}
                            />
                          </div>
                        </TableCell>
                        <TableCell data-testid={`user-id-${user.id}`}>{user.id}</TableCell>
                        <TableCell className="font-medium" data-testid={`user-name-${user.id}`}>
                          {user.name}
                        </TableCell>
                        <TableCell data-testid={`user-email-${user.id}`}>{user.email}</TableCell>
                        <TableCell>
                          <span
                            className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold ${
                              statusStyles[user.status]
                            }`}
                            data-testid={`user-status-${user.id}`}
                          >
                            {user.status}
                          </span>
                        </TableCell>
                        <TableCell data-testid={`user-role-${user.id}`}>{user.role}</TableCell>
                        <TableCell data-testid={`user-last-login-${user.id}`}>{user.lastLogin}</TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
