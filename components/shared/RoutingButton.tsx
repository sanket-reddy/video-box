import { RoutingButton } from "@/types";
import Link from "next/link";
export default function RoutingButton(props: RoutingButton) {
  return (
    <button className="bg-purple-800 p-3 w-1/6 hover:bg-purple-950 rounded-lg shadow-md text-white font-bold">
      <Link href={props.destination} className="w-full">
        {props.content}
      </Link>
    </button>
  );
}
