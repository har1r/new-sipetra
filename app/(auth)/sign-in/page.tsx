import Link from "next/link";
import { SignInForm } from "./_components/sign-in-form";

export default function SignInPage() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-slate-50 p-4">
      <div
        className="flex w-full flex-col rounded-2xl border bg-white p-8 shadow-xl shadow-slate-200/50"
        style={{ maxWidth: "400px" }}
      >
        {/* Header Ultra Minimalis */}
        <div
          className="mb-8 flex flex-col items-start"
          style={{ marginBottom: "3rem" }}
        >
          <p className="text-sm text-slate-500">
            Silakan akses akun{" "}
            <span className="font-semibold text-orange-600">SIPETRA</span> Anda
          </p>
        </div>

        <SignInForm />

        {/* Link ke Sign Up */}
        <div className="mt-8 text-center">
          <p className="text-sm text-slate-600">
            Belum punya akun?{" "}
            <Link
              href="/sign-up"
              className="font-semibold text-orange-600 hover:text-orange-700 hover:underline transition-all"
            >
              Daftar sekarang
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
