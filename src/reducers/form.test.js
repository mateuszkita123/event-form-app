import reducer from './form'
import * as actions from '../actions/index'
import initialState from '../constans/initialState';

describe('event form app reducer', () => {
  const date = new Date();
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState)
  })
  it('should handle SUBMIT_FORM', () => {
    expect(
      reducer(initialState, {
        type: actions.SUBMIT_FORM,
        payload: {
          first_name: "Mark",
          last_name: "Twain",
          user_email: "mark@twain.com",
          event_date: date
        }
      })
    ).toEqual(
      {
        submitted: true,
        formData: {
          first_name: "Mark",
          last_name: "Twain",
          user_email: "mark@twain.com",
          event_date: date
        }
      }
    )
  })
  it('should handle DATE_CHANGED', () => {
    expect(
      reducer(initialState, {
        type: actions.DATE_CHANGED,
        payload: date
      })
    ).toEqual(
      {
        ...initialState,
        formData: {
          ...initialState.formData,
          event_date: date
        }
      }
    )
  })
  it('should handle TOGGLE_STATUS', () => {
    const isSubmitted = initialState.submitted;
    expect(
      reducer(initialState, {
        type: actions.TOGGLE_STATUS
      })
    ).toEqual(
      {
        ...initialState,
        submitted: !isSubmitted
      }
    )
  })
})
