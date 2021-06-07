import React from 'react';
import styles from './card.module.css';
import { useHistory } from 'react-router-dom';
import Video from '../../Video';
import { useEffect } from 'react';
const Card=({ imgurl, descrip, Videoid , publish,Item,Card,Imgbox,Img,Parabox,Para,callback,like,dislike})=> {
  const history = useHistory();
  useEffect(()=>{
console.log('helo')
  },[])
  const handleclick = () => {
    console.log('handleclic',Videoid)
    const date=new Date(publish)
   
    if(typeof callback==='function'){
      callback()
    }
    history.push(`../${Videoid}`, { id: Videoid, Descrip:descrip ,PublishedAt: date,Arry:Item,Like:like,Dislike:dislike });
  };
  return (
    <div  className={`${styles.container} ${Card}`} onClick={handleclick}>
      {/* <div className={styles.imgbox}><img className={styles.img} src="https://lh3.googleusercontent.com/proxy/rfdYR-WKzX6t0ORwf0DJGyUnv4XAgv9UTSYXrDih2VYu-XcMDvGOGfQuGJAzXr7-b1_VbRWi8Sfuhn7IVa8HCCl3xrzCVWw"/></div> */}
      <div className={`${styles.imgbox} ${Imgbox}`}>
        <img  className={`${styles.img} ${Img}`} src={imgurl} />
      </div>
      <div  className={`${styles.descripbox} ${Parabox}`}>
        <p  className={`${styles.text} ${Para}`}>{descrip}</p>
      </div>
    </div>
  );
};
export default Card;
// var hamster={
//   stomach:[],
//   eat: function (food) {
//     this.stomach.push(food)
//   }
// }
// var hardy={

// }
// hardy.__proto__=hamster
// var tommy={

// }
// tommy.__proto__=hamster
// hardy.eat("apple")
// console.log(hardy.stomach,tommy.stomach)
