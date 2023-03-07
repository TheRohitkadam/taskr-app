import {
    createTheme,
    CssBaseline,
    PaletteMode,
    ThemeProvider,
} from "@mui/material";
import { createContext, useMemo, useState } from "react";
import { Provider } from "react-redux";
import Router from "./components/Router";
import { darkTheme } from "./lib/themes/dark";
import { lightTheme } from "./lib/themes/light";
import { store } from "./store";

interface ColorContextSchema {
    toggleColorMode: () => void;
}

export const ColorContext = createContext<ColorContextSchema>(
    {} as ColorContextSchema
);

const App = () => {
    const [mode, setMode] = useState<PaletteMode>("light");
    const colorMode = useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode: PaletteMode) =>
                    prevMode === "light" ? "dark" : "light"
                );
            },
        }),
        []
    );

    const theme = useMemo(
        () => createTheme(mode === "light" ? lightTheme : darkTheme),
        [mode]
    );

    return (
        <Provider store={store}>
            <ColorContext.Provider value={colorMode}>
                <ThemeProvider theme={theme}>
                    <CssBaseline enableColorScheme />
                    <Router />
                </ThemeProvider>
            </ColorContext.Provider>
        </Provider>
    );
};

export default App;
