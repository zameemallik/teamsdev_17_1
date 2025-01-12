import React from "react";
import Link from "next/link";
import { Button } from "@mui/material";
import "./sign_in.css";

export default function SignIn() {
  return (
    <div className="signin-container">
      <h1 className="signin-header">Sign In</h1>
      <form className="signin-form">
        {/* メールアドレスInput */}
        <div className="form-group">
          <p className="form-label">Email</p>
          <input type="email" placeholder="Enter your name" className="form-input" />
        </div>
        {/* パスワードInput */}
        <div className="form-group">
          <p className="form-label">Password</p>
          <input type="password" placeholder="Enter your name" className="form-input" />
        </div>
        {/* サインインボタン */}
        <Button type="submit" className="signin-button">
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
