"use client";
import { API, renewAPI } from "../api/api";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [err, setErr] = useState<string>();
  const router = useRouter();

  const submitHandle = () => {
    const payload = {
      username: username,
      password: password,
    };

    API.post("login", payload)
      .then((res) => {
        renewAPI(res.data.jwt);
        router.push("/DashboardPage");
      })

      .catch(() => {
        setErr("Kullanıcı adı veya şifre eksik veya hatalı!");
      });
  };

  return (
    <div className=" flex flex-col items-center p-20">
      <div className="flex gap-2">
        <input
          className="input-style"
          placeholder="username"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        ></input>
        <input
          className="input-style"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        ></input>
        <button
          className="border-2 border-gray-500 bg-gray-300 font-bold rounded-md py-1 px-2 text-center"
          onClick={submitHandle}
        >
          Login
        </button>
      </div>
      <div>
        <h2 className="text-red-700">{err}</h2>
      </div>
    </div>
  );
};

export default LoginPage;
