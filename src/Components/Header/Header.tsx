import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    button: {
      "&.active": {
        background: 'red',
      },
    },
  }),
);

export default function Header(props: any) {
  const classes = useStyles();
  const goToDevices = () => {
    console.log(props);
    window.history.replaceState(null, "", "/#!/devices/");
    window.location.reload();
  }
  const goToHome = () => {
    console.log(props);
    window.history.replaceState(null, "", "/#!/");
    window.location.reload();
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h2" className={classes.title}>
            <Button color="inherit" onClick={goToHome} className={classes.button}>
              Home</Button>
            <Button color="inherit" onClick={goToDevices} className={classes.button}>Devices</Button>
          </Typography>

        </Toolbar>
      </AppBar>
    </div>
  );
}
