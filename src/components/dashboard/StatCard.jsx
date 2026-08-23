
function StatCard({ icon: Icon, label, value, background }) {
  return (
    <div className="stat-card">
      <div className="stat-icon" style={{ background }}>
        <Icon size={24} />
      </div>
      <div className="stat-content">
        <div className="stat-value">{value}</div>
        <div className="stat-label">{label}</div>
      </div>
    </div>
  );
}

export default StatCard;
