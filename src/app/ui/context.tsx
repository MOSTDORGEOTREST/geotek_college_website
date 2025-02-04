"use client"
import { useState } from "react"
import Context from "../context"

export default function ContextProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [lan, setLan] = useState<"ru" | "en">("ru")

  return <Context.Provider value={{ lan, setLan }}>{children}</Context.Provider>
}
