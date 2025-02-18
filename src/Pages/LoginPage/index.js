import "./index.css";
import { Link } from "react-router-dom";
import LoginForm from "../../components/LoginForm";
import { Container } from "react-bootstrap";
const LoginPage = () => {
  return (
    <Container>
      <div className="w-100 d-flex justify-content-center mt-5">
        <div className="login-form ">
          <h1 className="mb-5">Login</h1>
          <LoginForm />
          <div className="text-end">
            <Link to="/signup" replace={true}>
              New User?
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default LoginPage;
