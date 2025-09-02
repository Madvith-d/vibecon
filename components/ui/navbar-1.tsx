 

import * as React from "react"
// import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
// import { SignInButton, SignUpButton, UserButton, useUser } from "@clerk/nextjs" 
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"
import {LogoutLink,LoginLink,RegisterLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { div } from "framer-motion/client"
const Navbar1 = async () => {
 
  const {isAuthenticated} = getKindeServerSession()
  const isUserAuthenticated = await isAuthenticated();

  


  return (
    <div className="p-8 border-b flex flex-row justify-between items-center rounded-full w-[80%] mx-auto my-6 h-16 relative z-10 sticky top-3 backdrop-blur-md bg-background" >
     <div className="flex flex-row items-center gap-4">
      <h1 className="text-2xl font-bold color-red-500">Vibe<span className="text-primary font-bold text-red-500 ">Con</span></h1>
      <Button variant="ghost">
        <Link href="/dashboard">Dashboard</Link>
      </Button>
     </div>
     <div>
      {isUserAuthenticated ? (
        <LogoutLink>
          <Button variant="ghost">Logout</Button>
        </LogoutLink>
      ) : (
        <div className="flex flex-row items-center gap-4">
          <LoginLink>
            <Button variant="ghost">Login</Button>
          </LoginLink>
          <RegisterLink>
            <Button variant="ghost">Register</Button>
          </RegisterLink>
        </div>
        
      )}
     </div>
    </div>
  )
}


export { Navbar1 }