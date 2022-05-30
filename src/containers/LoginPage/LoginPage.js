import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../ducks/auth.duck";
import { Container, Avatar, Typography } from "@mui/material";
import LockOutlined from "@mui/icons-material/LockOutlined";
import { LoginForm } from "../../forms";
// import makeStyles from "@mui/styles";

// const useStyles = makeStyles(theme => ({
//   paper: {
//     marginTop: theme.spacing(8),
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//   },
//   avatar: {
//     margin: theme.spacing(1),
//     backgroundColor: theme.palette.secondary.main,
//   },
// }));

const LoginPage = props => {
  const dispatch = useDispatch();
  const { loginInProgress, loginError } = useSelector(state => state.auth);
//   const classes = useStyles();

  const handleSubmit = values => {
    const { email, password } = values;
    const { history } = props;
    dispatch(login(email, password))
      .then(() => history.push("/profile"))
      .catch(() => {
        /*Already handled */
      });
  };

  return (
    <Container component="main" maxWidth="xs">
      <div >
        <Avatar >
          <LockOutlined />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <LoginForm
          onSubmit={handleSubmit}
          inProgress={loginInProgress}
          onError={loginError}
        />
      </div>
    </Container>
  );
};

export default LoginPage;
