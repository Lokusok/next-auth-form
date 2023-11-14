import type { AuthOptions, User } from 'next-auth';

import GoogleProvider from 'next-auth/providers/google';
import GithubProvider from 'next-auth/providers/github';
import Credentials from 'next-auth/providers/credentials';

import { users } from '@/db.json';
import { UserType } from '@/types';

const config: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    GithubProvider({
      clientId: process.env.GITHUB_APP_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    }),
    Credentials({
      credentials: {
        email: { label: 'email', type: 'email', required: true },
        password: { label: 'password', type: 'password', required: true },
      },

      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) {
          return null;
        }

        const currentUser: UserType | undefined = users.find(
          (user) =>
            user.email === credentials.email &&
            user.password === credentials.password
        );

        if (currentUser) {
          return currentUser as unknown as User;
        }

        return null;
      },
    }),
  ],
};

export default config;
