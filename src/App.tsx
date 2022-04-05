import React, { useState } from "react";
import {
  createTheme,
  ThemeProvider,
  CssBaseline,
  TextField,
} from "@mui/material";
import { AppBarComponent, SideBar, Menu } from "./components";
import { BLOTTER, MAIN, ROUTES, TRADETICKET } from "./routes";
import { Route, Routes } from "react-router";
import { Blotter, Dashboard, TradeTicket } from "./features";
import { useNavigate } from 'react-router';
import { Provider } from "react-redux";
import { store } from "./store";


export const App: React.FC = (): JSX.Element => {
  const [themeMode, setThemeMode] = useState<"light" | "dark">("dark");
  const [sideBarToggle, setSideBarToggle] = useState<boolean>(false);
  let navigate = useNavigate();


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

  const menuClickHandler = React.useCallback(
    (link) => {
      navigate(link)
      setSideBarToggle(!sideBarToggle);
    },
    [navigate, sideBarToggle]
  );

  return (
    <Provider store={store}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBarComponent
        handleDrawerToggle={handleDrawerToggle}
        onThemeChange={onThemeChange}
        isDarkMode={themeMode === "dark"}
        isDrawerOpen={sideBarToggle}
      />
      <SideBar
        isOpen={sideBarToggle}
        handleDrawerToggle={handleDrawerToggle}
        children={<Menu links={ROUTES} menuClickHandler={menuClickHandler} />}
      />
      <Routes>
        <Route path={MAIN} element={<Dashboard />} />
        <Route path={BLOTTER} element={<Blotter />} />
        <Route path={TRADETICKET} element={<TradeTicket />} />
      </Routes>
    </ThemeProvider>
    </Provider>
  );
};

export default App;
