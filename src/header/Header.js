import React from "react"
import { Paper, SpeedDial, Typography } from "@mui/material"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from "react-router-dom";

const headingStyle = {
    minWidth: "100%",
    minHeight: "100px",
    textAlign: "center",
    padding: "10px 0",
    boxSizing: "border-box",
    color: "text.primary",
    bgcolor: "background.default",
};

const CartButtonStyle = {
    position: "absolute", 
    top: "15px", 
    right: "15px",
    color: "background.button",
}

const Header = () => {
    const navigate = useNavigate();

    return <Paper sx={{
        ...headingStyle,
    }}>
        <Typography variant="h1" color="text.secondary">Scotty Cameron Reseller</Typography>
        <SpeedDial 
            ariaLabel="Shopping Cart" 
            sx={CartButtonStyle} 
            icon={<ShoppingCartIcon color="text.default"/>} 
            onClick={() => { navigate("/cart") }}
            FabProps={{
                sx: {
                    bgcolor: 'secondary.main',
                    '&:hover': {
                        bgcolor: 'secondary.light',
                    }
                }
            }}
        />
    </Paper>
}

export default Header;
