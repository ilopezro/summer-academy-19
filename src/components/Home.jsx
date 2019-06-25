import React, {Component} from 'react'
import Navbar from './navbar'
import '../styles/home.css'
import edImage from '../assets/education.jpg'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class Home extends Component{

    render(){
        return(
            <div className="Header">
                <Navbar />
                <Container fluid="true">
                    <Row>
                        <Col md="4"> 
                            <h5 className="welcome">Welcome!</h5>
                            <p className="welcomeMsg">
                                Welcome to NGS' Summer Academy 2019! This will be the class webpage (for the most part)
                                for our Web Development elective. You can navigate the site as usual, but here is where 
                                I will post resources for you to use and also allow for you to give me feedback. This site 
                                is also an example of the many things you can do if you decide to pursue a CS degree in the 
                                future. I have used several different technologies in creating this site, but unfortunately, we 
                                won't be able to go through it all. 
                            </p>
                        </Col>
                        <Col md="4" id="image">
                            <img src={edImage} className="edImage"/>
                            <br></br>
                            <h3>
                                <i className="quote">"Education is the passport to the future, for tomorrow 
                                belongs to those who prepare for it today" - Malcolm X</i> 
                            </h3>
                        </Col>
                        <Col md="4"> 2 of 2</Col>
                    </Row>
                    <Row>
                        <Col> Second row </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Home;