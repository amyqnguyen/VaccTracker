import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);


export default function Deposits() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <React.Fragment>
          <Card className={classes.root}>
      <CardContent>
      <Title>Recent Vaccine Shipments</Title>
      <Typography component="p" variant="h5">
        Moderna - 5300
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        on 15 January, 2021
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={handleClickOpen}>
          View detailed vaccine statistics
        </Link>
        <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Vaccine Details
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            Insert Vaccine details here from database
          </Typography>
        </DialogContent>
      </Dialog>
      </div>
      </CardContent>
    </Card>
    <Card className={classes.root}>
      <CardContent>
      <Title>Total Vaccines Distributed</Title>
      <Typography component="p" variant="h4">
        171,250
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        as of 31 January, 2021
      </Typography>

      </CardContent>
    </Card>
    </React.Fragment>
  );
}