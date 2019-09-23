import React, { useState, useContext } from 'react';
import { Grid, CardContent, Card, CardHeader, TextField, Button, Theme } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/styles';
import Fade from '@material-ui/core/Fade';
import { Link } from 'react-router-dom';
import { History } from 'history';
import axios from 'axios';
import { AuthStore } from '../../context/context';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      color: 'white'
    },
    title: {
      marginBottom: theme.spacing(4)
    },
    form: {
      padding: theme.spacing(4),
    },
    textField: {
      
      marginBottom: theme.spacing(2),
    },
    button: {
      margin: theme.spacing(2),
    }

  })
);
interface State {
  email: string
  password: string
}

interface Props {
  history: History
}


const LoginView: React.FC<Props> = (props) => {
  const classes = useStyles();
  const [state, setState] = useState<State>({
    email: '',
    password: ''
  });
  const [responseState, setResponseState] = useState('');
  const { authState, dispatch } = useContext(AuthStore);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const handleLogin = async (event: React.MouseEvent<HTMLButtonElement> | React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('clicking');
    const body = {
      email: state.email,
      password: state.password
    };
    try {
      const response = await axios.post('{{URL}}', body);
      // Bad Login
      if (!response.data.user || response.status === 400) {
        setResponseState(response.data.message);
        dispatch({ type: 'logout' })
      } else {
        // Good Login
        dispatch({ type: 'login' });
        dispatch({ type: 'setUser', payload: response.data.user });
        window.sessionStorage.setItem('auth-token', response.data.token)
        props.history.push('/members');
      }
    } catch (e) {
      setResponseState(e.toString());
    }
  };

  const handeInstagramLogin = () => {

  };

  return (
    <div className={classes.root}>
      <Grid container spacing={4} justify='center'>
        <Grid item sm={12} md={5} lg={4}>
          <h1 className={classes.title}>Login</h1>
          <form className={classes.form} onSubmit={handleLogin}>
            <TextField
              name='email'
              label='Email'
              fullWidth
              className={classes.textField}
              onChange={handleChange}
              value={state.email}
              variant='outlined'
            />
            <TextField
              name='password'
              label='Password'
              type='password'
              fullWidth
              className={classes.textField}
              onChange={handleChange}
              value={state.password}
              variant='outlined'
            />
            <Button type='submit' className={classes.button} onClick={handleLogin}>Login</Button>
            <Link to='/signup'><Button className={classes.button }>Signup</Button></Link>
            <div>{responseState}</div>
          </form>
        </Grid>
      </Grid>
    </div>
  )
};

export default LoginView;