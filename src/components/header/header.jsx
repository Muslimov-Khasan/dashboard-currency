import "./header.css";

export const Header = () => {
  const handleSearch = (event) => {
    const searchTerm = event.target.value;
    console.log(searchTerm);
  };
  return (
    <>
      <header className="header">
        <div className="contianer">
          <h1 className="header__title">Donations</h1>

          <div className="search-input-container">
            <label htmlFor="search-input" className="search-label">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="search-icon"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </label>
            <input
              type="search"
              id="search-input"
              placeholder="Search"
              onChange={handleSearch}
              className="search-input"
            />
            <select className="select-statuses">
              <option value="all_statuses">All statuses</option>
              <option value="dollor">Dollor</option>
            </select>
          </div>
        </div>
      </header>
    </>
  );
};