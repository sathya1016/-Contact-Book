import React from "react";
// import { useState } from "react";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
} from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const Signup = () => {
  //   const [name, setName] = useState("");
  //   const [email, setEmail] = useState("");
  //   const [phonenumber, setPhonenumber] = useState("");
  //   const [password, setPassword] = useState("");
  //   const [confirmPassword, setConfirmPassword] = useState("");
  //   const signup = (e) => {
  //     e.preventDefault();
  //     if (TextField !== "") {
  //       console.log(
  //         "Name :",
  //         name,
  //         "Email:",
  //         email,
  //         "Phone_number",
  //         phonenumber,
  //         "Password",
  //         password,
  //         "Confirm_Password",
  //         confirmPassword
  //       );
  //       // history.push('/');
  //     } else {
  //       alert("Please enter correct details");
  //     }
  //   };
  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: 300,
    margin: "0 auto",
  };
  const headerStyle = { margin: 0 };
  const avatarStyle = { backgroundColor: "blue" };
  const btnStyle = { margin: "30px 0" };
  const initialValues = {
    name: "",
    email: "",
    phonenumber: "",
    password: "",
    confirmplassword: "",
  };
  const emailRegExp = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  const validationSchema = Yup.object().shape({
    name: Yup.string().min(3, "too short").required("Required"),
    email: Yup.string()
      .matches(emailRegExp, "Enter a valid Email")
      .required("Email required"),
    phonenumber: Yup.string()
      .required("required")
      .matches(phoneRegExp, "Phone number is not valid")
      .min(10, "to short")
      .max(10, "to long"),
    password: Yup.string()
      .min(4, "Passwword minimum length must be 4")
      .required("Required"),
    confirmpassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords not matched")
      .required("Required")
  });
  const onSubmit = (values,props) => {
    console.log(values);
    console.log(props);
    props.resetForm();

  
  };

  return (
    <Grid>
      <Paper style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <AddCircleIcon />
          </Avatar>
          <h2 style={headerStyle}>Sign Up</h2>
          <Typography variant="caption" gutterBottom>
            Please fill this form to create an account !
          </Typography>
        </Grid>
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
                id="standard-n"
                variant="standard"
                name="name"
                //   value={name}
                label="Name"
                //   onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                fullWidth
                required
                helperText={<ErrorMessage name="name" />}
              />
              <Field
                as={TextField}
                id="standard-e"
                variant="standard"
                name="email"
                //   value={email}
                label="Email"
                //   onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                fullWidth
                required
                helperText={<ErrorMessage name="email" />}
              />

              <Field
                as={TextField}
                id="standard-p"
                variant="standard"
                name="phonenumber"
                //   value={phonenumber}
                label="Phonenumber"
                //   onChange={(e) => setPhonenumber(e.target.value)}
                placeholder="Enter your phonenumber"
                fullWidth
                required
                helperText={<ErrorMessage name="phonenumber" />}
              />
              <Field
                as={TextField}
                id="standard-p"
                variant="standard"
                name="password"
                //   value={password}
                label="Password"
                //   onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                type="password"
                fullWidth
                required
                helperText={<ErrorMessage name="password" />}
              />
              <Field
                as={TextField}
                id="standard-cp"
                variant="standard"
                name="confirmpassword"
                //   value={confirmPassword}
                label="ConfirmPassword"
                //   onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Please confirm your password"
                type="password"
                fullWidth
                required
                helperText={<ErrorMessage name="confirmpassword" />}
              />
              <Button
                type="submit"
                //   onClick={signup}
                color="primary"
                variant="contained"
                fullWidth
                style={btnStyle}
              >
                Sign Up
              </Button>
            </Form>
          )}
        </Formik>
      </Paper>
    </Grid>
  );
};
export default Signup;