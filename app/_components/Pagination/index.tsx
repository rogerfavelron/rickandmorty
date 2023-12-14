"use client";
import React from "react";
import { useRouter, usePathname } from "next/navigation";
import ReactPaginate from "react-paginate";
import styles from "./pagination.module.scss";

import type { PaginationType } from "./types";

export default function Pagination({ pageCount }: PaginationType) {
  const router = useRouter();
  const pathname = usePathname();

  const handlePageClick = (event: { selected: number }) => {
    const newPage = event.selected + 1;
    router.push(`${pathname}?page=${newPage}`);
  };

  return (
    <div className={styles.pagination_container}>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        marginPagesDisplayed={0}
        pageRangeDisplayed={2}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        activeClassName={styles.active}
        disabledClassName={styles.disabled}
        containerClassName={styles.pagination}
      />
    </div>
  );
}
