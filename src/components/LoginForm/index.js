import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Cookies from "js-cookie";
import Loader from "../Loader";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onLoginSuccess = (token) => {
    Cookies.set("jwt_token", token, { expires: 30 });
    navigate("/");
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
    const url = "https://notes-backend-excp.onrender.com/login";
    const userCredentials = { email, password };

    const options = {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(userCredentials),
    };

    const response = await fetch(url, options);
    const data = await response.json();
    setIsLoading(false);

    if (response.ok) {
      onLoginSuccess(data.jwtToken);
    } else {
      setErrorMessage(data.errorMessage);
    }
  };

  return isLoading ? (
    <Loader />
  ) : (
    <Form onSubmit={onSubmitLogin}>
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
          Login
        </Button>
      </div>
    </Form>
  );
}

export default LoginForm;
