"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "./Header.module.css";
import Link from "next/link"; // Linkコンポーネントをインポート
import EditIcon from "@mui/icons-material/Edit";
import { User } from "@/lib/types";

// ダミーデータ
const user: User = {
  id: 0,
  name: "テスト太郎",
  email: "testtarou@gmail.com",
  imagePath: "/testtarou.jpg",
};
//ダミーデータ終了

export const Header = () => {
  // 本来はSessionか何かから、User情報の取得を行う。
  const [signedInUser, setSignedInUser] = useState<User | null>(user);

  // モーダルの開閉状態を管理
  const [isOpen, setIsOpen] = useState(false);

  // モーダルのDOM要素への参照を保持
  const modalRef = useRef<HTMLDivElement | null>(null);

  // モーダル外クリック時にモーダルを閉じる処理
  const handleClickOutside = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  // モーダルが開いている間だけ、クリックイベントを監視してモーダル外クリックを検知
  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <div className={styles.logo}>LOGO</div>
        <nav className={styles.nav}>
          <Link href="/" passHref>
            <button className={`${styles.navButton} ${styles.primary}`}>Home</button>
          </Link>
          <Link href="/post/create" passHref>
            <button className={`${styles.navButton} ${styles.primary}`}>
              <EditIcon sx={{ fontSize: 10, marginRight: 1 }}></EditIcon>
              Create
            </button>
          </Link>
          {!signedInUser && (
            <Link href="/signin" passHref>
              <button className={styles.navButton}>Sign In</button>
            </Link>
          )}
          {signedInUser && (
            <div className={styles.userSection}>
              <button onClick={() => setIsOpen(!isOpen)} className={styles.userIconButton}>
                <img
                  className={styles.userIcon}
                  src={signedInUser.imagePath}
                  alt=""
                  onError={(e) => (e.currentTarget.src = "/default_icon.jpg")}
                />
              </button>
              {isOpen && (
                <div className={styles.modalBox} ref={modalRef}>
                  <p
                    style={{
                      textAlign: "center",
                      fontSize: "14px",
                    }}
                  >
                    {signedInUser?.name}
                  </p>
                  <button
                    // 本来はSignedOutApi呼び出しなどを行う。
                    onClick={() => setSignedInUser(null)}
                    style={{
                      padding: "3px 15px",
                      fontSize: "14px",
                      margin: " 0 auto",
                      backgroundColor: "#FF31318F",
                      border: "none",
                      borderRadius: "50px",
                      cursor: "pointer",
                    }}
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};
