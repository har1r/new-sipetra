"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signInSchema, SignInSchema } from "../_types/signInSchema";
import { useSignIn } from "../_services/use-mutations";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

export function SignInForm() {
  const { mutate: login, isPending } = useSignIn();

  const form = useForm<SignInSchema>({
    resolver: zodResolver(signInSchema),
    defaultValues: { email: "", password: "" },
  });

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit((data) => login(data))}
        className="flex w-full flex-col"
        style={{ gap: "1.25rem" }}
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem
              className="flex flex-col items-start"
              style={{ gap: "0.375rem" }}
            >
              <FormLabel className="font-semibold" style={{ margin: 0 }}>
                Email
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="name@example.com"
                  {...field}
                  className="h-11"
                  style={{ width: "100%" }}
                />
              </FormControl>
              <FormMessage style={{ marginTop: "0.25rem" }} />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem
              className="flex flex-col items-start"
              style={{ gap: "0.375rem" }}
            >
              <FormLabel className="font-semibold" style={{ margin: 0 }}>
                Password
              </FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="******"
                  {...field}
                  className="h-11"
                  style={{ width: "100%" }}
                />
              </FormControl>
              <FormMessage style={{ marginTop: "0.25rem" }} />
            </FormItem>
          )}
        />

        <div style={{ marginTop: "0.5rem" }}>
          <Button
            type="submit"
            className="w-full h-11"
            disabled={isPending}
            style={{ width: "100%" }}
          >
            {isPending ? "Mohon tunggu..." : "Masuk"}
          </Button>
        </div>
      </form>
    </Form>
  );
}
