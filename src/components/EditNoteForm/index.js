import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Loader from "../Loader";
import { useNavigate, useParams } from "react-router-dom";
import Cookies from "js-cookie";
import { apiUrl } from "../../constants";

function EditNoteForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const fetchNote = async () => {
    setIsLoading(true);
    const jwtToken = Cookies.get("jwt_token");
    const url = `${apiUrl}/notes/${id}`;
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
      const {
        note: { title, content, category },
      } = data;

      setTitle(title);
      setContent(content);
      setCategory(category);
    } else {
      navigate("/");
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchNote();
  }, []);

  const onChangeTitleInput = (e) => {
    setTitle(e.target.value);
  };
  const onChangeContentInput = (e) => {
    setContent(e.target.value);
  };

  const onChangeCategoryInput = (e) => {
    setCategory(e.target.value);
  };

  const onSubmitLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const jwtToken = Cookies.get("jwt_token");
    const url = `${apiUrl}/notes/${id}`;
    const notesData = { title, content, category };

    const options = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwtToken}`,
      },
      method: "PUT",
      body: JSON.stringify(notesData),
    };
    const response = await fetch(url, options);

    if (response.ok) {
      navigate("/");
    } else {
      const data = await response.json();
      setErrorMessage(data.errorMessage);
    }
    setIsLoading(false);
  };

  return isLoading ? (
    <Loader />
  ) : (
    <Form onSubmit={onSubmitLogin}>
      <Form.Group className="mb-3" controlId="title">
        <Form.Label>Note Title</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Notes Title"
          value={title}
          onChange={onChangeTitleInput}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="category">
        <Form.Label>Note category</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Notes Category"
          value={category}
          onChange={onChangeCategoryInput}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="content">
        <Form.Label>Content</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Content"
          value={content}
          onChange={onChangeContentInput}
        />
      </Form.Group>
      <Form.Text className="text-danger">{errorMessage}</Form.Text>
      <div>
        <Button className="mt-3" variant="primary" type="submit">
          Save
        </Button>
      </div>
    </Form>
  );
}

export default EditNoteForm;
