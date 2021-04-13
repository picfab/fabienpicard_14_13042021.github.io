import {mount} from 'enzyme';
import {expect} from 'chai';
import { MemoryRouter } from 'react-router';
import { act } from 'react-dom/test-utils';

import App from '../App'
import Home from '../views/Home'
import Employees from '../views/Employees'

describe('Given the employees page',()=>{

    describe('When the url is /employees',()=>{
      it('Then have the Employees component', ()=>{
        const wrapper = mount(
          <MemoryRouter initialEntries={[ '/employees' ]}>
            <App/>
          </MemoryRouter>
        );
        expect((wrapper).find(Employees)).to.have.length(1)
        expect((wrapper).find(Home)).to.have.length(0)
      })
    })
    // describe('When the url is /employees',()=>{
    //   it('Then have the Employees component', (done)=>{
    //     const jooks = init(() => setOpen(true));

    //     // Object.defineProperty(window, 'localStorage',{})
    //     // window.localStorage.setItem('user', JSON.stringify({
    //     //   Employees: "[{'firstName':'Fabien}]",
    //     // }))
    //     const dispatch = jest.fn(() => console.log('toto'))

    //     setTimeout(() => {
    //       expect(dispatch).toHaveBeenCalledWith(0)
    //       done();
    //     }, 5000);



    //   })
    // })
})
