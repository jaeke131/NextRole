import {
  createApplication as insertApplication,
  deleteApplication as removeApplication,
  ensureApplicationsTable,
  findApplications,
  updateApplication as updateApplicationById,
} from "../models/applicationsSchema.js";

export const getApplications = async (req, res) => {
  try {
    await ensureApplicationsTable();

    const applications = await findApplications();

    return res.status(200).json(applications);
  } catch (error) {
    console.error("Get applications error:", error);

    return res.status(500).json({ message: "Failed to fetch applications" });
  }
};

export const createApplication = async (req, res) => {
  try {
    const { userId, companyName, role, location } = req.body;

    if (!userId || !companyName || !role || !location) {
      return res.status(400).json({
        message: "User ID, company name, role, and location are required",
      });
    }

    await ensureApplicationsTable();

    const application = await insertApplication(req.body);

    return res.status(201).json(application);
  } catch (error) {
    if (error.code === "23503") {
      return res.status(400).json({
        message: "User does not exist",
      });
    }

    console.error("Create application error:", error);

    return res.status(500).json({ message: "Failed to create application" });
  }
};

export const updateApplication = async (req, res) => {
  try {
    await ensureApplicationsTable();

    const application = await updateApplicationById(req.params.id, req.body);

    if (!application) {
      return res.status(404).json({ message: "Application not found" });
    }

    return res.status(200).json(application);
  } catch (error) {
    if (error.code === "23503") {
      return res.status(400).json({
        message: "User does not exist",
      });
    }

    console.error("Update application error:", error);

    return res.status(500).json({ message: "Failed to update application" });
  }
};

export const deleteApplication = async (req, res) => {
  try {
    await ensureApplicationsTable();

    const application = await removeApplication(req.params.id);

    if (!application) {
      return res.status(404).json({ message: "Application not found" });
    }

    return res.status(200).json({
      message: "Application deleted successfully",
      application,
    });
  } catch (error) {
    console.error("Delete application error:", error);

    return res.status(500).json({ message: "Failed to delete application" });
  }
};
