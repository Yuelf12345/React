import React, { useState, useReducer } from "react";

interface Page2Props {}
interface Task {
  id: number;
  text: string;
  done: boolean;
}
const Reducter: React.FC<Page2Props> = () => {
  const initialTasks: Task[] = [
    { id: 0, text: "Visit Kafka Museum", done: true },
    { id: 1, text: "Watch a puppet show", done: false },
    { id: 2, text: "Lennon Wall pic", done: false },
  ];
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

  function handleAddTask(text: string) {
    dispatch({
      type: "added",
      id: tasks.length,
      text: text,
    });
  }

  function handleChangeTask(task: Task) {
    dispatch({
      type: "changed",
      task: task,
    });
  }

  function handleDeleteTask(taskId: number) {
    dispatch({
      type: "deleted",
      id: taskId,
    });
  }
  return (
    <>
      <h1>Prague itinerary</h1>
      <AddTask onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </>
  );
};

export default Reducter;

const tasksReducer = (tasks: any, action: any) => {
  switch (action.type) {
    case "added": {
      return [
        ...tasks,
        {
          id: action.id,
          text: action.text,
          done: false,
        },
      ];
    }
    case "changed": {
      return tasks.map((t: any) => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    }
    case "deleted": {
      return tasks.filter((t: any) => t.id !== action.id);
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
};

interface AddTaskProps {
  onAddTask: (text: string) => void;
}
const AddTask: React.FC<AddTaskProps> = ({ onAddTask }) => {
  const [text, setText] = useState("");
  return (
    <>
      <input
        placeholder="Add task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={() => {
          onAddTask(text);
          setText("");
        }}
      >
        Add
      </button>
    </>
  );
};

interface TaskListProps {
  tasks: Task[];
  onChangeTask: (task: Task) => void;
  onDeleteTask: (taskId: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({
  tasks,
  onChangeTask,
  onDeleteTask,
}) => {
  return (
    <ul>
      {tasks.map((task: any) => (
        <li key={task.id}>
          <Task
            task={task}
            onChangeTask={onChangeTask}
            onDeleteTask={onDeleteTask}
          />
        </li>
      ))}
    </ul>
  );
};

interface TaskProps {
  task: Task;
  onChangeTask: (task: Task) => void;
  onDeleteTask: (taskId: number) => void;
}

const Task: React.FC<TaskProps> = ({ task, onChangeTask, onDeleteTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(task.text);

  let taskContent;
  const save = () => {
    setIsEditing(false);
    onChangeTask({ ...task, text: editText });
  };
  if (isEditing) {
    taskContent = (
      <>
        <input
          value={editText}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEditText(e.target.value)
          }
        />
        <button onClick={save}>Save</button>
      </>
    );
  } else {
    taskContent = (
      <>
        {task.text}
        <button onClick={() => setIsEditing(true)}>Edit</button>
      </>
    );
  }
  return (
    <label>
      <input
        type="checkbox"
        checked={task.done}
        onChange={() => onChangeTask({ ...task, done: !task.done })}
      />
      {taskContent}
      <button onClick={() => onDeleteTask(task.id)}>Delete</button>
    </label>
  );
};
