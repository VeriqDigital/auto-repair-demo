import { redirect } from "next/navigation";

import { auth } from "@/auth";

const AdminLayout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const session = await auth();

  if (!session?.user) {
    redirect("/admin/login");
  }

  return <>{children}</>;
};

export default AdminLayout;
