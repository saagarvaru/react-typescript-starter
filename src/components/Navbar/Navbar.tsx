import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Theme, createStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/styles';
import { AuthStore } from '../../context/context';
import { History } from 'history';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      zIndex: 1201,
      color: 'white'
    },
    title: {
      flexGrow: 1,
      color: '#d00200',
      fontSize: 24,
    },
    link: {
      color: 'white',
      textDecoration: 'none',
    }
  })
);

interface Props {
  history: History
}


const Navbar: React.FC<Props> = (props) => {
  const classes = useStyles();
  const { authState, dispatch } = useContext(AuthStore);

  const handleLogout = () => {
    props.history.push('/login');
    dispatch({ type: 'logout' });
  };

  return (
    <AppBar className={classes.appBar} position='fixed'>
      <Toolbar>
        <div className={classes.title}>
          <Link className={classes.link} to='/'>
            Title
          </Link>
        </div>

      </Toolbar>
    </AppBar>
  );
};

export default Navbar;