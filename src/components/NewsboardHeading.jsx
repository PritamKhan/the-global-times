const countries = [
    {
      label: "India",
      code: "in",
      
    },
    {
        label: "Russia",
        code: "ru",
       
    },
    {
        label: "China",
        code: "cn",
        
    },
    {
        label: "Singapore",
        code: "sg",
       
    },
    {
      label: "United States",
      code: "us",
      
    },
    {
        label: "United Arab Emirates",
        code: "ae",
        
    },
    {
        label: "United Kingdom",
        code: "gb",
        
    },
    {
        label: "Australia",
        code: "au",
        
    },
    {
      label: "South Korea",
      code: "kr",
      
    },
    {
        label: "Newzealand",
        code: "nz",
        
    },
    {
        label: "Switzerland",
        code: "ch",
        
    },
    {
        label: "France",
        code: "fr",
        
    },
   
  ]

export const NewsboardHeading = ({setCountryCode}) => (
    <div className="mt-4 d-flex justify-content-between" style={{maxWidth: "1200px", padding: "0 2rem", margin: "0 auto" , }}>
        <span className=" fs-4 fw-bold text-light">Latest <span className="badge rounded-pill bg-danger fs-4 fw-bold">News</span></span>
        <select className="custom-select " name="country-code" id="country-code" onChange={(e) => {
          const code = e.target.value;
          setCountryCode(code);
        }}>
          {countries.map((country, idx) => (
            <option key={idx} value={country.code}>
              {country.label}
            </option>
          ))}
          </select>
        </div>
)