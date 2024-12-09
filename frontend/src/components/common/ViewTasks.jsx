import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Aside from "./Aside";

const ViewTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [page, setPage] = useState(1);
  const [limit] = useState(10);
  const [totalPages, setTotalPages] = useState(0);
  const [sortBy, setSortBy] = useState("dueDate");
  const [order, setOrder] = useState("asc");
  const [filters, setFilters] = useState({ title: "" });

  useEffect(() => {
    fetchTasks();
  }, [page, sortBy, order, filters]);

  const fetchTasks = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/tasks", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        params: { page, limit, sortBy, order, ...filters },
      });

      setTasks(response.data.tasks || []);
      setTotalPages(response.data.totalPages || 1);
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to load tasks.");
    }
  };

  const deleteTask = async (taskId) => {
    try {
      await axios.delete(`http://localhost:8000/api/tasks/${taskId}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });

      toast.success("Task deleted successfully!");
      fetchTasks();
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to delete task.");
    }
  };

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  return (
    <div className="dashboard-body">
      <Aside/>
      <header className="dashboard-header">
        <h4>View Tasks</h4>
      </header>
      <div className="bg-white card-box p0 border-20">
        <div className="table-responsive pt-25 pb-25 pe-4 ps-4">
          <div className="d-flex justify-content-between mb-3">
            <input
              type="text"
              name="title"
              placeholder="Search by Title"
              value={filters.title}
              onChange={handleFilterChange}
              className="form-control form-control-sm"
            />
            <div>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="form-select form-select-sm"
              >
                <option value="title">Title</option>
                <option value="dueDate">Due Date</option>
              </select>
              <select
                value={order}
                onChange={(e) => setOrder(e.target.value)}
                className="form-select form-select-sm"
              >
                <option value="asc">Ascending</option>
                <option value="desc">Descending</option>
              </select>
            </div>
          </div>

          <table className="table saved-search-table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Status</th>
                <th>Due Date</th>
                <th>Priority</th>
                <th>Created At</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {tasks.length > 0 ? (
                tasks.map((task) => (
                  <tr key={task._id}>
                    <td>{task.title}</td>
                    <td>{task.description}</td>
                    <td>{task.status}</td>
                    <td>{new Date(task.dueDate).toLocaleDateString()}</td>
                    <td>{task.priority}</td>
                    <td>{new Date(task.createdAt).toLocaleDateString()}</td>
                    <td>
                      <div className="d-flex justify-content-end">
                        <Link to={`/task/edit/${task._id}`}>
                          <i className="fa-solid fa-pencil pt-3" ></i>
                        </Link>
                        <button
                          onClick={() => deleteTask(task._id)}
                          className="btn btn-link text-danger"
                        >
                          <i className="fa-solid fa-trash"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7" className="text-center">
                    No tasks found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>

          <div className="d-flex justify-content-center">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                className={`btn ms-2 btn-sm ${page === index + 1 ? "btn-primary" : "btn-outline-primary"}`}
                onClick={() => setPage(index + 1)}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewTasks;
