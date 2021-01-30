import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
        maxWidth: '1280px',
        margin: '4rem auto',
        width: '100%',
        padding: '2rem',
        [theme.breakpoints.down('sm')]: {
          margin: '0',
          padding: '1rem'
        },
    },
    link: {
        padding: '0 1rem',
        display: 'inline-block',
        fontWeight: 'bold',
    }
  }),
);

const Header = () => { 
    const classes = useStyles();
    return(
      <Grid container className={classes.root} spacing={4} component="header">
          <Grid item xs={12} >
            <Typography variant="h1" component="h1" gutterBottom >
                Climbing shoes checker
            </Typography>
            <Typography variant="h5" component="p" gutterBottom>
                Check your favorite climbing shoes now online for availaebility, sizes and price. Bare in mind that the prices will vary depending on the shipping costs and possible discounts.<br/><br/>
            </Typography>
            <Typography variant="h5" component="h2" gutterBottom>
                Currently supported shops:
                <Link href="www.epictv.com" target="_blank" rel="noopener" className={classes.link}>EpicTV</Link>
                <Link href="www.epictv.com" target="_blank" rel="noopener" className={classes.link}>Bergefreunde</Link>
                <Link href="www.epictv.com" target="_blank" rel="noopener" className={classes.link} >Trekkinn</Link>
            </Typography>
          </Grid>
      </Grid>
    )
}

export default Header
