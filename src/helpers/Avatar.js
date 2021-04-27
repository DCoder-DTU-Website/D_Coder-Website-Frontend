import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { deepOrange, deepPurple } from '@material-ui/core/colors';
import useUser from "../useUser";
import api from "../api/apiClient";
import swal from "sweetalert";
import Upload from "components/features/Upload/Upload";
import axios from "axios";
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
}));

export default function LetterAvatars() {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <Avatar>V</Avatar>
    </div>
  );
}