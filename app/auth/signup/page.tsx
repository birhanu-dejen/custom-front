"use client";
import { X } from "lucide-react";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { SignupSchema } from "@/lib/schemas";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import Social from "@/components/socialLogin";
import { useRouter } from "next/navigation";
type SignupFormValues = z.infer<typeof SignupSchema>;

export default function SignUpPage() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const form = useForm<SignupFormValues>({
    resolver: zodResolver(SignupSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: SignupFormValues) => {
    console.log(values);
  };

  return (
    <div className="min-h-screen flex flex-col justify-start bg-white px-8 pt-6">
      {/* Close button */}
      <div className="absolute top-4 left-4">
        <button
          type="button"
          className="p-2 rounded hover:bg-gray-200"
          onClick={() => router.push("/")}
        >
          <X className="w-6 h-6 text-gray-700" />
        </button>
      </div>

      {/* Logo */}
      <div className="flex flex-col items-center mb-8">
        <div className="w-12 h-12 rounded-2xl bg-[#ff6363] flex items-center justify-center mb-4">
          <span className="text-white text-lg font-bold">Logo</span>
        </div>
        <h1 className="text-2xl font-bold mb-2 text-center">Sign up</h1>
      </div>
      {/* Signup form */}
      <div className="max-w-md w-full mx-auto">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      type="email"
                      placeholder="name@example.com"
                      className="w-full  focus-visible:border-[#ff6363] focus-visible:ring-gray-200 transition-colors"
                    />
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
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      type="password"
                      placeholder="Create a password"
                      className="w-full focus-visible:border-[#ff6363] focus-visible:ring-gray-200 transition-colors"
                    />
                  </FormControl>
                  <p className="text-sm text-gray-500 mt-1">
                    Between 8 and 72 characters
                  </p>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="w-full py-5 bg-[#ff6363] font-bold"
              disabled={isPending}
            >
              {isPending ? "Processing..." : "Sign up by email"}
            </Button>
          </form>
        </Form>

        {/* Social login */}
        <div className="my-8">
          <Social />
        </div>

        {/* Footer */}
        <p className="text-center text-gray-600">
          <span>Already have an account?</span>
          <br />
          <Link href="/login" className=" hover:underline font-semibold">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}
