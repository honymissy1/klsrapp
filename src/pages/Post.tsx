import React, { useEffect, useState } from 'react';
import { Share } from '@capacitor/share';
// import 'react-quill/dist/quill.bubble.css'; 
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
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

import { useParams } from 'react-router';




const extensions = [StarterKit]

const Article = () =>{
  const params = useParams<any>();
  const [data, setData] = useState<any>();
  const [loading, setLoading] = useState<any>(false);
  const [content, setContent] = useState<any>();
  const [comments, setComments] = useState();
  const [commentText, setCommentText] = useState(); 


  useEffect(() =>{
    setLoading(true)
    const dataFetch = async() =>{      

      let { data:result, error } = await supabase
      .from('articles')
      .select()
      .eq("id", params.id)  
      setContent(result);
      setLoading(false)
      // setData(JSON.parse(result[0].content));  

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

  let editor = useEditor({
    extensions: [
      StarterKit,
      // TextAlign.configure({
      //   types: ['heading', 'paragraph'],
      // }),

      // Blockquote.configure({
      //   HTMLAttributes: {
      //     class: 'bg-green-100 p-2',
      //   },
      // })
      
    ],
    content: content ? content[0]?.content : 'Not working',
    editable: false,
  })

  useEffect(() => {
    if (editor && content) {
        editor.commands.setContent(content[0]?.content);
    }
   }, [content, editor]);

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
              content?.map((ele:any) => (
                <div className='p-3'>
                  <h1 className='text-xl text-center font-bold'>{ele.title}</h1>
                    <img className='m-auto' src={ele.img_url} alt="" />
                    {/* <ReactQuill
                      value={ele.content}
                      readOnly={true}
                      theme={"bubble"}
                    /> */}
                    <br />

                    <div className='mb-10'>
                      <EditorContent editor={editor} />
                    </div>



                   <button className='bg-green-400 p-2 m-auto rounded font-extrabold' onClick={handleShare}>Share Article <i className="fa-regular fa-paper-plane"></i></button>
                </div>
              ))
           
            }

      </IonContent>
        </IonPage>
    )
}

export default Article


