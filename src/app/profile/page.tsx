import { ReturnButton } from '@/components/return-button';
import { SignOutButton } from '@/components/sign-out-button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from '@/components/ui/card';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import Image from 'next/image';

export default async function Page() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) redirect('/auth/login');

  return (
    <>
      <div
        style={{
          position: 'fixed',
          width: '100vw',
          height: '100vh',
        }}
      >
        <Image
          src='/images/unsplash.webp'
          alt='Image from the author'
          layout='fill'
        />
      </div>
      <main className='bg-cover bg-center bg-no-repeat'>
        <div className='w-full h-screen flex justify-center items-center bg-[#313131]/25'>
          <aside className='bg-white w-full max-w-md rounded-xl bg-opacity-20 shadow-lg shadow-[#313131]'>
            <Card className='w-full max-w-md mx-auto bg-gradient-to-tr from-blue-100 to-green-100 relative z-1'>
              <CardContent className='px-8 py-16 container mx-auto max-w-screen-lg space-y-8'>
                <ReturnButton
                  href='/'
                  label='Home'
                />

                <CardTitle className='text-3xl font-bold text-[#408cff]/90'>
                  Profile
                  <CardDescription className='my-4 pb-2'>
                    <SignOutButton />
                  </CardDescription>
                  <pre className='text-sm overflow-clip'>
                    {JSON.stringify(session, null, 2)}
                  </pre>
                </CardTitle>
              </CardContent>
            </Card>
          </aside>
        </div>
      </main>
    </>
  );
}
