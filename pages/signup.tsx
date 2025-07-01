
import { useState } from 'react'
import { supabase } from '../supabase/client'
import { useRouter } from 'next/router'

export default function Signup() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSignup = async () => {
    const { error } = await supabase.auth.signUp({ email, password })
    if (error) alert(error.message)
    else router.push('/verify')
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl mb-4">Sign Up</h1>
      <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" className="mb-2 p-2 text-black" />
      <input value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" type="password" className="mb-2 p-2 text-black" />
      <button onClick={handleSignup} className="bg-purpleDeep px-4 py-2 rounded">Sign Up</button>
    </div>
  )
}
