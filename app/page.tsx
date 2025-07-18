"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    // Redirect to login page
    router.push("/login")
  }, [router])

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Sistema de Gestão de Relatórios</h1>
        <p>Redirecionando para login...</p>
      </div>
    </div>
  )
}
