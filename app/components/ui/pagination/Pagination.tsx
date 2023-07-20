import React, { useState } from "react";
import "./style.scss";
import ReactPaginate from "react-paginate";

const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

const Pagination = () => {
  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + 3;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / 3);

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * 3) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };
  return (
    <div>
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        className="pagintion"
        pageClassName="pagintion__page"
        activeClassName="pagintion__page_active"
        previousClassName="pagintion__previous"
        nextClassName="pagintion__next"
        disabledClassName={"pagintion__disabled"}
        breakClassName="pagintion__break"
        onPageChange={handlePageClick}
        pageRangeDisplayed={2}
        marginPagesDisplayed={2}
        pageCount={items.length}
        previousLabel="< "
        renderOnZeroPageCount={null}
      />
    </div>
  );
};

export default Pagination;
