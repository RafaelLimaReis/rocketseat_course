import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import { query as q } from 'faunadb';

import { fauna } from "../../../services/fauna";

export default NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      const { email: emailUser } = user;

      try {
        await fauna.query(
          q.If(
            q.Not(
              q.Exists(
                q.Match(
                  q.Index('user_by_email'),
                  q.Casefold(emailUser)
                )
              )
            ),
            q.Create(
              q.Collection('users'),
              { data: { email: emailUser }}
            ),
            q.Get(
              q.Match(
                q.Index('user_by_email'),
                q.Casefold(emailUser)
              )
            )
          )
        );
  
        return true;
      } catch {
        return false;
      }
    },
  }
})