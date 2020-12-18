import Grid from '@material-ui/core/Grid';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
        maxWidth: '1280px',
        margin: '0 auto',
        width: '100%',
        padding: '2rem',
    },
  }),
);

const Header = () => { 
    const classes = useStyles();
    return(
      <Grid container className={classes.root} spacing={4} component="header">
          <Grid item xs={8} >
            <h1>Climbing shoes scraper</h1>
            <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Sed posuere interdum sem. Quisque ligula eros ullamcorper quis, lacinia quis facilisis sed sapien. Mauris varius diam vitae arcu. Sed arcu lectus auctor vitae, consectetuer et venenatis eget velit. Sed augue orci, lacinia eu tincidunt et eleifend nec lacus. 
            </p>
          </Grid>
          <Grid item xs={4}>
            <h2>Supported eCommerce shops</h2>
          </Grid>
      </Grid>
    )
}

export default Header