import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import NoteItemHolder from "../NoteItemLoader/Index";
import { apiUrl } from "../../constants";

const NoteItem = ({
  noteDetails: { id, title, content, category, pinned },
  deleteNote,
}) => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [isPinned, setIsPinned] = useState(pinned);

  const onClickEdit = () => {
    navigate(`/notes/${id}/edit`);
  };

  const onClickUnArchive = async () => {
    setIsLoading(true);
    const jwtToken = Cookies.get("jwt_token");
    const url = `${apiUrl}/notes/${id}/archive`;
    const archivedData = {
      archived: false,
    };
    const options = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwtToken}`,
      },
      method: "PATCH",
      body: JSON.stringify(archivedData),
    };
    await fetch(url, options);
    deleteNote(id);
    setIsLoading(false);
  };

  const onClickPin = async () => {
    setIsLoading(true);
    const jwtToken = Cookies.get("jwt_token");
    const url = `${apiUrl}/notes/${id}/pin`;
    const pinnedData = {
      pinned: !isPinned,
    };
    const options = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwtToken}`,
      },
      method: "PATCH",
      body: JSON.stringify(pinnedData),
    };
    const response = await fetch(url, options);
    const data = await response.json();

    setIsPinned(data.pinned);
    setIsLoading(false);
  };

  return (
    <li className={`note-item ${isPinned ? "pinned" : ""}`}>
      {isLoading ? (
        <NoteItemHolder />
      ) : (
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {category}
            </Card.Subtitle>
            <Card.Text>{content}</Card.Text>
            <div className="d-flex flex-column mt-5">
              <Button variant="primary" className="mb-3" onClick={onClickPin}>
                Pin
              </Button>
              <Button variant="secondary" onClick={onClickUnArchive}>
                UnArchive
              </Button>
            </div>
            <div className="note-buttons-container mt-3">
              <Button
                variant="warning"
                className="note-btn"
                onClick={onClickEdit}
              >
                Edit
              </Button>
              <Button variant="danger" className="note-btn">
                Delete
              </Button>
            </div>
          </Card.Body>
        </Card>
      )}
    </li>
  );
};

export default NoteItem;
