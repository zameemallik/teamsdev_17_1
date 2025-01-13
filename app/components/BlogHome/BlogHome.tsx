import "./BlogHome.css";
import Link from "next/link";
import SearchIcon from "@mui/icons-material/Search";
import React from 'react'


const blogs = [
  {
    id: 1,
    title: "ブログタイトル 1",
    content: "ブログ内容の概要...",
    image: "https://via.placeholder.com/150",
    category: "技術",
    author: "田中 太郎",
    postedAt: "2024-12-01 10:30",
  },
  {
    id: 2,
    title: "ブログタイトル 2",
    content: "ブログ内容の概要...",
    image: "https://via.placeholder.com/150",
    category: "生活",
    author: "佐藤 花子",
    postedAt: "2024-12-02 14:15",
  },
  {
    id: 3,
    title: "ブログタイトル 3",
    content:
      "ブログ内容の概要........................................................................................................................",
    image: "https://via.placeholder.com/150",
    category: "旅行",
    author: "山田 一郎",
    postedAt: "2024-12-03 18:45",
  },
  {
    id: 4,
    title: "ブログタイトル 4",
    content: "ブログ内容の概要...",
    image: "https://via.placeholder.com/150",
    category: "旅行",
    author: "山田 一郎",
    postedAt: "2024-12-03 18:45",
  },
  {
    id: 5,
    title: "ブログタイトル 5",
    content: "ブログ内容の概要...",
    image: "https://via.placeholder.com/150",
    category: "旅行",
    author: "山田 一郎",
    postedAt: "2024-12-03 18:45",
  },
  {
    id: 6,
    title: "ブログタイトル 6",
    content:
      "ブログ内容の概要.............................................................................................................",
    image: "https://via.placeholder.com/150",
    category: "旅行",
    author: "山田 一郎",
    postedAt: "2024-12-03 18:45",
  },
  {
    id: 7,
    title: "ブログタイトル 7",
    content: "ブログ内容の概要...",
    image: "https://via.placeholder.com/150",
    category: "旅行",
    author: "山田 一郎",
    postedAt: "2024-12-03 18:45",
  },
  {
    id: 8,
    title: "ブログタイトル 8",
    content: "ブログ内容の概要.............................",
    image: "https://via.placeholder.com/150",
    category: "旅行",
    author: "山田 一郎",
    postedAt: "2024-12-03 18:45",
  },
  {
    id: 9,
    title: "ブログタイトル 9",
    content: "ブログ内容の概要...",
    image: "https://via.placeholder.com/150",
    category: "旅行",
    author: "山田 一郎",
    postedAt: "2024-12-03 18:45",
  },
  {
    id: 10,
    title: "ブログタイトル 9",
    content: "ブログ内容の概要...",
    image: "https://via.placeholder.com/150",
    category: "旅行",
    author: "山田 一郎",
    postedAt: "2024-12-03 18:45",
  },
  {
    id: 11,
    title: "ブログタイトル 9",
    content: "ブログ内容の概要...",
    image: "https://via.placeholder.com/150",
    category: "旅行",
    author: "山田 一郎",
    postedAt: "2024-12-03 18:45",
  },
  {
    id: 12,
    title: "ブログタイトル 9",
    content: "ブログ内容の概要...",
    image: "https://via.placeholder.com/150",
    category: "旅行",
    author: "山田 一郎",
    postedAt: "2024-12-03 18:45",
  },
  {
    id: 13,
    title: "ブログタイトル 9",
    content: "ブログ内容の概要...",
    image: "https://via.placeholder.com/150",
    category: "旅行",
    author: "山田 一郎",
    postedAt: "2024-12-03 18:45",
  },
  {
    id: 14,
    title: "ブログタイトル 9",
    content: "ブログ内容の概要...",
    image: "https://via.placeholder.com/150",
    category: "旅行",
    author: "山田 一郎",
    postedAt: "2024-12-03 18:45",
  },
  {
    id: 15,
    title: "ブログタイトル 9",
    content: "ブログ内容の概要...",
    image: "https://via.placeholder.com/150",
    category: "旅行",
    author: "山田 一郎",
    postedAt: "2024-12-03 18:45",
  },
  {
    id: 16,
    title: "ブログタイトル 9",
    content: "ブログ内容の概要...",
    image: "https://via.placeholder.com/150",
    category: "旅行",
    author: "山田 一郎",
    postedAt: "2024-12-03 18:45",
  },
  {
    id: 17,
    title: "ブログタイトル 9",
    content: "ブログ内容の概要...",
    image: "https://via.placeholder.com/150",
    category: "旅行",
    author: "山田 一郎",
    postedAt: "2024-12-03 18:45",
  },
  {
    id: 18,
    title: "ブログタイトル 9",
    content: "ブログ内容の概要...",
    image: "https://via.placeholder.com/150",
    category: "旅行",
    author: "山田 一郎",
    postedAt: "2024-12-03 18:45",
  },
  {
    id: 19,
    title: "ブログタイトル 9",
    content: "ブログ内容の概要...",
    image: "https://via.placeholder.com/150",
    category: "旅行",
    author: "山田 一郎",
    postedAt: "2024-12-03 18:45",
  },
  {
    id: 20,
    title: "ブログタイトル 9",
    content: "ブログ内容の概要...",
    image: "https://via.placeholder.com/150",
    category: "旅行",
    author: "山田 一郎",
    postedAt: "2024-12-03 18:45",
  },
  {
    id: 21,
    title: "ブログタイトル 9",
    content: "ブログ内容の概要...",
    image: "https://via.placeholder.com/150",
    category: "旅行",
    author: "山田 一郎",
    postedAt: "2024-12-03 18:45",
  },
];



const BlogHome =()=> {
  return (
    <>
      <div className="search-bar">
        <input type="text" placeholder="Search Blog Post" className="search-text" />
        <SearchIcon className="search-button">検索</SearchIcon>
      </div>

      <main className="blog-list">
        {blogs.map((blog) => (
          // ブログ記事クリック時に該当ページに遷移
          <Link key={blog.id} href={`/blog/${blog.id}`} passHref>
            <article className="blog-card">
              <img src={blog.image} alt={blog.title} className="blog-image" />

              <div className="blog-header">
                <h2 className="blog-title">{blog.title}</h2>
                <span className="blog-category">{blog.category}</span>
              </div>

              <div className="blog-meta">
                <p className="blog-author">{blog.author}</p>
                <p className="blog-posted-at">{blog.postedAt}</p>
              </div>

              <p className="blog-content">{blog.content}</p>
            </article>
          </Link>
        ))}
      </main>
    </>
  );
}
export default BlogHome
