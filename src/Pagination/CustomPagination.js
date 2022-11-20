import React from 'react'
import Pagination from '@mui/material/Pagination';
import { createMuiTheme, ThemeProvider } from '@mui/material';

const darkTheme = createMuiTheme({
    palette: {
        type: "dark",
    },
});

const CustomPagination = ({ setPage, numOfPages = 10 }) => {
    const handlePageChange = (page) => {
        setPage(page);
        window.scroll(0, 0);
    };

    return (
        <div style={{ width: "100%", display: "flex", justifyContent: "center", marginTop: 10 }}>
            <ThemeProvider theme={darkTheme}>
                <Pagination style={{ background: "white" }} count={numOfPages} color="primary" onChange={(e) => handlePageChange(e.target.textContent)} />
            </ThemeProvider>
        </div>
    )
}

export default CustomPagination