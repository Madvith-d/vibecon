"use client"
import { useSignIn } from '@clerk/nextjs';
import { div } from 'framer-motion/client';
import { readFileSync } from 'fs';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import {BGPattern} from '@/components/bg-pattern';

export default function SignIn() {
    const{isLoaded, signIn} = useSignIn();
    const router = useRouter();
    const [error, setError] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    if(!isLoaded) return (
        <div>Loading...</div>
    )
    const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(!isLoaded) return;
        try {
          const result = await signIn.create({identifier: email, password});
          if(result.status === 'complete') {
            router.push('/dashboard');
          }else{
            setError('Invalid email or password');
          }
          
        } catch (error: any) {
            setError(error.errors?.[0]?.message || 'An error occurred');
        }
    }
    
    return (
        
        <div className='flex flex-col items-center justify-center h-screen'>
            <BGPattern />
            <h1>Sign In</h1>
            <form onSubmit={handleSignIn}>
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type="submit">Sign In</button>
            </form>
        </div>
    )
}