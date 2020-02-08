// const action types
export const SUBMIT_FORM = 'SUBMIT_FORM';
export const TOGGLE_STATUS = 'TOGGLE_STATUS';

// action creators
export function submitForm(form_data) {
  return {
    type: 'SUBMIT_FORM',
    payload: form_data
  };
}

export function toggleStatus() {
  return {
    type: 'TOGGLE_STATUS',
  };
}