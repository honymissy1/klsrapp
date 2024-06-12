import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Home.css';

const RadioPage: React.FC = () =>{
    return(
        <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Articles</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">Blank</IonTitle>
            </IonToolbar>
          </IonHeader>
          <h1>Na here we dey</h1>
        </IonContent>
      </IonPage>
    )
}
export default RadioPage