import { formatDate, getStatusColor, getStatusIcon } from '../../utils/applicationHelpers';

function RecentActivity({ applications, onOpenApplication, onNavigate }) {
  return (
    <div className="recent-activity">
      <div className="section-header">
        <h2>Recent Activity</h2>
        <button className="btn-text" onClick={() => onNavigate('applications')}>
          View all
        </button>
      </div>

      <div className="activity-list">
        {applications.slice(0, 5).map((app) => {
          const StatusIcon = getStatusIcon(app.status);

          return (
            <div
              key={app.id}
              className="activity-item"
              onClick={() => onOpenApplication(app)}
            >
              <div className="activity-status" style={{ background: getStatusColor(app.status) }}>
                <StatusIcon size={16} />
              </div>
              <div className="activity-content">
                <div className="activity-title">{app.company}</div>
                <div className="activity-subtitle">{app.position}</div>
              </div>
              <div className="activity-meta">
                <div className="activity-date">{formatDate(app.lastUpdate)}</div>
                <div className="status-badge" style={{ background: getStatusColor(app.status) }}>
                  {app.status}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default RecentActivity;
