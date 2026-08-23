import { Briefcase, FileText, Mail, TrendingUp } from 'lucide-react';

const navItems = [
  { key: 'dashboard', label: 'Dashboard', icon: TrendingUp },
  { key: 'applications', label: 'Applications', icon: Briefcase },
  { key: 'resume', label: 'Resume', icon: FileText },
];

function getInitials(user) {
  if (!user?.name) {
    return 'DU';
  }

  return user.name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase();
}

function NavBar({ currentView, onNavigate, user }) {
  return (
    <nav className="nav">
      <div className="nav-brand">NextRole</div>

      <div className="nav-links">
        {navItems.map(({ key, label, icon: Icon }) => (
          <button
            key={key}
            className={`nav-link ${currentView === key ? 'active' : ''}`}
            onClick={() => onNavigate(key)}
          >
            <Icon size={18} />
            {label}
          </button>
        ))}

        <button className="nav-link" type="button">
          <Mail size={18} />
          Email
        </button>
      </div>

      <div className="nav-user">
        <div className="user-avatar" title={user?.name || 'Demo User'}>
          {getInitials(user)}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
