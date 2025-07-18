import React from 'react';
import { UserProps } from '@/interfaces';

const UserCard: React.FC<UserProps> = ({ name, username, email, phone, website, company, address }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition-all duration-300">
      <h2 className="text-xl font-bold text-blue-700">{name}</h2>
      <p className="text-gray-600 italic">@{username}</p>

      <div className="mt-2">
        <p><span className="font-semibold">Email:</span> <a href={`mailto:${email}`} className="text-blue-500 underline">{email}</a></p>
        <p><span className="font-semibold">Phone:</span> <a href={`tel:${phone}`} className="text-blue-500 underline">{phone}</a></p>
        <p><span className="font-semibold">Website:</span> <a href={`https://${website}`} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">{website}</a></p>
      </div>

      <div className="mt-4">
        <h3 className="font-semibold text-gray-700">Company</h3>
        <p className="text-sm text-gray-600">{company.name}</p>
        <p className="text-xs text-gray-500">"{company.catchPhrase}"</p>
      </div>

      <div className="mt-4">
        <h3 className="font-semibold text-gray-700">Address</h3>
        <p className="text-sm text-gray-600">
          {address.suite}, {address.street},<br />
          {address.city}, {address.zipcode}
        </p>
      </div>
    </div>
  );
};

export default UserCard;
