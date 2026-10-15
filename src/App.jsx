import { Routes, Route, Navigate } from "react-router-dom"
import { LoginForm } from "@/components/login-form"
import { SignupForm } from "@/components/signup-form"

export default function App() {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<LoginForm/>} />
          <Route path="/signup" element={<SignupForm/>} />
          <Route path="/dashboard" element={<h1>Dashboard coming soon!</h1>} />
          <Route path="/*" element={<h1>Page not found</h1>} />
        </Routes>
      </div>
    </div>
  )
}