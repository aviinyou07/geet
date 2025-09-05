"use client";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({ totalPages, currentPage, onPageChange }: PaginationProps) {
  if (totalPages <= 1) return null;

  return (
    <div className="flex justify-center mt-4 gap-2">
      {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
        <button
          key={page}
          aria-label={`Go to page ${page}`}
          onClick={() => onPageChange(page)}
          className={`px-3 py-1 rounded border ${
            currentPage === page
              ? "bg-blue-500 text-white border-blue-500"
              : "bg-white text-gray-700 border-gray-300"
          }`}
        >
          {page}
        </button>
      ))}
    </div>
  );
}
