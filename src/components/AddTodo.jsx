import React, { useState } from "react";
import { db } from "../libs/firebase";
import { collection, addDoc } from "firebase/firestore";

function AddTodo() {
  const [title, setTitle] = useState(""); // Track todo list title
  const [isSubmitting, setIsSubmitting] = useState(false); // Track submission state
  const [error, setError] = useState(null); // Track errors

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Trim input and validate
    const trimmedTitle = title.trim();

    if (!trimmedTitle) {
      setError("Task title cannot be empty!");
      return;
    }

    try {
      setIsSubmitting(true); // Set submission state
      setError(null); // Clear previous errors

      // Add new task to firestore
      await addDoc(collection(db, "todos"), {
        title: trimmedTitle,
        completed: false,
        createdAt: new Date(),
      });

      setTitle("");
    } catch (err) {
      console.error("Error adding document: ", err);
      setError("Failed to add task, please try again!");
    } finally {
      setIsSubmitting(false); // Reset submission state
    }
  };

  return (
    <form onSubmit={handleSubmit} aria-labelledby="add-todo-form">
      <div className="input_container">
        <label htmlFor="task-input" className="visually-hidden">
          Task Title
        </label>
        <input
          type="text"
          placeholder="Input task..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          disabled={isSubmitting} // Disable input during submission
        />
      </div>

      <div className="button_container">
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Adding..." : "Add Task"}
        </button>
      </div>

      {error && <p className="error-message">{error}</p>}
    </form>
  );
}

export default AddTodo;
