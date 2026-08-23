import { Download, Edit2, FileText, Trash2, Upload } from 'lucide-react';
import { formatDate } from '../../utils/applicationHelpers';

function ResumeView({ resume }) {
  return (
    <div className="resume-view">
      <div className="view-header">
        <h1>Resume Management</h1>
        <button className="btn-primary">
          <Upload size={18} />
          Upload New Version
        </button>
      </div>

      <div className="resume-grid">
        <div className="current-resume">
          <h2>Current Resume</h2>
          <div className="resume-card">
            <div className="resume-preview">
              <FileText size={64} />
            </div>
            <div className="resume-info">
              <h3>{resume.fileName}</h3>
              <div className="resume-meta">
                <span>Uploaded {formatDate(resume.uploadDate)}</span>
                <span>•</span>
                <span>{resume.size}</span>
              </div>
              <div className="resume-actions">
                <button className="btn-secondary">
                  <Download size={18} />
                  Download
                </button>
                <button className="btn-secondary">
                  <Edit2 size={18} />
                  Edit
                </button>
                <button className="btn-secondary">
                  <Trash2 size={18} />
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="resume-versions">
          <h2>Version History ({resume.versions})</h2>
          <div className="version-list">
            <div className="version-item current">
              <FileText size={20} />
              <div className="version-info">
                <div className="version-name">john_doe_resume_2024.pdf</div>
                <div className="version-date">April 1, 2024 • Current</div>
              </div>
              <button className="btn-text">View</button>
            </div>
            <div className="version-item">
              <FileText size={20} />
              <div className="version-info">
                <div className="version-name">john_doe_resume_march.pdf</div>
                <div className="version-date">March 15, 2024</div>
              </div>
              <button className="btn-text">View</button>
            </div>
            <div className="version-item">
              <FileText size={20} />
              <div className="version-info">
                <div className="version-name">john_doe_resume_feb.pdf</div>
                <div className="version-date">February 20, 2024</div>
              </div>
              <button className="btn-text">View</button>
            </div>
          </div>
        </div>
      </div>

      <div className="upload-zone">
        <Upload size={48} />
        <h3>Drop your resume here</h3>
        <p>or click to browse files</p>
        <span className="upload-hint">Supported formats: PDF, DOC, DOCX (max 5MB)</span>
      </div>
    </div>
  );
}

export default ResumeView;
