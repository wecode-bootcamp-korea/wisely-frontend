const initialState = "-1";

const redu3 = (state = [initialState], action) => {
  switch (action.type) {
    case "SELECT_BOX3":
      return action.payload;
    default:
      return state;
  }
};

export default redu3;
