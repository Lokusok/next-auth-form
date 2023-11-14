import AuthForm from '@/components/AuthForm';

import { getServerSession } from 'next-auth/next';
import authConfig from '@/config/auth';

import Profile from '@/components/Profile';

export default async function Home() {
  const session = await getServerSession(authConfig);

  return <>{session?.user ? <Profile /> : <AuthForm />}</>;
}
