import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./index.css";

const NoteItem = ({ noteDetails: { title, content, category } }) => {
  return (
    <li className="note-item">
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{category}</Card.Subtitle>
          <Card.Text>{content}</Card.Text>
          <div className="note-buttons-container mt-4">
            <Button variant="primary" className="note-btn">
              Pin
            </Button>
            <Button variant="primary" className="note-btn">
              Archive
            </Button>
          </div>
        </Card.Body>
      </Card>
    </li>
  );
};

export default NoteItem;
