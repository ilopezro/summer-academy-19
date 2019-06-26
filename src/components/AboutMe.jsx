import React, {Component} from 'react'
import Navbar from './navbar'
import '../styles/aboutme.css'
import headshot from '../assets/headshot.jpg'
import logo from '../assets/ucsclogo.png'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class AboutMe extends Component{
    render(){
        return(
            <div>
                <Navbar/>
                <Container fluid="true">
                    <Row>
                        <Col> 
                            <p className="title">About Me!</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col> 
                            <img className="headshot" src={headshot}></img>
                        </Col>
                        <Col>
                            <p id="aboutme">
                                About Me:
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <img className="ucsclogo" src={logo}></img>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default AboutMe