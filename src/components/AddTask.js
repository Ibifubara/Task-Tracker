import { useState } from 'react'

const AddTask = ({ onAdd}) => {
    const[text, setText] = useState('')
    const[desc, setDesc] = useState('')
    const[reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()

        if(!text){
            alert('Please add task')
            return
        }

        onAdd({ text, desc, reminder})

        setText('')
        setDesc('')
        setReminder(false)
    }

  return (
    <form className='add-form' onSubmit={onSubmit}> 
      <div className='form-control'>
        <label>Task</label>
        <input type="text" placeholder="Add Task" value={text} onChange={(e) => setText(e.target.value)}/>
      </div>
      <div className='form-control'>
        <label>Description</label>
        <input type="text" placeholder="Description with day and time" value={desc} onChange={(e) => setDesc(e.target.value)}/>
      </div>
      <div className='form-control checked'>
        <label>Set Reminder</label>
        <input type="checkbox" checked={reminder} value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)}/>
      </div>

      <input type="submit"  value='Save Task' className='btn form-btn'/>
    </form>
  )
}

export default AddTask
