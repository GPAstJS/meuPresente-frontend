import { IoIosArrowRoundBack } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";

export default function Pagination({
    itemsPerPage,
    itemsPerFetch,
    currentPage,
    setCurrentPage,
}) {
    const paginationNumbers = [];
    const totalPages = Math.ceil(itemsPerFetch / itemsPerPage);

    for (let i = 0; i < totalPages; i++) {
        paginationNumbers.push(i + 1);
    }

    const handlePagination = (pageNumber) => {
        if(pageNumber >= 1) {
            setCurrentPage(pageNumber);
        } else {
            return
        }
    };

    const getDisplayedPages = () => {
        if (totalPages <= 5) {
            return paginationNumbers;
        }

        if (currentPage <= 3) {
            return [...paginationNumbers.slice(0, 4), "...", totalPages];
        } else if (currentPage >= totalPages - 2) {
            return [1, "...", ...paginationNumbers.slice(totalPages - 4)];
        } else {
            return [1, "...", currentPage - 1, currentPage, currentPage + 1, "...", totalPages];
        }
    };

    const displayedPages = getDisplayedPages();

    return (
        <div className="flex flex-row items-center border-[1rem] border-black h-[60rem] justify-center rounded-[40rem] gap-x-[10rem] px-[5rem]">
            <IoIosArrowRoundBack
                onClick={() => setCurrentPage(Math.max(currentPage - 1, 1))}
                className="w-[32rem] h-[32rem] hover:cursor-pointer rounded-full hover:bg-gray-300"
            />
            <div className="flex flex-row items-center justify-center gap-x-[10rem]">
                {displayedPages.map((pageNumber, index) => {
                    return typeof pageNumber === "number" ? (
                        <button
                            key={pageNumber}
                            style={
                                pageNumber === currentPage
                                    ? { color: "white", background: "#3758F9" }
                                    : { color: "black" }
                            }
                            onClick={() => handlePagination(pageNumber)}
                            className="text-base font-roboto w-[32rem] h-[32rem] rounded-full hover:bg-gray-300"
                        >
                            {pageNumber}
                        </button>
                    ) : (
                        <div key={`ellipsis-${index}`} className="text-black text-base">
                            {pageNumber}
                        </div>
                    );
                })}
            </div>
            <IoIosArrowRoundForward
                onClick={() => setCurrentPage(Math.min(currentPage + 1, totalPages))}
                className="w-[32rem] h-[32rem] hover:cursor-pointer rounded-full hover:bg-gray-300"
            />
        </div>
    );
}
