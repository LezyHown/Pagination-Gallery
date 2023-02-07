import React from "react";
import "./pegination.scss";

export default function Pegination({countElems, currentPage, setPage, COUNT_PER_PAGE}) 
{
  let numbers = [],
    maxPages =
      Math.floor(countElems / COUNT_PER_PAGE) +
      Number(countElems % COUNT_PER_PAGE !== 0),
    membersVisible = 5;

  for (
    let i = currentPage;
    i < Math.min(maxPages + 1, currentPage + membersVisible);
    i++
  ) {
    numbers.push(
      <div className={`page-num ${ currentPage === i && 'active'}`} onClick={() => setPage(i)}>
        {i}
      </div>
    );
  }

  return (
    <div className="pegination-container">
      <div className="pegination">
        <div
          id="prev-page"
          onClick={() => currentPage > 1 && setPage(currentPage - 1)}
        ></div>
        {/* First member */}
        {(numbers.length === 1 && maxPages > 1) && (
          <div className={`page-num`} onClick={() => setPage(1)}>
            1
          </div>
        )}

        {numbers}

        {/* Last member */}
        {numbers.length === membersVisible &&
          maxPages - currentPage > currentPage && (
            <div className="page-num" onClick={() => setPage(maxPages)}>
              {maxPages}
            </div>
          )}
        <div
          id="next-page"
          onClick={() => currentPage < maxPages && setPage(currentPage + 1)}
        ></div>
      </div>
    </div>
  );
}
