import Container from '@/components/container';
import { LoginForm } from '@/components/login-form';
import { ReturnButton } from '@/components/return-button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';

export default function Page() {
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
      <Container className='w-full h-screen flex justify-center items-center'>
        <aside className='bg-white w-full max-w-md rounded-xl bg-opacity-20 shadow-lg shadow-[#313131]'>
          <Card className='w-full max-w-md mx-auto bg-gradient-to-tr from-blue-100 to-green-100 rounded-lg shadow-lg relative z-1'>
            <CardContent className='px-8 py-16 container mx-auto max-w-screen-lg space-y-4'>
              <ReturnButton
                href='/'
                label='Home'
              />
              <CardTitle className='text-3xl font-bold text-[#408cff]/90'>
                Hello, Again
              </CardTitle>
              <CardDescription className='text-[#408cff]/90 text-sm'>
                We are happy to have you back.
              </CardDescription>

              <LoginForm />

              <CardFooter className='text-[#408cff]/90 text-sm'>
                Don´t have an account?
                <Link
                  href='/auth/register'
                  className='text-orange-600 hover:text-[#C337FA] font-semibold transition-all ease-linear pl-1'
                >
                  Register
                </Link>
              </CardFooter>
            </CardContent>
          </Card>
        </aside>
      </Container>
    </>
  );
}
