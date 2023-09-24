'use client';
import Image from 'next/image';
import Link from 'next/link';

import LogoImgUrl from '@/assets/logo.svg';
import { Google } from '@/components/Icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const linkStyle = 'text-sm font-medium text-black underline underline-offset-2';

export default function Page() {
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <div className="mb-10">
        <Image src={LogoImgUrl} width={180} height={64} alt="Logo" />
      </div>
      <div className="flex w-full max-w-[400px] flex-col gap-6">
        <h1 className="text-center text-[32px] font-bold leading-tight">
          登入
        </h1>

        <div className="flex flex-col gap-4">
          <div className="grid max-w-sm items-center gap-1.5">
            <Label htmlFor="email">電子郵件地址</Label>
            <Input id="email" type="email" placeholder="請填入您的 E-mail" />
          </div>

          <div className="grid max-w-sm items-center gap-1.5">
            <Label htmlFor="password">登入密碼</Label>
            <Input id="password" type="password" placeholder="請輸入密碼" />
          </div>

          <Link className={linkStyle} href="/auth/passwordForget">
            忘記密碼
          </Link>

          <Button className="h-12 w-full rounded-full">登入</Button>

          <p className="text-neutral-600">
            還不是會員?{' '}
            <Link href="/auth/signup" className={linkStyle}>
              註冊X-Talent
            </Link>
          </p>
        </div>

        <div className="flex items-center px-6">
          <div className="h-[1px] flex-1 bg-neutral-200" />
          <p className="flex-0 px-2 text-neutral-600">或</p>
          <div className="h-[1px] flex-1 bg-neutral-200" />
        </div>

        <div>
          <Button variant="outline" className="h-12 w-full rounded-full">
            <Google className="mr-3 text-xl" />
            <span className="text-base">使用 Google 繼續</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
