const initialState = "-1";

const redu2 = (state = [initialState], action) => {
  switch (action.type) {
    case "SELECT_BOX2":
      return action.payload;
    default:
      return state;
  }
};

export default redu2;
