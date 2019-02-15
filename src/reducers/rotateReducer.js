export default (state, action) => {
  console.log('reducer', state);
  console.log('reducer', action);
  switch (action.type) {
    case "rotate":
      return {
        text: action.label,
        rotating: action.payload
      };
    default:
      return state;
  }
};