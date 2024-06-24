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
const AboutUs = () =>{
    return(
        <IonPage>
        <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton></IonBackButton>
          </IonButtons>
          <IonTitle>About Us</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className='bg-red-500 h-full w-full'>
      <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">KLSR</IonTitle>
          </IonToolbar>
      </IonHeader>
          <div className='bg-fixed p-2' style={{ height:'max-content', margin:'0px auto', backgroundSize: 'cover', backgroundImage: "url('/images/background.jpg')", backgroundRepeat: 'no-repeat'}}>

              <div className='mt-5 max-w-[550px] md:m-auto rounded bg-[#efeaeac7] text-[#292929] p-2'>
                  <p className='p-4'>
                  Kingdom lifestyle-Radio is a 24/7 internet gospel radio 
                  station established with the burden to reach out to people and
                  nations with encouraging words from the Scripture. We are 
                  committed to the transmission of God’s word, powerful spirit 
                  and soul lifting messages from various ministers of the
                    gospel, worship songs, and hymns. We do not compromise 
                  template through the Scripture is our priority for all age 
                  brackets.
<br /><br />
                  More so, among so many tools available in the toolbox of a Christian, faith, is an essential tool that helps a person to connect with God. We found this to be true in the book of <span className='font-extrabold text-white'>Hebrews 11:6</span>
                  
                  </p>
                  <p className='bg-orange-300 p-2 text-[#312e2e] px-4 border-l-4 rounded border-teal-700'>
                  And it is impossible to please God without faith. Anyone who wants to come to him must believe that God exists and that he rewards those who sincerely seek him. <span className='font-extrabold text-white'>Hebrews 11:6</span> 
                  </p>
<br />
                  <p className='p-2'>
                  It is important to know that the word we hear, those we listen to, and the books we read, contribute as well as deposit some form of knowledge into a person. The effect of the words we listen to, and the books we read, usually create a lifestyle that multiplies along the line.
                  </p>
                    <hr className='bg-black'/>
                  <br />
                  <p className='p-2'>Therefore, it is imperative to listen to the right people, the right word that comes in the form of songs, messages, exhortation, Christian based seminar, and sermons in order to build our faith. The Bible stated in Romans 10:17</p>
           
                  <p className='bg-orange-300 p-2 text-[#312e2e] px-4 border-l-4 rounded border-teal-700'>
                  So, then faith comes by hearing, and hearing by the word of God. <span className='font-extrabold text-white'>Romans 10:17</span> 
                  </p>

                  <p className='p-2'>
                  Moreover, the word of God in the world we live in today is available in various versions which includes the print format, media, social media, electronic, and around our physical environment. All we have to do is to utilize every means or the most preferable means for our spiritual growth.
                  </p>

                  <p className='p-2'>
                  Through the internet or physical representation, a person can be impacted, blessed, and receive healing in the area or areas where they trust God to visitation. Whatever information we receive, with time, we digest, and ultimately turns into an idea a person process on a daily basis. In the long run, that information becomes part of us and eventually they become our lifestyle either consciously or unconsciously.
                    </p>

                    <p className='p-2'>
                    In regards to this, Kingdom Lifestyle-Radio, a division of Kingdom Access Media, is the right platform for audio and visual 24/7 presentation of gospel content in order for you to be blessed 24/7, without leaving behind the possibility of building and strengthening your inner man which is your spirit.
                    </p>

                    <p className='p-2'>
                    Finally, as the body requires nutritious food to grow and glow, also, your spirit needs the word of God to grow spiritually and glow in all your dealings. Healing and testimony await you here on the Kingdom Lifestyle-Radio, and you are always welcome on this platform, giving you 24/7 Gospel on the go!
                    </p>

           
              </div>

              <div className='mt-5 rounded bg-[teal] w-full overflow-hidden relative h-[400px]'>
                <img src="/images/founder.png" alt="" />
                <div className='absolute text-black bottom-0 bg-[white] w-full p-2'>
                  <h1 className='text-2xl font-extrabold dark:text-black'>Olalekan Oloyede</h1>
                  <p className='italic dark:text-black'>Founder, Kingdom Lifestyle Radio</p>
                </div>
              </div>
            </div>
      </IonContent>
        </IonPage>
    )
}

export default AboutUs
