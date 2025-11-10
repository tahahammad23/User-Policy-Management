import { NavLink } from "react-router-dom";
import Button from "../components/Buttons";

export default function Dashboard() {
  // You can later replace these static values with real data from API or state
  const summary = [
    { title: "Total Users", value: 120, color: "text-blue-600" },
    { title: "Total Policies", value: 158, color: "text-green-600" },
  ];

  return (
    <main className="p-6  flex flex-col justify-center items-center gap-8">
      <h1 className="text-center text-3xl font-bold text-gray-800 mb-6">
        Dashboard Overview
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-2 gap-6 place-content-center ">
        {summary.map((item) => (
          <div
            key={item.title}
            className="rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition-all duration-300 bg-blue-100"
          >
            <h2 className="text-xl font-semibold text-gray-700">
              {item.title}
            </h2>
            <p className={`text-4xl font-bold mt-3 ${item.color}`}>
              {item.value}
            </p>
          </div>
        ))}
      </div>
      <div>
        <NavLink to="/users"><Button text="Users"  /></NavLink>
        <NavLink to="/policies"><Button text="Policies"/></NavLink>
      </div>
    </main>
  );
}
