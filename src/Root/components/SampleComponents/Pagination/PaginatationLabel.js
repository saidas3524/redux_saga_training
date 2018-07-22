import React from "react";

const PaginatationLabel = ({ currentPage, currentPageSize, length, title }) => {
  if(length<=0) return null;
  return (
    <span className="pagination-label">
      showing{" "}
      <strong>
        {(currentPage - 1) * currentPageSize + 1}-{currentPage *
          currentPageSize >
        length
          ? length
          : currentPage * currentPageSize}
      </strong>{" "}
      of{" "}
      <strong>
        {length} {title}
      </strong>
    </span>
  );
};

export default PaginatationLabel;
