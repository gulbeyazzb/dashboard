"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { API, renewAPI } from "@/api/api";
import { SpinnerCircular } from "spinners-react";

const LoginPage: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [err, setErr] = useState<string>();
  const router = useRouter();

  const submitHandle = () => {
    const payload = {
      username: username,
      password: password,
    };

    setLoading(true);
    API.post("login", payload)
      .then((res) => {
        setLoading(false);
        renewAPI(res.data.jwt);
        router.push("/Dashboard");
      })
      .catch(() => {
        setErr("Kullanıcı adı veya şifre eksik veya hatalı!");
      });
  };

  const keyDownHandle = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.code === "Enter") submitHandle();
  };

  useEffect(() => {
    setLoading(true);
  }, []);

  return (
    <div className="flex flex-col items-center p-20" onKeyDown={keyDownHandle}>
      {!loading ? (
        <div className="flex justify-center py-10">
          <SpinnerCircular color="logo_orange_color" secondaryColor="gray" />;
        </div>
      ) : (
        <>
          <div className="flex gap-2">
            <input
              className="input-style"
              placeholder="username"
              onChange={(e) => {
                setErr("");
                setUsername(e.target.value);
              }}
              value={username}
            ></input>
            <input
              className="input-style"
              placeholder="password"
              onChange={(e) => {
                setErr("");
                setPassword(e.target.value);
              }}
              value={password}
            ></input>
            <button className="login-btn" onClick={submitHandle}>
              Login
            </button>
          </div>
          {err && <h2 className="text-red-700">{err}</h2>}
        </>
      )}
    </div>
  );
};

export default LoginPage;
