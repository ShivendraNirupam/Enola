"use client";
import { Button } from "@/components/ui/button";
import { IconBrandDiscord, IconBrandGoogle } from "@tabler/icons-react";
import { EyeClosedIcon, EyeIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Signup() {
  const [viewPass, setViewPass] = useState(false);
  return (
    <div className="h-dvh w-full flex items-center justify-center">
      <div className="mt-12 border-t-2 border-b-2 p-4 border-white rounded-2xl w-[80%] lg:w-[25%] flex flex-col items-center justify-center gap-2">
        {/* header */}
        <div className="flex flex-col justify-center items-center">
          <h1 className="font-bold special_font text-3xl text-yellow-300">
            <span>ChattY</span>
          </h1>
          <p className="text-xl italic">Let's get started</p>
        </div>

        {/* Form */}
        <form className="w-full">
          <div className="flex flex-col gap-1 justify-center items-start ">
            <label htmlFor="username" className="p-2 text-xl font-bold">
              Username
            </label>
            <input
              type="text"
              id="username"
              placeholder="Enter your email"
              className="h-10 w-full border-2 border-white rounded-xl px-2"
            />
          </div>
          <div className="flex flex-col gap-1 justify-center items-start ">
            <label htmlFor="email" className="p-2 text-xl font-bold">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="h-10 w-full border-2 border-white rounded-xl px-2"
            />
          </div>

          <div className="flex flex-col gap-1 justify-center items-start ">
            <label htmlFor="password" className="p-2 text-xl font-bold">
              Password
            </label>
            <input
              type={viewPass ? "text" : "password"}
              id="password"
              placeholder="Enter your Password"
              className="h-10 w-full border-2 border-white rounded-xl px-2"
            />
            <button
              type="button"
              onClick={() => {
                setViewPass((viewPass) => !viewPass);
              }}
              className="absolute translate-x-55 lg:translate-x-75 translate-y-6"
            >
              {viewPass ? <EyeIcon /> : <EyeClosedIcon />}
            </button>
          </div>

          <Button className="w-full mt-6 text-xl">Sign In</Button>
        </form>
        <p>
          Already have account!!{" "}
          <Link href={"/signin"} className="underline">
            Sign In
          </Link>
        </p>

        {/* line */}
        <div className="h-[0.5px] w-full m-2 bg-white/50"></div>

        {/* Oauth Service */}
        <div className="w-full flex flex-col gap-4">
          <Button variant={"outline"} className="w-full">
            <IconBrandGoogle className="size-6" />
            <span>Google</span>
          </Button>
          <Button variant={"outline"} className="w-full">
            <IconBrandDiscord className="size-6" />
            <span>Discord</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
