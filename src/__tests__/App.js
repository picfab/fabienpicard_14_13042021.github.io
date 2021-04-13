
import {mount,shallow} from 'enzyme';
import {expect} from 'chai';
import { MemoryRouter } from 'react-router';
import configureMockStore from 'redux-mock-store'
// import { act,create } from 'react-dom/test-utils';
import { renderHook, act } from '@testing-library/react-hooks'

import {Provider} from 'react-redux'

import App from '../App'
import Home from '../views/Home'
import Employees from '../views/Employees'



// jest.mock('react-redux', () => ({
//   ...jest.requireActual('react-redux'),
//   useDispatch: jest.fn(()=>console.log('tttttttttttt'))
// }));

describe('Given the home page',()=>{

  describe('When the url is /',()=>{
    it('Then have the Home component', ()=>{
      const wrapper = mount(<MemoryRouter initialEntries={[ '/' ]}><App/></MemoryRouter>);
      expect((wrapper).find(Home)).to.have.length(1)
      expect((wrapper).find(Employees)).to.have.length(0)
    })
  })

  describe('When had employee',()=>{

    it('Then have the Home component', (done)=>{
      const mockStore = configureMockStore()
      const store = mockStore({})
      const wrapper = shallow(<Provider store={store}><Home/></Provider>);

      store.dispatch = jest.fn();

      const button = wrapper.find('#addEmployee').first()
      button.simulate('click')
      setTimeout(() => {
        const modal = wrapper.find('#simple-modal-description')
        console.log(modal);
        expect(store.getState().length).to.been.equal(1)
        done()
      }, 1);
    })
  })
})
