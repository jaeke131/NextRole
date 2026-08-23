import { BarChart3, FileText, Mail, Plus } from 'lucide-react';

function QuickActions({ onNavigate }) {
  return (
    <div className="quick-actions">
      <div className="section-header">
        <h2>Quick Actions</h2>
      </div>

      <div className="action-cards">
        <button className="action-card" onClick={() => onNavigate('resume')}>
          <FileText size={24} />
          <div className="action-title">Manage Resume</div>
          <div className="action-description">Upload new version or update existing</div>
        </button>

        <button className="action-card" onClick={() => onNavigate('applications')}>
          <Plus size={24} />
          <div className="action-title">Add Application</div>
          <div className="action-description">Track a new job opportunity</div>
        </button>

        <button className="action-card">
          <Mail size={24} />
          <div className="action-title">Email Integration</div>
          <div className="action-description">Connect your inbox for updates</div>
        </button>

        <button className="action-card">
          <BarChart3 size={24} />
          <div className="action-title">View Analytics</div>
          <div className="action-description">Track your application trends</div>
        </button>
      </div>
    </div>
  );
}

export default QuickActions;
