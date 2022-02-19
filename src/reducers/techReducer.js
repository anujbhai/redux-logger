import { ADD_TECH, DELETE_TECH, GET_TECHS, SET_LOADING, TECHS_ERROR } from "../actions/types";

const initialState = {
  techs: null,
  loading: false,
  error: null
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_TECHS:
      return {
        ...state,
        techs: payload,
        loading: false
      }
    case ADD_TECH:
      return {
        ...state,
        techs: [...state.techs, payload],
        loading: false
      };
    case DELETE_TECH:
      return {
        ...state,
        techs: state.techs.filter(tech => tech.id !== payload),
        loading: false
      }
    case SET_LOADING:
      return {
        ...state,
        loading: true
      }
    case TECHS_ERROR:
      console.log(payload);
      return {
        ...state,
        error: payload
      };
    default:
      return state;
  }
};
