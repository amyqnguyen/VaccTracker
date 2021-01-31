import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

// const HomePage = () => (
//     <>
//         <header>
//           <h1>Covid-19 Vaccine Finder</h1>
//         </header>
//         <a href="/signuppage">Click here to get started! (placeholder)</a>
//     </>

// );

// edited from https://github.com/mui-org/material-ui/blob/master/docs/src/pages/getting-started/templates/album/Album.js

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
          VaccTracker
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
    alignItems: 'center'
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
    alignItems: 'center'

  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const cards = [1];

export default function Album() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <CheckCircleIcon className={classes.icon} />
          <Typography variant="h6" color="inherit" noWrap>
              VaccTracker
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="md">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              VaccTracker
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Looking for a vaccine? Signup here to be notified when it's your turn.
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                    <Link href="/loginpage" variant="body2">
                    <Button variant="contained" color="primary">                          
                    Log in
                    </Button>
                    </Link>
                </Grid>
                <Grid item>
                <Link href="/signuppage" variant="body2">
                  <Button variant="contained" color="primary">
                    Sign Up
                  </Button>
                  </Link>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent} >
                    <Typography gutterBottom variant="h5" component="h2">
                      Vaccination Plan
                    </Typography>
                    <Typography>
                      See BC's vaccination plan here.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <a href="https://www2.gov.bc.ca/gov/content/safety/emergency-preparedness-response-recovery/covid-19-provincial-support/vaccines#phases">
                    <Button size="small" color="primary">
                      View
                    </Button>
                    </a>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      {/* <footer className={classes.footer}> */}
        {/* <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Something here to give the footer a purpose!
        </Typography> */}
        <Copyright />
      {/* </footer> */}
      {/* End footer */}
    </React.Fragment>
  );
}

// export default HomePage;