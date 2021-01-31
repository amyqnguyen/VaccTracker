import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import { useHistory } from 'react-router-dom';
import { apiAddUser } from '../api/apiRequest';


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="">
        VaccTracker
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));


export default function SignUp() {
  const classes = useStyles();

  const [role, setRole] = React.useState<'patient'|'clinic'>('patient');
  const [lastName, setLastName] = React.useState('');
  const [firstName, setFirstName] = React.useState('');
  const [userEmail, setUserEmail] = React.useState('Test');

  const handleChange = (event : any) => {
    setRole(event.target.value);
  };

  const history = useHistory();

  const routeChange = async (event: any) => {
    let path = '';
    console.log(role);
    console.log(lastName);
    console.log(firstName);
    console.log(userEmail);
    addUser();
    if(role === 'patient') {
      path = '/userhomepage';
      history.push(path);
    } else {
      path = '/adminhomepage';
      history.push(path);
    }
    
  }

  const inputLastName = (event: any) => {
    setLastName(event.target.value);
  }

  const inputFirstName = (event: any) => {
    setFirstName(event.target.value);
  }

  const inputEmail = (event: any) => {
    setUserEmail(event.target.value);
  }
  
  const addUser = () => {
    apiAddUser({ email: userEmail, name: `${firstName} ${lastName}`, role })
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                value={firstName}
                onChange={inputFirstName}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                value={lastName}
                onChange={inputLastName}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={userEmail}
                onChange={inputEmail}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="postalcode"
                label="Postal code"
                type="postalcode"
                id="postalcode"
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12}>
                <RadioGroup row aria-label="position" name="role" defaultValue="patient" value={role} onChange={handleChange}>
                  <FormControlLabel value="patient" control={<Radio color="primary" />} label="Patient" />
                  <FormControlLabel value="clinic" control={<Radio color="primary" />} label="Clinic" />
                </RadioGroup>
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive covid-19 vaccine updates via email."
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={routeChange}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/loginpage" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}