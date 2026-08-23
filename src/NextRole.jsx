import { useEffect, useMemo, useState } from 'react';
import NavBar from './components/layout/NavBar';
import DashboardView from './components/dashboard/DashboardView';
import ApplicationsView from './components/applications/ApplicationsView';
import DetailView from './components/detail/DetailView';
import ResumeView from './components/resume/ResumeView';
import { mockResume, mockStats } from './data/mockData';
import { getApplications, createApplication } from './services/applicationService';
import './styles/nextRole.css';

function NextRole() {
  const [currentView, setCurrentView] = useState('dashboard');
  const [selectedApplication, setSelectedApplication] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [applications, setApplications] = useState([]);
  const [stats, setStats] = useState(mockStats);
  const [resume] = useState(mockResume);
  const [apiError, setApiError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadApplications() {
      try {
        const data = await getApplications();
        setApplications(data);
        setApiError('');
      } catch (error) {
        console.error('Error loading applications:', error);
        setApiError('Failed to load applications.');
      } finally {
        setLoading(false);
      }
    }

    loadApplications();
  }, []);

  const filteredApplications = useMemo(() => {
    return applications.filter((app) => {
      const matchesSearch =
        app.company?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        app.role?.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesFilter =
        filterStatus === 'all' || app.status === filterStatus;

      return matchesSearch && matchesFilter;
    });
  }, [applications, searchQuery, filterStatus]);

  const handleOpenApplication = (application) => {
    setSelectedApplication(application);
    setCurrentView('detail');
  };

  const handleBackToApplications = () => {
    setCurrentView('applications');
  };

  const handleAddApplication = async () => {
    const newApplication = {
      company: 'Test Company',
      role: 'Frontend Intern',
      status: 'Applied',
      location: 'Remote',
      notes: 'Created from Add New button',
    };

    try {
      const createdApplication = await createApplication(newApplication);
      setApplications((prev) => [createdApplication, ...prev]);
      setApiError('');
    } catch (error) {
      console.error('Error creating application:', error);
      setApiError('Failed to create application.');
    }
  };

  if (loading) {
    return <div className="main-content">Loading applications...</div>;
  }

  return (
    <div className="next-role-app">
      <NavBar currentView={currentView} onNavigate={setCurrentView} />

      <main className="main-content">
        {apiError && <div className="api-banner">{apiError}</div>}

        {currentView === 'dashboard' && (
          <DashboardView
            applications={applications}
            stats={stats}
            onNavigate={setCurrentView}
            onOpenApplication={handleOpenApplication}
          />
        )}

        {currentView === 'applications' && (
          <ApplicationsView
            applications={filteredApplications}
            searchQuery={searchQuery}
            filterStatus={filterStatus}
            setSearchQuery={setSearchQuery}
            setFilterStatus={setFilterStatus}
            onOpenApplication={handleOpenApplication}
            onAddApplication={handleAddApplication}
          />
        )}

        {currentView === 'detail' && selectedApplication && (
          <DetailView
            application={selectedApplication}
            onBack={handleBackToApplications}
          />
        )}

        {currentView === 'resume' && <ResumeView resume={resume} />}
      </main>
    </div>
  );
}

export default NextRole;