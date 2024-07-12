import './GamingLibraryCard.css'

const GamingLibraryCard = (props) => {
  return (
<div className='gaming-library-card' >
    <ul>
        <li><img src={props.image} alt="" /></li>
        <li><h4>{props.title}</h4><span>{props.category}</span></li>
        <li><h4>Date Added</h4><span>{props.date_added}</span></li>
        <li><h4>Hours Played</h4><span>{props.hours_playd}</span></li>
        <li><h4>Currently</h4><span>{props.download}</span></li>
        <div className="main-button">
          <a href="/#">Download</a>
        </div>
    </ul>

</div>
)
}

export default GamingLibraryCard