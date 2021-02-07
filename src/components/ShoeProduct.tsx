import {ShoeVariation} from '../interfaces/interfaces';
import Grid from '@material-ui/core/Grid';
import { createStyles, makeStyles, Theme, lighten } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    header: {
        backgroundColor: lighten(theme.palette.primary.light, 0.3),
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: `0px ${theme.spacing(2)}px`,
    },
    shoeItem: {
        backgroundColor: theme.palette.grey[100],
        margin: '.5rem',
        borderRadius: '8px',
        overflow: 'hidden',
    },
    shoeItemPrice: {
        backgroundColor: lighten(theme.palette.primary.light, 0.5),
        fontSize: '1.3rem',
        fontWeight: 'bold',
        padding: '.6rem  1rem',
        borderRadius: '8px',
    },
    shoeItemContent: {
        padding: '1rem',
        display: 'flex',
        justifyContent: 'space-between'
    },
    updated: {
        fontSize: '0.8rem',
    },
    shoeSizesContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        padding: '0 1rem 1rem 1rem',
        margin: '0 -.5rem',
    },
    shoeSizes: {
        width: '50px',
        height: '40px',
        borderRadius: '8px',
        border: `1px solid ${theme.palette.grey[200]}`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '.3rem',
        backgroundColor: '#FFF',
    },
    shoesContainer: {
        [theme.breakpoints.down('sm')]: {
          padding: '1rem',
        },
    },
  }),
);

interface ShoesProps {
    shoes: ShoeVariation[];
}

const ShoeProductItem: React.FC<ShoesProps> = ({shoes} ) => {

    const classes = useStyles();

    const shoesData = shoes.map( (element: any, index: number) => {
        const date = new Date(element.updatedAt);
        const sizes = element.size.map( (size : string, index: number) => {
            return (
                <span key={index} className={classes.shoeSizes}>{size}</span>
            )
        })
        return(
            <Grid item xs={12} sm={6} md={6}  key={index}>
                <div className={classes.shoeItem}>
                    <header className={classes.header}>
                        <h2>{element.model}</h2>
                        <span className={classes.shoeItemPrice}>{element.price}€</span>
                    </header>
                    <div className={classes.shoeItemContent}>
                        <span>{element.shop} | <a title={'Source link to ' + element.model} rel="noreferrer" href={element.source} target="_blank">Source</a></span>
                        <span className={classes.updated}>Updated: {date.toLocaleString()}</span>
                    </div>
                    <div className={classes.shoeSizesContainer}>
                        {sizes}
                    </div>
                </div>
            </Grid>
        )
    })
    return(
        <Grid container component="article" className={classes.shoesContainer}>
            {shoesData}
        </Grid>
    )
}

export default ShoeProductItem;
