"use client"
import React from 'react'
import Pagenation from "./components/Pagenation/Pagenation"

import BlogHome from "./components/BlogHome";

export default function Home() {
  return (
  <div>
  <BlogHome />;
  {/* postNumberに任意の数字が入力されるようにする */}
  <Pagenation postNumber={97}/>
  </div>
  )
}
