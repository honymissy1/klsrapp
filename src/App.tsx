import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import RadioPage from './pages/RadioPage';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';



import { playCircle, radio, newspaper, library, search } from 'ionicons/icons';
import Radio from './assets/images/radio.png'
import Article from './assets/images/article.png'
import Post from './pages/Post';
/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
import '@ionic/react/css/palettes/dark.system.css';

/* Theme variables */
import './theme/variables.css';
import BlogPage from './pages/BlogPage';
import More from './pages/More';
import { useState } from 'react';
import Programs from './pages/Programs';
import AboutUs from './pages/AboutUs';
import Partnership from './pages/Partnership'
import Contact from './pages/Contact';

setupIonicReact();

const App: React.FC = () => {

  const [selectedTab, setSelectedTab] = useState<any>('home');
  return (
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>

          <Route path="/programs">
            <Programs />
          </Route>

          <Route exact path="/article/:id">
            <Post />
          </Route>

          <Route path="/articles" render={() => <BlogPage />} exact={true} />
          <Route path="/more" render={() => <More />} exact={true} />


          <Route path="/about" render={() => <AboutUs />} exact={true} />
          <Route path="/partnership" render={() => <Partnership /> } exact={true} />
          <Route path="/programs" render={() => <Programs /> } exact={true} />
          <Route path="/contact" render={() => <Contact /> } exact={true} />

        </IonRouterOutlet>

        <IonTabBar style={{borderRadius: '0px', padding:'10px 5px', width: '100%', margin: '0px auto'}} slot="bottom">
        
          <IonTabButton tab="articles" href="/articles"  onClick={() => setSelectedTab('article')}>
            {/* <IonIcon icon={newspaper} /> */}
            <div className='w-[30px]'>
             <img className={selectedTab === 'article' ? 'selected' : ''} src={Article} alt="" />
            </div>
            <IonLabel>Articles</IonLabel>

          </IonTabButton>

          <IonTabButton tab="home" href="/home" onClick={() => setSelectedTab('home')}>
            {/* <IonIcon icon={radio} /> */}
            <div className='w-[30px]'>
              <img className={selectedTab === 'home' ? 'selected w-full' : ''} src={Radio} alt="" />
            </div>
            <IonLabel>Radio</IonLabel>
          </IonTabButton>

          <IonTabButton tab="more" href="/more"  onClick={() => setSelectedTab('more')}>
          <div className='w-[30px]'>
             <img className={selectedTab === 'more' ? 'selected w-full' : ''} src={Article} alt="" />
            </div>

            <IonLabel>More</IonLabel>
          </IonTabButton>


        </IonTabBar>

      </IonTabs>
    </IonReactRouter>
);
}



export default App;
