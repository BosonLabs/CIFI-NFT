import React from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
import styles from "./Selection.module.sass";
import Icon from "../../../components/Icon";
import firebase from "../../UploadDetails/firebase";
import { useState,useEffect} from "react";

const items = [
  {
    title: "Atlanta Fire®",
    content: "Highest bid",
    counter: "18 in stock",
    price: "1.125Algos",
    url: "/search01",
    avatar: "/images/Atlanta Fire.png",
    image: "/images/Atlanta Fire.png",
    image2x: "/images/Atlanta Fire.png",
  },
  {
    title: "Austin Athletics",
    content: "1 of 12",
    price: "0.27Algos",
    url: "/search01",
    avatar: "/images/Austin Athletics.png",
    image: "/images/Austin Athletics.png",
    image2x: "/images/Austin Athletics.png",
  },
  {
    title: "Dc Hawks",
    content: "1 of 3",
    price: "0.27Algos",
    url: "/search01",
    avatar: "/images/Dc Hawks.png",
    image: "/images/Dc Hawks.png",
    image2x: "/images/Dc Hawks.png",
  },
  {
    title: "East Bay Blazers",
    content: "1 of 4",
    price: "0.27Algos",
    url: "/search01",
    avatar: "/images/East Bay Blazers.png",
    image: "/images/East Bay Blazers.png",
    image2x: "/images/East Bay Blazers.png",
  },
];

const users = [
  {
    name: "Ahmed Butt",
    price: "<span>2.456</span>Algos",
    counter: "6",
    avatar: "/images/Ahmed Butt.png",
  },
  {
    name: "Ishan Sharma",
    price: "<span>2.456</span>Algos",
    counter: "2",
    avatar: "/images/Ishan Sharma.png",
  },
  {
    name: "Aditya Padala",
    price: "<span>2.456</span>Algos",
    counter: "3",
    avatar: "/images/Aditya Padala.png",
  },
  {
    name: "Hammed Azam",
    price: "<span>2.456</span>Algos",
    counter: "4",
    avatar: "/images/Hammed Azam.png",
  },
];

const Selectioncopy = () => {

const[getImgreffalgobuy,setgetImgreffalgobuy]=useState([]);
console.log("getlt",getImgreffalgobuy)

// imagerefAlgolt
useEffect(() => {
  const fetchPosts = async () => {
    let req = [];  
    firebase.database().ref("imagerefAlgolt2").on("value", (data) => {          
      if (data) {          
        data.forEach((d) => {            
          let value=d.val();
          req.push({
            userSymbol:value.userSymbol,
            title: value.id,
            price: value.priceSet,
            highestBid: value.keyId,
            counter:value.userName ,
            //bid: 'New bid <span role="img" aria-label="fire">🔥</span>',
            bid:value.ownerAddress,
            image: value.imageUrl,
            image2x: value.paramsdb,
            category: value.privatekey,
            categoryText: value.cAddress,
            //purchasing !
            url: value.history,
            date:value.datesets,
            description:value.description,
            extra:value.extra1,
            ipfsurl:value.ipfsUrl,
            previousaddress:value.previousoaddress,
            soldd:value.soldd,
            whois:value.whois,
            Mnemonic:value.Mnemonic,
            usdcids:value.usdcids,
          applicationid:value.applicationid,
          escrowaddress:value.escrowaddress,
          resdata1:"",
            users: [                
              {
                //avatar: "/images/content/avatar-4.jpg",
                avatar: value.imageUrl,
              },
            ],
          })                                                                                                                  
        });                
      }        
      setgetImgreffalgobuy(req);    
    });      
  };
  fetchPosts();
}, []);



  return (
    <div className={cn("section-pb", styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.row}>
          <div className={styles.col}>
            {items.map(
              (x, index) =>
                index === 0 && (
                  <Link className={styles.card} to={x.url} key={index}>
                    <div className={styles.preview}>
                      <img
                        srcSet={`${x.avatar} 2x`}
                        src={x.avatar}
                        alt="Selection"
                      />
                    </div>
                    <div className={styles.head}>
                      <div className={styles.line}>
                        <div className={styles.avatar}>
                          <img src={x.image} alt="Avatar" />
                        </div>
                        <div className={styles.description}>
                          <div className={styles.title}>{x.title}</div>
                          <div className={styles.counter}>{x.counter}</div>
                        </div>
                      </div>
                      <div className={styles.box}>
                        <div className={styles.content}>{x.content}</div>
                        <div className={styles.price}>{x.price}</div>
                      </div>
                    </div>
                  </Link>
                )
            )}
          </div>
          <div className={styles.col}>
            {items.map(
              (x, index) =>
                index > 0 && (
                  <Link className={styles.item} to={x.url} key={index}>
                    <div className={styles.preview}>
                      <img
                        srcSet={`${x.avatar} 2x`}
                        src={x.avatar}
                        alt="Selection"
                      />
                    </div>
                    <div className={styles.description}>
                      <div className={styles.title}>{x.title}</div>
                      <div className={styles.line}>
                        <div className={styles.avatar}>
                          <img src={x.image} alt="Avatar" />
                        </div>
                        <div className={styles.price}>{x.price}</div>
                        <div className={styles.content}>{x.content}</div>
                      </div>
                      <button
                        className={cn(
                          "button-stroke button-small",
                          styles.button
                        )}
                      >
                        Place a bid
                      </button>
                    </div>
                  </Link>
                )
            )}
          </div>
        </div>
        <div className={styles.sidebar}>
          <div className={styles.info}>
            Latest upload from creators{" "}
            <span className={styles.smile} role="img" aria-label="fire">
              🔥
            </span>
          </div>
          <div className={styles.list}>
            {users.map((x, index) => (
              <div className={styles.user} key={index}>
                <div className={styles.avatar}>
                  <img src={x.avatar} alt="Avatar" />
                  <div className={styles.number}>{x.counter}</div>
                </div>
                <div className={styles.description}>
                  <div className={styles.name}>{x.name}</div>
                  <div
                    className={styles.money}
                    dangerouslySetInnerHTML={{ __html: x.price }}
                  />
                </div>
              </div>
            ))}
          </div>
          <Link
            className={cn("button-stroke button-small", styles.button)}
            to="/search01"
          >
            <span>Discover more</span>
            <Icon name="arrow-next" size="10" />
          </Link>
        </div>
      </div>
    </div>
  );
};


export default Selectioncopy;
