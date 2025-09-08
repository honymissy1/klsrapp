import React, { useEffect, useRef, useState } from 'react';
import  XMLParser from 'react-xml-parser';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import Amplitude, { Song } from "amplitudejs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleLeft, faArrowCircleRight, faBackwardStep, faClock, faForwardStep, faPauseCircle, faPlayCircle } from "@fortawesome/free-solid-svg-icons";


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
  IonRefresher,
  IonRefresherContent,
  IonToast
} from '@ionic/react';


import { RefresherEventDetail } from '@ionic/core';
import Error from '../components/Error';

const Podcast = () =>{
  
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [play, setPlay] = useState(false);
  const [loading, setLoading] = useState(true)

  const audioRef = useRef<any>(null);
  const [podcastData, setPodcastData] = useState<any>();
  let [currentPodcast, setCurrentPodcast] = useState(0);
  const [songs, setSongs] = useState<any>([]);
  const [status, setStatus] = useState({
    loading: false,
    loaded: false,
    error: null,
  });



  // Refs
  const targetRef = useRef<any>(null);
  const playlistRef = useRef<any>(null);

  //Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15;

  // Calculate current items
  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentItems = songs.slice(indexOfFirst, indexOfLast);

  // Calculate total pages
  const totalPages = Math.ceil(songs.length / itemsPerPage);


const doRefresh = async (event: CustomEvent<RefresherEventDetail>) => {
  try {
    // Perform your data fetching here
    window.location.reload();
    // If successful
    event.detail.complete();
  } catch (error) {
    // Handle the error here
    setToastMessage('Network error. Please try again.');
    setShowToast(true);
    event.detail.complete();
  }
};

    const formatDate = (d:string) => {
      const date = new Date(d);
      const pad = (n: number) => n.toString().padStart(2, '0');
      let hours = date.getHours();
      const ampm = hours >= 12 ? 'pm' : 'am';
      hours = hours % 12 || 12;
      return `${pad(date.getDate())}-${pad(date.getMonth()+1)}-${pad(date.getFullYear() % 100)} ${pad(hours)}:${pad(date.getMinutes())}${ampm}`;
    };

    useEffect(() => {
      const fetchPod = async () => {
        setStatus({ loading: true, loaded: false, error: null });
    
        try {
          const response = await fetch(`https://anchor.fm/s/1d6ad87c/podcast/rss`);
          const str = await response.text();
    
          const xml = new XMLParser().parseFromString(str);
          setPodcastData(xml.getElementsByTagName("item"));
    
          xml.getElementsByTagName("item").forEach((ele: any) => {
            setSongs((songs: any) => [
              ...songs,
              {
                title: ele?.children[0]?.value?.replace(/>/g, ""),
                url: ele?.children[6]?.attributes?.url,
                date: formatDate(ele?.children[5]?.value),
                cover_art_url: ele?.children[10]?.attributes?.href,
                description: ele?.children[1]?.value?.replace(
                  /(<\/?[^>]+(>|$))|(&quot;)|(>)/g,
                  " "
                ),
              },
            ]);
          });
    
          setStatus({ loading: false, loaded: true, error: null });
        } catch (err: any) {
          console.error("Podcast fetch failed:", err);
    
          // Normalize error message
          const message =
            err?.message || "Something went wrong while fetching podcast";
    
          setStatus({ loading: false, loaded: false, error: message });
        }
      };
    
      fetchPod();
    }, []);
    

        useEffect(() => {
          if (songs.length > 0) {
            Amplitude.init({
              songs,
              start_song: 0
            });
          }
        }, [songs]); // 


        const handleClick = () => {
          if (targetRef.current) {
            targetRef?.current?.scrollIntoView({ behavior: "smooth" });
          }
          setPlay(true);
        };

        const next = () =>{
          setCurrentPage(p => Math.min(p + 1, totalPages))
          if (playlistRef.current) {
            playlistRef?.current?.scrollIntoView({ behavior: "smooth" });
          }
        }

        const prev = () =>{
          setCurrentPage(p => Math.max(p - 1, 1))
          if (playlistRef.current) {
            playlistRef?.current?.scrollIntoView({ behavior: "smooth" });
          }
        }
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
      <IonRefresher slot="fixed" onIonRefresh={doRefresh}>
          <IonRefresherContent
           className='custom-refresher-text !text-white'
            pullingIcon="chevron-down-circle-outline"
            pullingText="Pull to refresh"
            refreshingSpinner="circles"
            refreshingText="Refreshing..."
          />
        </IonRefresher>
        <div className='p-2'>

      

        <div className='mb-2 w-full rounded-2xl overflow-hidden bg-black max-h-max relative'>
          <img className='w-[200%]' src="./images/podcast.jpg" alt="" />
          <h3 className='p-3 font-headline text-center absolute bottom-0 text-white text-3xl font-bold'>Kingdom Lifestyle Podcast</h3> 
        </div>

        {
          status.loading && (
            <div className='w-full min-h-[400px] flex justify-center items-center'>
              <div className='w-1/3'>
                <img src="./images/loader.gif" alt="" />
                <h4 className='text-center mt-2 text-blue-600'>Loading</h4>
              </div>
            </div>
          )
         }
          {
          status.loaded && (
            <div className="min-h-[60vh]">
            <div ref={targetRef} className="amplitude-player rounded-2xl overflow-clip">
            {/* Cover Art */}
            <img className='rounded-2xl' data-amplitude-song-info="cover_art_url" alt="Album Art" />

            <div className='bg-[#1f0d2a] text-white font-bold p-5 mt-2 rounded-2xl'>
            <div className='flex gap-2'>
              <span className="amplitude-current-time"></span> {" "}
              <input type="range" className="amplitude-song-slider w-full" />
              {/* Current & Duration Time */}
              <span className="amplitude-duration-time"></span>
            </div>

            <div className='text-4xl justify-evenly flex mt-4'>

              <button className="amplitude-prev"><FontAwesomeIcon icon={faBackwardStep} /></button>
            
              <button onClick={() => setPlay(!play)} className="amplitude-play-pause">
                {
                  play ? (<FontAwesomeIcon icon={faPauseCircle} />) : (<FontAwesomeIcon icon={faPlayCircle} />)
                }
                </button>
              <button className="amplitude-next"><FontAwesomeIcon icon={faForwardStep} /></button>

            </div>

            </div>

            {/* Song Info */}
            <div className='p-3'>
              <div className='flex items-end justify-end p-1 text-[purple] gap-2'>
              <FontAwesomeIcon icon={faClock} />
              <span className='font-semibold text-xs' data-amplitude-song-info="date"></span><br/>
              </div>
              <span style={{fontFamily: "Funnel Display"}}  className='font-semibold text-2xl' data-amplitude-song-info="title"></span>
              <div style={{fontFamily: "Funnel Display", marginTop: '10px'}}  className='text-sm text-[#5c5454] font-semibold' data-amplitude-song-info="description"></div>
            </div>

            {/* Controls */}

            {/* Progress Bar */}

          </div>

          <div ref={playlistRef} className="playlist p-2">
              {currentItems.map((song:any, index:number) => (
                <div
                  onClick={handleClick}
                  key={index}
                  className="song amplitude-play border p-3"
                  data-amplitude-song-index={index+""}

                >
                  <strong className='text-sm font-fancy'>{song.title}</strong>
                  <p className='line-clamp-3 font-semibold text-[#928a8a] text-xs'>{song.description}</p>

                </div>
              ))}
            </div>

            <div className='flex justify-between p-2'>
              {/* Previous button */}
              <button
                className='bg-yellow-600 text-white font-semibold p-2 text-sm rounded'
                onClick={() => prev()}
                disabled={currentPage === 1}
              >
              <FontAwesomeIcon icon={faArrowCircleLeft} />
              Prev
              </button>
              {/* Page numbers */}
            
            
                <button>
                  <p>Page {currentPage}</p> 
                </button>
          
                
              
              {/* Next button */}
              <button
                className='bg-yellow-600 text-sm text-white font-semibold p-2 rounded'
                onClick={next}
                disabled={currentPage === totalPages}
              >
                Next
                <FontAwesomeIcon icon={faArrowCircleRight} />
                
              </button>
            </div>
          

            </div>

          )
        }

        {
          status.error && (
            <Error />
          )

        }



            </div>

      </IonContent>

        </IonPage>
    )
}

export default Podcast


