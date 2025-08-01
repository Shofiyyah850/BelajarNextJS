import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { Pool } from "pg";
import bcrypt from "bcrypt";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

const handler = NextAuth({
  providers: [
    CredentialsProvider({
        name: "Credentials",
        credentials: {
            email: { label: "Email", type: "email" },
            password: { label: "Password", type: "password" },
        },
async authorize(credentials) {
    const client = await pool.connect();
    try {
        const res = await client.query(
            'SELECT id, name, email, password FROM "user" WHERE email = $1',
            [credentials?.email]
        );
        const user = res.rows[0];
        if (!user) {
            throw new Error("User not found");
        }

        const { id, name, email } = user;

        const isValid = await bcrypt.compare(credentials?.password || "", user.password);
        if (!isValid) {
            throw new Error("Invalid password");
        }

        if (!id || !name || !email) {
            throw new Error("Missing user fields");
        }
        return { id, name, email };
    } finally {
        client.release();
    }
}
    })
],
  pages: {
    signIn: "/sign_in",
  },
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };