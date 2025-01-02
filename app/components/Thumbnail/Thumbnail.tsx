import React from "react";
import styles from "./Thumbnail.module.css";
import Link from "@/node_modules/next/link";
import { ThumbnailPost } from "@/lib/types";

type Props = {
  post: ThumbnailPost;
};

const Thumbnail: React.FC<Props> = ({ post }) => {
  const truncatedTitle = post.title.length > 15 ? post.title.slice(0, 15) + "..." : post.title;
  return (
    <Link href={`/posts/${post.id}`} key={post.id} className={styles.postItem}>
      <img src={post.imagePath} alt={post.title} width={250} height={150} />
      <h2>{truncatedTitle}</h2>
    </Link>
  );
};

export default Thumbnail;
