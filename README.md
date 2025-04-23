## Complete Intro to React, v6 by Brian Holt @ Front End Master (https://frontendmasters.com/courses/complete-react-v6/)

1. Understanding how React works with Parent and Child components

2. This React setup is build by pure Vanilla JavaScript - in order to get deep understanding of how React environment works - this is also include - installing JavaScript tools such as npm, Prettier, ESLint, Git, Parcel, Babel, React Router that use in React ecosystem.

3. Understanding HOOKS: - a way of managing state

- Let's say we have a text box that has the input of `hungry`
- But I want to erase `hungry` and write `thirsty`
- So the current _state_ of input `thirsty` is managed by HOOKS

- Note that: hooks begin with `use`: `useState`, `useEffect`, `useDebugValue`

- hooks must be arranged in order of its calling
- Example: in a form, we have input of Location, Name, Age
- We must write out the hooks in order for Location, Name and Age

- useState() is like a function -> whatever input i received, i will throw up the same output.
- Say, I received the input number, and I gonna throw out a number.
- If received type string, i gonna throw back string

- Fetching data from API by `useEffect`

4. Chrome dev tools (in browser)

- able to see Parent & child components, its props and rendered by

5. React Router and Route (Note to self: dive deep about this later on ...)

- <Router><Route>COMPONENT 1 HERE</Route></Router>
- <Router><Route>COMPONENT 2 HERE</Route></Router>
- IF we want to have 2 components rendered out in the main page - we can use router

6. React Router Link

- change anchor tag <a href=""></a> to <Link to=""></Link> by import { Link } from "react-router-dom";
- By using Link, it will prevent the page reloading like anchor tag used to be
- The idea is, Link will not reload the page, but it will navigate to the page directly

7. Switch in Router

- Switch renders a route exclusively, render only one & stop rerouting once it find the item it needed

8. Class component (in Details.js)

- ALWAYS CALL `super()` in using class component.
- `super()` is to called the COMPONENT class
- lifecycle method: `componentDidMount()` - when a component being called for the first time, it will call `componentDidMount()` and then it will not being called again
- refer: https://reactjs.org/docs/react-component.html#componentdidmount

- `componentDidMount()` did exactly the same as `useEffect()`. but `componentDidMount()` need to use inside the class component ONLY

- error Boundries can ONLY be made in CLASS
- error Boundries is to catch any error within application, so that it doesnt crash and give user meaningful message instead of some creepy 404 errors message (perhaps coming from unrealiable API)

- `static` function is property of class(default state) but the state can be update independently of one another by creating new instances without affecting the `default state`

9. State vs Props
   [in Carousel.js]

- State is mutable(can be modify) ; use in HOOKS
- Props coming from Parents (one way data flow)

10. Context

- in this case, context is used for `dark mode` theme
- Inside App.js, we are wrapping all the components in <ThemeContext.Provider value={theme}></ThemeContext>
- Implementing ThemeContext in SearchParams (button where user can change the `dark-mode`)

- context is like UNIVERSAL GLOBAL VARIABLE that can be access anywhere in my application
- ThemeContext is a component.
- In App.js, we import the ThemeContext, declare a variable `const theme = useState("darkBlue");`, wrap all the component <ThemeContext.Provider value={theme}></ThemeContext>, and use that dark blue theme in SearchParam.js.
- As such, in SearchParam.js, we use a hook and pass it into the button for style
- </ThemeContext> works only in Class component

- and we can't use HOOKS in class component

- So Context -> in the hierarcy, its component is independent, and then in App.js we importing it and use in SearchParam [--> like the case Pet.js component and import by Result.js]

11. Modal

- example here, like pop-out window
- in index.html, we created a new div id=modal
- and in Modal.js, we import `createPortal` where we use it where rendered it out using `elRef.current = document.getElementById("div");`
- noted that this component Modal.js is not rendered in App.js, but rendered out itself by using `createPortal`

Architecture & design flow of this application:
App -> SearchParams -> Results (Pets) -> Details -> Carousel


another things on feature B