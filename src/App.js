import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import About from "./components/About";

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Morning Run",
      desc: "Good for you at 6:00am",
      reminder: true,
    },
    {
      id: 2,
      text: "Salon Appointment",
      desc: "March 8th at 2:00pm",
      reminder: true,
    },
    {
      id: 3,
      text: "Grocery Shopping",
      desc: "March 10th at 6:00pm",
      reminder: false,
    },
  ]);

  // Functionnto add task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000 + 1);

    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  // Funtion to delete task from board
  const deleteEvent = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <Router>
      <div className="container">
        <Header
          onAdd={() => setShowAddTask(!showAddTask)}
          showAdd={showAddTask}
        />

        <Routes>
          <Route
            path="/"
            element={
              <>
                {showAddTask && <AddTask onAdd={addTask} />}
                {tasks.length > 0 ? (
                  <Tasks
                    tasks={tasks}
                    onDelete={deleteEvent}
                    onToggle={toggleReminder}
                  />
                ) : (
                  "Yaayyyy, you cleared your task board"
                )}
              </>
            }
          />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
