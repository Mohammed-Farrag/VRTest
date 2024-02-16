import MainNavbar from './components/Navbar/MainNavbar.jsx';
import React, { Component } from 'react'
import SingleProduct from './pages/SingleProduct.jsx';
import Offcanvas from 'react-bootstrap/Offcanvas';


export class App extends Component {
  state = {
    open: true
  }
  handleClose = () => {
    this.setState((state) => ({ ...state, open: false }))
  }
  toggleCanvas = () => {
    this.setState((state) => ({...state, open: !this.state.open }))
  }
  render() {
    return (
      <>

        <MainNavbar toggleCanvas={this.toggleCanvas} />
        <SingleProduct />


        <Offcanvas show={this.state.open} onHide={this.handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Offcanvas</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            Some text as placeholder. In real life you can have the elements you
            have chosen. Like, text, images, lists, etc.
          </Offcanvas.Body>

        </Offcanvas>
      </>
    )
  }
}

export default App
