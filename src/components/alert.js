import Alert from 'react-bootstrap/Alert';

function BasicExample() {
  return (
    <Alert variant="success">
      <Alert.Heading>Hey, nice to see you</Alert.Heading>
      <p>
      site has moved to https://mygenshin.web.app/
      </p>
      <hr />
      <p className="mb-0">
        <a href='https://mygenshin.web.app/'>CLICK HERE! </a>
      </p>
    </Alert>
  );
}

export default BasicExample;