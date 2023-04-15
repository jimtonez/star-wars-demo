import './globals.css'
import { getServerSession } from "next-auth/next"
import AuthContext from './AuthContext'
import { authOptions } from "@/pages/api/auth/[...nextauth]";

export default async function RootLayout({
  children
}: {
  children: React.ReactNode
}) {

  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <AuthContext session={session}>
            {children}
        </AuthContext>
      </body>
    </html>
  )
}