import React, {useState} from 'react';
import './Memories.css';
import img1 from '../images/conference.jpg';
import img2 from '../images/graduation.png';
import img3 from '../images/guimaras trip.jpg';
import img4 from '../images/silence.jpg';
const Memories = () => {
  const [showImg, setShowImg] = useState(1);

  console.log(showImg)  
  return (
    <div className='memories'>
      <section >
        <div className='arrow-buttons'>
          <span onClick={() => {setShowImg(prevImg => prevImg > 1 ? prevImg - 1 : 4 )}}></span>
          <span onClick={() => {setShowImg(prevImg => prevImg < 4  ? prevImg + 1 : 1)}}></span>
        </div>
        <div style={{ display: showImg === 1 ? 'block' : 'none' }} className='memories--container'>
          <img className='memories--img' src={img1} alt="memories img" />
          <p className='memories--caption'></p>
        </div>
        <div style={{ display: showImg === 2 ? 'block' : 'none' }} className='memories--container'>
          <img className='memories--img' src={img2} alt="memories img" />
          <p className='memories--caption'></p>
        </div>
        <div style={{ display: showImg === 3 ? 'block' : 'none' }} className='memories--container'>
          <img className='memories--img' src={img3} alt="memories img" />
          <p className='memories--caption'></p>
        </div>
        <div style={{ display: showImg === 4 ? 'block' : 'none' }} className='memories--container'>
          <img className='memories--img' src={img4} alt="memories img" />
          <p className='memories--caption'></p>
        </div>
      </section>
      <div>
        <span className='dot' onClick={() => {setShowImg(1)}} style={{ backgroundColor: showImg === 1 ? 'rgb(193, 231, 255)' : 'rgb(16, 35, 50)' }}></span>
        <span className='dot' onClick={() => {setShowImg(2)}} style={{ backgroundColor: showImg === 2 ? 'rgb(193, 231, 255)' : 'rgb(16, 35, 50)' }}></span>
        <span className='dot' onClick={() => {setShowImg(3)}} style={{ backgroundColor: showImg === 3 ? 'rgb(193, 231, 255)' : 'rgb(16, 35, 50)' }}></span>
        <span className='dot' onClick={() => {setShowImg(4)}} style={{ backgroundColor: showImg === 4 ? 'rgb(193, 231, 255)' : 'rgb(16, 35, 50)' }}></span>
      </div>
    </div>
  );
};

export default Memories;
