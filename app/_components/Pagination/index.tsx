"use client";

import React from "react";
import ReactPaginate from "react-paginate";
import { useQueryState } from "next-usequerystate";
import styles from "./pagination.module.scss";

import type { PaginationType } from "./types";

export default function Pagination({ pageCount, initialPage }: PaginationType) {
  const [page, setPage] = useQueryState("page", {
    shallow: false,
    parse: Number,
  });

  const currentPage = initialPage || page || 1;

  const handlePageClick = (event: { selected: number }) => {
    const newPage = event.selected + 1;
    setPage(newPage);
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
        forcePage={currentPage - 1}
      />
    </div>
  );
}
