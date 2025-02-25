export default function TaskItem({ task, toggleTask, deleteTask }) {
  return (
    <li className="flex justify-between items-center bg-gray-100 p-2 rounded">
      <span
        onClick={() => toggleTask(task.id)}
        className={`cursor-pointer ${task.completed ? "line-through text-gray-500" : ""}`}
      >
        {task.text}
      </span>
      <button onClick={() => deleteTask(task.id)} className="text-red-500">✖</button>
    </li>
  );
}
