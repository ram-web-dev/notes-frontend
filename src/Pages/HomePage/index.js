import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Header from "../../components/Header";
import NoteList from "../../components/NoteList";
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";

const HomePage = () => {
  const navigate = useNavigate();
  const jwtToken = Cookies.get("jwt_token");
  if (jwtToken === undefined) {
    return <Navigate to="/login" replace={true} />;
  }
  const onClickCreateNote = () => {
    navigate("/create-note");
  };
  return (
    <Container>
      <Header />
      <div className="d-flex justify-content-end pr-3">
        <Button
          variant="white"
          className=" mt-3 mb-3"
          onClick={onClickCreateNote}
        >
          ➕ Create Note
        </Button>
      </div>
      <NoteList />
    </Container>
  );
};

export default HomePage;
