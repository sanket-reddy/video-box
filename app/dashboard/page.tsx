import Navbar from "@/components/shared/navbar";
import { currentUser } from "@clerk/nextjs";
export default async function Page() {
  const user = await currentUser();
  return (
    <div>
      <Navbar></Navbar>
      <h1>Hello , {user?.firstName}</h1>
    </div>
  );
}
