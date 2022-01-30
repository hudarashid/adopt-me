import { createContext } from "react";

const ThemeContext = createContext(["green", () => {}]); //default value, where inside here use HOOK (2nd args is function, like 'setLocation')

export default ThemeContext;
