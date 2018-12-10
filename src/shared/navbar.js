import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  const languages = [
    {
      name: 'All',
      param: 'all'
    },
    {
      name: 'JavaScript',
      param: 'javascript'
    },
    {
      name: 'Ruby',
      param: 'ruby'
    },
    {
      name: 'Python',
      param: 'python'
    },
    {
      name: 'Java',
      param: 'java'
    }
  ];

  return (
    <ul>
      {languages.map(({ name, param }) => (
        <li key={param}>
          <NavLink
            activeStyle={{ fonrtWeight: 'bold' }}
            to={`/popular/${param}`}
          >
            {name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}
