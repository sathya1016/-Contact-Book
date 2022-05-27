import * as React from "react";

import Grid from "@mui/material/Grid";
import Item from "@mui/material/ListItem";
import { Box } from "@mui/system";
import { TextField, Button, Typography, Link } from "@mui/material";

export default function Hometable() {
  return (
    <Grid container spacing={2} columns={16}>
      <Grid item xs={8}>
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
            />
            <Link href="#">
              <Button
                type="submit"
                p={5}
                width={5}
                variant="contained"
                color="primary"
              >
                Create contact
              </Button>
            </Link>
          </Box>
        </Item>
      </Grid>
      <Grid item xs={8}>
        <Item>Display Contacts</Item>
      </Grid>
    </Grid>
  );
}
