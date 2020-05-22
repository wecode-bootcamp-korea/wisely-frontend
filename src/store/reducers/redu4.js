const initialState = "1";

const redu4 = (state = [initialState], action) => {
  switch (action.type) {
    case "SELECT_BOX4":
      return action.payload;
    default:
      return state;
  }
};

export default redu4;
