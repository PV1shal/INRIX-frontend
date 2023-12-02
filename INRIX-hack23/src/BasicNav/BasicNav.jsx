
import '../commonStyle/common.css'; 
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function BasicNav() {
  return (
    <>
    <Navbar bg="light" data-bs-theme="light" className='navbar-custom'>
      <Container>
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link> 
        </Nav>
        <Nav className = "title">
          <title> Apt Finder</title>
        </Nav>

        <Nav>
          <button>
            <title> log in</title>
          </button>
        </Nav>
      </Container>
    </Navbar>
    </>
  );
}
export default BasicNav;

