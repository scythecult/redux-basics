const countState = {
  counter: 0,
};

const counterReducer = (state = countState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        counter: state.counter + 1,
      };

    default:
      return { ...state };
  }
};

export { counterReducer };
