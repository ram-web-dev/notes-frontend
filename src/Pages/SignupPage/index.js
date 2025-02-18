import "./index.css";
import SignupForm from "../../components/SignupForm";
import { Link } from "react-router-dom";

const SignupPage = () => {
  return (
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
  );
};

export default SignupPage;
