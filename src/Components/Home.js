import * as React from "react";
import Grid from "@mui/material/Grid";
import Item from "@mui/material/ListItem";
import { Box } from "@mui/system";
// import { makeStyles } from "@mui/material";
import {
  TextField,
  Button,
  Typography,
  Link,
  Table,
  TableBody,
  TableContainer,
  Paper,
  TableHead,
  TableRow,
  TableCell,
} from "@mui/material";
import { useState, useEffect } from "react";
import { db } from "../firebase";
import { CenterFocusStrong } from "@mui/icons-material";
export default function Home() {
  const [name, setName] = useState(" ");
  const [email, setEmail] = useState(" ");
  const [number, setNumber] = useState(0);
  const [conValue, setConValue] = useState([]);

  // const useStyles = makeStyles({
  //   sticky: {
  //     position: "sticky",
  //     left: 0,
  //     background: "white",
  //     boxShadow: "5px 2px 5px grey",
  //   },
  // });

  const handleSubmit = () => {
    console.log(name, email, number);
    const res = db.collection("contacts").add({
      name: name,
      email: email,
      number: number,
    });
    console.log(res);
    setName("");
    setEmail("");
    setNumber("");
  };
  const ref = db.collection("contacts");
  console.log(ref);
  const getData = () => {
    ref.onSnapshot(query => {
      const details = [];
      query.forEach(docs => {
        details.push(docs.data());
      });
      setConValue(details);
      console.log(details);
    });
  };
  useEffect(() => {
    getData();
  }, []);

  // const classes = useStyles();

  return (
    <Grid container spacing={2} columns={16}>
      <Grid item xs={5}>
        <Item>
          <Box
            m={5}
            sx={{
              width: 300,
              height: 300,
            }}
          >
            <Typography component="h1" variant="h5" color="blue">
              Create New Contact
            </Typography>
            <TextField
              variant="standard"
              margin="normal"
              required
              fullWidth
              id="name"
              label="Enter name"
              name="name"
              autoComplete="name"
              autoFocus
              onChange={e => setName(e.target.value)}
              value={name}
            />
            <TextField
              variant="standard"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={e => setEmail(e.target.value)}
              value={email}
            />
            <TextField
              variant="standard"
              margin="normal"
              required
              fullWidth
              id="number"
              label="Enter phone number"
              name="phonenumber"
              autoComplete="phonenumber"
              autoFocus
              onChange={e => setNumber(e.target.value)}
              value={number}
            />
            <Link href="#">
              <Button
                type="submit"
                p={5}
                width={5}
                variant="contained"
                color="primary"
                onClick={handleSubmit}
              >
                Create contact
              </Button>
            </Link>
          </Box>
        </Item>
      </Grid>
      <Grid item xs={8} mt={5}>
        <Typography component="h1" variant="h5" color="blue">
          Your Contacts
        </Typography>

        <TableContainer align={CenterFocusStrong} component={Paper}>
          <Table aria-label="simple table">
            <TableHead border="1px">
              <TableRow>
                <TableCell align="center">Name</TableCell>
                <TableCell align="center">Email</TableCell>
                <TableCell align="center">Number</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {conValue.map(row => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="center">{row.name}</TableCell>
                  <TableCell align="center">{row.email}</TableCell>
                  <TableCell align="center">{row.number}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
}
