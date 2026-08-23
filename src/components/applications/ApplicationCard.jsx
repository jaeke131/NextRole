import { Calendar, ExternalLink, TrendingUp } from 'lucide-react';
import { formatDate, getStatusColor, getTimelineProgress } from '../../utils/applicationHelpers';

function ApplicationCard({ application, onOpenApplication }) {
  return (
    <div className="application-card" onClick={() => onOpenApplication(application)}>
      <div className="card-header">
        <div className="company-logo">{application.company.charAt(0)}</div>
        <div className="card-title-section">
          <h3>{application.company}</h3>
          <p>{application.position}</p>
        </div>
        <div className="status-badge" style={{ background: getStatusColor(application.status) }}>
          {application.status}
        </div>
      </div>

      <div className="card-details">
        <div className="detail-row">
          <Calendar size={14} />
          <span>Applied {formatDate(application.appliedDate)}</span>
        </div>
        <div className="detail-row">
          <TrendingUp size={14} />
          <span>{application.salary}</span>
        </div>
        <div className="detail-row">
          <ExternalLink size={14} />
          <span>{application.location}</span>
        </div>
      </div>

      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{
            width: `${getTimelineProgress(application.timeline)}%`,
            background: getStatusColor(application.status),
          }}
        />
      </div>
    </div>
  );
}

export default ApplicationCard;
