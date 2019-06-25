import React, {Component} from 'react';

class Navbar extends Component{
  constructor(props){
    super(props)
    this.state = {
      pages: [
        {
          name: "Home",
          path: "/"
        },
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

  getNavComponents(){
    return this.state.pages.map((item, i) => {
      return (
        <li className="nav-item">
          <a className="nav-link" href={item.path} key={i}>{item.name}</a>
        </li>
      )
      }
    )
  }

  render(){
    return(
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="collapse navbar-collapse" id="navbarResponsive">
						<ul className="navbar-nav ml-auto">{this.getNavComponents()}</ul>
					</div>
      </nav>
    )
  }
}

export default Navbar;
