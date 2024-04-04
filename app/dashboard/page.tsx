import Navbar from "@/components/shared/navbar";
import { auth, currentUser } from "@clerk/nextjs";
import { User } from "@clerk/nextjs/server";
export default async function Page() {
  const user = await currentUser();
  return (
    <div>
      <Navbar></Navbar>
      <h1>Hello , {user?.firstName}</h1>
    </div>
  );
}
