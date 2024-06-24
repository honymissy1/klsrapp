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
  import { register } from 'swiper/element/bundle';
  import { Swiper, SwiperSlide } from 'swiper/react';
  import { EffectCoverflow, Pagination } from 'swiper/modules';
  import 'swiper/css';
  import 'swiper/css/effect-coverflow';
  import 'swiper/css/pagination';
  import { Link } from 'react-router-dom';
  import supabase from '../../superbaseClient';
import { useEffect, useState } from 'react';

  const fetchDataByDay = async (day:any) => {
    const { data, error } = await supabase
      .from('schedule')
      .select('*')
      .eq('day', day);
    
    if (error) {
      console.error('Error fetching data:', error);
      return [];
    }
    console.log(data);
    
    return data;
  };

const Programs = () =>{
  const [mondayData, setMondayData] = useState<any>([]);
  const [tuesdayData, setTuesdayData] = useState<any>([]);
  const [wednesdayData, setWednesdayData] = useState<any>([]);
  const [thursdayData, setThursdayData] = useState<any>([]);
  const [fridayData, setFridayData] = useState<any>([]);
  const [saturdayData, setSaturdayData] = useState<any>([]);
  const [sundayData, setSundayData] = useState<any>([]);

  useEffect(() =>{
    register()


  }, [])

  useEffect(() => {
    const fetchAllData = async () => {
      setMondayData(await fetchDataByDay(0));
      setTuesdayData(await fetchDataByDay(1));
      setWednesdayData(await fetchDataByDay(2));
      setThursdayData(await fetchDataByDay(3));
      setFridayData(await fetchDataByDay(4));
      setSaturdayData(await fetchDataByDay(5));
      setSundayData(await fetchDataByDay(6));

    };

    fetchAllData();
  }, []);

    return(
        <IonPage>
        <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton></IonBackButton>
          </IonButtons>
          <IonTitle>Scheduled Programs</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className=''>
        <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={1}
       
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        breakpoints={{
          650: {
            slidesPerView: 2
          },

          800: {
            slidesPerView: 3
          }
        }}
        navigation={true}
        pagination={false}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper "
      >
        <SwiperSlide className='!w-[300px] md:!w-[600px] self-center'>
         <img className='' src="/images/designs/img.jpeg" alt="Burger" />
        </SwiperSlide>
        
        <SwiperSlide className='!w-[300px] md:!w-[600px]  self-center'>
         <img className="" src="/images/designs/img1.jpg" alt="Burger" />
        </SwiperSlide>

        <SwiperSlide className='!w-[300px] md:!w-[600px]  self-center'>
         <img className="w-full" src="/images/designs/img2.jpg" alt="Burger" />
        </SwiperSlide>

        <SwiperSlide className='!w-[300px]   self-center'>
         <img className='' src="/images/designs/img1.jpeg" alt="Burger" />
        </SwiperSlide>

        <SwiperSlide className='!w-[300px]  self-center'>
         <img className='' src="/images/new6.jpeg" alt="Burger" />
        </SwiperSlide>

        <SwiperSlide className='!w-[300px]  self-center'>
         <img className='' src="/images/new1.jpeg" alt="Burger" />
        </SwiperSlide>

        <SwiperSlide className='!w-[300px]  self-center'>
         <img className='' src="/images/new3.jpeg" alt="Burger" />
        </SwiperSlide>

        <SwiperSlide className='!w-[300px]  self-center'>
         <img className='' src="/images/new2.jpeg" alt="Burger" />
        </SwiperSlide>
        <SwiperSlide className='!w-[300px] md:!w-[600px]  self-center'>
         <img className='' src="/images/designs/img4.jpg" alt="Burger" />
        </SwiperSlide>
        <SwiperSlide className='!w-[300px] md:!w-[600px]  self-center'>
         <img className='' src="/images/designs/img5.jpg" alt="Burger" />
        </SwiperSlide>

        <SwiperSlide className='!w-[300px] md:!w-[600px]  self-center'>
         <img className='' src="/images/designs/img6.jpg" alt="Burger" />
        </SwiperSlide>
      
        <SwiperSlide className='!w-[300px] md:!w-[600px]  self-center'>
         <img className='' src="/images/designs/img7.jpg" alt="Burger" />
        </SwiperSlide>
      </Swiper>
        </div>
        {
          sundayData.length < 1 && (
            <h1 className='text-center font-extrabold mt-10 text-2xl'>Loading.....</h1>
          )
        }
        {
          sundayData.length > 0 && (
              <div className='p-2 max-w-[500px] m-auto'>
        <h2 className='bg-[#b5b506] p-2'>Monday</h2>

        <div className='p-2 font-bold'>
          {mondayData.map((item:any) => (
              <div className='flex gap-2 items-center mb-2'>           
                <h1>{item.time}</h1>
                <h1 style={{borderLeft: '5px solid'}} className='text-green-800 rounded line-clamp-2 flex-1 px-1'>{item.program}</h1>
                <h1  className='text-green-800 rounded line-clamp-2 flex-1 px-1'>{item.social}</h1>
              </div>
              ))}
        </div>

        <h2 className='bg-[#b5b506] p-2'>Tuesday</h2>

        <div className='p-2 font-bold'>
          {tuesdayData.map((item:any) => (
              <div className='flex gap-2 items-center mb-2'>           
                <h1>{item.time}</h1>
                <h1 style={{borderLeft: '5px solid'}} className='text-green-800 rounded line-clamp-2 flex-1 px-1'>{item.program}</h1>
                <h1  className='text-green-800 rounded line-clamp-2 flex-1 px-1'>{item.social}</h1>

              </div>
              ))}
        </div>

        <h2 className='bg-[#b5b506] p-2'>Wednesday</h2>

        <div className='p-2 font-bold'>
          {wednesdayData.map((item:any) => (
              <div className='flex gap-2 items-center mb-2'>           
                <h1>{item.time}</h1>
                <h1 style={{borderLeft: '5px solid'}} className='text-green-800 rounded line-clamp-2 flex-1 px-1'>{item.program}</h1>
                <h1  className='text-green-800 rounded line-clamp-2 flex-1 px-1'>{item.social}</h1>

              </div>
              ))}
        </div>

        <h2 className='bg-[#b5b506] p-2'>Thursday</h2>

        <div className='p-2 font-bold'>
          {thursdayData.map((item:any) => (
              <div className='flex gap-2 items-center mb-2'>           
                <h1>{item.time}</h1>
                <h1 style={{borderLeft: '5px solid'}} className='text-green-800 rounded line-clamp-2 flex-1 px-1'>{item.program}</h1>
                <h1  className='text-green-800 rounded line-clamp-2 flex-1 px-1'>{item.social}</h1>

              </div>
              ))}
        </div>


        <h2 className='bg-[#b5b506] p-2'>Friday</h2>

        <div className='p-2 font-bold'>
          {fridayData.map((item:any) => (
              <div className='flex gap-2 items-center mb-2'>           
                <h1>{item.time}</h1>
                <h1 style={{borderLeft: '5px solid'}} className='text-green-800 rounded line-clamp-2 flex-1 px-1'>{item.program}</h1>
                <h1  className='text-green-800 rounded line-clamp-2 flex-1 px-1'>{item.social}</h1>

              </div>
              ))}
        </div>

        <h2 className='bg-[#b5b506] p-2'>Saturday</h2>

        <div className='p-2 font-bold'>
          {saturdayData.map((item:any) => (
              <div className='flex gap-2 items-center mb-2'>           
                <h1>{item.time}</h1>
                <h1 style={{borderLeft: '5px solid'}} className='text-green-800 rounded line-clamp-2 flex-1 px-1'>{item.program}</h1>
                <h1  className='text-green-800 rounded line-clamp-2 flex-1 px-1'>{item.social}</h1>

              </div>
              ))}
          </div>

        <h2 className='bg-[#b5b506] p-2'>Sunday</h2>

        <div className='p-2 font-bold'>
          {sundayData.map((item:any) => (
              <div className='flex gap-2 items-center mb-2'>           
                <h1>{item.time}</h1>
                <h1 style={{borderLeft: '5px solid'}} className='text-green-800 rounded line-clamp-2 flex-1 px-1'>{item.program}</h1>
                <h1  className='text-green-800 rounded line-clamp-2 flex-1 px-1'>{item.social}</h1>

              </div>
              ))}
        </div>

          </div>

          )
        }
      </IonContent>
        </IonPage>
    )
}

export default Programs
