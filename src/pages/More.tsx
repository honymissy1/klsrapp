import { IonContent, IonHeader,
         IonPage, IonTitle, IonToolbar,
         IonCard, IonCardContent, IonGrid, IonRow, IonCardTitle, IonCardHeader, IonCol } from '@ionic/react';
import { Link } from 'react-router-dom';


const More: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>More</IonTitle>
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
        <div style={{minHeight:'100vh', margin:'0px auto', backgroundSize: 'cover', backgroundImage: "url('/images/background.jpg')", backgroundRepeat: 'no-repeat'}}>
          <div style={{width: '100%', height: 'max-content'}}>
            <div className='relative overflow-hidden w-full h-[30vh] bg-[#002F3D]'>
               <div className='z-10 absolute w-full h-full bg-[#555511a7]'></div>
               <img className='object-bottom object-cover absolute' style={{width: '100%'}} src="/images/happy.png" alt="" />
               <div className='text-white z-10 absolute bottom-0 p-3'>
                <img className='w-[50px]' src="/images/logo.png" alt="" /> 
               <h1 className='text-3xl py-1 font-extrabold'>KLSR</h1>
                <p className='font-extrabold italic'>Communicating God's mind with the word</p>
               </div>
            </div>
          </div>

          <IonGrid className='max-w-[600px]'>
            <IonRow>
              <IonCol>
                <Link to="/programs">
                  <IonCard>
                  <IonCardHeader>
                      <div style={{width: '50px', margin: '0px auto'}}>
                          <img style={{width: '100%'}} src="/images/program.png" alt="" />
                      </div>
                    </IonCardHeader>
                    <IonCardContent style={{textAlign: 'center'}}>Programs</IonCardContent>
                  </IonCard>
                </Link>
              </IonCol>

              <IonCol>
                <Link to="/partnership">
                  <IonCard>
                    <IonCardHeader>
                      <div style={{width: '50px', margin: '0px auto'}}>
                          <img style={{width: '100%'}} src="/images/partnership.png" alt="" />
                      </div>
                    </IonCardHeader>
                    <IonCardContent style={{textAlign: 'center'}}>Partnership</IonCardContent>
                  </IonCard>
                </Link>
              </IonCol>


            </IonRow>

             <IonRow>
              <IonCol>
                <a href="https://www.kingdomlifestyleradio.com">
                  <IonCard className="my-0">
                  <IonCardHeader>
                      <div style={{width: '50px', margin: '0px auto'}}>
                          <img style={{width: '100%'}} src="/images/web.png" alt="" />
                      </div>
                     <h1 className="text-center font-bold">Kingdom Lifestyle Radio website</h1> 
                    </IonCardHeader>
                    <IonCardContent style={{textAlign: 'center'}}>
                      <p>Listen and download podcast from our official website and More.</p>
                    </IonCardContent>
                  </IonCard>

                </a>
              </IonCol>

            </IonRow> 

            <IonRow>
              <IonCol>
            <Link to="/about">
                <IonCard>
                <IonCardHeader>
                    <div style={{width: '50px', margin: '0px auto'}}>
                        <img style={{width: '100%'}} src="/images/about.gif" alt="" />
                    </div>
                  </IonCardHeader>
                  <IonCardContent style={{textAlign: 'center'}}>About Us</IonCardContent>
                </IonCard>
            </Link>
              </IonCol>

              <IonCol>
                <Link to="/contact">
                  <IonCard>
                  <IonCardHeader>
                      <div style={{width: '50px', margin: '0px auto'}}>
                          <img style={{width: '100%'}} src="/images/contact.png" alt="" />
                      </div>
                    </IonCardHeader>
                    <IonCardContent style={{textAlign: 'center'}}>Contact Us</IonCardContent>
                  </IonCard>
                </Link>
              </IonCol>
            </IonRow>
          </IonGrid>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default More;
