import ReactPaginate from "react-paginate";
import {FC} from "react";

interface IProps {
    initialPage: number,
    pageCount: number,
    onPageChange: (event: { selected: number }) => void
}

const Paginate: FC<IProps> = ({initialPage, pageCount, onPageChange}) => {
    return (
        <ReactPaginate
            pageCount={pageCount || 1}
            pageRangeDisplayed={3}
            marginPagesDisplayed={1}
            previousLabel="<"
            nextLabel=">"
            breakLabel="..."
            breakClassName="page-item"
            breakLinkClassName="page-link"
            onPageChange={onPageChange}
            initialPage={initialPage - 1}
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            nextClassName="page-item"
            previousLinkClassName="page-link"
            nextLinkClassName="page-link"
            containerClassName="pagination mt-4"
            activeClassName="active"
        />
    );
};

export {
    Paginate
}