const express = require('express');
// const client = require('twilio')(accountSid, authToken); 
const superagent = require('superagent');
const app = express();
const {MongoClient} = require('mongodb');
require('dotenv').config();

app.use(express.static("app"));  
app.get('/', function(req, res){
    res.send('');
})

const PORT  = process.env.PORT || 5000
// console.log(process);

app.listen(PORT, () => console.log('Server Started'));

const accountSid = process.env.TWILIO_ACCOUNT_SID;
// console.log(accountSid);
const authToken = process.env.TWILIO_AUTH_TOKEN;

let count = 0;

let out = setInterval(function(){
let number  = count++
if(number > 23){count = 1};

// console.log(count)
    superagent.get('https://w12.mangafreak.net/')
    .set('content-type', 'text/html; charset=UTF-8')
    .end((err, res) => {
    let yesterdaysMangaIndex = res.text.indexOf("YESTERDAY'S MANGA");
    let todaysMangaIndex = res.text.indexOf("TODAY'S MANGA");
    let todaysManga = res.text.slice(todaysMangaIndex, yesterdaysMangaIndex);
    let myMangaList = ["Orenchi Ni Kita Onna Kishi To Inakagurashi Surukotoninatta Ken","Fire Brigade Of Flames", "Solo Leveling Warrior", "One Piece", "Tower of God", "Jujutsu Kaisen", "Onepunch Man", "Survival Story Of A Sword King In A Fantasy World", "Skeleton Soldier"];
    // let myMangaList = [""];
    let message = [];
    for(i = 0; i < myMangaList.length; i++){
        if(todaysManga.includes(myMangaList[i])){message.push(myMangaList[i])}
    }
// console.log(message);

    let messageString;
    if(message.length > 0){
    

   

    async function main(){
        const uri =  "mongodb+srv://nujabes1:test1234!@cluster0.jkc0e.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
        const clientMongo = new MongoClient(uri);
      
        try { 
            await clientMongo.connect();
            await findOneListingByName(clientMongo, {});

        } catch (e) {
            console.error(e);
        } finally {
            await clientMongo.close();
        }
      }
      
      main().catch(console.error);
    let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x'];
    
    async function findOneListingByName(clientMongo){
        const resultList =  await clientMongo.db("listMangas").collection("listMangas").findOne({name: 'manga'});
        result1 = resultList.a;
        result2 = resultList.b;
        result3 = resultList.c;
        result4 = resultList.d;
        result5 = resultList.e;
        result6 = resultList.f;
        result7 = resultList.g;
        result8 = resultList.h;
        result9 = resultList.i;
        result10 = resultList.j;
        result11 = resultList.k;
        result12 = resultList.l;
        result13 = resultList.m;
        result14 = resultList.n;
        result15 = resultList.o;
        result16 = resultList.p;
        result17 = resultList.q;
        result18 = resultList.r;
        result19 = resultList.s;
        result20 = resultList.t;
        result21 = resultList.u;
        result22 = resultList.v;
        result23 = resultList.w;
        result24 = resultList.x;


        let array = result1.concat(result2).concat(result3).concat(result3).concat(result4).concat(result5).concat(result6).concat(result7).concat(result8).concat(result9).concat(result10).concat(result11).concat(result12).concat(result13).concat(result14).concat(result15).concat(result16).concat(result17).concat(result18).concat(result19).concat(result20).concat(result21).concat(result22).concat(result23).concat(result24);
        // console.log(array);

        let unique = (value, index, self) => {
            return self.indexOf(value) === index
          }
          
          let uniqueArray = array.filter(unique);
          let uniqueString = uniqueArray.join(',');
        //   console.log(uniqueString);
          
          let mangasToBeSend = []
        //   console.log(typeof(message));
          for(v = 0; v < message.length; v++){
              messageThis = message[v];
            //   console.log("messageThis: ", messageThis);
            //   console.log((typeof(messageThis)));
            //   console.log(uniqueString.includes(messageThis));
             if(uniqueString.indexOf(messageThis) < 0){
                mangasToBeSend.push(messageThis)
             }
          }
          mangasToBeSend;
        //   console.log('send message for ', mangasToBeSend);

          if(mangasToBeSend.length > 0){

            let whatsappText

        if (mangasToBeSend.length < 2) {whatsappText = "New Chapter available for " + mangasToBeSend
            
        }else{whatsappText = "New Chapter available for " + mangasToBeSend.join(' and ')}
         
        const client = require('twilio')(accountSid, authToken);
        // console.log("whatsappText:", whatsappText);
        client.messages 
      .create({ 
         body: whatsappText, 
         messagingServiceSid: 'MG98f67012941711785ec55e4b63909b72',      
         to: '+447956968563' 
       }) 
    //   .then(whatsappText => console.log(whatsappText.sid)) 
      .done();
    
          }

          
        

        if(message.length < 1){message = ['n/a']};
// console.log("Number of mangas:", message.length);
          async function maintwo(){
            const uri =  "mongodb+srv://nujabes1:test1234!@cluster0.jkc0e.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
            const clientMongo = new MongoClient(uri);
          
          //   await clientMongo.connect();
          //   await listDatabases(clientMongo);
          
            try { 
                await clientMongo.connect();
                await updateMangaList(clientMongo, {});
    
            } catch (e) {
                console.error(e);
            } finally {
                await clientMongo.close();
            }
          }
          
          maintwo().catch(console.error);
      let objAlp = alphabet[count - 1]

      var obj = {};
      obj[objAlp] = message;
     async function updateMangaList(clientMongo){
        const result =  await clientMongo.db("listMangas").collection("listMangas").updateOne({name: 'manga'}, {$set: obj});
        // console.log(result.matchedCount);
     }};}
});
    

// }, 3600000);
}, 120000);






            // app.get('/', (req, res) => {res(messageString)
     
            // })
// client.messages 
//       .create({ 
//          body: message, 
//          from: 'whatsapp:+14155238886',       
//          to: 'whatsapp:+447956968563' 
//        }) 
//       .then(message => console.log(message.sid)) 
//       .done();
    // })}
