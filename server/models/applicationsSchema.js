import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema(
    { 
    userId: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: "User", 
        required : true, 
   
    },
    
    
    companyName: { 
            type: String, 
            required : true,
            trim: true
        },   
    
    role: { 
        type: String,
        required: true, 
        trim: true
    },

    status: { 
        type: String, 
        enum:["Applied","OA", "Interview", "Final Interview", "Offer", "Rejected", "Withdrawn"],
        default: "Applied"


    }, 

   location: { 
            type: String, 
            required : true,
            trim: true
    },  

    jobType: { 
        type: String, 
        enum:["Internship","Full-Time", "Part Time", "Contract", ""],
        default: "",
    },

     salary: {
      type: String,
      trim: true,
      default: "",
    },
    
    jobUrl: {
      type: String,
      trim: true,
      default: "",
    },
    
    
    source: {
      type: String,
      trim: true,
      default: "",
    },
    
    notes: {
      type: String,
      trim: true,
      default: "",
    },
   
    dateApplied: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

const Application = mongoose.model("Application", applicationSchema);

export default Application;
    

