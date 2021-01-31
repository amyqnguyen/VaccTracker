import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Button from '@material-ui/core/Button';
import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon';
import { Link } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    grow: {
      flexGrow: 1,
    },
    
    title: {
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
  
    sectionDesktop: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'flex',
      },
    },
    
  }),
);

function HomeIcon(props: SvgIconProps) {
    return (
      <SvgIcon {...props}>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </SvgIcon>
    );
  }

const handleNotifications = (event : any) => {
    {/* Need to implement notification system here!!!*/}
    console.log("test");
};


  

export default function PrimarySearchAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
         
          <Typography className={classes.title} variant="h6" noWrap>
            Covid-19 Vaccine Finder
          </Typography>
        
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            {/* Need to add a notification system????*/}
            <IconButton aria-label="show 17 new notifications" color="inherit" onClick={handleNotifications}>
              <Badge badgeContent={69} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton href='/' aria-label="show 17 new notifications" color="inherit">
              <Badge color="secondary">
                <HomeIcon />
              </Badge>
            </IconButton>
            <Button color="inherit">Logout</Button>
          </div>
          
        </Toolbar>
      </AppBar>
    
    </div>
  );
}