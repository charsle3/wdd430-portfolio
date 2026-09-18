'use client';

import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

export default function Pagination({ totalPages }: { totalPages: number }) {
	const pathname = usePathname();
	const searchParams = useSearchParams();
	const currentPage = Number(searchParams.get('page')) || 1;

	const createPageURL = (pageNumber: number) => {
		const params = new URLSearchParams(searchParams);
		params.set('page', pageNumber.toString());
		return `${pathname}?${params.toString()}`;
	};

	const isFirstPage = currentPage <= 1;
	const isLastPage = currentPage >= totalPages;

	return (
		<nav aria-label="Pagination">
			<Link className="pr-4"
				href={isFirstPage ? "#" : createPageURL(currentPage - 1)}
				aria-disabled={isFirstPage}
				tabIndex={isFirstPage ? -1 : undefined}
			>
				Previous
			</Link>
			<Link
				href={isLastPage ? "#" : createPageURL(currentPage + 1)}
				aria-disabled={isLastPage}
				tabIndex={isLastPage ? -1 : undefined}
			>
				Next
			</Link>
		</nav>
	);
}
