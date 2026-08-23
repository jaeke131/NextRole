import { Plus, Search } from 'lucide-react';

function SearchFilterBar({ searchQuery, filterStatus, setSearchQuery, setFilterStatus }) {
  return (
    <div className="header-actions">
      <div className="search-box">
        <Search size={18} />
        <input
          type="text"
          placeholder="Search companies or positions..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <select
        className="filter-select"
        value={filterStatus}
        onChange={(e) => setFilterStatus(e.target.value)}
      >
        <option value="all">All Status</option>
        <option value="applied">Applied</option>
        <option value="interview">Interview</option>
        <option value="offer">Offer</option>
        <option value="rejected">Rejected</option>
      </select>

      <button className="btn-primary">
        <Plus size={18} />
        Add New
      </button>
    </div>
  );
}

export default SearchFilterBar;
