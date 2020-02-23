import React from 'react'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { Provider } from 'react-redux'
import { mount } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import SubmitSuccess from './SubmitSuccess'

const defaultStore = {
  submitted: false,
  formData: {
    first_name: '',
    last_name: '',
    user_email: '',
    event_date: null
  }
}
const mockedStore = configureMockStore()(defaultStore);

const mountWithProvider = children => (store = mockedStore) =>
  mount(<Provider store={store}>{children}</Provider>);

Enzyme.configure({ adapter: new Adapter() })
function setup() {
  const props = {
    name: "Mark",
    onSubmit: jest.fn()
  }
  const enzymeWrapper = mountWithProvider(<SubmitSuccess {...props} />)();
  return {
    props,
    enzymeWrapper
  }
}

describe('components', () => {
  describe('SubmitSuccess', () => {
    it('should render self and subcomponents', () => {
      const { enzymeWrapper } = setup()
      expect(enzymeWrapper.find('#header').hasClass('header')).toBe(true)
      expect(enzymeWrapper.find('h1').text()).toBe('Thank you for submitting the form Mark')
    })
  })
})
