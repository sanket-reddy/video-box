import {
  SignInButton,
  SignUpButton,
  SignOutButton,
  UserButton,
  useUser,
} from "@clerk/nextjs";
import { ModeToggle } from "../shared/modeToggle";
import { Separator } from "../ui/separator";
import { auth } from "@clerk/nextjs";
export default function Navbar() {
  const { userId }: { userId: string | null } = auth();

  if (userId == null) {
    return (
      <>
        <div className="flex justify-between shadow-md items-center p-3 gap-3 ">
          <h1>VIDEO-BOX</h1>
          <div className="flex gap-6 mr-3">
            <ModeToggle></ModeToggle>
            <SignInButton></SignInButton>
            <SignUpButton></SignUpButton>
          </div>
        </div>
        <Separator></Separator>
      </>
    );
  } else {
    return (
      <>
        <div className="flex justify-between shadow-md items-center p-3 gap-3 ">
          <h1>VIDEO-BOX</h1>
          <div className="flex gap-6 mr-3">
            <ModeToggle></ModeToggle>
            <UserButton></UserButton>
            <SignOutButton></SignOutButton>
          </div>
        </div>
        <Separator></Separator>
      </>
    );
  }
}
