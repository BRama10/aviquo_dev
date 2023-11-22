import Navbar from '../components/navbar';

import { SessionProvider } from "next-auth/react"
import { auth } from '@/auth';



export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await auth()
  // TODO: Look into https://react.dev/reference/react/experimental_taintObjectReference
  // filter out sensitive data before passing to client.
  if (session?.user) {
    session.user = {
      name: session.user.name,
      email: session.user.email,
      image: session.user.image,
    }
  }
  

  return (
    <> 
      <Navbar loggedIn={session?.user == undefined ? false : true}  />
      {children}
    </>
  )
}
