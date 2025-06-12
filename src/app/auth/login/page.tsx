import { LoginForm } from '@/components/login-form';
import { ReturnButton } from '@/components/return-button';
import { Card } from '@/components/ui/card';
import Link from 'next/link';

export default function Page() {
  return (
    <div className='px-8 py-16 container mx-auto max-w-screen-lg space-y-8'>
      <div className='space-y-4'>
        <ReturnButton
          href='/'
          label='Home'
        />
        <h1 className='text-3xl font-bold text-[#408cff]/90'>Login</h1>
      </div>

      <LoginForm />

      <p className='text-[#408cff]/90 text-sm'>
        Don&apos;t have an account?{' '}
        <Link
          href='/auth/register'
          className='hover:text-[#C337FA]'
        >
          Register
        </Link>
      </p>
    </div>
  );
}
