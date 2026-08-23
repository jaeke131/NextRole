import SearchFilterBar from '../common/SearchFilterBar';
import ApplicationCard from './ApplicationCard';

function ApplicationsView({
  applications,
  searchQuery,
  filterStatus,
  setSearchQuery,
  setFilterStatus,
  onOpenApplication,
}) {
  return (
    <div className="applications-view">
      <div className="view-header">
        <h1>Applications</h1>
        <SearchFilterBar
          searchQuery={searchQuery}
          filterStatus={filterStatus}
          setSearchQuery={setSearchQuery}
          setFilterStatus={setFilterStatus}
        />
      </div>

      <div className="applications-grid">
        {applications.map((application) => (
          <ApplicationCard
            key={application.id}
            application={application}
            onOpenApplication={onOpenApplication}
          />
        ))}
      </div>
    </div>
  );
}

export default ApplicationsView;
