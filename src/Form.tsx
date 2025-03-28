import React, { useState, useEffect } from "react";

interface TaskFormProps {
  onSubmit: (
    title: string,
    description: string,
    dueDate: string,
    priority: string
  ) => void;
  initialTitle?: string;
  initialDescription?: string;
  initialDueDate?: string;
  initialPriority?: string;
}

const TaskForm: React.FC<TaskFormProps> = ({
  onSubmit,
  initialTitle = "",
  initialDescription = "",
  initialDueDate = "",
  initialPriority = "",
}) => {
  const [title, setTitle] = useState(initialTitle);
  const [description, setDescription] = useState(initialDescription);
  const [dueDate, setDueDate] = useState(initialDueDate);
  const [priority, setPriority] = useState(initialPriority);

  useEffect(() => {
    setTitle(initialTitle);
    setDescription(initialDescription);
    setDueDate(initialDueDate);
    setPriority(initialPriority);
  }, [initialTitle, initialDescription, initialDueDate, initialPriority]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(title, description, dueDate, priority);
    setTitle("");
    setDescription("");
    setDueDate("");
    setPriority("");
  };

  return (
    <form
      className="max-w-lg mx-auto bg-white shadow-lg rounded-xl p-6 space-y-5 border border-gray-200"
      onSubmit={handleSubmit}
    >
      <h2 className="text-2xl font-bold text-gray-700 text-center">Create Task</h2>
      
      <div className="flex flex-col">
        <label htmlFor="title" className="text-gray-600 font-medium">Title</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="mt-1 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Enter task title"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="description" className="text-gray-600 font-medium">Description</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="mt-1 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Enter task description"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="dueDate" className="text-gray-600 font-medium">Due Date</label>
        <input
          type="date"
          id="dueDate"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          className="mt-1 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="priority" className="text-gray-600 font-medium">Priority</label>
        <select
          id="priority"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className="mt-1 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-md transition duration-300"
      >
        Create Task
      </button>
    </form>
  );
};

export default TaskForm;