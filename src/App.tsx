import React, { useState } from "react";
import {
  createTheme,
  ThemeProvider,
  CssBaseline,
  TextField,
} from "@mui/material";
import { AppBarComponent, SideBar } from "./components";

export const App: React.FC = (): JSX.Element => {
  const [themeMode, setThemeMode] = useState<"light" | "dark">("dark");
  const [sideBarToggle, setSideBarToggle] = useState<boolean>(false);

  const theme = createTheme({
    palette: {
      mode: themeMode,
    },
    typography: {
      fontSize: 14,
    },
  });

  const handleDrawerToggle = React.useCallback(() => {
    // toggle drawer here
    setSideBarToggle(!sideBarToggle);
  }, [sideBarToggle]);

  const onThemeChange = React.useCallback(() => {
    setThemeMode(themeMode === "dark" ? "light" : "dark");
  }, [themeMode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBarComponent
        handleDrawerToggle={handleDrawerToggle}
        onThemeChange={onThemeChange}
        isDarkMode={themeMode === "dark"}
      />
      <SideBar isOpen={sideBarToggle} handleDrawerToggle={handleDrawerToggle} />
    </ThemeProvider>
  );
};

export default App;
