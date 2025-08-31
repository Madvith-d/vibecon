"use client" 

import * as React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { Link, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SignInButton, SignUpButton, UserButton, useUser } from "@clerk/nextjs"

const Navbar1 = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { isSignedIn } = useUser()

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <div className="p-8 border-b flex flex-row justify-between items-center rounded-full w-full my-6 h-16 relative z-10" >
     <div className="flex flex-row items-center gap-4">
      <h1 className="text-2xl font-bold color-red-500">Vibe<span className="text-primary font-bold text-red-500 ">Con</span></h1>
      <Button variant="outline">
        <Link href="/dashboard">Dashboard</Link>
      </Button>
     </div>
     <div>
      <Button variant="outline" className="rounded-full">
        <Link href="/">Home</Link>
      </Button>
     </div>
    </div>
  )
}


export { Navbar1 }