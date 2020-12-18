import React from 'react';

type Props = {
    currentPage: number,
    setPage: any // TODO fix this
}

function Pagination( {currentPage, setPage}: Props) {
    return(
        <div className="pagination">
            <button onClick={ () => setPage( currentPage <= 1 ? 1 : currentPage - 1)}>
                Previous
            </button>
            <button onClick={ () => setPage( currentPage + 1)} >
                Next
            </button>
        </div>
    )
}

export default Pagination