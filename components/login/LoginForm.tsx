"use client";

import { useStateContext } from "@/app/context/context";
import { useRouter } from "next/navigation";
import { useState } from "react";

const LoginForm = () => {
  const [input, setInput] = useState("");
  const [error, setError] = useState<string | null>(null);
  const { state } = useStateContext();
  const router = useRouter();

  const handleSubmit = () => {
    if (state.user.find((i) => i.username === input)) {
      router.push("/albums");
    } else {
      setError("Username Not Found");
    }
  };

  return (
    <div className="flex justify-center items-center grow">
      <div className="flex flex-col gap-2">
        <input
          onChange={(e) => setInput(e.target.value)}
          className="w-[700px] md:h-[50px] px-2 text-primary"
          type="text"
          placeholder="User ID"
        />
        <button
          onClick={handleSubmit}
          className="bg-white text-primary md:w-[700px] md:h-[50px]"
        >
          Login
        </button>
        {error && <p className="text-center text-red-600">{error}</p>}
        <p className="text-center">Don’t have an account?</p>
        <div className="flex justify-between">
          <button className="bg-white text-primary md:w-[340px] md:h-[50px]">
            Register
          </button>
          <button className="bg-white text-primary md:w-[340px] md:h-[50px]">
            Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
