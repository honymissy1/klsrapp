import React, { useEffect, useRef, useState } from 'react';
import  XMLParser from 'react-xml-parser';
import {
  IonPage,
  IonBackButton,
  IonButtons,
  IonButton,
  IonHeader,
  IonContent,
  IonNavLink,
  IonToolbar,
  IonTitle,
} from '@ionic/react';

const Podcast = () =>{


   const audioRef = useRef<any>(null);
  const [podcastData, setPodcastData] = useState<any>();
  let [currentPodcast, setCurrentPodcast] = useState(0);
  let [currentTime, setCurrentTime] = useState('00:00:00');
  const [play, setPlay] = useState(false);
  const [podNum, setPodnum] = useState(0);

  const formatTime = (seconds:any) => {
  const hrs = Math.floor(seconds / 3600);
  const mins = Math.floor((seconds % 3600) / 60);
  const secs = Math.floor(seconds % 60);

  const formattedHrs = hrs.toString().padStart(2, '0');
  const formattedMins = mins.toString().padStart(2, '0');
  const formattedSecs = secs.toString().padStart(2, '0');

  return `${formattedHrs}:${formattedMins}:${formattedSecs}`;
};

    useEffect(() =>{
      const fetchPod = async () =>{
        fetch(`https://anchor.fm/s/1d6ad87c/podcast/rss`)
        .then(response => response.text())
        .then(str => {          
            audioRef.current.pause();
            const xml = new XMLParser().parseFromString(str);
            setPodcastData(xml.getElementsByTagName('item'))
            // console.log(xml.getElementsByTagName('item'));
           })       
          }
          
          fetchPod()
        },[])

            const timer = () =>{
      const audioElement = audioRef.current;
  
      const updateCurrentTime = () => {
        const currentSeconds = audioElement.currentTime;
        setCurrentTime(formatTime(currentSeconds));
      };
  
      if (audioElement) {
        audioElement?.addEventListener('timeupdate', updateCurrentTime);
      }
  
      return () => {
        if (audioElement) {
          setCurrentTime(audioRef?.current.currentTime.toFixed())
        }
      };

    }


    timer()
    useEffect(() => {
    }, []);

    const handlePlay = () => {
      if (audioRef.current) {
        audioRef?.current?.play();
        setPlay(true)
      }
    };
  
    // Pause the audio
    const handlePause = () => {
      if (audioRef.current) {
        audioRef.current.pause();
        setPlay(false)
      }
    };

    const scrollToTop = (index:any) => {
      setCurrentPodcast(index)
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
  


    return(
        <IonPage>
              <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton></IonBackButton>
          </IonButtons>
          <IonTitle>Podcasts</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>

            <div className="min-h-[60vh]">

              <div className="relative h-[70vh] mb-10 w-[100%] overflow-hidden" style={{backgroundImage: "url('/images/designs/img2.jpeg')", backgroundPosition:'center bottom', backgroundSize: 'cover' }}>
                <div className="absolute flex items-end  text-white w-full h-full bg-[#0b0f14bf]">
                   <div className="p-10">
                        <h1 className="md:text-8xl text-4xl font-extrabold">KLSR PODCAST</h1>
                   </div>

                </div>
              </div>

              <div className="min-h-[300px] p-5 md:p-10 flex-wrap gap-10 flex">
 
                           {
                
                            <div className="flex-1 min-w-[300px]">
                              <div className="" id="player">
                              <div className="shadow p-3 !mx-auto shadow-slate-300 min-w-[300px]  w-[80%] rounded" id="description">
                                <div className="p-5 text-center">
                                <img className="w-full" src="/images/designs/img3.jpeg" alt="" />
                                <div className="py-5 flex items-center font-bold gap-2">
                                  <h1>{currentTime}</h1>
                                  <h1 className="w-full h-[10px] rounded bg-green-500"></h1>
                                   <h1>{podcastData && podcastData[currentPodcast].children.find((child:any) => child.name === 'itunes:duration').value}</h1>
                                </div>

                                <div className="flex w-1/2 m-auto justify-center">
                                  {/* <i  onClick={handleBackward} className="fa-solid fa-backward"></i> */}
                                  {
                                    play ? (  <i onClick={handlePause} className="fa-solid fa-pause"></i>):
                                    (<i onClick={handlePlay} className="fa-solid fa-play"></i>)
                                  }
                                
                                  {/* <i onClick={handleFoward} className="fa-solid fa-forward"></i> */}

                                </div>

                                </div>
                                <a href={podcastData && podcastData[currentPodcast].children.find((child:any) => child.name === 'enclosure').attributes.url} download={podcastData && podcastData[currentPodcast].children.find((child:any) => child.name === 'title').value+'.mp3'} type="audio/mpeg">

                                <div className="p-1 text-center rounded bg-green-600">
                                  <h1 className="text-white font-bold"><i className="fa-solid fa-download mr-5"></i> Download podcast</h1>
                                </div>
                                </a>
                                
                                <audio ref={audioRef} className="absolute" key={podcastData && podcastData[currentPodcast].children.find((child:any) => child.name === 'enclosure').attributes.url}>
                                  {
                                    podcastData !== "undefined" && (
                                      <source src={podcastData && podcastData[currentPodcast]?.children.find((child:any) => child.name === 'enclosure').attributes.url} type="audio/mpeg" />
                                    )
                                  }
                                  Your browser does not support the audio element.
                                </audio>

                              </div>
                              </div>

                              {
                                podcastData && (
                                  <div className="shadow !mx-auto my-4 shadow-slate-300 min-w-[300px] w-[80%] rounded" id="description">
                                    <div className="p-5">
                                      <h1 className="font-extrabold py-2 text-2xl">
                                      {podcastData && podcastData[currentPodcast].children.find((child:any) => child.name === 'title').value.slice(0, -1)}</h1>
                                      <p className="text-sm">{podcastData && podcastData[currentPodcast].children.find((child:any) => child.name === 'description').value.slice(0, -1)}</p>
                                      <hr />
                                      <div className="flex flex-wrap justify-between items-center pt-2">
                                          <h1 className="text-[#985be3] font-extrabold py-1"><i className="fa-solid fa-user-tie"></i> Olalekan Oloyede</h1>
                                          <p className="bg-slate-300 text-sm p-1 rounded-xl">{podcastData && podcastData[currentPodcast].children.find((child:any) => child?.name == 'pubDate')?.value}</p>
                                      </div>
                                    </div>
                                    
                                  </div>

                                )
                              }
                          
                            </div>

        
              }

              {
              podcastData ? (
               <div className="flex-1 h-[100vh] overflow-y-auto rounded max-[80%] min-w-[300px]" id="other-podcasts">
                    <div className="p-5 sticky top-0 bg-[#083232] text-white"><h1>Other Podcast</h1></div>
             
                    <div className="py-3">

                          <div>
                            {podcastData?.map((item:any, index:any) => (
                              <div onClick={() => scrollToTop(index)} className={`p-2 mb-5 items-center border-l-4 rounded border border-black  ${currentPodcast === index ? 'bg-gray-300' : ''}`} key={index}>
                                <h2 className="p-2 font-extrabold">{item.children.find((child:any) => child.name === 'title').value.slice(0, -1)}</h2>
                                <p className="p-2 font-bold text-xs">{item.children.find((child:any) => child?.name == 'pubDate')?.value.slice(0, -1)}</p>

                              </div>
                            ))}
                          </div>

                                 </div>
               </div>
              ): (
                 <div className="min-w-[300px] rounded-md text-center bg-teal-900 text-white h-max py-10 flex-1">
                   <h1 className="font-extrabold text-2xl">Could not get podcasts</h1>
                   <p className="text-red-100 text-xs mt-4 bg-red-800 w-max m-auto p-1 rounded-full">This could be due to</p>
     
                   <ul className="list-disc  text-left w-max m-auto">
                    <li>Network Connectivity issue</li>
                    <li>Internal Server error</li>
                   </ul>
                 </div>
              )
              }



              </div>

            </div>


      </IonContent>
        </IonPage>
    )
}

export default Podcast

