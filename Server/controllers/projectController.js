const Project = require("../models/Project");


// ===============================
// GET ALL PROJECTS
// ===============================
const getProjects = async (req, res) => {
    try {
        const projects = await Project.find().sort({
            createdAt: -1,
        });

        res.status(200).json({
            success: true,
            count: projects.length,
            projects,
        });
    } catch (error) {
        console.error("Get Projects Error:", error);

        res.status(500).json({
            success: false,
            message: "Failed to fetch projects.",
        });
    }
};


// ===============================
// GET SINGLE PROJECT
// ===============================
const getProject = async (req, res) => {
    try {
        const project = await Project.findById(req.params.id);

        if (!project) {
            return res.status(404).json({
                success: false,
                message: "Project not found.",
            });
        }

        res.status(200).json({
            success: true,
            project,
        });
    } catch (error) {
        console.error("Get Project Error:", error);

        res.status(500).json({
            success: false,
            message: "Failed to fetch project.",
        });
    }
};


// ===============================
// CREATE PROJECT
// ===============================
const createProject = async (req, res) => {
    try {
        const {
            title,
            description,
            category,
            image,
            technologies,
            liveUrl,
            githubUrl,
        } = req.body;

        if (!title || !description || !category || !image) {
            return res.status(400).json({
                success: false,
                message: "Title, description, category and image are required.",
            });
        }

        const project = await Project.create({
            title,
            description,
            category,
            image,
            technologies: Array.isArray(technologies)
                ? technologies
                : [],
            liveUrl,
            githubUrl,
        });

        res.status(201).json({
            success: true,
            message: "Project created successfully.",
            project,
        });
    } catch (error) {
        console.error("Create Project Error:", error);

        res.status(500).json({
            success: false,
            message: "Failed to create project.",
        });
    }
};


// ===============================
// UPDATE PROJECT
// ===============================
const updateProject = async (req, res) => {
    try {
        const project = await Project.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true,
            }
        );

        if (!project) {
            return res.status(404).json({
                success: false,
                message: "Project not found.",
            });
        }

        res.status(200).json({
            success: true,
            message: "Project updated successfully.",
            project,
        });
    } catch (error) {
        console.error("Update Project Error:", error);

        res.status(500).json({
            success: false,
            message: "Failed to update project.",
        });
    }
};


// ===============================
// DELETE PROJECT
// ===============================
const deleteProject = async (req, res) => {
    try {
        const project = await Project.findByIdAndDelete(req.params.id);

        if (!project) {
            return res.status(404).json({
                success: false,
                message: "Project not found.",
            });
        }

        res.status(200).json({
            success: true,
            message: "Project deleted successfully.",
        });
    } catch (error) {
        console.error("Delete Project Error:", error);

        res.status(500).json({
            success: false,
            message: "Failed to delete project.",
        });
    }
};


module.exports = {
    getProjects,
    getProject,
    createProject,
    updateProject,
    deleteProject,
};