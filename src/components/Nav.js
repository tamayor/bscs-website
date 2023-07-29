import  './Nav.css';

function Nav(){

    return(
        <nav className="Nav">
            <a href='#bscs'><h1 className="nav--title" >BSCS 3-A</h1></a>
            <div className="nav--menu">
                <a href="#who_are_we">Who are we?</a>
                <a href="#class_officers">Class Officers</a>
                <a href="#class_memories">Class Memories</a>
            </div>
        </nav>
    )
}
export default Nav;