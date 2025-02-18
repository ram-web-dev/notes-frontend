import "./index.css";
import SignupForm from "../../components/SignupForm";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

const SignupPage = () => {
  return (
    <Container>
      <div className="w-100 d-flex  justify-content-center mt-5">
        <div className="signup-form ">
          <h1 className="mb-5">Signup</h1>
          <SignupForm />
          <div className="text-end">
            <Link to="/login" replace={true}>
              Already have an account?
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default SignupPage;
