
import Navbar from "@/components/shared/navbar";
import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <div className="flex">
        <div className="w-1/2 flex justify-center items-center min-h-[640px]">
          <div>
            <Image
              src="/icon1.png"
              className=""
              height={500}
              alt="logo"
              width={500}
            ></Image>
          </div>
        </div>
        <div className="w-1/2 flex flex-col justify-center items-center mr-5 ">
          <p>
            Video Box is a dynamic application designed to revolutionize the way
            users share and view video content. Emphasizing ease of use, social
            connectivity, and a rich viewing experience, Video Box stands out in
            the crowded space of video sharing platforms. Here is a breakdown of
            its core features and functionalities:
          </p>
          <br></br>
          <br></br>
          <p>
            With Video Box, sharing videos with friends or on social media
            platforms is a breeze. It integrates social media functionalities,
            allowing for easy sharing and commenting on videos, facilitating a
            community of engaged viewers.
          </p>{" "}
          <br></br>
          <br></br>
          <p>
            VideoBox also provides robust privacy controls, allowing users to
            decide who can view their videos. Whether you are sharing personal
            moments with family or broadcasting to a wider audience, you have
            complete control over your contents privacy.
          </p>
          <br></br>
          <br></br>
          <Link
            className="bg-purple-800 rounded-lg text-white font-bold p-5 w-1/5 flex hover:bg-purple-950 justify-center"
            href="dashboard"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );}
