import { Briefcase, CheckCircle, Clock, TrendingUp } from 'lucide-react';
import StatCard from './StatCard';
import RecentActivity from './RecentActivity';
import QuickActions from './QuickActions';

function DashboardView({ applications, stats, onNavigate, onOpenApplication }) {
  return (
    <div className="dashboard-view">
      <div className="dashboard-header">
        <div className="header-content">
          <h1>Welcome back!</h1>
          <p className="subtitle">
            You have {stats.interview} active interviews and {stats.offer} pending offers
          </p>
        </div>
        <button className="btn-primary" onClick={() => onNavigate('applications')}>
          New Application
        </button>
      </div>

      <div className="stats-grid">
        <StatCard icon={Briefcase} label="Total Applications" value={stats.total} background="var(--gradient-primary)" />
        <StatCard icon={Clock} label="Under Review" value={stats.applied} background="var(--status-applied)" />
        <StatCard icon={TrendingUp} label="In Progress" value={stats.interview} background="var(--status-interview)" />
        <StatCard icon={CheckCircle} label="Offers Received" value={stats.offer} background="var(--status-offer)" />
      </div>

      <div className="dashboard-grid">
        <RecentActivity
          applications={applications}
          onOpenApplication={onOpenApplication}
          onNavigate={onNavigate}
        />
        <QuickActions onNavigate={onNavigate} />
      </div>
    </div>
  );
}

export default DashboardView;
