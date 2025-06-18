import {
  DeleteUserButton,
  PlaceholderDeleteUserButton,
} from '@/components/delete-user-button';
import Container from '@/components/container';
import { ReturnButton } from '@/components/return-button';
import { auth } from '@/lib/auth';
import { redirect } from 'next/navigation';
import { headers } from 'next/headers';
import type { UserRole } from '@/generated/prisma';
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import styles from './BackgroundImage.module.css';
import { UserRoleSelect } from '@/components/user-role-select';

export default async function Page() {
  const headersList = await headers();

  const session = await auth.api.getSession({
    headers: headersList,
  });

  if (!session) redirect('auth/login');

  if (session.user.role !== 'ADMIN') {
    return (
      <div className={styles.container}>
        <Container className='w-full h-screen flex justify-center items-center'>
          <aside className='bg-white w-full max-w-md rounded-xl bg-opacity-20 shadow-lg shadow-[#222222]'>
            <Card className='w-full max-w-md mx-auto bg-gradient-to-tr from-blue-100 to-green-100 rounded-lg shadow-lg relative z-1'>
              <CardContent className='px-8 py-16 container mx-auto max-w-screen-lg space-y-4'>
                <ReturnButton
                  href='/profile'
                  label='Profile'
                />
                <CardTitle className='text-3xl text-center font-bold text-[#408cff]/90'>
                  Admin Dashboard
                  <CardDescription className='my-4 pb-2'>
                    <p className='p-2 mt-2 text-center rounded-md text-lg bg-red-600 text-white font-bold'>
                      FORBIDDEN
                    </p>
                  </CardDescription>
                </CardTitle>
              </CardContent>
            </Card>
          </aside>
        </Container>
      </div>
    );
  }

  const { users } = await auth.api.listUsers({
    headers: headersList,
    query: {
      sortBy: 'name',
    },
  });
  const sortedUsers = users.sort((a, b) => {
    if (a.role === 'ADMIN' && b.role !== 'ADMIN') return -1;
    if (a.role !== 'ADMIN' && b.role === 'ADMIN') return 1;
    return 0;
  });

  return (
    <div className={styles.container}>
      <Container className='flex flex-col w-full h-screen justify-center items-center'>
        <aside className='bg-white w-full overflow-x-auto rounded-xl bg-opacity-20 shadow-lg shadow-[#313131]'>
          <Card className='w-full overflow-x-auto bg-gradient-to-tr from-blue-100 to-green-100 rounded-lg shadow-lg relative z-1'>
            <CardContent className='px-8 py-16 container mx-auto max-w-screen-lg space-y-2'>
              <ReturnButton
                href='/profile'
                label='Profile'
              />
              <p className='p-2 mt-2 text-center rounded-md text-lg bg-green-600 text-white font-bold'>
                ACCESS GRANTED
              </p>
              <div className='w-full overflow-x-auto'>
                <table className='table-auto min-w-full whitespace-nowrap'>
                  <thead>
                    <tr className='border-b text-sm text-left'>
                      <th className='px-4 py-2'>ID</th>
                      <th className='px-4 py-2'>Name</th>
                      <th className='px-4 py-2'>Email</th>
                      <th className='px-4 py-2 text-center'>Role</th>
                      <th className='px-4 py-2 text-center'>Actions</th>
                    </tr>
                  </thead>

                  <tbody>
                    {sortedUsers.map((user) => (
                      <tr
                        key={user.id}
                        className='border-b text-sm text-left'
                      >
                        <td className='px-4 py-2'>{user.id.slice(0, 8)}</td>
                        <td className='px-4 py-2'>{user.name}</td>
                        <td className='px-4 py-2'>{user.email}</td>
                        <td className='px-4 py-2 text-center'>
                          <UserRoleSelect
                            userId={user.id}
                            role={user.role as UserRole}
                          />
                        </td>
                        <td className='px-4 py-2 text-center'>
                          {user.role === 'USER' ? (
                            <DeleteUserButton userId={user.id} />
                          ) : (
                            <PlaceholderDeleteUserButton />
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </aside>
      </Container>
    </div>
  );
}
