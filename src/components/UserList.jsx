import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const snapshot = await getDocs(collection(db, "users"));
      const userData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setUsers(userData);
    };

    getUsers();
  }, []);

  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-4">
        Ro'yxatdan o'tgan foydalanuvchilar
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {users.map((user) => (
          <div key={user.id} className="flex flex-col items-center  ">
            <div className="avatar avatar-online avatar-placeholder ">
              {" "}
              <img
                src={user.avatar}
                alt="avatar"
                className="w-16 h-16 rounded-full mb-2"
              />
            </div>

            <p className="text-sm">{user.displayName || "No name"}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;
