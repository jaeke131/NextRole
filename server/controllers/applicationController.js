import applicationsSchema from "../models/applicationsSchema.js";


export const getApplications = async (req, res) => { 
    try { 
        const application = await Application.find().sort( { createdAt: 1});
        res.status(200).json(applications);

    }catch (error){ 
        res.status(500).json({message: "Failed to fetch applications"});

    }
}; 

export const createApplication = async (req, res) => { 
    try { 
        const newApplication = await Application.create(req.body); 
        res.status(201).json(newApplication); 

    }catch (error) { 
        res.status(201).json({message : "Failed to create application"});
    }
};

export const updateApplication = async (req,res) => { 
    try { 
        const updatedApplication = await Application.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new: true, runValidators: true}
        );
    if (!updatedApplication) { 
        return res.status(404).json({message: "Application not found"});

    }
    res.status(200).json(updatedApplication);
    }catch(error) { 
    res.status(500).json({message: " failed to update application"});
    }

};
export const deleteApplication = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await pool.query(
      "DELETE FROM applications WHERE id = $1 RETURNING *",
      [id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        message: "Application not found",
      });
    }

    return res.status(200).json({
      message: "Application deleted successfully",
      application: result.rows[0],
    });
  } catch (error) {
    console.error("Delete application error:", error);

    return res.status(500).json({
      message: "Failed to delete application",
    });
  }
};



