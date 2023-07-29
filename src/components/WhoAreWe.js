import bgImg from '../images/bgImg-who-are-we.jpg'
import './WhoAreWe.css';


function WhoAreWe(){
    return(
        <section className="who-are-we">
            <div className='who-are-we--text'>
                <h2 className="description">WHO ARE WE</h2>
                <p className="description">
                Design & Teach a Course
                Recognize Who Your Students Are
                Students are not only intellectual but also social and emotional beings, and all these dimensions interact to impact learning and performance. To plan an effective course, it is important to consider who our students are, taking into account their prior knowledge.
                </p>
                <p className="description">
                <i>"We may exhibit an admirable command of content, and possess a dazzling variety of pedagogical skills, but without knowing what's going on in our students heads, that knowledge may be presented and that skill exercised in a vacuum of misunderstanding."
                </i> – Stephen D. Brookfield, The Skillful Teacher (2006)
                </p>
            </div>
            <div className='hr'></div>
            <img src={bgImg} className='who-are-we--bgImg' alt='background pic'/>
        </section>
    )
}
export default WhoAreWe;