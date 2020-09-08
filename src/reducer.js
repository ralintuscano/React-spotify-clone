export const initialState = {
  user: null,
  playlists: [],
  playling: false,
  item: null,
  token: null,
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SER_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    default:
      return state;
  }
};

export default reducer;
