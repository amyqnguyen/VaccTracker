import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';
import Orders from '../components/Orders';
import NavBar from '../components/NavBar';
import Grid from '@material-ui/core/Grid';
import VaccineDashboard from '../components/VaccineDashboard'
import Box from '@material-ui/core/Box';
import { apiAddVaccines, apiSendEmails } from '../api/apiRequest';

// edited from https://github.com/mui-org/material-ui/blob/master/docs/src/pages/getting-started/templates/dashboard/Orders.js

export default function AdminHomePage(){
    const [open, setOpen] = React.useState(false); 
    const [vaccineName, setVaccineName] = React.useState(''); 
    const [vaccineQuant, setVaccineQuant] = React.useState(0); 

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
      apiAddVaccines('', { name: vaccineName, inventory: vaccineQuant});
    };

    const useStyles = makeStyles((theme) => ({
        container: {
          display: 'flex',
          flexWrap: 'wrap',
        },
        textField: {
          marginLeft: theme.spacing(1),
          marginRight: theme.spacing(1),
          width: 200,
        },
        seeMore: {
            marginTop: theme.spacing(3),
        },
        paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary,
        },
      }));

    const classes = useStyles();

    const handleVaccineName = (e: any) => {
      setVaccineName(e.target.value);
    }

    const handleVaccineQuantity = (e: any) => {
      setVaccineQuant(e.target.value);
    }

    const sendEmails = async () => {
      apiSendEmails();
    }

    return (
        <>
        <NavBar />
        <Grid container spacing={3}>
        <Grid item xs={9}>
        <Box p={1}>
        <Orders />
        </Box>
        </Grid>
        <Grid item xs={3}>
        <Box p={1}>
        <VaccineDashboard></VaccineDashboard>
        </Box>
        </Grid>
        <Box p={1.5}></Box>
        <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Input Newly Received Vaccines
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Vaccine Arrival Form</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please fill in the form with the relevant details.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Vaccine Manufacturer"
            type="email"
            fullWidth
            onChange={handleVaccineName}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Number of Vaccines"
            type="email"
            fullWidth
            onChange={handleVaccineQuantity}
          />
          <form className={classes.container} noValidate>
            <TextField
                id="date"
                label="Expected Arrival Date"
                type="date"
                defaultValue="2021-02-02"
                className={classes.textField}
                InputLabelProps={{
                shrink: true,
                }}
            />
            </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Add to Database
          </Button>
        </DialogActions>
      </Dialog>
      <Button variant="contained" color="secondary" onClick={sendEmails}>
        Email Patients
      </Button>
      <Button variant="contained" color="primary">
        Create Calendar for Bookings
      </Button>
      </Grid>        
        </>
    );
}