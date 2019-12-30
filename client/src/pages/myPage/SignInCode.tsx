import Box from '@material-ui/core/Box';
import Menu from '../../components/Menu';
import Paper from '@material-ui/core/Paper';
import React, { Fragment, useContext, useEffect } from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import { UserContext } from '../../contexts/UserContext';
import { useLocation } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: `calc(100vh - 112px)`
    },
    button: {
      width: '88%',
      minWidth: 240,
      margin: theme.spacing(1)
    },
    paper: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '48%',
      minWidth: 276,
      maxWidth: 360,
      height: '48%',
      minHeight: 204,
      maxHeight: 360,
      padding: theme.spacing(3, 2)
    },
    display: {
      width: '48%',
      minWidth: 252,
      maxWidth: 360,
      wordWrap: 'break-word'
    },
    textField: {
      width: '88%',
      minWidth: 240
    }
  })
);

const SignUp = () => {
  const classes = useStyles();

  const location = useLocation();
  useEffect(() => {
    Array.from(document.getElementsByTagName('input')).forEach(inputElement =>
      inputElement.setAttribute('spellcheck', 'false')
    );
  }, [location]);

  const { user } = useContext(UserContext);

  return (
    <Fragment>
      <Menu />
      <Box className={classes.root}>
        <Paper className={classes.paper}>
          <Box className={classes.display}>{user.signInCode}</Box>
        </Paper>
      </Box>
    </Fragment>
  );
};

export default SignUp;
