const categories = [
  {
    label: "All",
    category: "general",
  },
  {
    label: "Technology",
    category: "technology",
  },
  {
    label: "Business",
    category: "business",
  },
  {
    label: "Health",
    category: "health",
  },
  {
    label: "Science",
    category: "science",
  },
  {
    label: "Sports",
    category: "sports",
  },
  {
    label: "Entertainment",
    category: "entertainment",
  },
];

const Navbar = ({setCategory}) => {
    return(
        <nav className="navbar sticky-top navbar-expand-lg bg-body-tertiary " data-bs-theme="dark">
        <div className="container-fluid py-2">
          <a className="navbar-brand badge rounded-pill bg-danger fs-5" href="#"><span className=" text-light">The Global <span className="text-dark ml-2">Times</span></span></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarNav">
            <ul className="navbar-nav">
              {categories.map((item, idx) => (
                <li className="nav-item nav-link fs-5" key={idx} onClick={()=>setCategory(item.category)}>
                  {item.label}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    )
  }
  
export default Navbar;