import React from 'react';
import { AppBar, Toolbar } from "@mui/material";

export const AppBarComponent: React.FC = (): JSX.Element => {
    return (
        <div>
            <AppBar position='static' variant='elevation'>
                <Toolbar variant='dense'></Toolbar>
            </AppBar>
            
        </div>
    )
}
