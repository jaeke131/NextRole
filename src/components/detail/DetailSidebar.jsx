import { Download, FileText } from 'lucide-react';
import { formatDate, getStatusColor, statusIcons } from '../../utils/applicationHelpers';

function DetailSidebar({ application }) {
  const StatusIcon = statusIcons[application.status] || statusIcons.applied;

  return (
    <div className="detail-sidebar">
      <div className="info-card">
        <h3>Status</h3>
        <div className="status-badge-large" style={{ background: getStatusColor(application.status) }}>
          <StatusIcon size={16} />
          <span>{application.status}</span>
        </div>
      </div>

      <div className="info-card">
        <h3>Important Dates</h3>
        <div className="date-list">
          <div className="date-item">
            <span className="date-label">Applied</span>
            <span className="date-value">{formatDate(application.appliedDate)}</span>
          </div>
          <div className="date-item">
            <span className="date-label">Last Update</span>
            <span className="date-value">{formatDate(application.lastUpdate)}</span>
          </div>
        </div>
      </div>

      <div className="info-card">
        <h3>Documents</h3>
        <button className="document-item">
          <FileText size={18} />
          <span>Resume_v3.pdf</span>
          <Download size={16} />
        </button>
      </div>
    </div>
  );
}

export default DetailSidebar;
