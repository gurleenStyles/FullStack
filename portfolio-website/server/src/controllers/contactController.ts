import { Request, Response } from 'express';
import Contact from '../models/Contact';

// Handle contact form submission
export const submitContactForm = async (req: Request, res: Response) => {
    const { name, email, message } = req.body;

    try {
        const newContact = new Contact({ name, email, message });
        await newContact.save();
        res.status(201).json({ message: 'Contact form submitted successfully!' });
    } catch (error) {
        res.status(500).json({ message: 'Error submitting contact form', error });
    }
};

// Get all contact submissions (optional feature)
export const getContactSubmissions = async (req: Request, res: Response) => {
    try {
        const contacts = await Contact.find();
        res.status(200).json(contacts);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching contact submissions', error });
    }
};