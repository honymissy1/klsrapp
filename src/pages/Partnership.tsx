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
              <h1 className='text-center text-white text-2xl font-extrabold'> KINGDOM LIFESTYLE & DIAMOND CHARITIES</h1>
            {/* </IonCardHeader> */}

            <p className='p-2 text-center text-[#ffffff]'>Kingdom Lifestyle and Diamond Charities is a non-profit and non-political organization - part of Kingdom Lifestyle Radio with the mandate to:</p>
          {/* </IonCard> */}

          <IonCard className='relative'>
            <div className='text-xl font-extrabold bg-blue-900 text-white w-max p-2'>
              1
            </div>
            <p className='p-3'>SPREAD GOD'S LOVE TO THE VULNERABLE, THE NEEDY, THE HOMELESS,
              STRUGGLING YOUTHS AND ADULTS ACROSS AFRICAN COUNTRIES BY ASSISTING AND
              EMPOWERING THEM ECONOMICALLY</p>
           </IonCard>

           <IonCard className='mt-5'>
           <div className='text-xl font-extrabold bg-blue-900 text-white w-max p-2'>
              2
            </div>
             <p className='p-3'>
                RENDER SUPPORT AND ASSISTANCE TO THE LESS PRIVILEGED IN THE SOCIETY.

             </p>
           </IonCard>

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
