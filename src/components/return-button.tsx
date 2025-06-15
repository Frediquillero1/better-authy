import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeftIcon } from 'lucide-react'

interface ReturnButtonProps {
  href: string;
  label: string;
}

export const ReturnButton = ({ href, label }: ReturnButtonProps) => {
  return (
    <Button className='bg-[#408cff]/90 hover:bg-sky-500' size='sm' asChild>
      <Link href={href}>
        <ArrowLeftIcon /> {label}
      </Link>
    </Button>
  );
}