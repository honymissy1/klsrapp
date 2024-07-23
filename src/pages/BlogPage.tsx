import { IonContent, IonHeader, IonCard, IonButtons, IonBackButton, IonCardHeader,
   IonPage, IonTitle, IonToolbar,   IonRefresher,
   IonRefresherContent, IonNavLink, IonList, IonItem } from '@ionic/react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useEffect, useState } from "react";
import supabase from '../../superbaseClient';
import { formatRelative, subDays } from "date-fns";
import Article from './Post';
import { Link } from 'react-router-dom';



const BlogPage: React.FC = () => {

  const [articles, setArticles] = useState<any>();
  const [loading, setLoading] = useState<any>();
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [pageSize] = useState(10); // Number of items per page
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() =>{
    setLoading(true)

    const start = (page - 1) * pageSize;
    const end = start + pageSize - 1;

    const fetcher = async() =>{
      let { data: articles, error, count} = await supabase
      .from('articles')
      .select('*', { count: 'exact' }).order('created_at', { ascending: false }).range(start, end);

      if(articles){
        setArticles(articles)
        setTotalPages(Math.ceil(parseInt(count) / pageSize));
      }
      setLoading(false)
    }

    fetcher()

    
  },[page, pageSize])


  const handleNextPage = () => {
    if (page < totalPages) {
        setPage(page + 1);
    }
};

const handlePreviousPage = () => {
    if (page > 1) {
        setPage(page - 1);
    }
};


  const doRefresh = async (event:any) => {
    try {
      // Perform your data fetching here
      window.location.reload();
      // If successful
      event.detail.complete();
    } catch (error) {
      // Handle the error here
      event.detail.complete();
    }
  };
  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton></IonBackButton>
          </IonButtons>
          <IonTitle>Articles</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">
            <div className='flex items-center gap-3'>
                <img className='w-[70px] ' src="/images/logo.png" alt="" />
                <h1>Articles</h1>
              </div>
            </IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonRefresher slot="fixed" onIonRefresh={doRefresh}>
          <IonRefresherContent
           className='custom-refresher-text !text-white'
            pullingIcon="chevron-down-circle-outline"
            pullingText="Pull to refresh"
            refreshingSpinner="circles"
            refreshingText="Refreshing..."
          />
        </IonRefresher>
        <div className="bg-white w-full min-h-[100%]">
          {
            loading && (
              <div className='h-[80vh] flex  text-center p-3'>
                <div className="w-[30%] m-auto max-w-[500px]">
                  <img className='w-full' src="/images/loader.gif" alt="" />
                  
                </div>
              </div>
            )
          }

          {
              !articles && !loading && (
                <div className='p-5 flex items-center min-h-[100%] text-center'>
                 <div>
                  <div className='m-auto w-[200px] h-[200px]'>
                  <img src="/images/connect.gif" alt="" />
                  </div>
                  <h1 className='font-extrabold text-2xl dark:text-black'>Can't get article from database</h1>
                  <p className='dark:text-black'>Make sure your internet connection is secure to accesss articles</p>

                 </div>
                </div>
              )
            }
          <div className='relative top-0 bg-[white]'>       
                {
                    articles && !loading && (
            <div className={`p-1 min-h-[50%] bg-[#002F3D] pb-[40px]`} style={{borderRadius: '0px 0px 70px 0px'}}>
                      <div className='text-xs m-2 bg-[#C89700] w-max text-white p-1 rounded font-bold'>Latest</div>

                <Swiper slidesPerView={1.5} slidesPerGroup={1}>
                  {
                    articles && articles?.slice(0,4).map((ele:any, index:any) =>(
                      <SwiperSlide key={index} className='flex flex-col justify-evenly items-center' style={{width: '100vw', height: '100%'}}>
                      <Link to={`/article/${ele.id}`}>
                        <IonCard routerLink={`article/${ele.id}`} className='relative text-black'>
                              <p className='absolute m-1 p-1 text-xs text-white font-bold bg-[#baa31ef6] w-max rounded'>{ele.type}</p>
                              <div className='w-full flex overflow-hidden h-[100px]'>
                                <img className='w-full object-cover object-top' src={ele.img_url} alt="" />
                              </div>
                              <h1 className='!text-sm px-2 my-3 min-h-[50px] max-h-[100px] line-clamp-3  !font-bold'>{ele.title}</h1>

                              <h1 className='text-right p-2 text-purple-600'>More <i className="fa-solid fa-arrow-right"></i></h1>
                              </IonCard>
                      </Link>
                        </SwiperSlide>
                    ))
                  }

              </Swiper> 
            </div>
                    )
                  }

          <br />

            <IonList>
              {
                articles && !loading && articles?.slice(2).map((ele:any, index:any) =>(
                  <Link to={`/article/${ele.id}`}>
                    <IonItem>
                        <div className='m-2 w-full dark:text-[white]'>
                          <p className="text-xs py-2 text-green-700 font-semibold">{ele.type}</p>
                          <h1 className='text-[#2d2a2a] text-sm dark:text-white'>{ele.title}</h1>
                        
                          <div className='flex text-xs font-bold justify-between items-center'>
                            <p className='text-xs truncate py-2 dark:text-white'>by {ele.creator}</p>
                            <p className='text-green-400 text-xs'><i className="fa-regular fa-calendar-days"></i> {formatRelative(subDays(ele.created_at, 0), new Date())}</p>

                          </div>
                        </div>


                      </IonItem>
                  </Link>
                    ))
              }

              </IonList>

          </div>

        </div>
            <div className='p-10 flex justify-between items-center'>
                <button className={`${page === 1 ? 'bg-purple-100 text-white':"bg-blue-700"} p-2  rounded-md`} onClick={handlePreviousPage} disabled={page === 1}>
                    <i className='fa fa-arrow-left'></i>  </button>
                <span>{page} of {totalPages} </span>
                <button className={`${page === totalPages ? 'bg-purple-100 text-white':"bg-blue-700"} p-2  rounded-md`} onClick={handleNextPage}>
                      <i className='fa fa-arrow-right'></i>
                </button>
            </div>

      </IonContent>
    </IonPage>
  );
};

export default BlogPage;
