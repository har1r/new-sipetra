"use server";

import { signIn as nextAuthSignIn } from "@/lib/auth";
import { executeAction } from "@/lib/executeAction";
import { signInSchema, SignInSchema } from "../_types/signInSchema";

export const signIn = async (data: SignInSchema) => {
  return await executeAction({
    actionFn: async () => {
      const validatedData = signInSchema.parse(data);
      await nextAuthSignIn("credentials", {
        ...validatedData,
        redirect: false,
      });
    },
  });
};
