import React from 'react';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const Head = ({onShowHome, onShowSearchPlayer, onShowSearchMatch, lngHead}) => (
    <Navbar bg="dark" expand="lg"  variant="dark">
        <Navbar.Brand 
            style={{fontFamily: "Kelly Slab, cursive", fontSize: "28px"}} 
            href="#home" onClick={() => onShowHome()}>
            ROSHAN DEFENSE
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="#player" onClick={() => onShowSearchPlayer()}>{lngHead.Players}</Nav.Link>
                <Nav.Link href="#matches" onClick={() => onShowSearchMatch()}>{lngHead.Matches}</Nav.Link>
                <Nav.Link href="#leaders" >{lngHead.Leaders}</Nav.Link>
            </Nav>
            <Form inline>
                <Button variant="outline-info">{lngHead.Login}</Button>
            </Form>
        </Navbar.Collapse>
    </Navbar>
)
export default Head;

