import NextAuth, { NextAuthOptions } from "next-auth";
import clientPromise from "@/database/mongo";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import Credentials from "next-auth/providers/credentials";
import { findUserByEmail } from "@/lib/mongoose";
import { isSamePassword } from "@/lib/bcript";

export const authOptions: NextAuthOptions = {
  providers: [
    Credentials({
      name: "Email i hasło",
      credentials: {},

      async authorize(credentials, req) {
        //@ts-expect-error
        const { email, password } = credentials;

        const userFromDb = await findUserByEmail(email)
          .then((res) => {
            const user = {
              id: res._id,
              username: res.username,
              password: res.password,
              email: res.email,
              phoneNumber: res.phoneNumber,
              name: res.name,
              surname: res.surname,
              isConfirmed: res.isConfirmed,
              role: res.role,
              newsletter: res.newsletter,
              consultations: res.consultations,
            };
            return user;
          })
          .then(async (user) => {
            const comparedPasswords = await isSamePassword(
              password,
              user?.password
            );

            if (email !== user?.email || !comparedPasswords) {
              throw new Error("Błąd logowania");
            } else {
              return user;
            }
          });
        return userFromDb;
      },
    }),

    // Google({
    //   clientId: process.env.GOOGLE_CLIENT_ID as string,
    //   clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    //   allowDangerousEmailAccountLinking: true,
    //   authorization: {
    //     params: {
    //       prompt: "consent",
    //       access_type: "offline",
    //       response_type: "code",
    //     },
    //   },
    // }),

    // Email({
    //   server: {
    //     host: process.env.SENDGRID_SMTP_HOST,
    //     port: Number(process.env.SENDGRID_SMTP_PORT),
    //     auth: {
    //       user: process.env.SENDGRID_USER,
    //       pass: process.env.SENDGRID_API_KEY,
    //     },
    //   },
    //   from: process.env.SENDGRID_EMAIL,
    // }),
  ],
  session: {
    strategy: "jwt",
  },
  adapter: MongoDBAdapter(clientPromise),
  pages: {
    signIn: "/logowanie",
    newUser: "/rejestracja",
  },
  //callbacki zwracają wartość po określonych akcjach
  callbacks: {
    async session({ session, token }) {
      //@ts-ignore
      session.user = token.user;
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.user = user;
      }
      return token;
    },
  },
  //Eventy nic nie zwracają
  events: {

  },
  secret: process.env.NEXTAUTH_SECRET,
};

export const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
