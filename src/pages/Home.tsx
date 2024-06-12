import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";


const Home: React.FC = () => {

  const audioclips:any = ['https://s3.voscast.com:9425/stream', 'https://s3.voscast.com:10745/stream']
  const audioRef1 = useRef<any>(null);
  const audioRef2 = useRef<any>(null);

  const [currentSlide, setCurrentSlide] = useState(0);
  const [playing, setPlaying] = useState<any>(true);


  useEffect(() => {
    if (currentSlide === 0) {
      if (audioRef1.current) audioRef1.current.play();
      if (audioRef2.current) audioRef2.current.pause();
    } else {
      if (audioRef1.current) audioRef1.current.pause();
      if (audioRef2.current) audioRef2.current.play();
    }
  }, [currentSlide]);

  const changeStation = () =>{
    setCurrentSlide(prevSlide => (prevSlide === 0 ? 1 : 0));
    setPlaying(true);
   
  }

  const playEnglish =  () =>{
    if (currentSlide === 0) {
      if (playing) {
        if (audioRef1.current) audioRef1.current.pause();
      } else {
        if (audioRef1.current) audioRef1.current.play();
      }
    } else {
      if (playing) {
        if (audioRef2.current) audioRef2.current.pause();
      } else {
        if (audioRef2.current) audioRef2.current.play();
      }
    }
    setPlaying(!playing);
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Live Radio</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">
            <div className='flex items-center gap-3'>
                <img className='w-[70px] ' src="/images/logo.png" alt="" />
                <h1>KLSR</h1>
              </div>
            </IonTitle>
          </IonToolbar>
        </IonHeader>
 
          <audio style={{display: 'none'}} ref={audioRef1}  id="english" controls>
            <source src={audioclips[0]} type="audio/mpeg" />
            Your browser does not support the audio element
          </audio>

          <audio style={{display: 'none'}} ref={audioRef2}  id="yoruba" controls>
            <source src={audioclips[1]} type="audio/mpeg" />
            Your browser does not support the audio element
          </audio>
        <Swiper 
          onSlideChange={changeStation}
          style={{width: '100%', height: '100%',
                  backgroundImage: "url('/images/background.jpg')",
                  backgroundPosition: 'bottom',
                  backgroundSize: 'cover'
                 }} className="mySwiper">
          <SwiperSlide className='flex flex-col justify-evenly items-center' style={{width: '100vw', height: '100%'}}>
            <div className=''>
              <h1 className='text-center text-2xl p-3 font-bold channel text-[white]'>English Channel</h1>
              <div className='w-[150px] md:w-[300px] m-auto'>
                <img className='w-full' src="/images/logo.png" alt="" />
              </div>

              <div className='w-max m-auto mt-20'>
                {
                  playing ? (<button onClick={playEnglish}><i className="text-6xl text-teal-800 fa-solid fa-circle-pause"></i></button>
                  ):(<button onClick={playEnglish}><i className="text-6xl text-teal-800 fa-solid fa-circle-play"></i></button>
                  )
                }
              </div>

            </div>

            <div className='mt-10 text-xs flex items-center rounded-lg justify-between bg-[white] p-2 w-[50%]'><h1 className='flex-1 text-center font-extrabold'>Swipe left to switch</h1>  <img className='w-[15px]' src="/images/right.gif" alt="" /> </div>

           
          </SwiperSlide>
          <SwiperSlide className='flex flex-col justify-evenly items-center' style={{width: '100vw', height: '100%'}}>
          <div>
              <h1 className='text-center text-2xl p-3 channel font-bold text-[white]'>Yoruba Channel</h1>
              <div className='w-[150px] md:w-[300px] m-auto'>
                <img className='w-full' src="/images/logo.png" alt="" />
              </div>

              <div className='w-max m-auto mt-20'>
                {
                  playing ? (<button onClick={playEnglish}><i className="text-6xl text-teal-800 fa-solid fa-circle-pause"></i></button>
                  ):(<button onClick={playEnglish}><i className="text-6xl text-teal-800 fa-solid fa-circle-play"></i></button>
                  )
                }
              </div>

            </div>

            <div className='mt-10 text-xs flex items-center rounded-lg justify-between bg-[white] p-2 w-[50%]'> <img className='w-[15px]' src="/images/left.gif" alt="" /> <h1 className='flex-1 text-center font-extrabold'>Swipe right to switch</h1></div>


          </SwiperSlide>
        </Swiper> 

      </IonContent>
    </IonPage>
  );
};

export default Home;
