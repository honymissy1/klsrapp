import React, { useEffect, useState } from 'react';
import { Share } from '@capacitor/share';

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

import supabase from '../../superbaseClient';

import { useParams } from 'react-router';

import { Editor, convertFromRaw, EditorState } from 'draft-js';


const convertJSONToContentState = (rawData:any):any => {
  return convertFromRaw(rawData);
};

const RichTextEditor = (props:any):any => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  useEffect(() => {
    if (props.rawData) {
      const contentState = convertJSONToContentState(props.rawData);
      setEditorState(EditorState.createWithContent(contentState));
    }
  }, [props.rawData]);

  return (
    <div style={{padding: '10px', borderRadius: '4px' }}>
      <Editor onChange={() => console.log('Changed')} editorState={editorState} readOnly={true} />
    </div>
  );
};




const Article = () =>{
  const params = useParams<any>();
  const [data, setData] = useState<any>();
  const [loading, setLoading] = useState<any>();
  const [content, setContent] = useState<any>();
  const [comments, setComments] = useState();
  const [commentText, setCommentText] = useState(); 

  useEffect(() =>{
    const dataFetch = async() =>{      

      let { data:result, error } = await supabase
      .from('articles')
      .select()
      .eq("id", params.id)  
       
      setContent(result);
      setData(JSON.parse(result[0].content));  

    }

    dataFetch()
  }, [])

  const handleShare = async() =>{
    await Share.share({
     title: content[0]?.title,
     text: '',
     url: 'https://www.kingdomlifestyleradio.com/articles/'+content[0]?.id,
     dialogTitle: 'Share with friend',
   });

  }

    return(
        <IonPage>
              <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton></IonBackButton>
          </IonButtons>
          <IonTitle>Article</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
            {/* <h1>Article Dash....</h1> */}
            {
              content?.map((ele:any) => (
                <div className='p-3'>
                  <h1 className='text-2xl text-center font-bold'>{ele.title}</h1>
                    <img className='m-auto' src={ele.img_url} alt="" />
                   <RichTextEditor rawData={data} />

                   <button className='bg-green-400 p-2 rounded font-extrabold' onClick={handleShare}>Share Article <i className="fa-regular fa-paper-plane"></i></button>
                </div>
              ))
           
            }

      </IonContent>
        </IonPage>
    )
}

export default Article


