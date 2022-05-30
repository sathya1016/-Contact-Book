import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Paper } from "@mui/material";
// import makeStyles from "@mui/styles";

// const useStyles = makeStyles((theme) => ({
//     paper: {
//         marginTop: theme.spacing(8),
//         padding: theme.spacing(3)
//     },
// }));

const NotFoundPage = () => {

    // const classes = useStyles();

    return (
        <Container component="main" maxWidth="xs" >
            <Paper p>
                Not found. <Link to='/login'>Sign in</Link>
            </Paper>
        </Container>
    );
};

export default NotFoundPage;