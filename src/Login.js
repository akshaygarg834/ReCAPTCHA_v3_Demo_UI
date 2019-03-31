import React from "react";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Status from "./SnackBarWrapper";

const styles = theme => ({
  container: {
    marginTop: theme.spacing.unit * 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme
      .spacing.unit * 3}px`
  },
  button: {
    // width: "50%",
    paddingLeft: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit * 2,
    marginTop: theme.spacing.unit * 2
  },
  main: {
    width: "auto",
    display: "block", // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  avatar: {
    margin: 10,
    backgroundColor: "blue"
  }
});

const Login = props => {
  const classes = props.classes;
  return (
    <main className={classes.main}>
      <Paper className={classes.container} square>
        <Avatar className={classes.avatar}>
          <AccountCircle />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <TextField
          id="outlined-name"
          label="Name"
          margin="normal"
          variant="outlined"
          InputLabelProps={{
            shrink: true
          }}
          placeholder="Enter your email"
          fullWidth
        />
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          margin="normal"
          variant="outlined"
          InputLabelProps={{
            shrink: true
          }}
          placeholder="Enter your password"
          fullWidth
        />
        <Button
          variant="outlined"
          size="small"
          color="primary"
          className={classes.button}
          onClick={props.loginHandler}
          id="login"
        >
          Login
        </Button>
      </Paper>
      <Status
        open={props.open}
        onClose={props.toggleSnackBar}
        variant={props.variant}
        message={props.message}
      />
    </main>
  );
};

export default withStyles(styles)(Login);
