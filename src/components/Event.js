import { FaTimes } from "react-icons/fa";

const Event = ({ task, onDelete, onToggle }) => {
  return (
    <div className={`event ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(task.id)}>
      <h3>
        {task.text}{" "}
        <FaTimes
          style={{ color: "darkred", cursor: "pointer" }}
          onClick={() => onDelete(task.id)}
        />
      </h3>
      <p>{task.desc}</p>
    </div>
  );
};

export default Event;
