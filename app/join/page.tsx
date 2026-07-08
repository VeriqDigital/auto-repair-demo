import type { Metadata } from "next";
import Join from "./Join";

export const metadata: Metadata = {
  title: "Join",
  description:
    "Browse membership options, compare plans, and join the Iron Palace luxury gym concept.",
};

export default function Page() {
  return <Join />;
}
