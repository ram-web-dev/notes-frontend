import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Loader from "../Loader";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

function CreateNoteForm() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

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
    const url = "https://notes-backend-excp.onrender.com/notes";
    const notesData = { title, content, category };

    const options = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwtToken}`,
      },
      method: "POST",
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

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
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
          Submit
        </Button>
      </div>
    </Form>
  );
}

export default CreateNoteForm;
