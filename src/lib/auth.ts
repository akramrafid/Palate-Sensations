import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from "@/lib/prisma";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "admin@palatesensations.com" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email) return null;

        // Mock Authentication for demonstration
        // In production, compare hashed passwords
        if (credentials.email === "admin@palatesensations.com" && credentials.password === "password") {
          return {
            id: "admin-1",
            name: "Admin User",
            email: credentials.email,
            role: "ADMIN"
          };
        }
        
        if (credentials.email === "staff@palatesensations.com" && credentials.password === "password") {
          return {
            id: "staff-1",
            name: "Staff User",
            email: credentials.email,
            role: "STAFF"
          };
        }
        
        if (credentials.email === "customer@example.com" && credentials.password === "password") {
          return {
            id: "customer-1",
            name: "Customer User",
            email: credentials.email,
            role: "CUSTOMER"
          };
        }

        // Try to find user in DB (if implemented real registration)
        const user = await prisma.user.findUnique({
          where: { email: credentials.email }
        });

        if (user) {
          // Skipping password check for mock DB users
          return {
            id: user.id,
            name: user.name,
            email: user.email,
            role: user.role
          };
        }

        return null;
      }
    })
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = (user as any).role;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        (session.user as any).id = token.id;
        (session.user as any).role = token.role;
      }
      return session;
    }
  },
  pages: {
    signIn: "/login", // Custom login page (to be built)
  }
};
