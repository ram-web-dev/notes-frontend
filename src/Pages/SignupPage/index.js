import "./index.css";
import SignupForm from "../../components/SignupForm";

const SignupPage = () => {
  return (
    <div className="w-100 d-flex justify-content-center mt-5">
      <div className="signup-form ">
        <h1 className="mb-5">Signup</h1>
        <SignupForm />
      </div>
    </div>
  );
};

export default SignupPage;
