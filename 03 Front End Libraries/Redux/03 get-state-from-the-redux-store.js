const store = Redux.createStore(
  (state = 5) => state
);

// Change code below this line

const currentState = store.getState()

/* The code from the previous challenge is re-written more concisely in the code editor. Use store.getState() to retrieve the state from the store, and assign this to a new variable currentState. */