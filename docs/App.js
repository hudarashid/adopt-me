import { StrictMode, useState } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import SearchParams from "./SearchParams";
import Details from "./Details";
import ThemeContext from "./ThemeContext";

//main component block
// const App = () => {
//   return React.createElement(
//     "div",
//     {}, //{} object -> to put some HTML element like id, class
//     [
//       React.createElement("h1", { id: "my-brand" }, "Adopt Me!"),
//       ...[1, 2, 3, 4].map((i) => React.createElement("h2", {}, i)),
//       React.createElement(Pet, {
//         name: "Luna????",
//         animal: "Dog",
//         breed: "Havanese",
//       }),
//       React.createElement(Pet, {
//         name: "Pepper",
//         animal: "Bird",
//         breed: "Cockatiel",
//       }),
//       React.createElement(Pet, {
//         name: "Sudo",
//         animal: "Dog",
//         breed: "Wheaten Terrier",
//       }),
//     ]
//   );
// };

const App = () => {
  const theme = useState("darkBlue");
  return (
    <ThemeContext.Provider value={theme}>
      <div>
        <Router>
          <header>
            <Link to="/">
              <h1>Adopt Me!</h1>
            </Link>
          </header>
          <Switch>
            <Route path="/details/:id">
              {" "}
              {/*shown on the top of URL */}
              <Details />
            </Route>
            <Route path="/">
              {" "}
              {/*'/' is the homepage */}
              <SearchParams />
            </Route>
          </Switch>
        </Router>
      </div>
    </ThemeContext.Provider>
  );
};

//reactDOM to rendered out the code
render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);

//npm run dev -in terminal to run the app in browser
//strict mode doesnt have any functionality to itself
//but offer functionality to child components
