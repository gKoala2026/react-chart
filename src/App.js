import logo from './logo.svg';
import './App.css';
import * as React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

import "@fontsource/inter";
import Box from "@mui/material/Box";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import TimelineChart from './components/TimelineChart';
import BarChart from './components/BarChart';
import StepChart from './components/StepChart';
import { Stack } from '@mui/material';

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

function App() {

  const [mode, setMode] = React.useState("light");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
        typography: {
          fontFamily: "Inter",
        },
      }),
    [mode]
  );
  return (
    // <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <Stack spacing={10} mt={10}>
          <Box>
            <TimelineChart />
          </Box>
          <Box width='100%'>
            <Box mx="auto" width='400px'>
              <BarChart />
            </Box>
          </Box>
          <StepChart />
        </Stack>
      </ThemeProvider>
    // </ColorModeContext.Provider>
  );
}

export default App;
