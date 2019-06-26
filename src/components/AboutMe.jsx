import React, {Component} from 'react'
import Navbar from './navbar'
import '../styles/aboutme.css'
import headshot from '../assets/headshot.jpg'
import logo from '../assets/ucsclogo.png'
import branson from '../assets/branson.png'
import madrid from '../assets/madrid.jpg'
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
                        <Col md="auto"> 
                            <img className="headshot" src={headshot} alt="headshot"></img>
                        </Col>
                        <Col md="auto">
                            <p id="aboutme">
                                <b>About Me:</b><br></br> My name is Isai Lopez Rodas and I am a second year student at UCSC. I am a Branson <br></br>
                                                          alum (Class of 2017) and an NGS alum as well. 
                            </p>
                        </Col>
                        <Col>
                            <img src={branson} className="branson" alt="branson"></img>
                            <br></br>
                            <br></br>
                            <br></br>
                            <img src={madrid} className="madrid" alt="madrid"></img>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <img className="ucsclogo" src={logo} alt="ucsc logo"></img>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default AboutMe