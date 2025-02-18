import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import Loader from "../Loader";
import ArchiveNoteItem from "../ArchivedNoteItem";
import { useNavigate } from "react-router-dom";
import { apiUrl } from "../../constants";

const NoteList = () => {
  const navigate = useNavigate();
  const [notes, setNotes] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  const fetchUserNotes = async () => {
    setIsLoading(true);
    const jwtToken = Cookies.get("jwt_token");

    const url = `${apiUrl}/notes/archives`;
    const options = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwtToken}`,
      },
      method: "GET",
    };
    const response = await fetch(url, options);
    const data = await response.json();
    if (response.ok) {
      setNotes(data.notes);
    } else {
      Cookies.remove("jwt_token");
      navigate("/login");
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchUserNotes();
  }, []);

  const deleteNote = (noteId) => {
    setNotes(notes.filter((eachNote) => eachNote.id !== noteId));
  };

  const renderNotesList = () => {
    if (notes.length === 0) {
      return <h3 className="text-center">No Notes Archived</h3>;
    }
    return (
      <ul className="notes-list">
        {notes.map((eachNote) => (
          <ArchiveNoteItem
            noteDetails={eachNote}
            key={eachNote.id}
            deleteNote={deleteNote}
          />
        ))}
      </ul>
    );
  };

  return isLoading ? <Loader /> : renderNotesList();
};

export default NoteList;
