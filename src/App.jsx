import { Routes, Route, Navigate } from "react-router-dom"
import { LoginForm } from "@/components/login-form"
import { SignupForm } from "@/components/signup-form"
import Dashboard from "./pages/Dashboard"

function AuthLayout({ children }){
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">{children}</div>
    </div>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<AuthLayout><LoginForm /></AuthLayout>} />
      <Route path="/signup" element={<AuthLayout><SignupForm /></AuthLayout>} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/*" element={<h1>Page not found</h1>} />
    </Routes>
  )
}