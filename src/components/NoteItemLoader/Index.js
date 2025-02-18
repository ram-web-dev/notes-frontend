import Card from "react-bootstrap/Card";
import Placeholder from "react-bootstrap/Placeholder";
const NoteItemHolder = () => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Placeholder as={Card.Title} animation="glow">
          <Placeholder xs={6} />
        </Placeholder>
        <Placeholder as={Card.Subtitle} animation="glow">
          <Placeholder xs={4} />
        </Placeholder>
        <Placeholder as={Card.Text} animation="glow">
          <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />
          <Placeholder xs={6} /> <Placeholder xs={8} />
        </Placeholder>
        <Placeholder.Button variant="primary" xs={12} className="mt-4 mb-3" />
        <Placeholder.Button variant="secondary" xs={12} />
        <div className="note-buttons-container mt-3">
          <Placeholder.Button variant="warning" xs={5} className="note-btn" />
          <Placeholder.Button variant="danger" xs={5} className="note-btn" />
        </div>
      </Card.Body>
    </Card>
  );
};

export default NoteItemHolder;
