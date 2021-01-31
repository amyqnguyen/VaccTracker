import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function Deposits() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
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
        <Link color="primary" href="#" onClick={preventDefault}>
          View total vaccines available
        </Link>
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