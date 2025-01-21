import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
} from './ui/card';

import { Skeleton } from './ui/skeleton';

type StatsCardProps = {
  title: string;
  value: number;
};

function StatsCard({ title, value }: StatsCardProps) {
  return (
    <Card className="bg-muted">
      <CardHeader className="flex flex-row justify-between items-center">
        <CardTitle className="capitalize"> {title}</CardTitle>
        <CardDescription className="text-4xl font-extrabold text-primary mt-[0px!important]">
          {value}
        </CardDescription>
      </CardHeader>
    </Card>
  );
}

export function StatsLoadingCard() {
  return (
    <Card className='w-[330px] h-[88px]'>
      <CardHeader className='flex flex-row justify-between items-center'>
        <div className='flex items-center space-x-4'>
          <Skeleton className='h-12 w-12 rounded-full' />
          <div className='space-y-2'>
            <Skeleton className='h-4 w-[150px]' />
            <Skeleton className='h-4 w-[100px]' />
          </div>
        </div>
      </CardHeader>
    </Card>
  )
}

export default StatsCard;
