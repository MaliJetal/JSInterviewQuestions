## React Hooks
After React 16.8 version

# Hooks-
Hooks are functions that let you “hook into” React state and lifecycle features from function components. 

# Purpose:
  Hooks let you split one component into smaller functions based on what pieces are related (such as setting up a subscription or fetching data)
  You can use more than a single hooks in a component:
  
###  Rules of React Hooks
1. Only Call Hooks at the Top Level
    Don’t call Hooks inside loops, conditions, or nested functions. 
2. Only Call Hooks from React Functions:
    Don’t call Hooks from regular JavaScript functions.
3. React relies on the order in which Hooks are called

### When would I use a Hook? 
If you write a function component and realize you need to add some state to it, previously you had to convert it to a class.

useState- [state, setState] = useState(defaultValue)
It’s similar to this.setState in a class, except it doesn’t merge the old and new state together.

useEffect
-  The Effect Hook, useEffect, adds the ability to perform side effects from a function component. It serves the same purpose as componentDidMount, componentDidUpdate, and componentWillUnmount in React classes, but unified into a single API. 
-  This component sets the document title after React updates the DOM

useReducer- useReducer lets you manage local state of complex components with a reducer
useContext- useContext lets you subscribe to React context without introducing nesting

useRef
useLayoutEffect
useCallback
useMemo
