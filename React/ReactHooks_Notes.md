React Hooks
after React 16.8 version

Hooks-
Hooks are functions that let you “hook into” React state and lifecycle features from function components. 

Purpose:
Hooks let you split one component into smaller functions based on what pieces are related (such as setting up a subscription or fetching data)

you can use more than a single hooks in a component:


useState- [state, setState] = useState(defaultValue)
It’s similar to this.setState in a class, except it doesn’t merge the old and new state together.

useEffect
-  The Effect Hook, useEffect, adds the ability to perform side effects from a function component. It serves the same purpose as componentDidMount, componentDidUpdate, and componentWillUnmount in React classes, but unified into a single API. 
-  This component sets the document title after React updates the DOM

useRef
useLayoutEffect
useCallback
useMemo
useReducer
useContext
