// const action types
export const SUBMIT_FORM = 'SUBMIT_FORM';
export const DATE_CHANGED = 'DATE_CHANGED';
export const TOGGLE_STATUS = 'TOGGLE_STATUS';

// action creators
export function submitForm(form_data) {
  return {
    type: 'SUBMIT_FORM',
    payload: form_data
  };
}

export function changeDate(date) {
  console.log("date: ", date);
  return {
    type: 'DATE_CHANGED',
    payload: date
  }
}

export function toggleStatus() {
  return {
    type: 'TOGGLE_STATUS',
  };
}