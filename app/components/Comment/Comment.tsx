import Link from "next/link";
import React from "react";
import styles from "./Comment.module.css";
import { BlogComment } from "@/lib/types";

type Props = {
  comment: BlogComment;
};

const Comment = ({ comment }: Props) => {
  const calculateTimeAgo = (updatedTime: Date): string => {
    const now = new Date();
    const diffInMs = now.getTime() - updatedTime.getTime();
    const diffInMinutes = Math.floor(diffInMs / (1000 * 60));
    const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60));

    if (diffInMinutes < 60) {
      return diffInMinutes <= 1 ? "Just now" : `few minutes ago`;
    } else if (diffInHours < 24) {
      return `${diffInHours} hours ago`;
    } else {
      const year = updatedTime.getFullYear();
      const month = String(updatedTime.getMonth() + 1).padStart(2, "0");
      const day = String(updatedTime.getDate()).padStart(2, "0");
      return `${year}/${month}/${day}`;
    }
  };

  const commentTime = calculateTimeAgo(comment.updatedTime);
  if (comment.updatedTime) {
    // ここで60分以内ならfew minutes apo と表示され用にする。
  }
  return (
    <div key={comment.id} className={styles.comment}>
      <Link href={`/user/${comment.userName}`} className={styles.commentUserIcon}>
        <img
          src={comment.userImagePath}
          alt="icon"
          className={styles.userIcon}
          aria-label={`Go to ${comment.userName}'s profile`}
        ></img>
      </Link>
      <div className={styles.commentContent}>
        <p className={styles.commentText}>{comment.text}</p>
        <span className={styles.commentTime}>{commentTime}</span>
      </div>
    </div>
  );
};

export default Comment;
