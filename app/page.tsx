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
    content: "ブログ内容の概要...",
    image: "https://via.placeholder.com/150",
    category: "旅行",
    author: "山田 一郎",
    postedAt: "2024-12-03 18:45",
  },
];

export default function Home() {
  return (
    <>
      <div>
        <input type="text" placeholder="検索キーワードを入力" className="search-input" />
        <button>検索</button>
      </div>

      <main>
        {blogs.map((blog) => (
          <article key={blog.id}>
            <img src={blog.image} alt={blog.title} />
            <h2>{blog.title}</h2>
            <p>{blog.category}</p>
            <p>{blog.author}</p>
            <p>{blog.postedAt}</p>
            <p>{blog.content}</p>
          </article>
        ))}
      </main>
    </>
  );
}
