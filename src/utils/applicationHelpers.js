import { AlertCircle, CheckCircle, Clock, XCircle } from 'lucide-react';

export const statusIcons = {
  applied: Clock,
  interview: AlertCircle,
  offer: CheckCircle,
  rejected: XCircle,
};

export const getStatusColor = (status) => {
  const colors = {
    applied: 'var(--status-applied)',
    interview: 'var(--status-interview)',
    offer: 'var(--status-offer)',
    rejected: 'var(--status-rejected)',
  };

  return colors[status] || 'var(--text-secondary)';
};

export const getStatusIcon = (status) => {
  return statusIcons[status] || Clock;
};

export const formatDate = (date) => new Date(date).toLocaleDateString();

export const getTimelineProgress = (timeline) => {
  if (!timeline?.length) return 0;
  const completed = timeline.filter((item) => item.completed).length;
  return (completed / timeline.length) * 100;
};
