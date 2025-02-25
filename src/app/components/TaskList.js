import TaskItem from "./TaskItem";

export default function TaskList({ tasks, toggleTask, deleteTask }) {
  return (
    <ul className="space-y-2">
      {tasks.map((task, index) => (
        <TaskItem key={index} task={task} toggleTask={toggleTask} deleteTask={deleteTask} />
      ))}
    </ul>
  );
}
