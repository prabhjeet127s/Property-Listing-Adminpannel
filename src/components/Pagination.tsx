import React from "react";
import { MdNavigateNext } from "react-icons/md";
import { GrPrevious } from "react-icons/gr";


interface PaginationProps {
  totalCount: number;
  limit: number;
  offset: number;

}


const Pagination= ({ totalCount,limit,offset,setOffset}:PaginationProps) => {
  const totalPages = Math.ceil(totalCount / limit);
  const currentPage = Math.floor(offset / limit) + 1;

  const handleNext = () => {
    if (currentPage < totalPages) {
      setOffset(offset + limit);
    
    }
  };
  const handlePrev = () => {
    if (currentPage > 1) {
      setOffset(offset - limit);
    
    }
  };
console.log(totalCount +" ttoal")
console.log(currentPage+" current")

  return (
    <div className="flex justify-end items-center gap-3 mt-6">
        <h3 className="text-xl p-3 "  >
           Showing  {currentPage} Out Of { totalPages} Pages
        </h3>
      <button
        onClick={handlePrev}
        disabled={currentPage === 1}
        className="px-3 py-1 border rounded disabled:opacity-50"
      >
        <GrPrevious />
      </button>
      <div className="font-semibold text-xl -underline" >{currentPage}</div>
      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className="px-3 py-1 border rounded disabled:opacity-50"
      >
     <MdNavigateNext />
      </button>
    </div>
  );
};

export default Pagination;
