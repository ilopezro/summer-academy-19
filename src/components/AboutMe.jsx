import React, {Component} from 'react'
import Navbar from './navbar'
import '../styles/aboutme.css'
import headshot from '../assets/headshot.jpg'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class AboutMe extends Component{
    render(){
        return(
            <div>
                <Navbar/>
                Hello from AboutMe
            </div>
        )
    }
}

export default AboutMe