import * as actions from './index'

describe('actions', () => {
  it('should create an action to submit form', () => {
    const dataObj = {
      first_name: "Mark",
      last_name: "Twain",
      user_email: "mark@twain.com",
      event_date: new Date()
    }
    const expectedAction = {
      type: actions.SUBMIT_FORM,
      payload: dataObj
    }
    expect(actions.submitForm(dataObj)).toEqual(expectedAction)
  })
})

describe('actions', () => {
  it('should create an action to change date', () => {
    const date = new Date();
    const expectedAction = {
      type: actions.DATE_CHANGED,
      payload: date

    }
    expect(actions.changeDate(date)).toEqual(expectedAction)
  })
})

describe('actions', () => {
  it('should create an action to toggle status', () => {
    const expectedAction = {
      type: actions.TOGGLE_STATUS,
    }
    expect(actions.toggleStatus()).toEqual(expectedAction)
  })
})
