import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Header from "../../components/Header";
import NoteList from "../../components/NoteList";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  const onClickCreateNote = () => {
    navigate("/create-note");
  };
  return (
    <Container>
      <Header />
      <div className="d-flex justify-content-end pr-3">
        <Button variant="primary" className=" mt-3" onClick={onClickCreateNote}>
          Create Note
        </Button>
      </div>
      <NoteList />
    </Container>
  );
};

export default HomePage;
