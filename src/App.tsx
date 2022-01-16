import React, { useState } from "react";
import { createTheme, ThemeProvider, CssBaseline, TextField } from "@mui/material";
import { AppBarComponent } from "./components";

export const App: React.FC = (): JSX.Element => {
  const [themeMode, setThemeMode] = useState<"light" | "dark">("dark");

  const theme = createTheme({
    palette: {
      mode: themeMode,
    },
    typography: {
      fontSize: 14,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
        <AppBarComponent />
    </ThemeProvider>
  );
};


export default App;