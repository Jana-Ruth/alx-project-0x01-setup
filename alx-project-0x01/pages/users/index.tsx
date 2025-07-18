
import { useState } from "react";
import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";
import UserModal from "@/components/common/UserModal";
import { UserProps, UserData } from "@/interfaces";

interface UsersPageProps {
  posts: UserData[];
}

const Users: React.FC<UsersPageProps> = ({ posts }) => {
  const [users, setUsers] = useState<UserData[]>(posts);
  const [showModal, setShowModal] = useState(false);

  const handleAddUser = (newUser: UserData) => {
    setUsers(prev => [...prev, newUser]);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="p-4">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-semibold">Users</h1>
          <button
            className="bg-blue-700 px-4 py-2 rounded-full text-white"
            onClick={() => setShowModal(true)}
          >
            Add User
          </button>
        </div>

        {showModal && (
          <UserModal onClose={() => setShowModal(false)} onSubmit={handleAddUser} />
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {posts.map(user => (
            <UserCard key={user.id} {...user} />
          ))}
           
        </div>
      </main>
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const posts = await response.json();

  return {
    props: {
      posts,
    },
  };
}

export default Users;
