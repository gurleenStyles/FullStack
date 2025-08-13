import { Router } from 'express';
import { getProjects, createProject, updateProject, deleteProject } from '../controllers/projectController';

const router = Router();

// Route to get all projects
router.get('/', getProjects);

// Route to create a new project
router.post('/', createProject);

// Route to update a project by ID
router.put('/:id', updateProject);

// Route to delete a project by ID
router.delete('/:id', deleteProject);

export default router;