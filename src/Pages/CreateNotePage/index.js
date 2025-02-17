import "./index.css";
import CreateNotesForm from "../../components/CreateNoteForm";

const CreateNotePage = () => {
  return (
    <div className="w-100 d-flex justify-content-center mt-5">
      <div className="signup-form ">
        <h1 className="mb-5">Create Note</h1>
        <CreateNotesForm />
      </div>
    </div>
  );
};

export default CreateNotePage;
