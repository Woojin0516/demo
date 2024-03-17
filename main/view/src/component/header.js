import {Navbar , Container , Nav} from "react-bootstrap";

const Header = function (){

    return(
        <Navbar bg="light" data-bs-theme="light" className="product-bg">
            <Container>
                <Navbar.Brand href="#home">File</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#upload">Upload</Nav.Link>
                    <Nav.Link href="#down">Download</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default  Header;