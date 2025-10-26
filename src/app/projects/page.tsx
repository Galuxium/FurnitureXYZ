// components/ProjectListing.tsx

import { useEffect, useState } from 'react';
import client from '../utils/clerkClient';
import prisma from '../utils/prisma';

interface Project {
  id: number;
  name: string;
  description: string;
  createdAt: Date;
}

interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  publicMetadata: {};
}

const ProjectListing = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const session = await client.getSession();
      if (session) {
        const user = await client.users.getUser(session.userId);
        setUser(user);
      }

      const data = await prisma.project.findMany();
      setProjects(data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Project Listing</h1>
      {user && <p>Welcome, {user.firstName} {user.lastName}</p>}
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <small>Created at: {project.createdAt.toISOString()}</small>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectListing;