import React, { useState } from 'react';
import { UserData, UserModalProps } from '@/interfaces';

const UserModal: React.FC<UserModalProps> = ({ onClose, onSubmit }) => {
  const [user, setUser] = useState<UserData>({
    id: Date.now(),
    name: '',
    username: '',
    email: '',
    phone: '',
    website: '',
    address: {
      street: '',
      suite: '',
      city: '',
      zipcode: '',
      geo: {
        lat: '',
        lng: '',
      },
    },
    company: {
      name: '',
      catchPhrase: '',
      bs: '',
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name.startsWith('address.')) {
      const field = name.split('.')[1];
      setUser(prev => ({
        ...prev,
        address: {
          ...prev.address,
          [field]: value,
        },
      }));
    } else if (name.startsWith('company.')) {
      const field = name.split('.')[1];
      setUser(prev => ({
        ...prev,
        company: {
          ...prev.company,
          [field]: value,
        },
      }));
    } else {
      setUser(prev => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(user);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-lg shadow-xl">
        <h2 className="text-2xl font-bold mb-4 text-blue-700">Add New User</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" name="name" placeholder="Name" value={user.name} onChange={handleChange} className="input" />
          <input type="text" name="username" placeholder="Username" value={user.username} onChange={handleChange} className="input" />
          <input type="email" name="email" placeholder="Email" value={user.email} onChange={handleChange} className="input" />
          <input type="text" name="phone" placeholder="Phone" value={user.phone} onChange={handleChange} className="input" />
          <input type="text" name="website" placeholder="Website" value={user.website} onChange={handleChange} className="input" />

          <div className="text-gray-700 font-semibold">Address</div>
          <input type="text" name="address.street" placeholder="Street" value={user.address.street} onChange={handleChange} className="input" />
          <input type="text" name="address.suite" placeholder="Suite" value={user.address.suite} onChange={handleChange} className="input" />
          <input type="text" name="address.city" placeholder="City" value={user.address.city} onChange={handleChange} className="input" />
          <input type="text" name="address.zipcode" placeholder="Zipcode" value={user.address.zipcode} onChange={handleChange} className="input" />

          <div className="text-gray-700 font-semibold">Company</div>
          <input type="text" name="company.name" placeholder="Company Name" value={user.company.name} onChange={handleChange} className="input" />
          <input type="text" name="company.catchPhrase" placeholder="Catch Phrase" value={user.company.catchPhrase} onChange={handleChange} className="input" />

          <div className="flex justify-between mt-6">
            <button type="button" onClick={onClose} className="text-gray-600 hover:text-black">Cancel</button>
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">Add User</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserModal;
