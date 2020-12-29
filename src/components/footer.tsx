import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    footer: {
      padding: '3rem 0',
      marginTop: '4rem',
      borderTop: `2px solid ${theme.palette.grey[200]}`,
      maxWidth: theme.breakpoints.values.lg,
      margin: '2rem auto',
    },
    footerText: {
      textAlign: 'center',
    }
  }),
);


const Footer = () => {
    const classes = useStyles();
    return(
      <footer className={classes.footer}>
        <Typography variant="h5" component="p" gutterBottom className={classes.footerText}>
          We do not use <strong>Cookies</strong> or other <strong>Privacy</strong> related tracking methods
        </Typography>
      </footer>

    )
}

export default Footer;