/* global AlgoSigner */
import React, { useState,useEffect} from "react";
//import { useHistory } from "react-router-dom";
import cn from "classnames";
import { Link,useHistory } from "react-router-dom";
import styles from "./Card.module.sass";
import Icon from "../Icon";
import fireDb from "../../screens/UploadDetails/firebase";
//import axios from 'axios';
import FolowStepsd from "../Card/FolowStepsd";
import Modald from "../../components/ModalD";
//import web3 from '../../screens/./UploadDetails/web3';
//import {abi} from '../Card/data'
//import {tra} from './tra'
import FolowStepsdr from "../../screens/Search01/FolowSteps";
import FolowStepss from "../../screens/Search01/FolowStepss";
import TextInput from "../../components/TextInput";
import algosdk from 'algosdk';
import MyAlgo from '@randlabs/myalgo-connect';
import data from "../../escrow";
import MyAlgoConnect from '@randlabs/myalgo-connect';
const myAlgoWallet = new MyAlgoConnect();


const CardBuy = ({ className, item }) => {
  console.log("itemprintcardbuy",item)
  //console.log("itemprintcardkey",key)
  const [geto, seto] = useState([]);
  const [getno, setno] = useState([]);
  console.log("geto",geto)
  console.log("getno",getno)
const [optedd, setoptted] = useState(false);
const [datedt,setstartdt]= useState("");
const [bid_user,setBid]= useState("");
const [owner,setOwner]= useState("");


const token = {
  'X-API-Key': 'U5ivl9nv603lYUBRN3sHH5g0AzCwsetC7OAtYj9D'
 };
const server = "https://testnet-algorand.api.purestake.io/ps2";
const port = "";
let algodclient = new algosdk.Algodv2(token, server, port);

  async function waitForAlgosignerConfirmationtest(tx) {
    console.log(`Transaction ${tx.txId} waiting for confirmation...`);
    let status = await AlgoSigner.algod({
      ledger: 'TestNet',
      path: '/v2/transactions/pending/' + tx.txId
    });  
    while(true) {
      if(status['confirmed-round'] !== null && status['confirmed-round'] > 0) {
        //Got the completed Transaction
        console.log(`Transaction confirmed in round ${status['confirmed-round']}.`);
        break;
      }  
      status = await AlgoSigner.algod({
        ledger: 'TestNet',
        path: '/v2/transactions/pending/' + tx.txId
      });
    }    
    return tx;
  }

  let history=useHistory();
  const [isOpens, setIsOpens] = useState(false);
  const [isOpenss, setIsOpenss] = useState(false);

  const onSub=()=>{
    console.log("hello close")
    //setIsOpen(false);
    setIsOpens(false)
    history.push("/")
    window.location.reload(false)   
    
  }

  const[getprodata,setgetprodata]=useState([]);
  console.log("getprodata",getprodata)
  const [visible, setVisible] = useState(false);

  //const [Mnemo, setMnemo] = useState("");
  const [historydb, sethistorydb] = useState([]);
  console.log("hist",historydb)

  // const [historydb, sethistorydb] = useState([]);
  // console.log("hist",historydb)
  const [isOpen, setIsOpen] = useState(false);
  const [Mnemo,setMnemo] = useState(null);
  console.log("Mnemocheck",Mnemo)

  let ro=[];
  let rno=[];
  
  const addlikedb=async()=>{    
    console.log("addlikedb function call");

    if(localStorage.getItem("wallet") === null || localStorage.getItem("wallet") === "0x" || localStorage.getItem("wallet") === 'undefined' || localStorage.getItem("wallet") === ''){

    }
    else{

      let getalgo=localStorage.getItem("wallet");

    //const accounts = await  web3.eth.getAccounts();
    fireDb.database().ref(`imagereflikes/${getalgo}`).child(item.highestBid).set({
      id:item.title,imageUrl:item.image,priceSet:item.price,cAddress:item.categoryText,keyId:item.highestBid,
      userName:item.counter,userSymbol:"Algos",ipfsUrl:item.ipfsurl,
      ownerAddress:item.bid,soldd:item.soldd,extra1:item.extra,
      previousoaddress:item.previousaddress,datesets:item.date,
      description:item.description,whois:'likes',history:item.url,paramsdb:item.image2x,privatekey:item.category,Mnemonic:item.Mnemonic,
      applicationid:item.applicationid,usdcids:item.usdcids,escrowaddress:item.escrowaddress

        }).then(()=>{
        setVisible(!visible)
        window.location.reload(false)   
      });    

    }

    }

    const usernameget=()=>{

    console.log("inside usernameget function")

    if(localStorage.getItem("wallet") === null || localStorage.getItem("wallet") === "0x" || localStorage.getItem("wallet") === 'undefined' || localStorage.getItem("wallet") === ''){

    }
    else{    
    let getalgo=localStorage.getItem("wallet");
    fireDb.database().ref("profiledata").child(getalgo).on("value", (data) => {
      if (data) {
        console.log("startcon",data.val())        
        let value=data.val();
        console.log("valuess",value)
        setgetprodata(value);   
      }                 
   });
  }
}

useEffect(()=>{usernameget()},[])


const waitForConfirmation = async function (algodclient, txId) {
  let response = await algodclient.status().do();
  let lastround = response["last-round"];
  while (true) {
      const pendingInfo = await algodclient.pendingTransactionInformation(txId).do();
      if (pendingInfo["confirmed-round"] !== null && pendingInfo["confirmed-round"] > 0) {
          console.log("Transaction " + txId + " confirmed in round " + pendingInfo["confirmed-round"]);
          break;
      }
      lastround++;
      await algodclient.statusAfterBlock(lastround).do();
  }
};

const buyapplicationid=async()=>{

  if(localStorage.getItem("wallet") === null || localStorage.getItem("wallet") === "0x" || localStorage.getItem("wallet") === undefined || localStorage.getItem("wallet") === ''){
  }
  else{

    if(item.bid === localStorage.getItem("wallet"))
{
  alert("you are owner so you does not purchase this token")
}
else{
  setIsOpenss(true)

  const algosdk = require('algosdk');  
  const algodclient = new algosdk.Algodv2('', 'https://api.testnet.algoexplorer.io', '');          
  //const myAlgoConnect = new MyAlgoConnect();
  let appId="49393545";
  let params = await algodclient.getTransactionParams().do();
//  comment out the next two lines to use suggested fee
  params.fee = 1000;
  params.flatFee = true;  
  console.log("Global state", datedt);  
try {    
const params = await algodclient.getTransactionParams().do();    
const myAlgoConnect = new MyAlgoConnect();
let results = await algodclient.compile(data).do();
    console.log("Resultconsole = " + results);
    console.log("Hash = " + results.hash);
    console.log("Result = " + results.result);
    //await sleep(20000)
    let program = new Uint8Array(Buffer.from(results.result, "base64"));      
    let lsig = algosdk.makeLogicSig(program);
    //let tealSignPrint = tealSign(sk, data, lsig.address());
    console.log("LSIG",lsig.address())
let appArgs = [];
appArgs.push(new Uint8Array(Buffer.from("Buynow")));
const transactionass = algosdk.makeAssetTransferTxnWithSuggestedParamsFromObject({
  from: localStorage.getItem('wallet'),
  to: localStorage.getItem('wallet'),
  assetIndex: parseInt(item.title),
  note: undefined,
  amount: 0,
  suggestedParams: params
  });

  const signedTxnass = await myAlgoConnect.signTransaction(transactionass.toByte());
  const responseass = await algodclient.sendRawTransaction(signedTxnass.blob).do();
  console.log("optresponse",responseass)
  
let transaction1 = algosdk.makeApplicationNoOpTxnFromObject({
  from:localStorage.getItem('wallet'), 
  suggestedParams:params, 
  appIndex:parseInt(appId), 
  appArgs:appArgs})
  
let transaction2 = algosdk.makePaymentTxnWithSuggestedParamsFromObject({
from: localStorage.getItem('wallet'),
to: lsig.address(),
amount: Number(parseInt(2000)),
note: undefined,
suggestedParams: params
});
//let transaction3=algosdk.makeAss(sender, params, index);

let transaction21 = algosdk.makePaymentTxnWithSuggestedParamsFromObject({
  from: localStorage.getItem('wallet'),
  to: lsig.address(),
  amount: Number(parseInt(item.price)),
  note: undefined,
  suggestedParams: params
  });

const transaction3 = algosdk.makeAssetTransferTxnWithSuggestedParamsFromObject({
from:lsig.address(),
to: localStorage.getItem('wallet'),
assetIndex: parseInt(item.title),
note: undefined,
amount: 1,
suggestedParams: params
});

let transaction31 = algosdk.makePaymentTxnWithSuggestedParamsFromObject({
  from:lsig.address(),
  to: localStorage.getItem('wallet'),
  amount: Number(parseInt(item.price)),
  note: undefined,
  suggestedParams: params
  });

const groupID = algosdk.computeGroupID([ transaction1, transaction2, transaction21,transaction3, transaction31 ]);
const txs = [ transaction1, transaction2, transaction21,transaction3, transaction31 ];
txs[0].group = groupID;
txs[1].group = groupID;
txs[2].group = groupID;
txs[3].group = groupID;
txs[4].group = groupID;

    
const signedTx1 = await myAlgoConnect.signTransaction(txs[0].toByte());
const signedTx2 = await myAlgoConnect.signTransaction(txs[1].toByte());
const signedTx21 = await myAlgoConnect.signTransaction(txs[2].toByte());
const signedTx3 = algosdk.signLogicSigTransaction(txs[3], lsig);
const signedTx31 = algosdk.signLogicSigTransaction(txs[4], lsig);

const response = await algodclient.sendRawTransaction([ signedTx1.blob, signedTx2.blob, signedTx21.blob,signedTx3.blob, signedTx31.blob]).do();
console.log("TxID", JSON.stringify(response, null, 1));
await waitForConfirmation(algodclient, response.txId);
//db change here

fireDb.database().ref(`imagerefexploreoneAlgos/${item.bid}`).child(item.highestBid).remove().then(()=>{
  fireDb.database().ref(`imagerefbuy/${localStorage.getItem("wallet")}`).child(item.highestBid).set({
  id:item.title,imageUrl:item.image,priceSet:item.price,cAddress:item.categoryText,keyId:item.highestBid,
  userName:item.counter,userSymbol:"Algos",ipfsUrl:item.ipfsurl,
  ownerAddress:localStorage.getItem("wallet"),soldd:item.soldd,extra1:item.extra,
  previousoaddress:item.bid,datesets:item.date,
  description:item.description,whois:'buyers',history:item.url,
  applicationid:item.applicationid,usdcids:item.usdcids,escrowaddress:item.escrowaddress  
        }).then(()=>{
          setIsOpenss(false)
          setIsOpens(true)          
        }) 
})
.catch((e) => {
console.error(e);
setIsOpenss(false)
});


//db change end here
  } catch (err) {
    console.error(err);
  }




  //end option buynow

}
  }
  //after optin buynow 
}

  //history function
  const viewhistory=()=>{
    console.log("viewhistory inside");
    setIsOpen(true)
    let get=[];    
    get.push({
      address:item.url,
      asset:item.title
    })
    sethistorydb(get)  
    console.log("gettt",get)  
    }

  return (
    <>
    <div className={cn(styles.card, className)}>
      <div className={styles.preview}>        
        <img srcSet={`${item.image} 2x`} src={item.image} alt="Card" />
        <div className={styles.control}>
          <div
            className={cn(
              { "status-green": item.category === "green" },
              styles.category
            )}
          >
            {item.categoryText}
          </div>
          <button
            className={cn(styles.favorite, { [styles.active]: visible })}
            onClick={addlikedb}            
          >
            <Icon name="heart" size="20" />
          </button>          
        </div>
        
      </div>
      <br></br>
      {item.price && (
<>   

<button className={cn("button-small")} onClick={buyapplicationid}>
      <span>BUY</span>      
    </button>
<br></br>
  {/* <button className={cn("button-small")} onClick={buyapplicationid}>
      <span>Buy</span>      
    </button> */}

{/* {item.resdata1 === null || item.resdata1 === undefined || item.resdata1 === "" ? (
<button className={cn("button-small")} onClick={buynftapp}>
      <span>OPT</span>      
    </button>
) :(  
  <button className={cn("button-small")} onClick={buyapplicationid}>
      <span>Buy</span>      
    </button>
)} */}
</>)}
      <Link className={styles.link} to={item.url}>
        <div className={styles.body}>
          <div className={styles.line}>
            <div className={styles.title}>{item.title}</div>
            <div className={styles.price}>{item.price}</div>                        
          </div>
          <div className={styles.line}>
            <div className={styles.users}>
              {item.users.map((x, index) => (
                <div className={styles.avatar} key={index}>
                  <img src={x.avatar} alt="Avatar" onClick={viewhistory}/>                  
                </div>
              ))}
            </div>
            <div className={styles.counter}>{item.counter}</div>            
          </div>
        </div>
        <div className={styles.foot}>
          <div className={styles.status}>
          </div>
        </div>
      </Link>
    </div>
  <Modald visible={isOpen} onClose={() => setIsOpen(false)}>
    <FolowStepsd className={styles.steps} viewhistory={historydb}/>
  </Modald>

<Modald visible={isOpens} onClose={() => setIsOpens(false)}>
    <FolowStepsdr className={styles.steps} onSub={()=>onSub}/>
</Modald>

<Modald visible={isOpenss} >
    <FolowStepss className={styles.steps} onSub={()=>onSub}/>
</Modald>
    </>
  );
};
export default CardBuy;
