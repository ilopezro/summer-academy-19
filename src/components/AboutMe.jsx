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
                            <p className = "aboutme" id="aboutme">
                                <b>About Me:</b><br></br> My name is Isai Lopez Rodas and I just finished my second <br></br> 
                                                          year student at UCSC. I am a Branson alum (Class of 2017) <br></br> 
                                                          and an NGS alum as well. I am back this year to teach two <br></br>
                                                          math classes and this web development elective. 
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