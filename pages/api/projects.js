import db from '@/lib/firebase-admin';
import { getAllProjects } from '@/lib/db-admin';

export default async (_, res) => {
  const { projects, error } = await getAllProjects();

  if (error) {
    res.status(500).json({ error });
  }
  res.status(200).json({ projects });
};
//   const snapshot = await db.collection('projects').get();
//   const projects = [];

//   snapshot.forEach((doc) => {
//     projects.push({ id: doc.id, ...doc.data() });
//   });
//   res.status(200).json({ projects });
// };
