### React LifeCycle Methods

It is series of Lifecycle events. Every Component goes through it

- Mounting – Birth of your component
- Update – Growth of your component
- Unmount – Death of your component

![](<img src="../resources/LifeCycle.png"
     alt="LifeCycle Method Diagram"
     style="float: left; margin-right: 10px;" />)

## Mostly used Methods:

1. constructor()

- Initializing local state by assigning an object to <b>this.state</b>.
- <u>Use Case</u> - Binding event handler methods to an instance.

2. render()

- render() is the only required method within a class component in React.
- handles the rendering of your component to the UI.
- <u>Use Case</u> - the render() method returns JSX that is displayed in the UI.

3. componentDidMount()

- <u>Use Case</u> - To initialize API calls.
- Allows use of <b> setState() </b>.
- allows setState for tooltips, modals, and similar concepts.

4. componentDidUpdate(prevProps, prevState, snapshot)

- This lifecycle method is invoked as soon as the updating happens.
- <u>Use Case</u> - updating the DOM in response to prop or state changes.
- allows setState() but dont forget to add if condition.

Ex:
componentDidUpdate(prevProps) {
//Typical usage, don't forget to compare the props
if (this.props.userName !== prevProps.userName) {
this.fetchData(this.props.userName);
}
}

5. componentWillUnmount()

- before the component is unmounted and destroyed.
- <u>Use Case</u> - Any cleanup actions that you would need to do.

Ex:
componentWillUnmount() {
window.removeEventListener('resize', this.resizeListener)
}

## Other Methods:

6. shouldComponentUpdate()

- This method is used to let React know if a component is not affected by the state and prop changes.
- It calls to tell tht you dont want to render states and props changes.

Ex:
shouldComponentUpdate(nextProps, nextState) {
return this.props.title !== nextProps.title ||
this.state.input !== nextState.input
}//retrn true/false

7. static getDerivedStateFromProps()

- Alternative to componentWillReceiveProps()
- Is called just before calling render() function
- This is a static function that does not have access to “this“.
- returns an object to update state in response to prop changes.
- <ul>Use Case</ul> - where the state depends on changes in props in a component.

Ex:
static getDerivedStateFromProps(props, state) {
if (props.currentRow !== state.lastRow) {
return {
isScrollingDown: props.currentRow > state.lastRow,
lastRow: props.currentRow,
};
}
// Return null to indicate no change to state.
return null;
}

8. getSnapshotBeforeUpdate()

- alternative to componentWillUpdate()
- It is called right before the DOM is updated
- The value that is returned from getSnapshotBeforeUpdate() is passed on to componentDidUpdate().
- <ul>Use Case<ul> - Resizing the window during an async rendering