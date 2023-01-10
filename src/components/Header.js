
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function Header() {
    return(
        <header>
            <Navbar expand="lg" variant="dark" bg="dark">
                <Container>
                    <Navbar.Brand href='#'>
                        B2B Design
                    </Navbar.Brand>
                    <Navbar.Collapse>

                        <Nav className="me-auto">
                            <Nav.Link>Home</Nav.Link>
                            <Nav.Link>About</Nav.Link>
                            <Nav.Link>Contact</Nav.Link>
                            <NavDropdown title="Products & Services" id="collapsible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Design & Branding</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Web Dev</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Marketing</NavDropdown.Item>
                            </NavDropdown>
                            
                        </Nav>
                    </Navbar.Collapse>
                    <Navbar.Toggle className="navbar-toggler" type="button" data-bs-toggle="collapse"></Navbar.Toggle>
                </Container>
            </Navbar>
        </header>
    )
}