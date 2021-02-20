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
    smallText: {
      fontSize: '1.3rem',
      letterSpacing: '0.05rem',
      color: '#FFF',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '60px',
      height: '60px',
      position: 'relative',
      top: 0,
      backgroundColor: theme.palette.primary.main,
      borderRadius: '50%',
    },
    link: {
        padding: '0  1rem 0 0',
        display: 'inline-block',
        fontWeight: 'bold',
    },
  }),
);

const Header = () => { 
    const classes = useStyles();
    return(
      <Grid container className={classes.root} spacing={4} component="header">
          <Grid item xs={12} >
            <Typography variant="h1" component="h1" gutterBottom >
                Climbing shoes checker <span className={classes.smallText} >beta</span>
            </Typography>
            <Typography variant="h5" component="h2" gutterBottom>
                Check your favorite climbing shoes now online for availability, sizes and price. Bare in mind that the prices will vary depending on the shipping costs and possible discounts.<br/><br/>
            </Typography>
            <Typography variant="h5" component="p" gutterBottom>
                Currently supported shops: &nbsp;
                <Link href="www.epictv.com" target="_blank" rel="noopener" className={classes.link}>EpicTV</Link>
                <Link href="www.epictv.com" target="_blank" rel="noopener" className={classes.link}>Bergefreunde</Link>
                <Link href="www.epictv.com" target="_blank" rel="noopener" className={classes.link} >Trekkinn</Link>
            </Typography>
          </Grid>
      </Grid>
    )
}

export default Header
