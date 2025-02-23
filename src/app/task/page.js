export default function TasksPage() {
  // Dummy task data
  const tasks = [
    { id: 1, title: "Build Task Manager UI", completed: true },
    { id: 2, title: "Implement Task CRUD", completed: false },
    { id: 3, title: "Integrate Database", completed: false },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold">Tasks</h1>
      <ul className="mt-4 space-y-2">
        {tasks.map((task) => (
          <li
            key={task.id}
            className={`p-4 border rounded ${
              task.completed ? "bg-green-200" : "bg-red-200"
            }`}
          >
            {task.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
