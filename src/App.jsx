import { useState } from "react"
import { LoginForm } from "@/components/login-form"
import { SignupForm } from "@/components/signup-form"

export default function App() {
  const [page, setPage] =  useState("login") // for "login" or "signup"

  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        {page === "login" ? (<LoginForm onSignupClick={() => setPage("signup")} />) : (<SignupForm onLoginClick={() => setPage("login")} /> )}
      </div>
    </div>
  )
}