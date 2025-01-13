"use client";
import React from "react";
import Pagenation from "./components/Pagenation/Pagenation";

import BlogHome from "./components/BlogHome";

export default function Home() {
  return (
    <div>
      <BlogHome />
      <Pagenation postNumber={97} />;{/* postNumberに任意の数字が入力されるようにする */}
    </div>
  );
}
