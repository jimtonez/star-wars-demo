"use client";
import { SessionProvider } from "next-auth/react";

export interface AuthContextProps {
  children: React.ReactNode;
}

export default function AuthContext({ session, children }: any) {
  return <SessionProvider session={session}>{children}</SessionProvider>;
}