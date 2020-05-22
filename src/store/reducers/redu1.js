const initialState = "-1";

const redu1 = (state = [initialState], action) => {
  switch (action.type) {
    case "SELECT_BOX1":
      return action.payload;
    default:
      return state;
  }
};

export default redu1;
