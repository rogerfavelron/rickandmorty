import { redirect } from "next/navigation";

export default function Home() {
  redirect("/locations?page=1");
}
