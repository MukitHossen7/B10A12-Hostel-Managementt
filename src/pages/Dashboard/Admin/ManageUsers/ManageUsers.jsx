const ManageUsers = () => {
  return (
    <div>
      <div className="p-5">
        <h2 className="text-xl font-bold mb-4">Manage Users</h2>
        <input
          type="text"
          placeholder="Search by username or email"
          className="w-full p-2 border border-gray-300 rounded-lg mb-4"
        />
        <table className="table-auto w-full border-collapse">
          <thead>
            <tr>
              <th className="border px-4 py-2">Username</th>
              <th className="border px-4 py-2">Email</th>
              <th className="border px-4 py-2">Subscription Status</th>
              <th className="border px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">JohnDoe</td>
              <td className="border px-4 py-2">john@example.com</td>
              <td className="border px-4 py-2">Gold</td>
              <td className="border px-4 py-2">
                <button className="bg-blue-500 text-white px-3 py-1 rounded-md">
                  Make Admin
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
