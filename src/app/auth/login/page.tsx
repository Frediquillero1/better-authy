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
import styles from './BackgroundImage.module.css';
import { SignInOauthButton } from '@/components/sign-in oauth-button';

export default function Page() {
  return (
    <div className={styles.container}>
      <Container className='w-full h-screen flex justify-center items-center'>
        <aside className='bg-white w-full max-w-md rounded-xl bg-opacity-20 shadow-lg shadow-[#222222]'>
          <Card className='w-full max-w-md mx-auto bg-gradient-to-tr from-blue-100 to-green-100 rounded-lg shadow-lg relative z-1'>
            <CardContent className='px-8 py-2 container mx-auto max-w-screen-lg space-y-4'>
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
              <div className='space-y-4'>
                <hr className='max-w- pt-2' />
                <div className='flex flex-col max-w-sm gap-4'>
                  <SignInOauthButton
                    signUp
                    provider='google'
                  />
                  <SignInOauthButton
                    signUp
                    provider='facebook'
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </aside>
      </Container>
    </div>
  );
}
