import React, {Component} from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

class Navb extends Component{
    constructor(props){
        super(props)
        this.state = {
          pages: [
            {
              name: "About Me",
              path: "/aboutMe"
            },
            {
              name: "Class Links",
              path: "/classLinks"
            },
            {
              name: "Contact",
              path: "/contact"
            }
          ]
        }
    }

    getNavComp(){
      return this.state.pages.map((page, i) => {
        return (
          <Nav.Link href={page.path}>{page.name}</Nav.Link>
        )
      }

      )
    }

    render(){
        return(
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="/">Home</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav>
                        {this.getNavComp()}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default Navb; 