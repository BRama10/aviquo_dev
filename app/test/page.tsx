// import { auth } from "auth"
// import ClientExample from "@/components/client-example"
// import { SessionProvider } from "next-auth/react"
'use client'

import { useSession } from 'next-auth/react';

export default function ChildComponent() {
  const { data: session, status } = useSession();
  console.log(session);

  return (
    <div>
      ChildComponent {status} {status === 'authenticated' && session?.user?.name}

    </div>
  );
}