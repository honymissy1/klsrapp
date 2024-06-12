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
    IonCard,
    IonCardHeader,
    IonGrid,
    IonRow,
    IonCol,
  } from '@ionic/react';
const Partnership = () =>{
    return(
        <IonPage>
        <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton></IonBackButton>
          </IonButtons>
          <IonTitle>Partnership / Support</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className='h-full w-full'>
      <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">KLSR</IonTitle>
          </IonToolbar>
      </IonHeader>
         <div className='top-0 bg-fixed min-h-[100vh] pt-5' style={{ backgroundSize: 'cover', backgroundImage: "url('/images/background.jpg')", backgroundRepeat: 'no-repeat'}}>
          {/* <IonCard className=''>
            <IonCardHeader>  */}
              <h1 className='text-center text-white text-2xl font-extrabold'>Partner / Support Kingdom Lifestyle Radio</h1>
            {/* </IonCardHeader> */}

            <p className='p-2 text-center text-[#ffffff]'>You support Kingdom Lifestyle Radio by sowing you seeds to the account details below</p>
          {/* </IonCard> */}

          <div className='p-4 max-w-[600px] md:m-auto'>
           <img src="/images/charity.jpg" alt="" />

          </div>
        
          <IonGrid className='max-w-[600px]'>
            <IonRow>
                <IonCol>
                  <IonCard className='p-5 text-center'>
                   <div className='w-[50px] m-auto'>
                     <img className='w-full' src="/images/Zenith-logo.png" alt="" />
                   </div>
                    <p className='text-red-600'>Account Number</p>
                   <p className='font-extrabold text-2xl'>1229216755</p>

                    <p className='p-2 text-center'>Kingdom Lifestyle & Diamond Charities</p>
                </IonCard>
              </IonCol>

              <IonCol>
                  <IonCard className='p-5 text-center'>
                   <div className='w-[50px] m-auto'>
                     <img className='w-full' src="/images/gtb-logo.png" alt="" />
                   </div>
                    <p className='text-red-600'>Account Number</p>
                   <p className='font-extrabold text-2xl'>0892125365</p>

                  <p className='p-2 text-center'>Kingdom Lifestyle & Diamond Charities</p>
                </IonCard>
              </IonCol>
            </IonRow>

            <IonRow>
              <IonCol>
                    <IonCard className='p-5 text-center relative'>
                      <h2 className='font-bold absolute bg-red-600 p-1 rounded text-red-100'> USD</h2>
                    <div className='w-[50px] m-auto'>
                      <img className='w-full' src="/images/gtb-logo.png" alt="" />
                    </div>
                      <p className='text-red-600'>Account Number</p>
                    <p className='font-extrabold text-2xl'>0892172060</p>

                    <p className='p-2 text-center'>Kingdom Lifestyle & Diamond Charities</p>
                  </IonCard>
                </IonCol>
            </IonRow>
          </IonGrid>
          <div className='p-4 max-w-[600px] md:m-auto'>
           <img src="/images/charity1.jpg" alt="" />

          </div>
        </div>


            
      </IonContent>
        </IonPage>
    )
}

export default Partnership
