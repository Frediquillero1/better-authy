import { buttonVariants } from '@/components/ui/button';
import { TypographyP } from '@/components/ui/tipography';
import Link from 'next/link';
import Container from '@/components/container';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import React from 'react';
import { GetStartedButton } from '@/components/get-started-button';

export default function Home() {
  return (
    <>
      <Container className='w-full h-screen flex justify-center items-center'>
        <aside className='bg-white w-full overflow-x-auto rounded-xl bg-opacity-20 shadow-lg shadow-[#313131]'>
          <Card className='w-full overflow-x-auto bg-gradient-to-tr from-blue-100 to-green-100 rounded-lg shadow-lg'>
            <CardHeader>
              <CardTitle className='text-2xl'>
                Hey, I’m Fredi Schlesinger 😎
              </CardTitle>
            </CardHeader>
            <CardContent>
              <TypographyP className='text-lg text-gray-600'>
                I’m building this project to teach you the secrets of{' '}
                <Link
                  target='_blank'
                  href='https://www.better-auth.com/'
                  className='text-blue-500 font-medium'
                >
                  “better-auth”
                </Link>
              </TypographyP>
              <TypographyP className='text-md text-gray-500'>
                If you like my work, consider supporting me with{' '}
                <Link
                  target='_blank'
                  href='https://buymeacoffee.com/FredEmilio'
                  className='font-medium text-yellow-500'
                >
                  “Buy Me a Coffee”
                </Link>
                .
              </TypographyP>
            </CardContent>
              <CardFooter>
                <GetStartedButton />
              </CardFooter>
          </Card>
        </aside>
      </Container>
    </>
  );
};
