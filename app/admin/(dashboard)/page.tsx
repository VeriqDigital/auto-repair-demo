import { auth, signOut } from "@/auth";

const AdminDashboardPage = async () => {
  const session = await auth();

  return (
    <main className="mx-auto min-h-screen max-w-6xl px-6 pb-24 pt-32">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-(--primary)">
            Admin
          </p>

          <h1 className="mt-3 font-heading text-5xl font-black uppercase">
            Dashboard
          </h1>

          <p className="mt-3 text-white/65">
            Signed in as {session?.user?.email}
          </p>
        </div>

        <form
          action={async () => {
            "use server";
            await signOut({ redirectTo: "/admin/login" });
          }}
        >
          <button
            type="submit"
            className="rounded-md border border-white/15 px-5 py-3"
          >
            Sign Out
          </button>
        </form>
      </div>
    </main>
  );
};

export default AdminDashboardPage;
