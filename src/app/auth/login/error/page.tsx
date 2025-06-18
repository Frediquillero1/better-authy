import Container from '@/components/container';
import { ReturnButton } from '@/components/return-button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

interface PageProps {
  searchParams: Promise<{ error: string }>;
}

export default async function Page({ searchParams }: PageProps) {
  const error = (await searchParams).error;

  return (
    <Container className='w-full h-screen flex justify-center items-center'>
      <aside className='bg-white bg-opacity-20 w-full max-w-md rounded-xl shadow-lg shadow-[#222222]'>
        <Card className='w-full overflow-x-auto bg-gradient-to-tr from-blue-100 to-green-100 rounded-lg shadow-lg relative z-1'>
          <CardContent className='px-8 py-2 container mx-auto max-w-screen-lg space-y-4'>
            <CardHeader>
              <div className='space-y-4'>
                <ReturnButton
                  href='/auth/login'
                  label='Login'
                />
              </div>
            </CardHeader>
            <CardTitle>
              <h1 className='text-3xl font-bold'>Login Error</h1>
            </CardTitle>
            <CardDescription>
              <p className='text-destructive'>
                {error === 'account_not_linked'
                  ? 'This account is already linked to another sign-in method.'
                  : 'Oops! Something went wrong. Please try again.'}
              </p>
            </CardDescription>
          </CardContent>
        </Card>
      </aside>
    </Container>
  );
}
