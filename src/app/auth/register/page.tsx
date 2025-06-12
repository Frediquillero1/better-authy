import { RegisterForm } from '@/components/register-form';
import { ReturnButton } from '@/components/return-button';
import { Button } from '@/components/ui/button';
import { ArrowLeftIcon } from 'lucide-react';
import Link from 'next/link';

export default function Page() {
  return (
    <div className='px-8 py-16 container mx-auto max-w-screen-lg space-y-8'>
      <div className='space-y-4'>
        <ReturnButton href='/' label='Home' />
        <h1 className='text-3xl font-bold text-[#408cff]/90'>Register</h1>
      </div>

      <RegisterForm />

      <p className='text-[#408cff]/90 text-sm'>
        Already have an account?{' '}
        <Link href='/auth/login' className='hover:text-[#C337FA]'>Login</Link>
      </p>
    </div>
  );
}
