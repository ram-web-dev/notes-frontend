import "./index.css";
import LoginForm from "../../components/LoginForm";
const LoginPage = () => {
  return (
    <div className="w-100 d-flex justify-content-center mt-5">
      <div className="login-form ">
        <h1 className="mb-5">Login</h1>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
