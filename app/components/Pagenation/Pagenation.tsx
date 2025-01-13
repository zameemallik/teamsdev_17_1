import React, { useState } from "react";
import style from "./Pagenation.module.css";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";

type PagenationProps = {
  postNumber: number; // postNumber の型を明示
};

const Pagenation: React.FC<PagenationProps> = ({ postNumber }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const maxVisiblePages = 10; // 表示するページ番号の最大数
  const totalPages = Math.ceil(postNumber / 12);
  const startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
  const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      // console.log("Page changed to:", page);
      setCurrentPage(page);
    }
  };

  return (
    <div className={style.pagenation}>
      {/* 前へボタン */}
      <button
        className={style.previousButton}
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <AiOutlineArrowLeft className={style.arrowIcon} />
        <span className={style.spanStyle}></span>
        Previous Page
      </button>

      {/* ページ番号ボタン */}
      <div className={style.buttonsContainer}>
        {Array.from({ length: endPage - startPage + 1 }, (_, index) => {
          const page = startPage + index;
          return (
            <button
              className={page === currentPage ? style.currentButton : style.pageButton}
              key={page}
              onClick={() => handlePageChange(page)}
              disabled={currentPage === page}
            >
              {page}
            </button>
          );
        })}
      </div>

      {/* 次へボタン */}
      <button
        className={style.nextButton}
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next Page
        <span className={style.spanStyle}></span>
        <AiOutlineArrowRight className={style.arrowIcon} />
      </button>
    </div>
  );
};

export default Pagenation;
