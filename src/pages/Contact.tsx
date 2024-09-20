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
    IonGrid,
    IonRow,
    IonCol,
    IonCard,
  } from '@ionic/react';

  import { Link } from 'react-router-dom';

const Contact = () =>{
    return(
        <IonPage>
        <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton></IonBackButton>
          </IonButtons>
          <IonTitle>Contact Us</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
      <div className='top-0 px-2 bg-fixed min-h-[100vh] pt-5' style={{backgroundSize: 'cover', backgroundImage: "url('/images/background.jpg')", backgroundRepeat: 'no-repeat'}}>

          <div className="flex-1 mt-10 p-5 min-w-[300px] min-h-[300px] text-[white] bg-[#00808082] rounded-md">
                    <h1 className='font-extrabold text-2xl py-5'>Mobile Number</h1>

                    <p>For prayers, counseling or support you can contact us via</p>

                    <div className='p-2 mt-5 bg-white text-black relative'>
                        <sup className='rounded-md bg-green-600 p-2 text-white font-extrabold absolute right-0'>Nigeria</sup>
                        <p className='font-extrabold text-lg'>
                        <a href={`tel: +2349160006614`}> +2349160006614, </a>
                        <a className='my-3' href={`tel: +2347067873032`}>  +2347067873032, </a>
                        <a href={`tel: +2347018036538`}> +2347018036538 </a>
                        </p>
                    </div>
                    <div className='p-2 my-5 bg-white text-black relative'>
                        <sup className='rounded-md bg-red-600 p-2 text-white font-extrabold absolute right-0'>USA</sup>
                        <p className='font-extrabold text-lg'>+1347-481-6604 OR +1347-208-4052</p>
                    </div>

                    <div>
                        <p></p>
                    </div>
                </div>


          <IonGrid className='bg-[#ffffff9d] mt-5 rounded'>
            <IonRow>
              <IonCol>
               <a href='https://api.whatsapp.com/send?phone=2349160006614'>
                <IonCard className='p-2 m-1'>
                  <div className="h-[40px] mb-2">
                    <img src="/images/icons/whatsapp.png" className='h-full' alt="" />
                  </div>
                  <h1>Whatsapp</h1>
                </IonCard>
              </a> 
              </IonCol>

              <IonCol>
              <a href={`https://www.facebook.com/kingdomLifestyleradio`}>
                <IonCard className='p-2 m-1'>
                <div className="h-[40px] mb-2">
                    <img src="/images/icons/facebook.png" className='h-full' alt="" />
                  </div>
                  <h1>Facebook</h1>
                </IonCard>
              </a> 
              </IonCol>

          

            </IonRow>

            <IonRow>
              <IonCol>
                <IonCard className='p-2 m-1'>
                    {/* <div className="h-[150px] border">
                    <iframe className='w-full' src="https://www.youtube.com/embed/PDWWz-wbunQ" title="Kingdom Lifestyle Podcast" allowFullScreen></iframe>
                    </div> */}

                      <i className="fa-brands fa-youtube text-red-600 text-[40px]"></i>
                    <div className='w-full flex pt-3 justify-between items-center'>
                      <p>Youtube</p>
                      <a href={'https://www.youtube.com/@kingdomLifestyle-radio'}>
                        <p className='text-white rounded text-md font-extrabold p-2 bg-green-800'>More {">>"}</p>
                      </a>  
                    </div>
                  </IonCard>
                </IonCol>
            </IonRow>

            <IonRow>
              <IonCol>
                <a href="https://instagram.com/kingdomlifestyleradio">
                  <IonCard className='p-2 m-1'>
                  <div className="h-[40px] mb-2">
                      <img src="/images/icons/instagram.png" className='h-full' alt="" />
                    </div>
                      <h1>Instagram</h1>
                    </IonCard>

                </a>
                </IonCol>

                <IonCol>
                  <a href="https://twitter.com/kingdomlifestr">
                  <IonCard className='p-2 m-1'>
                  <div className="h-[40px] mb-2">
                        <img src="/images/icons/twitterx.png" className='h-full' alt="" />
                      </div>
                      <h1>Twitter</h1>
                    </IonCard>

                  </a>
              </IonCol>

            </IonRow>

            
          </IonGrid>
        </div>

        <div>
        </div>
      </IonContent>
        </IonPage>
    )
}

export default Contact
