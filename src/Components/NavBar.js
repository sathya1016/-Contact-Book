import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Stack,
  Button,
} from "@mui/material";
import ContactsIcon from "@mui/icons-material/Contacts";

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit" aria-label="logo">
          <ContactsIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          ContactApp
        </Typography>

        <Stack direction="row" spacing={2}>
        
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
