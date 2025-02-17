import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Loader from "../Loader";
import { useNavigate } from "react-router-dom";

function SignUpForm() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onChangeNameInput = (e) => {
    setName(e.target.value);
  };
  const onChangeEmailInput = (e) => {
    setEmail(e.target.value);
  };

  const onChangePasswordInput = (e) => {
    setPassword(e.target.value);
  };

  const onSubmitLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const url = "https://notes-backend-excp.onrender.com/signup";
    const userCredentials = { name, email, password };

    const options = {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(userCredentials),
    };
    const response = await fetch(url, options);

    if (response.ok) {
      navigate("/login");
    } else {
      const data = await response.json();
      setErrorMessage(data.errorMessage);
    }
    setIsLoading(false);
  };

  return isLoading ? (
    <Loader />
  ) : (
    <Form onSubmit={onSubmitLogin}>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={onChangeNameInput}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={onChangeEmailInput}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          value={password}
          onChange={onChangePasswordInput}
        />
      </Form.Group>
      <Form.Text className="text-danger">{errorMessage}</Form.Text>
      <div>
        <Button className="mt-3" variant="primary" type="submit">
          SignUp
        </Button>
      </div>
    </Form>
  );
}

export default SignUpForm;
