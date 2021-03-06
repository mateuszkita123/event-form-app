import * as actions from '../actions';
import initialState from '../constans/initialState';

export default function handleForm(state = initialState, action) {
  console.log("action.type: ", action.type);
  switch (action.type) {
    case actions.SUBMIT_FORM:
      console.log("actions.SUBMIT_FORM");
      const newObj = Object.assign({}, state, {
        submitted: true,
        formData: action.payload
      })
      console.log("formData: ", newObj.formData);
    return newObj;

    case actions.DATE_CHANGED:
    console.log("actions.DATE_CHANGED");
    console.log("action.payload: ", action.payload);
    return {
      ...state,
      formData: {
        ...state.formData,
        event_date: action.payload
      }
    };

    case actions.TOGGLE_STATUS:
    console.log("actions.TOGGLE_STATUS");
    const isSubmitted = state.submitted;
    return {
      ...state,
      submitted: !isSubmitted
    };

    default:
      return state
  }
}