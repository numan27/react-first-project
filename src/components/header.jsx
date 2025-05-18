import { Navbar, Container, Nav, Button } from "react-bootstrap/";
import SiteLogo from "../assets/logo.png";

function Header() {
  return (
    <Navbar expand="lg" className="">
      <Container>
        <Navbar.Brand href="#home">
          <img src={SiteLogo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto gap-4">
            <Nav.Link href="#home">Solution</Nav.Link>
            <Nav.Link href="#link">Pricing</Nav.Link>
            <Nav.Link href="#link">Blog</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            <Nav.Link href="#link">Contact</Nav.Link>
          </Nav>{" "}
          <Nav className="ms-auto gap-3">
            <Button variant="outline-light" className="loginBtn px-4">
              Login
            </Button>
            <Button className="registerBtn px-4 primary-bg">Get Started</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
