import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core';

const SideBar = (props) => {
  const { children } = props;
  const classes = useStyles();
  
  return (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: true,
      })}
      role="presentation"
    >
      {children}  
    </div>
  )
  
}

const useStyles = makeStyles({
    list: {
      width: 250,
    },
    fullList: {
      width: 'auto',
    },
});  

export default SideBar;