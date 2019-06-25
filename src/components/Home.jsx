import React, {Component} from 'react'
import Navbar from './navbar'

class Home extends Component{

    render(){
        return(
            <div className="Header">
                <Navbar />

                <div className="content">
                    Hello World!
                </div>
            </div>
        )
    }
}

export default Home;