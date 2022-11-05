import React from "react";
import { Pagination } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';

const darkTheme = createTheme({
    palette: {
        neutral: {
          main: '#ffffff',
          contrastText: '#ffffff',
        },
    },
});

const CustomPagination = ({setPage,numOfPage = 10}) => {
    const handlePageChange = (page) => {
        setPage(page);
        window.scroll(0,0);
    };

    return(
        <div>
            <ThemeProvider theme={darkTheme}>
                <Pagination 
                    sx={{
                        marginLeft: "30%",
                        marginBottom: "80px",
                    }}
                    onChange={(e) => handlePageChange(e.target.textContent)} 
                    count={numOfPage} variant="outlined" 
                    color="neutral" size="large"/>
            </ThemeProvider>
        </div>
    )
        
}

export default CustomPagination;