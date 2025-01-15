"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@mui/material";
// import{sapabase}from "@/"
import "./sign_in.css";
// import { useRouter } from "next/navigation";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  // const router=useRouter()

  // メールアドレスの入力を確認する
  const inputEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    // メールアドレスの形式を確認する
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    if (value === "") {
      setEmailError("メールアドレスを入力してください");
    } else if (!emailRegex.test(value)) {
      setEmailError("正しいメールアドレスを入力してください");
    } else {
      setEmailError("");
    }
  };

  // パスワードの入力確認
  const inputPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(value);

    // パスワードの入力形式確認
    if (value === "") {
      setPasswordError("パスワードを入力してください");
    } else if (value.length < 8) {
      setPasswordError("パスワードは8文字以上で入力してください");
    } else {
      setPasswordError("");
    }
  };

  //  サインインの処理
  // const handleSignIn = async (e: React.FormEvent) => {
  //   e.preventDefault();

  //   try{
  //     const{data,error:signInError}=await supabase.auth.signInWithPassword({
  //       email,
  //       password,
  //     })

  //     if(signInError){
  //       throw new Error(signInError.message);
  //     }

  //     if(data.user){
  //       console.log("サインイン成功",data.user);
  //       router.push("/app");
  //     }else {
  //       console.warn("サインインデータが取得できませんでした");
  //       alert("サインインに失敗しました。もう一度お試しください。");
  //     }
  //     }catch(error){
  //       if(error instanceof Error){
  //         console.error("サインインエラー:", error.message);
  //     alert(`サインインエラー: ${error.message}`);
  //       }else{
  //         console.error("予期しないエラー:", error);
  //     alert("予期しないエラーが発生しました");
  //       }
  //     }
  //   }
  // };

  return (
    <div className="signin-container">
      <h1 className="signin-header">Sign In</h1>
      <form className="signin-form">
        {/* onSubmit={handleSignIn}> */}
        {/* メールアドレスInput */}
        <div className="form-group">
          <p className="form-label">Email</p>
          <input
            type="email"
            placeholder="Enter your email"
            className="form-input"
            value={email}
            onChange={inputEmail}
          />
        </div>
        {/* パスワードInput */}
        <div className="form-group">
          <p className="form-label">Password</p>
          <input
            type="password"
            placeholder="Enter your password"
            className="form-input"
            value={password}
            onChange={inputPassword}
          />
        </div>
        {/* サインインボタン */}
        <Button type="submit" className="signin-button" disabled={!!emailError || !!passwordError}>
          Sign In
        </Button>
      </form>
      {/* 未登録の場合、サインアップへ */}
      <div className="signup-container">
        <span className="signup-text">Don&apos;t have an account?</span>
        <Link href="/app/components/SignUp/SignUp.tsx" className="signup-link">
          Sign Up
        </Link>
      </div>
    </div>
  );
}
