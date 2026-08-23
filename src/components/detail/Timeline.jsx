import { CheckCircle } from 'lucide-react';
import { formatDate } from '../../utils/applicationHelpers';

function Timeline({ timeline }) {
  return (
    <div className="timeline">
      {timeline.map((stage, index) => (
        <div key={`${stage.stage}-${index}`} className={`timeline-item ${stage.completed ? 'completed' : ''}`}>
          <div className="timeline-marker">
            {stage.completed ? <CheckCircle size={20} /> : <div className="empty-circle" />}
          </div>
          <div className="timeline-content">
            <div className="timeline-stage">{stage.stage}</div>
            {stage.date && <div className="timeline-date">{formatDate(stage.date)}</div>}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Timeline;
