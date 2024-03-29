'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { GoogleColor } from '@/components/Icon';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';
import { signIn } from '@/lib/actions/signIn';
import { cn } from '@/lib/utils';
import { SignInSchema } from '@/schemas/auth';

const linkStyle =
  'text-sm font-medium text-black underline underline-offset-2 cursor-pointer';

export default function Page() {
  const router = useRouter();
  const { toast } = useToast();

  const form = useForm<z.infer<typeof SignInSchema>>({
    resolver: zodResolver(SignInSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (values: z.infer<typeof SignInSchema>) => {
    try {
      const error = await signIn(values);

      if (error) {
        toast({
          variant: 'destructive',
          description: error.message,
          duration: 1000,
        });
      }
    } catch (error) {
      console.error(error);

      toast({
        variant: 'destructive',
        description: 'Something went wrong!',
        duration: 1000,
      });
    }
  };

  return (
    <div className="flex h-full flex-col items-center justify-center px-5">
      <div className="flex w-full max-w-[400px] flex-col gap-6">
        <h1 className="text-center text-[32px] font-bold leading-tight">
          登入 Talents 帳戶
        </h1>

        <div className="flex flex-col gap-4">
          <Form {...form}>
            <form className="grid gap-4" onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel showErrorStyle={false}>電子郵件地址</FormLabel>
                    <FormControl>
                      <Input placeholder="請填入您的 E-mail" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel showErrorStyle={false}>登入密碼</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="請輸入密碼"
                        type="password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                    <FormDescription
                      className={cn(linkStyle, 'inline-block')}
                      onClick={() => router.push('/auth/passwordForget')}
                    >
                      忘記密碼
                    </FormDescription>
                  </FormItem>
                )}
              />

              <Button className="h-12 w-full rounded-full" type="submit">
                登入
              </Button>
            </form>
          </Form>

          <p className="text-neutral-600 text-center">
            還不是會員?{' '}
            <Link href="/auth/signup" className={linkStyle}>
              註冊X-Talent
            </Link>
          </p>
        </div>

        <div className="flex items-center">
          <div className="h-[1px] flex-1 bg-background-border" />
          <p className="flex-0 text-neutral-600 px-2">或</p>
          <div className="h-[1px] flex-1 bg-background-border" />
        </div>

        <div>
          <Button variant="outline" className="h-12 w-full rounded-full">
            <GoogleColor className="mr-3 text-xl" />
            <span className="text-base">使用 Google 繼續</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
