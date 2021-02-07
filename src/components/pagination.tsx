import React from 'react';
import Pagination from '@material-ui/lab/Pagination';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles( (theme: Theme) => 
    createStyles({
       paginationRoot: {
           justifyContent: 'center',
       },
       paginationContainer: {
           marginTop: '2rem',
       } 
    })
);


type Props = {
    currentPage: number,
    setPage: any, // TODO fix this
    totalPages: number
}

function PagePagination( {currentPage, setPage, totalPages}: Props) {
    const classes = useStyles()
    return(
        <div className={classes.paginationContainer}>
            <Pagination count={totalPages} classes={{ ul: classes.paginationRoot}} color="primary" size="large" page={currentPage} onChange={(event: React.ChangeEvent<unknown>, value: number) => setPage(value)} />
        </div>
    )
}

export default PagePagination