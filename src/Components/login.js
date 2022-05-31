import React from "react";
// import { useState } from "react";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
  Link,
} from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
// import FormControlLabel from '@mui/material/FormControlLabel';
// import { useHistory } from 'react-router-dom';

const Login = ({ handleChange }) => {
  // const history=useHistory();
  // const [username,setUsername]=useState("");
  // const [password,setPassword]=useState("");

  // const login =  (e) => {
  //     e.preventDefault();
  //     if(username==="hem@gmail.com" && password==="123"){
  //         console.log("username",username,"password",password);
  //         // history.push('/');
  //     }
  //     else{
  //         alert("Please enter correct details");
  //     }
  //   }

  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: 300,
    margin: "0 auto",
  };
  const avatarStyle = { backgroundColor: "blue" };
  const btnStyle = { margin: "30px 0" };
  const initialValues = {
    username: "",
    password: "",
  };
  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .email("Please Enter valid email")
      .required("Username required"),
    password: Yup.string().required("Password required"),
  });
  const onSubmit = (values, props) => {
    console.log(values);
    props.resetForm();
    console.log(props);
  };
  return (
    <Grid>
      <Paper style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <LockIcon />
          </Avatar>
          <h2>Login</h2>
        </Grid>
        {/* <Typography>
                    <Link href="#" >
                        Forgot Password ? 
                    </Link>
                </Typography> */}
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          {(props) => (
            <Form>
              {console.log(props)}
              <Field
                as={TextField}
                id="standard-basic"
                variant="standard"
                // value={username}
                name="username"
                // onChange={(e)=>setUsername(e.target.value)}
                label="Username"
                placeholder="Enter username"
                fullWidth
                required
                helperText={<ErrorMessage name="username" />}
              />
              <Field
                as={TextField}
                id="standard"
                variant="standard"
                // value={password}
                name="password"
                // onChange={(e)=>setPassword(e.target.value)}
                label="Password"
                placeholder="Enter Password"
                type="password"
                fullWidth
                required
                helperText={<ErrorMessage name="password" />}
              />

              <Button
                type="submit"
                // onClick={login}
                color="primary"
                variant="contained"
                fullWidth
                style={btnStyle}
              >
                Sign in
              </Button>
            </Form>
          )}
        </Formik>
        <Typography>
          Don't have an account ?
          <Link href="#" onClick={() => handleChange("event", 1)}>
            Sign Up ?
          </Link>
        </Typography>
      </Paper>
    </Grid>
  );
};
export default Login;