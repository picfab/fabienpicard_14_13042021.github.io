import ReactDOM from 'react-dom'

// mocks react-dom and its render method
// so that we can assert that render is
// called with <App /> and HTML element with id = root
jest.mock('react-dom', () => ({ render: jest.fn() }))

describe('Given the app', () => {
  it('then the app load', () => {
    // Create and append to document body
    // an HTML element with id = root
    const root = document.createElement('div')
    root.id = 'root'
    document.body.appendChild(root)
    // Requires index.js so that react-dom render method is called
    require('../index.js')
    // Asserts render was called with <App />
    // and HTML element with id = root
    expect(ReactDOM.render).toHaveBeenCalledTimes(1)
  })
})
