
"use client";

import React from "react";

import Pagenation from "@/app/components/Pagenation/Pagenation";
import BlogHome from "@/app/components/BlogHome/BlogHome";

export default function Home() {
  return(
  <div>
  <BlogHome />
  <Pagenation postNumber={97}/>
  </div>
  )

}
