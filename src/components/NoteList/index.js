import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import Loader from "../Loader";
import NoteItem from "../NoteItem";
import { useNavigate } from "react-router-dom";
import "./index.css";

const NoteList = () => {
  const navigate = useNavigate();
  const [notes, setNotes] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  const fetchUserNotes = async () => {
    setIsLoading(true);
    const jwtToken = Cookies.get("jwt_token");

    const url = "https://notes-backend-excp.onrender.com/notes";
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

  const renderNotesList = () => {
    if (notes.length === 0) {
      return <h3 className="text-center">No notes created</h3>;
    }
    return (
      <ul className="notes-list">
        {notes.map((eachNote) => (
          <NoteItem noteDetails={eachNote} key={eachNote.id} />
        ))}
      </ul>
    );
  };

  return isLoading ? <Loader /> : renderNotesList();
};

export default NoteList;
