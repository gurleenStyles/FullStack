import { Request, Response } from 'express';
import Project from '../models/Project';

// Get all projects
export const getAllProjects = async (req: Request, res: Response) => {
    try {
        const projects = await Project.find();
        res.status(200).json(projects);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching projects', error });
    }
};

// Get a single project by ID
export const getProjectById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const project = await Project.findById(id);
        if (!project) {
            return res.status(404).json({ message: 'Project not found' });
        }
        res.status(200).json(project);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching project', error });
    }
};

// Create a new project
export const createProject = async (req: Request, res: Response) => {
    const newProject = new Project(req.body);
    try {
        const savedProject = await newProject.save();
        res.status(201).json(savedProject);
    } catch (error) {
        res.status(400).json({ message: 'Error creating project', error });
    }
};

// Update an existing project
export const updateProject = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const updatedProject = await Project.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedProject) {
            return res.status(404).json({ message: 'Project not found' });
        }
        res.status(200).json(updatedProject);
    } catch (error) {
        res.status(400).json({ message: 'Error updating project', error });
    }
};

// Delete a project
export const deleteProject = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const deletedProject = await Project.findByIdAndDelete(id);
        if (!deletedProject) {
            return res.status(404).json({ message: 'Project not found' });
        }
        res.status(200).json({ message: 'Project deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting project', error });
    }
};