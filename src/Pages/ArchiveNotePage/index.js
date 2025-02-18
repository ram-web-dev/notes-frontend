import { Container } from "react-bootstrap";
import Header from "../../components/Header";
import ArchivedNoteList from "../../components/ArchivedNoteList";
import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";

const ArchivedNotePage = () => {
  const jwtToken = Cookies.get("jwt_token");
  if (jwtToken === undefined) {
    return <Navigate to="/login" replace={true} />;
  }
  return (
    <Container>
      <Header />
      <ArchivedNoteList />
    </Container>
  );
};

export default ArchivedNotePage;
