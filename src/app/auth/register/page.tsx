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
import { RegisterForm } from '@/components/register-form';
import { SignInOauthButton } from '@/components/sign-in oauth-button';

export default function Page() {
  return (
    <div className={styles.container}>
      <Container className='w-full h-screen flex justify-center items-center'>
        <aside className='bg-white bg-opacity-20 w-full max-w-md rounded-xl shadow-lg shadow-[#222222]'>
          <Card className='w-full max-w-md mx-auto bg-gradient-to-tr from-blue-100 to-green-100 relative z-1'>
            <CardContent className='px-8 py-2 container mx-auto max-w-screen-lg space-y-4'>
              <ReturnButton
                href='/'
                label='Home'
              />
              <CardTitle className='text-3xl font-bold text-[#408cff]/90'>
                Sign Up, Now!
              </CardTitle>
              <CardDescription className='text-[#408cff]/90 text-sm'>
                We are happy to have you with us.
              </CardDescription>

              <RegisterForm />

              <CardFooter className='text-[#408cff]/90 text-sm'>
                Already have an account?{' '}
                <Link
                  href='/auth/login'
                  className='text-green-600 hover:text-[#C337FA] font-semibold transition-all ease-linear pl-1'
                >
                  Login
                </Link>
              </CardFooter>
              <div className='space-y-4 pt-2'>
                <hr className='max-w-sm' />
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
