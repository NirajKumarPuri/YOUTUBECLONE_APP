import React from 'react';
import styles  from "./Video.module.css";
import { useLocation } from 'react-router-dom';
import Display from "../Display/index.js";
import Card from "../Component/Card/index.js";
import {useState} from "react";
const Video =()=> {
  const Location = useLocation();
  console.log(Location);
  const[data,setdata]=useState([])
  const DisplaySearch = (data) => {
    fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${data}&safeSearch=strict&maxResults=15&type=video&key=AIzaSyDlHgoVXhs4TRUXfe9wFGle2lGD45dDlqs`
    )
      .then((response) => {
        return response.json();
      })
      .then((result) => {
      setdata( result.items );
        console.log(result.items);
      });
  };
  const cleardata=()=>{
    setdata([])
  }
   
  return (
    <div className={styles.container}>
      <Display  searchdata={DisplaySearch}/>
      { data.length>0 ? <div className={styles.container1}>
          {data.map((carddata) => {
            console.log(carddata)
            return (
              <Card
                imgurl={carddata.snippet.thumbnails.default.url}
                descrip={carddata.snippet.title}
                Videoid={typeof carddata.id=='object'? carddata.id.videoId : carddata.id}
                publish={carddata.snippet.publishedAt}
                callback={cleardata}
                Item={data}
              />
            );
          })}
        </div> :  <div className={styles.box}>
      <div className={styles.content}>
      <iframe className={styles.Video} src={`https://youtube.com/embed/${Location.state.id}`} />
      <p className={styles.descrip}>{Location.state.Descrip} </p>
      <div className={styles.show}>
      <p className={styles.Publish}>{Location.state.PublishedAt.toLocaleString()} </p>
      <p className={styles.like}>{Location.state.Like}</p>
      <p className={styles.like}>{Location.state.Dislike}</p>

      </div>
      </div>
      <div className={styles.content1}>
      {Location.state.Arry.filter((item)=>{return item.id!==Location.state.id}).map((carddata)=>{
        return(
        //  <div className={styles.Card}>
        //   <div className={styles.imgbox}>
        //     <img className={styles.img} src={carddata.snippet.thumbnails.default.url}/>
        //   </div>
        //   <div className={styles.Descrip}>
        // <p className={styles.Descriptext}>{carddata.snippet.title}</p>
        //   </div>
        //  </div>
        <Card Card={styles.card} 
        imgurl={carddata.snippet.thumbnails.default.url}
        descrip={carddata.snippet.title}
        Videoid={typeof carddata.id=='object'? carddata.id.videoId : carddata.id}
        publish={carddata.snippet.publishedAt}
         Imgbox={styles.picbox} 
         Img={styles.pic} 
         Parabox={styles.parabox} 
         Para={styles.para}
         Item={Location.state.Arry}/>
        )
      })}
      </div>
      </div>
       }
    </div>
  );
};

export default Video;
