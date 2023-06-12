import {
  Button,
  Card,
  Container,
  TextField,
  Typography,
  Grid,
  Checkbox,
} from "@mui/material";
import React, { useState } from "react";

const buttonStyles = {
  margin: 1,
};

const App = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [errors, setErrors] = useState([]);

  const addTaskHandler = () => {
    const isValid = validate(newTodo);

    if (isValid) {
      setTodos([...todos, { text: newTodo, checked: false }]);
      setNewTodo("");
    }
  };

  const validate = (input) => {
    let isValid = true;
    let validationErrors = [];
    if (input === "") {
      validationErrors.push("Task cannot be empty");
    }
    setErrors(validationErrors);

    if (validationErrors.length > 0) isValid = false;
    return isValid;
  };

  const deleteTask = (e) => {
    let id = Number(e.target.id);
    let newTodos = [...todos];
    newTodos = newTodos.filter((_, index) => index !== id);
    setTodos(newTodos);
  };

  const checkTask = (e) => {
    let id = Number(e.currentTarget.id);
    let newTodos = [...todos];
    newTodos[id].checked = !newTodos[id].checked;
    setTodos(newTodos);
  };

  return (
    <div>
      <Container>
        <Typography>TODO LIST</Typography>
        <Grid container alignItems="center" spacing={2}>
          <Grid item>
            <TextField
              onChange={(e) => {
                setNewTodo(e.target.value);
                setErrors([]);
              }}
              value={newTodo}
              error={errors.length > 0}
              helperText={errors.map((error, index) => (
                <div key={index}>{error}</div>
              ))}
            />
          </Grid>
          <Grid item>
            <Button variant="contained" onClick={addTaskHandler}>
              Add Task
            </Button>
          </Grid>
        </Grid>
        {todos.map((todo, index) => {
          return (
            <Card
              sx={{
                width: 400,
                display: "flex",
                alignItems: "center",
                marginTop: 2,
              }}
              key={index}
            >
              <Checkbox
                id={index}
                sx={{ marginRight: 1 }}
                checked={todo.checked}
                onChange={checkTask}
              />
              <Typography sx={{ flex: 1 }} id={index} onClick={checkTask}>
                {todo.text}
              </Typography>

              <Button variant="contained" sx={buttonStyles}>
                Edit
              </Button>
              <Button
                variant="contained"
                sx={buttonStyles}
                onClick={deleteTask}
                id={index}
              >
                Delete
              </Button>
            </Card>
          );
        })}
      </Container>
    </div>
  );
};

export default App;
