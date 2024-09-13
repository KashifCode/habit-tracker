import NextAuth from "next-auth"
import authConfig from "@/auth.config"
 
import client from "@/lib/mongodb"
import { MongoDBAdapter } from "@auth/mongodb-adapter"
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: MongoDBAdapter(client),
  session: { strategy: "jwt" },
  ...authConfig,
})