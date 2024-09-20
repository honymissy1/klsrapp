import React, { useEffect, useState, useRef } from 'react';
import { Share } from '@capacitor/share';
import axios from 'axios';
import parse from 'html-react-parser';


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
  const contentRef = useRef<HTMLIonContentElement | null>(null);

  const params = useParams<any>();
  const [data, setData] = useState<any>();
  const [loading, setLoading] = useState<any>(false);
  const [content, setContent] = useState<any>();
  const [comments, setComments] = useState();
  const [commentText, setCommentText] = useState(); 
  const [featuredImage, setFeaturedImage] = useState<any>()


  const mapping = {
    "p": "leading-relaxed text-md mb-5",
    "blockquote": "p-10 m-auto w-[fit-content] my-5 rounded-xl text-center text-[1.5em] bg-white italic",
    "h2": "title-font font-semibold mb-6 text-3xl",
    "h3": "title-font font-semibold mb-6 text-2xl",
    "h4": "title-font font-semibold mb-6 text-2xl",
    "h5": "title-font font-semibold mb-6 text-xl",
    "a": "text-white",
    "em": "font-extrabold text-lg leading-relaxed italic",
    "ul": "mb-6",
    "li": "mb-6 ml-5 text-lg"
  };


  const options = {
    replace: (node:any) => {
      const className = mapping[node.name]
      if (className) {
        node.attribs.className = className;
        return node
      }
    },
  };

  useEffect(() =>{
    contentRef.current?.scrollToTop(500);
    setLoading(true)
    const singleArticle = async () =>{
        const wordpressData = await axios.get(`https://kingdomlifestyleadmin.com.ng/wp-json/wp/v2/posts/${params.id}`);
        const result = await wordpressData.data;

        if (result.featured_media) {
            const imageResponse = await axios.get(`https://kingdomlifestyleadmin.com.ng/wp-json/wp/v2/media/${result.featured_media}`);
            const imageData = await imageResponse.data;
            setFeaturedImage(imageData.source_url); // Set the image URL
            console.log(imageData.source_url);
          }
  
          setContent(result);
          console.log(result);
          setLoading(false);
        
        // setArticle(postsWithAuthors);
        // console.log(postsWithAuthors);
        setLoading(false);

    }

    // const comment = async () =>{
    //     let { data, error } = await supabase.from('comment').select('*').eq('article_id', id)
    //     setComments(data)
    // }

    singleArticle();
    
    // comment()
}, [])

  const handleShare = async() =>{
    await Share.share({
     title: content.title.rendered,
     text: '',
     url: 'https://www.kingdomlifestyleadmin.com.ng/'+params.id,
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
      <IonContent ref={contentRef}>
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
                <div className='p-3 bg-[#f8f6f6]'>
                  <h1 dangerouslySetInnerHTML={{ __html: content?.title.rendered}} className='text-xl text-center font-bold'></h1>
                    <img className='m-auto rounded-lg' src={featuredImage} alt="" />
                    <br />

                    <div className='p-4 text-black'>
                        {parse(content?.content ? content?.content?.rendered: "KLSR Blogs", options)}
                    </div> 



                   <button className='bg-green-400 p-2 m-auto rounded font-extrabold' onClick={handleShare}>Share Article <i className="fa-regular fa-paper-plane"></i></button>
                </div>

            }

      </IonContent>
        </IonPage>
    )
}

export default Article


