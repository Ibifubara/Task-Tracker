import Event from './Event'

const Tasks = ({ tasks, onDelete, onToggle}) => {
    
  return (
    <>
      {tasks.map( (task) => (
        <Event key={task.id} task={task}
        onDelete={onDelete}  onToggle={onToggle}/>
      ))}
    </>
  )
}

export default Tasks
