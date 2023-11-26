import NextAuth, { NextAuthOptions } from "next-auth";
import clientPromise from "@/database/mongo";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import Email from "next-auth/providers/email";

const options: NextAuthOptions = {
  providers: [
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_CLIENT_ID as string,
    //   clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    //   authorization: {
    //     params: {
    //       prompt: "consent",
    //       access_type: "offline",
    //       response_type: "code",
    //     },
    //   },
    // }),
    Email({
      server: {
        host: process.env.SENDGRID_SMTP_HOST,
        port: Number(process.env.SENDGRID_SMTP_PORT),
        auth: {
          user: process.env.SENDGRID_USER,
          pass: process.env.SENDGRID_API_KEY,
        },
      },
      from: process.env.SENDGRID_EMAIL,
    }),
  ],
  session: {
    strategy: "database",
  },
  adapter: MongoDBAdapter(clientPromise),
  pages: {},
  //callbacki zwracają wartość po określonych akcjach
  callbacks: {},
  //Eventy nic nie zwracają
  events: {},
  secret: process.env.NEXTAUTH_SECRET,
};

export const handler = NextAuth(options);

export { handler as GET, handler as POST };
