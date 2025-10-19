"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/context/auth-context"
import { Package, FileText, LogOut, Trash2, ChevronRight, Clock, CheckCircle, Printer } from "lucide-react"

interface Order {
  id: string
  orderNumber: string
  date: string
  total: string
  status: "pending" | "processing" | "completed"
  items: number
}

interface PrintJob {
  id: string
  fileName: string
  status: "queued" | "printing" | "completed" | "failed"
  progress: number
  filament: string
  color: string
  estimatedTime: string
}

export default function AccountPage() {
  const { user, isAuthenticated, logout } = useAuth()
  const router = useRouter()
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false)

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/login")
    }
  }, [isAuthenticated, router])

  if (!isAuthenticated) {
    return null
  }

  // Mock data
  const orders: Order[] = [
    {
      id: "1",
      orderNumber: "ORD-2025-001",
      date: "2025-01-15",
      total: "R450.00",
      status: "completed",
      items: 3,
    },
    {
      id: "2",
      orderNumber: "ORD-2025-002",
      date: "2025-01-16",
      total: "R890.00",
      status: "processing",
      items: 2,
    },
    {
      id: "3",
      orderNumber: "ORD-2025-003",
      date: "2025-01-16",
      total: "R320.00",
      status: "pending",
      items: 1,
    },
  ]

  const printJobs: PrintJob[] = [
    {
      id: "1",
      fileName: "custom-bracket.stl",
      status: "printing",
      progress: 65,
      filament: "PLA",
      color: "Black",
      estimatedTime: "2h 15m remaining",
    },
    {
      id: "2",
      fileName: "phone-case.stl",
      status: "queued",
      progress: 0,
      filament: "PETG",
      color: "White",
      estimatedTime: "Starts in 2h 15m",
    },
    {
      id: "3",
      fileName: "enclosure-lid.stl",
      status: "completed",
      progress: 100,
      filament: "ABS",
      color: "Black",
      estimatedTime: "Completed",
    },
  ]

  const handleDeleteAccount = () => {
    logout()
    router.push("/")
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "text-green-600 bg-green-50 border-green-200"
      case "processing":
      case "printing":
        return "text-blue-600 bg-blue-50 border-blue-200"
      case "pending":
      case "queued":
        return "text-yellow-600 bg-yellow-50 border-yellow-200"
      case "failed":
        return "text-red-600 bg-red-50 border-red-200"
      default:
        return "text-gray-600 bg-gray-50 border-gray-200"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="h-4 w-4" />
      case "processing":
      case "printing":
        return <Printer className="h-4 w-4" />
      case "pending":
      case "queued":
        return <Clock className="h-4 w-4" />
      default:
        return <Package className="h-4 w-4" />
    }
  }

  return (
    <div className="min-h-screen bg-background pt-[104px] relative overflow-hidden">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />

      <div className="container mx-auto px-6 py-12 relative z-10">
        {/* Header */}
        <div className="mb-12">
          <h1 className="font-pixel text-5xl text-foreground mb-2">My Account</h1>
          <p className="font-mono text-lg text-muted-foreground">Welcome back, {user?.name}!</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Orders Section */}
            <div className="bg-card border-2 border-border rounded-2xl p-6 shadow-lg">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-pixel text-3xl text-foreground flex items-center gap-2">
                  <Package className="h-6 w-6 text-primary" />
                  My Orders
                </h2>
              </div>

              <div className="space-y-4">
                {orders.map((order) => (
                  <div
                    key={order.id}
                    className="border-2 border-border rounded-xl p-4 hover:border-primary transition-colors cursor-pointer group"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="font-pixel text-xl text-foreground">{order.orderNumber}</span>
                          <span
                            className={`px-3 py-1 rounded-full border font-mono text-xs flex items-center gap-1 ${getStatusColor(order.status)}`}
                          >
                            {getStatusIcon(order.status)}
                            {order.status}
                          </span>
                        </div>
                        <div className="flex items-center gap-4 font-mono text-sm text-muted-foreground">
                          <span>{order.date}</span>
                          <span>•</span>
                          <span>{order.items} items</span>
                          <span>•</span>
                          <span className="font-bold text-foreground">{order.total}</span>
                        </div>
                      </div>
                      <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 3D Print Jobs Section */}
            <div className="bg-card border-2 border-border rounded-2xl p-6 shadow-lg">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-pixel text-3xl text-foreground flex items-center gap-2">
                  <Printer className="h-6 w-6 text-secondary" />
                  3D Print Jobs
                </h2>
              </div>

              <div className="space-y-4">
                {printJobs.map((job) => (
                  <div key={job.id} className="border-2 border-border rounded-xl p-4">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="font-mono text-lg text-foreground font-bold">{job.fileName}</span>
                          <span
                            className={`px-3 py-1 rounded-full border font-mono text-xs flex items-center gap-1 ${getStatusColor(job.status)}`}
                          >
                            {getStatusIcon(job.status)}
                            {job.status}
                          </span>
                        </div>
                        <div className="flex items-center gap-4 font-mono text-sm text-muted-foreground">
                          <span>
                            {job.filament} - {job.color}
                          </span>
                          <span>•</span>
                          <span>{job.estimatedTime}</span>
                        </div>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    {job.status !== "completed" && (
                      <div className="mt-3">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-mono text-xs text-muted-foreground">Progress</span>
                          <span className="font-mono text-xs font-bold text-foreground">{job.progress}%</span>
                        </div>
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-500"
                            style={{ width: `${job.progress}%` }}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Invoices Section */}
            <div className="bg-card border-2 border-border rounded-2xl p-6 shadow-lg">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-pixel text-3xl text-foreground flex items-center gap-2">
                  <FileText className="h-6 w-6 text-primary" />
                  Invoices
                </h2>
              </div>

              <div className="space-y-3">
                {orders.map((order) => (
                  <button
                    key={order.id}
                    className="w-full flex items-center justify-between p-4 border-2 border-border rounded-xl hover:border-primary transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <FileText className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                      <div className="text-left">
                        <div className="font-mono text-sm font-bold text-foreground">{order.orderNumber}</div>
                        <div className="font-mono text-xs text-muted-foreground">{order.date}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="font-pixel text-lg text-foreground">{order.total}</span>
                      <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Account Info */}
            <div className="bg-card border-2 border-border rounded-2xl p-6 shadow-lg">
              <h3 className="font-pixel text-2xl text-foreground mb-4">Account Info</h3>
              <div className="space-y-3">
                <div>
                  <label className="font-mono text-xs text-muted-foreground">Name</label>
                  <p className="font-mono text-sm text-foreground">{user?.name}</p>
                </div>
                <div>
                  <label className="font-mono text-xs text-muted-foreground">Email</label>
                  <p className="font-mono text-sm text-foreground">{user?.email}</p>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="bg-card border-2 border-border rounded-2xl p-6 shadow-lg space-y-3">
              <button
                onClick={logout}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-muted hover:bg-muted/80 transition-colors font-mono text-sm"
              >
                <LogOut className="h-4 w-4" />
                Logout
              </button>

              <button
                onClick={() => setShowDeleteConfirm(true)}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-destructive/10 hover:bg-destructive/20 text-destructive transition-colors font-mono text-sm"
              >
                <Trash2 className="h-4 w-4" />
                Delete Account
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      {showDeleteConfirm && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-card border-2 border-border rounded-2xl p-6 max-w-md w-full shadow-2xl">
            <h3 className="font-pixel text-2xl text-foreground mb-4">Delete Account?</h3>
            <p className="font-mono text-sm text-muted-foreground mb-6">
              This action cannot be undone. All your data will be permanently deleted.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setShowDeleteConfirm(false)}
                className="flex-1 py-3 rounded-lg bg-muted hover:bg-muted/80 transition-colors font-mono text-sm"
              >
                Cancel
              </button>
              <button
                onClick={handleDeleteAccount}
                className="flex-1 py-3 rounded-lg bg-destructive hover:bg-destructive/90 text-white transition-colors font-mono text-sm"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
