import "./index.css";
import CreateNotesForm from "../../components/CreateNoteForm";
import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";
import { Container } from "react-bootstrap";

const CreateNotePage = () => {
  const jwtToken = Cookies.get("jwt_token");
  if (jwtToken === undefined) {
    return <Navigate to="/login" replace={true} />;
  }
  return (
    <Container>
      <div className="w-100 d-flex justify-content-center mt-5">
        <div className="note-form ">
          <h1 className="mb-5">Create Note</h1>
          <CreateNotesForm />
        </div>
      </div>
    </Container>
  );
};

export default CreateNotePage;
