import Link from "next/link";

interface Props {
  totalPages: number;
  currentPage?: number;
}

const PostPagination = ({ totalPages, currentPage = 1 }: Props) => {

  const decreasePage = () => {
    if (currentPage > 0) {
      currentPage--;
    }
  };

  const increasePage = () => {
    if (currentPage > totalPages) {
      currentPage++;
    }
  };

  return (
    <div className="flex gap-4 justify-center">
        <Link
          href={`/page/${currentPage - 1}`}
          className={`border-solid border-2 border-black rounded p-1
          ${
            currentPage === 1
              ? "text-gray-600 bg-slate-300 pointer-events-none"
              : "text-blue-700"
          }`}
        >
          Prev
        </Link>
      {Array.from({ length: totalPages }).map((_, index) => (
        <Link
          href={`/page/${index + 1}`}
          className={`border-solid border-2 border-black rounded p-1 w-10 flex justify-center 
            ${
              currentPage === index + 1
                ? "text-gray-600 bg-slate-300 pointer-events-none"
                : "text-blue-700"
            }`}
        >
          {index + 1}
        </Link>
      ))}
      <Link
        href={`/page/${currentPage + 1}`}
        className={`border-solid border-2 border-black rounded p-1 
          ${
            currentPage === totalPages
              ? "text-gray-600 bg-slate-300 pointer-events-none"
              : "text-blue-700"
          }`}
      >
        Next
      </Link>
    </div>
  );
};

export default PostPagination;
