import './ClassOfficers.css';


function ClassOfficers(props){

   
    return(
        <div className="class-officer">
            <img className="class-officer--img" src={props.img} alt="officer pic"/>
            <h2 className="class-officer--name">{props.fname}</h2>
            <h2 className="class-officer--name">{props.lname}</h2>
            <h6 className="class-officer--position">{props.position}</h6>
        </div>
    )
}
export default ClassOfficers;