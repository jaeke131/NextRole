import { Edit2, Trash2 } from 'lucide-react';
import Timeline from './Timeline';
import DetailSidebar from './DetailSidebar';

function DetailView({ application, onBack }) {
  return (
    <div className="detail-view">
      <button className="back-button" onClick={onBack}>
        ← Back to Applications
      </button>

      <div className="detail-header">
        <div className="detail-title-section">
          <div className="company-logo-large">{application.company.charAt(0)}</div>
          <div>
            <h1>{application.company}</h1>
            <p className="position-title">{application.position}</p>
            <div className="detail-meta">
              <span>{application.location}</span>
              <span>•</span>
              <span>{application.salary}</span>
            </div>
          </div>
        </div>

        <div className="detail-actions">
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

      <div className="detail-grid">
        <div className="detail-main">
          <div className="detail-section">
            <h2>Application Timeline</h2>
            <Timeline timeline={application.timeline} />
          </div>

          <div className="detail-section">
            <h2>Notes</h2>
            <div className="notes-box">
              <p>{application.notes}</p>
            </div>
            <button className="btn-text">+ Add note</button>
          </div>
        </div>

        <DetailSidebar application={application} />
      </div>
    </div>
  );
}

export default DetailView;
