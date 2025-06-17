import Container from '@/components/container';
import { ReturnButton } from '@/components/return-button';
import { SignOutButton } from '@/components/sign-out-button';
import { Button } from '@/components/ui/button';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import Link from 'next/link';
import { redirect } from 'next/navigation';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';
import styles from './BackgroundImage.module.css';

export default async function Page() {
  const headerList = await headers()

  const session = await auth.api.getSession({
    headers: headerList,
  });

  if (!session) redirect('/auth/login');

  const FULL_POST_ACCESS = await auth.api.userHasPermission({
    headers: headerList,
    body: {
      permissions: {
        posts: ['update', 'delete'],
      },
    },
  });

  return (
    <div className={styles.container}>
      <>
        <Container className='w-full h-screen flex justify-center items-center'>
          <aside className='bg-white w-full max-w-md rounded-xl bg-opacity-20 shadow-lg shadow-[#313131]'>
            <Card className='w-full overflow-x-auto bg-gradient-to-tr from-blue-100 to-green-100 rounded-lg shadow-lg relative z-1'>
              <CardContent className='px-8 py-16 container mx-auto max-w-screen-lg space-y-8'>
                <ReturnButton
                  href='/'
                  label='Home'
                />

                <CardTitle className='text-2xl font-bold text-[#408cff]/90'>
                  <CardDescription className='my-4'>
                    <div className='flex flex-row items-center gap-2 pb-4'>
                      {session.user.role === 'ADMIN' && (
                        <Button
                          size='sm'
                          asChild
                        >
                          <Link href='/admin/dashboard'>Admin Dashboard</Link>
                        </Button>
                      )}

                      <SignOutButton />
                    </div>
                    <div className='text-2xl font-bold pb-4 text-[#408cff]'>Permission</div>

                    <div className='space-x-4 pb-4'>
                      <Button size='sm'>MANAGE OWN POSTS</Button>
                      <Button
                        size='sm'
                        disabled={!FULL_POST_ACCESS.success}
                      >
                        MANAGE ALL POSTS
                      </Button>
                    </div>
                  </CardDescription>
                  <pre className='text-sm overflow-clip'>
                    {JSON.stringify(session, null, 2)}
                  </pre>
                </CardTitle>
              </CardContent>
            </Card>
          </aside>
        </Container>
      </>
    </div>
  );
}
