import { AuthError } from "next-auth";

import { signIn } from "@/auth";

const AdminLoginPage = () => {
  async function login(formData: FormData) {
    "use server";

    try {
      await signIn("credentials", {
        email: formData.get("email"),
        password: formData.get("password"),
        redirectTo: "/admin",
      });
    } catch (error) {
      if (error instanceof AuthError) {
        return;
      }

      throw error;
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center px-6">
      <form
        action={login}
        className="w-full max-w-md rounded-lg border border-white/10 bg-(--surface) p-8"
      >
        <p className="text-sm font-bold uppercase tracking-[0.3em] text-(--primary)">
          Administration
        </p>

        <h1 className="mt-3 font-heading text-4xl font-black uppercase">
          Sign In
        </h1>

        <label className="mt-8 block">
          <span className="text-sm text-white/75">Email</span>
          <input
            required
            type="email"
            name="email"
            autoComplete="email"
            className="mt-2 w-full rounded-md border border-white/10 bg-black/30 px-4 py-3"
          />
        </label>

        <label className="mt-5 block">
          <span className="text-sm text-white/75">Password</span>
          <input
            required
            type="password"
            name="password"
            autoComplete="current-password"
            className="mt-2 w-full rounded-md border border-white/10 bg-black/30 px-4 py-3"
          />
        </label>

        <button
          type="submit"
          className="cursor-pointer mt-7 w-full rounded-md bg-(--primary) px-5 py-3 font-semibold text-black transition hover:bg-(--primary-hover)"
        >
          Sign In
        </button>
      </form>
    </main>
  );
};

export default AdminLoginPage;
