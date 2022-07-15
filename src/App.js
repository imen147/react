
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';

function App() {
  return (
    <div className="App">
    <Navbar bg="light">
    <Container>
      <Navbar.Brand href="#home">Brand link</Navbar.Brand>
    </Container>
  </Navbar>
  <br />
  <Navbar bg="light">
    <Container>
      <Navbar.Brand>Brand text</Navbar.Brand>
    </Container>
  </Navbar>
  <br />
  <Navbar bg="dark">
    <Container>
      <Navbar.Brand href="#home">
        <img
          src="/logo.svg"
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt="React Bootstrap logo"
        />
      </Navbar.Brand>
    </Container>
  </Navbar>
  

 
      <Form>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
      </Form>
    );
  }
  
  export default FormGroupExample;
  <>
  {[
    'primary',
    'secondary',
    'success',
    'danger',
    'warning',
    'info',
    'light',
    'dark',
  ].map((variant) => (
    <Alert key={variant} variant={variant}>
      This is a {variant} alert with{' '}
      <Alert.Link href="#">an example link</Alert.Link>. Give it a click if
      you like.
    </Alert>
  ))}
</>  
    </div>
  );
}

export default App;
