import * as React from "react";
import Grid from "@mui/material/Grid";
import Item from "@mui/material/ListItem";
import { Box } from "@mui/system";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import EditContact from "./EditContact";

import {
  TextField,
  Button,
  Typography,
  Table,
  TableBody,
  TableContainer,
  Paper,
  TableHead,
  TableRow,
  TableCell,
  Link,
} from "@mui/material";
import { useState, useEffect } from "react";
import { db } from "../firebase";
import { CenterFocusStrong } from "@mui/icons-material";

const filter = createFilterOptions();
export default function Hometable() {
  const [id, setid] = useState(" ");
  const [email, setEmail] = useState(" ");
  const [number, setNumber] = useState(0);
  const [name, setName] = useState(null);
  const [date, setDate] = useState();
  const [conValue, setConValue] = useState([]);

  // console.log(date);

  const handleSubmit = async e => {
    e.preventDefault();
    const res = await db.collection("contacts").add({
      ID: id,
      name: name,
      email: email,
      Phnumber: number,
      DOB: date,
    });

    setid("");
    setName("");
    setEmail("");
    setNumber("");
    setDate("");
  };
  const total = db.collection("contacts");

  const getData = () => {
    total.onSnapshot(query => {
      const details = [];
      query.forEach(docs => {
        details.push(docs.data());
      });
      setConValue(details);
    });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
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
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="id"
                label="Enter id"
                name="id"
                autoComplete="id"
                autoFocus
                onChange={e => setid(e.target.value)}
                value={id}
              />
              <Autocomplete
                value={name}
                onChange={(event, newValue) => {
                  if (typeof newValue === "string") {
                    setName({
                      label: newValue,
                    });
                  } else if (newValue && newValue.inputValue) {
                    // Create a new value from the user input
                    setName({
                      label: newValue.inputValue,
                    });
                  } else {
                    setName(newValue);
                  }
                }}
                filterOptions={(options, params) => {
                  const filtered = filter(options, params);

                  const { inputValue } = params;
                  // Suggest the creation of a new value
                  const isExisting = options.some(
                    option => inputValue === option.label
                  );
                  if (inputValue !== "" && !isExisting) {
                    filtered.push({
                      inputValue,
                      label: `Add "${inputValue}"`,
                    });
                  }

                  return filtered;
                }}
                selectOnFocus
                clearOnBlur
                handleHomeEndKeys
                id="free-solo-with-text-demo"
                options={EMP_NAME}
                getOptionLabel={option => {
                  // Value selected with enter, right from the input
                  if (typeof option === "string") {
                    return option;
                  }
                  // Add "xxx" option created dynamically
                  if (option.inputValue) {
                    return option.inputValue;
                  }
                  // Regular option
                  return option.label;
                }}
                renderOption={(props, option) => (
                  <li {...props}>{option.label}</li>
                )}
                sx={{ width: 300 }}
                freeSolo
                renderInput={params => (
                  <TextField {...params} label="Emp_Name" />
                )}
              />
              <TextField
                variant="outlined"
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
                variant="outlined"
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
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  label="Basic example"
                  value={date}
                  onChange={newValue => {
                    console.log("newdate", newValue);
                    // setDate(newValue);
                  }}
                  maxDate={new Date()}
                  renderInput={params => <TextField {...params} />}
                />
              </LocalizationProvider>
              <Link to="/">
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
                <Button
                  type="submit"
                  p={5}
                  width={5}
                  variant="contained"
                  color="primary"
                  disabled
                >
                  Update
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
                  <TableCell align="center">S.NO</TableCell>
                  <TableCell align="center">EMPID</TableCell>
                  <TableCell align="center">Name</TableCell>
                  <TableCell align="center">Email</TableCell>
                  <TableCell align="center">Number</TableCell>
                  <TableCell align="center">EDIT</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {conValue.length > 0 ? (
                  conValue.map((row, id) => (
                    <TableRow key={id}>
                      <TableCell>{id + 1}</TableCell>
                      <TableCell align="center">{row.ID}</TableCell>
                      <TableCell align="center">{row.name.label}</TableCell>
                      <TableCell align="center">{row.email}</TableCell>
                      <TableCell align="center">{row.Phnumber}</TableCell>
                      {/* <TableCell align="center">{row.DOB}</TableCell> */}

                      <TableCell align="center">
                        <Link to={`/edit/${row.id}`}>Edit</Link>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell>No Contacts Found</TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
      {/* <EditContact a={conValue} /> */}
    </>
  );
}


const EMP_NAME = [
  {
    label: "John",
  },
  {
    label: "Sam",
  },
  {
    label: "James",
  },
  {
    label: "Roy",
  },
  {
    label: "Endrik",
  },
  {
    label: "Dustin",
  },
  {
    label: "Max",
  },
  {
    label: "Antonin",
  },
  {
    label: "Edward",
  },
  {
    label: "Mike",
  },
  {
    label: "Eleven",
  },
];
