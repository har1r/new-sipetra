"use client";

import { useMutation } from "@tanstack/react-query";
import { signIn } from "./mutations";
import { SignInSchema } from "../_types/signInSchema";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export const useSignIn = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: async (data: SignInSchema) => {
      return await signIn(data);
    },
    onSuccess: (res) => {
      if (res?.success) {
        toast.success("Login berhasil!");
        router.push("/dashboard");
        router.refresh();
      } else {
        toast.error(res?.error || "Gagal masuk");
      }
    },
    onError: () => {
      toast.error("Terjadi kesalahan pada server");
    },
  });
};
