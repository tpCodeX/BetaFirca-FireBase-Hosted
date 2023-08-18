        // Import the functions you need from the SDKs you need
        import { initializeApp} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
        import {getFirestore,collection,addDoc} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";
        
        // Your web app's Firebase configuration
        export const firebaseConfig = {
          apiKey: "AIzaSyCEp5WJtcEfMoq2KSB5C6VlEqZSm-weTqM",
          authDomain: "somos-firca-19e58.firebaseapp.com",
          projectId: "somos-firca-19e58",
          storageBucket: "somos-firca-19e58.appspot.com",
          messagingSenderId: "835476820212",
          appId: "1:835476820212:web:3e73ebe92ba588c2f5cea1"
        };
        // Initialize Firebase
        const app = initializeApp(firebaseConfig);

        const db=getFirestore();



        export const regDonante=(nombre,dni,email)=>{
          try{
            
          addDoc(collection(db,"Donantes"),{dni,email,nombre})
          console.log("registered");
          }catch(e){
            console.log(e)
          }
        }