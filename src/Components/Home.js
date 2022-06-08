import * as React from "react";
import Grid from "@mui/material/Grid";
import Item from "@mui/material/ListItem";
import { Box } from "@mui/system";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

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
const filter = createFilterOptions();
export default function Hometable() {
  const [id, setid] = useState(" ");
  const [email, setEmail] = useState(" ");
  const [number, setNumber] = useState(0);
  const [conValue, setConValue] = useState([]);
  const [name, setValue] = useState(null);
  const [value, setvalue] = useState(new Date());

  const handleSubmit = () => {
    console.log(id, name, email, number);
    const res = db.collection("contacts").add({
      ID: id,
      name: name,
      email: email,
      Phnumber: number,
    });
    // console.log(res);
    setid("");
    setValue("");
    setEmail("");
    setNumber("");
  };
  const ref = db.collection("contacts");
  // console.log(ref);
  const getData = () => {
    ref.onSnapshot(query => {
      const details = [];
      query.forEach(docs => {
        details.push(docs.data());
      });
      setConValue(details);
      // console.log(details);
    });
  };
  useEffect(() => {
    getData();
  }, []);

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
                  setValue({
                    label: newValue,
                  });
                } else if (newValue && newValue.inputValue) {
                  // Create a new value from the user input
                  setValue({
                    label: newValue.inputValue,
                  });
                } else {
                  setValue(newValue);
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
              renderInput={params => <TextField {...params} label="Emp_Name" />}
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
                <TableCell align="center">ID</TableCell>
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
                  <TableCell align="center">{row.ID}</TableCell>
                  <TableCell align="center">{row.name.label}</TableCell>
                  <TableCell align="center">{row.email}</TableCell>
                  <TableCell align="center">{row.Phnumber}</TableCell>
                  <TableCell align="center">
                    <Button>Edit</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
      {/* <DatePicker
          views={["day"]}
          label="Just date"
          value={value}
          onChange={newValue => {
            setvalue(newValue);
          }}
          renderInput={params => <TextField {...params} helperText={null} />}
        /> */}
    </Grid>
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
