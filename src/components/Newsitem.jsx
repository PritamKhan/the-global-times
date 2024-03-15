import image from '../assets/newsboad.jpg'
const Newsitem = ({title, description, src, url}) => {
    return(
      
      <div className="card bg-dark text-light mb-3 d-inline-block px-2 py-2" style={{width:"100%"}}>
        <img src={src?src:image} style={{height:"170px", width:"100%", objectFit: "cover"}} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title.slice(0,50)}</h5>
          <p className="card-text news-desc">{description || "News is a current event. It is information about something that has just happen."}</p>
          <a href={url} target='_blank' className="btn btn-primary">Read More</a>
        </div>
      </div>
     
        
    )
  }
  
  export default Newsitem;