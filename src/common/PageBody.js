import React from "react";
import { Container } from "@mui/material";

const PageBody = ({ children }) => {
    return (
        <Container sx={{ display: "block", bgcolor: "#f3e8ea", height: "100%" }}>
            {children}
        </Container>
    );
};

export default PageBody;