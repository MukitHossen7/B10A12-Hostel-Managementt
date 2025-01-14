const AdminProfile = () => {
  return (
    <div>
      <div className="p-5">
        <h2 className="text-xl font-bold mb-4">Admin Profile</h2>
        <div className="bg-gray-100 p-4 rounded-lg shadow-md">
          <img
            src="/admin-avatar.png"
            alt="Admin"
            className="w-20 h-20 rounded-full mb-3"
          />
          <p>
            <strong>Name:</strong> Admin Name
          </p>
          <p>
            <strong>Email:</strong> admin@example.com
          </p>
          <p>
            <strong>Meals Added:</strong> 20
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;
