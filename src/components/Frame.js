import  './Frame.css';

function Frame(props){
    return(
        <div id={props.id} className="Frame">
            <img className='image' src={props.img} alt='student profile'/>
            <h3 className="frame--name mrgn txt">{props.name}</h3>
            <h5 className="frame--address mrgn txt">{props.address}</h5>
            <h6 className="frame--email mrgn txt">{props.email}</h6>
        </div>
    )
}
export default Frame;