import React, {Component} from 'react'
import Navbar from './navbar'
import '../styles/contact.css'
import cartoon from '../assets/calvinandhobbes.jpg'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {MdEmail} from 'react-icons/md'
import {MdPhoneIphone} from 'react-icons/md'

class Contact extends Component{
    render(){
        return(
            <div>
                <Navbar/>
                <Container fluid="true">
                    <Row>
                        <Col>
                            <h4 className="ctTitle">Contact</h4>
                        </Col>
                    </Row>
                    <Row>
                        <Col md="8">
                            <img className="cartoon" src={cartoon} alt="cartoon"></img>
                        </Col>
                        <Col>
                        <br></br><br></br>
                            <p className="quote2"><i>
                                “You know, sometimes kids get bad grades in school because 
                                the class moves too slow for them. Einstein got D's in school. 
                                Well guess what, I get F's!!!”</i>
                                <br></br>
                                - Bill Waterson
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        {/* this is the place where communication methods will go */}
                        <h4>How to Communicate with Me!</h4>
                    </Row>
                    <Row>
                        <Col>
                            <p className="emailDes"> 
                                <a href="mailto:ilopezro@ucsc.edu"> <MdEmail className="email"/> </a> 
                                Email: ilopezro@ucsc.edu
                            </p>
                            <p>
                                <a href="tel:1-415-786-3592"> <MdPhoneIphone className="phone"/> </a>
                                Phone number: 415-786-3592
                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Contact