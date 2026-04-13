"use client";
import { useSignIn } from "@/app/(auth)/sign-in/_services/use-mutations";
import {
  signInDefaultValues,
  signInSchema,
  SignInSchema,
} from "@/app/(auth)/sign-in/_types/signInSchema";
import { Button } from "@/components/ui/button";
import { ControlledInput } from "@/components/ui/controlled/controlled-input";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";

const SignInForm = () => {
  const form = useForm<SignInSchema>({
    defaultValues: signInDefaultValues,
    resolver: zodResolver(signInSchema),
  });

  const signInMutation = useSignIn();

  const onSubmit: SubmitHandler<SignInSchema> = (data) => {
    signInMutation.mutate(data);
  };

  return (
    <FormProvider {...form}>
      <form
        className="w-full bg-white rounded-3xl shadow-2xl px-8 py-10 space-y-6 border border-white/40"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <div className="text-center space-y-1">
          <h2 className="text-2xl font-bold text-[#7A4A2A]">
            Welcome Back
          </h2>
          <p className="text-sm text-[#5c3b22]/70">
            Sign in to continue
          </p>
        </div>

        <div className="space-y-4">
          <ControlledInput<SignInSchema> name="email" label="Email" />
          <ControlledInput<SignInSchema>
            name="password"
            label="Password"
            type="password"
          />
        </div>

        <Button
          className="w-full bg-[#2EA7D7] hover:bg-[#1F7FA5] text-white py-6 text-lg rounded-xl shadow-lg"
          isLoading={signInMutation.isPending}
        >
          Sign In
        </Button>

        <div className="text-center text-sm text-[#5c3b22]/80">
          Don&apos;t have an account?{" "}
          <Link
            href="/sign-up"
            className="text-[#2EA7D7] font-medium hover:underline"
          >
            Sign up
          </Link>
        </div>
      </form>
    </FormProvider>
  );
};

export { SignInForm };