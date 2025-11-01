export default function Dashboard() {
  // You can later replace these static values with real data from API or state
  const summary = [
    { title: "Total Users", value: 120, color: "text-blue-600" },
    { title: "Total Policies", value: 58, color: "text-green-600" },
  ];

  return (
    <main className="p-6 min-h-screen  flex flex-col justify-center items-center ">
      <h1 className="text-center text-3xl font-bold text-gray-800 mb-6">
        Dashboard Overview
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-content-center">
        {summary.map((item) => (
          <div
            key={item.title}
            className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition-all duration-300"
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
    </main>
  );
}
