import { createElement, useEffect, useState } from 'react';
import './App.css';
import Cards from './components/NewsCard/NewsCard';


{/* {/* {hotel.map((article, i)=>(
          < Cards key = {i} article={article}/>
        ))} */}
  // const hotel = [
  //   {
  //     id:1,
  //     title:"Apartmani Vrbak",
  //     grade:"9.5",
  //     location:"Centar,Novi Pazar",
  //     description:"Hotel vrbak nalazi se u samom centru grada ,Najluksuzniji hotelmu gradu,sa ukupno 345 soba",
  //     img:"https://cf.bstatic.com/xdata/images/hotel/square600/412834299.webp?k=d2c78cc860c76f6e0f187088b74b371df5d0fc56bbd8107df442bc64403ef4b0&o="
  //   },
  //   {
  //     id:2,
  //     title:"Stan Na Dan",
  //     grade:"9.0",
  //     location:"Centar,Novi Pazar",
  //     description:"Stan Na Dan se nalazi u Novom Pazaru. Apartman sa 1 spavaćom sobom ima dnevni boravak sa TV-om ravnog ekrana, potpuno opremljenu kuhinju i 1 kupatilo.",
  //     img:"https://cf.bstatic.com/xdata/images/hotel/square600/314901326.webp?k=6a6b292d483c5d8671fb993e773bdaa44082c447799fbd668d92bd26e2e0975f&o="
  //   },
  //   {
  //     id:3,
  //     title:"Hotel Ras Pazariste",
  //     grade:"9.3",
  //     location:"Novi Pazar",
  //     description:"Hotel RAS Pazarište se nalazi u Novom Pazaru i nudi smeštaj sa 3 zvezdice sa baštom, restoranom i barom.",
  //     img:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/508609188.jpg?k=09d9971f7ca2340af5b78717184ee5a9d98671ba438021588c8246b579a1527a&o=&hp=1"
  //   },
  //   {
  //     id:4,
  //     title:"Apartmani Rekic",
  //     grade:"8.9",
  //     location:"Novi Pazar",
  //     description:"Nedavno renoviran apartman, Apartmani Rekić-Dubai nudi smeštaj u Novom Pazaru. Ovaj apartman nudi besplatan privatni parking, lift i besplatan WiFi.",
  //     img:"https://cf.bstatic.com/xdata/images/hotel/square600/388779097.webp?k=4ed8f3e606f2764984a9f62b44bca90761cfa4f455d7a1e159cff8bf2eedf739&o="
  //   },
  //   {
  //     id:5,
  //     title:"Hotel IDEAL Deluxe",
  //     grade:"9.5",
  //     location:"Novi Pazar",
  //     description:"Hotel IDEAL Deluxe nalazi se u Novom Pazaru. Svaki smeštaj u ovom hotelu sa 4 zvezdice ima pogled na grad, a gosti mogu da uživaju u pristupu restoranu i baru.",
  //     img:"https://cf.bstatic.com/xdata/images/hotel/square600/574249423.webp?k=c301f12db15490def9b289f8006c970164140b009d5b04b4212e845c8421a295&o="
  //   },

  // ]


  
    // const [broj, setBroj] = useState(0);

      
    // const generateRandomNumber = ({}) => {
    //   const randomNumber = Math.floor(Math.random()*100)
    //   setBroj(randomNumber)
    // }

  
{/* 
     <div
     >
    <button
    style={{
      padding: "5px 10px",
      border: "none",
      borderRadius:12,
      outline: "none",
      backgroundColor:"lightblue",
      color:"black",
      fontSize:24,
      cursor:"pointer",
    }}
    onClick={generateRandomNumber}
    >
      Povecaj na 5

    </button>
    </div>

    <div
    style={{
      height:300,
      width:300,
      border: "2px solid black",
      backgroundColor: broj % 2 === 0 ? "beige": "lightblue",
    }}
    /> */} 


    // 
    // const [temperatura, setTemperatura] = useState(0)

    //   const randomTemperatura = ({}) => {
    //     const randomTemp = Math.floor(Math.random()*(60 - (-40 + 1))) + (-40);
    //     setTemperatura(randomTemp);
    //   }
  //   <div className='container' 

  //   style={{backgroundColor: temperatura < 0 ? "lightblue" :
  //     temperatura >= 0 && temperatura < 20 ? "rgb(173, 70, 10)": "  rgb(218, 164, 71)", }}  >
      
  //     <div className='prognoza' 
  //     style={{backgroundImage: temperatura < 0  ? "url(https://i.pinimg.com/originals/95/88/28/95882863d39a4ac36e35a84e4ed3e82d.jpg)" :
  //        temperatura >= 0 && temperatura < 20 ?  "url(http://zajebanko.com/wp-content/uploads/2016/02/najljepse-slike-jeseni-1-0-0.jpg)" : "url(https://wallpaperaccess.com/full/1379661.jpg)" }}>
         
  //        <div className='obavestenje'>

  //         <p>{temperatura} C</p>

  //         <p>{temperatura < -0 ? "Bas je hladno" : 
  //         temperatura >= 0 && temperatura < 20 ? "" : "Bas je toplo"}</p>

  //        </div>
  //       <button onClick={(randomTemperatura)}

  //       style={{backgroundColor: temperatura < 0 ? "lightblue" :
  //       temperatura >= 0 && temperatura < 20 ? "rgb(173, 70, 10)": "  rgb(218, 164, 71)", }}

  //       >Promeni temperaturu</button>
       
  //     </div>
   

  // </div>

    
      // const [user, setUser] = useState ({
      //   ime: "Abdulaziz",
      //   prezime: "Smajovic"


      // });

      // const promeniImeIPrezime = () =>
      //   setUser((prev) => ({...prev, ime:"Ibrahim"}))
      //  setUser((prev) =>{
      //   return{
      //     ...prev,
      //     ime:"Ibrahim"
      //   }
      //  })


    //   const [voce,setVoce] = useState([
    //     "paradajaz",
    //     "kruska",
    //     "Limun",
    //     "jabuka",
    //     "kiwi",
    //     "nar",
    //     "tresnja",
    //     "jagoda",
    //     "kokos",
    //     "mandarina",
    //   ]);

    //   const dodajVoce = () =>{
    //   const novoVoce = prompt("Unesi voce")  
    //     if(!novoVoce) return;

    //     if (voce.find((vocka) => vocka.toLowerCase() === novoVoce.toLocaleLowerCase())) {
    //       alert("Vec postoji ovo voce");
    //     }else{
    //       setVoce((prev) => [...prev, novoVoce])
    //       console.log("Nema voca");
    //     }
    //   }
        
      

    // return (
    //   <div className='container' style={{gap:10, flexDirection:"column"}}>
    //     {/* <div
//         style={{
//           display:"flex",
//           gap:10
//         }}
//         >
//           <h1>{user.ime}</h1>
//           <h1>{user.prezime}</h1>

//         </div>
//         <button onClick={promeniImeIPrezime}>
//           Promeni ime
//         </button> */}

//         <ol>
//           {voce.map((vocka)=>(
//           <li key={vocka}>{vocka}</li>
//         ))}
//         <button onClick={dodajVoce}>Dodaj</button>
//         </ol>
//       </div>
//   );
// }


// const primer={
//   ime:"",
//   prezime:"",
//   gender:"",

function App() {

const [user, setUser] = useState({
  firstName:"",
  lastName:"",
  Age:"",
  Email:"",
  Gender:"",

})


const [fethcUsers, setFetchUsers] = useState ([])

useEffect (() => {
  fetch('https://dummyjson.com/users')
.then(res => res.json())
.then((data) => setFetchUsers(data.users))
},[]);

const [usersList, setUsersList] = useState([]);

const handleInputChange = (event) =>{
  const { name, value } = event.target;

  setUser((prev)=> ({...prev, [name]: value}));
}

const handleSubmit = () => {
  if (user.firstName && user.lastName && user.Email && user.Gender) {
    setUsersList([...usersList, user]);
    setUser({firstName:"", lastName:"", Age:"", Email:"", Gender:"",});
  }else{
    alert("Molimo vas unesite sve podatke")
  }
};

const ageOptions = [18,19,20,21,22,23,24,25,26,27,28,29,30]

  return(
    <div className='container'>
      <div className='Forma' >
      <h1>Podaci</h1>
      
      <input type="text" name="firstName" value={user.firstName} onChange={(event) => handleInputChange(event)} placeholder='Ime'></input>
     <input type="text" name='lastName' value={user.lastName} onChange={(event) => handleInputChange(event)} placeholder='Prezime'></input>
      <input type="email" name='Email' value={user.Email} onChange={(event) => handleInputChange(event)} placeholder='Email'></input>

      <div style={{ backgroundColor:"aquamarine", display:"flex", justifyContent:"center",alignItems:"center",fontSize:20, gap:20}}>
     <p>AGE</p>
     <select  name='Age' value={user.Age} onChange={(event) => handleInputChange(event)} style={{fontSize:18}}>
      <option value="Age" disabled>
      Age
      </option>
      {ageOptions.map(age =>(
     <option key={age} value={age}>
      {age}
     </option>
    ))}
     </select>
     </div>

      <div className='radio'>
        <p>Gender:</p>
        <label>
      <input type="radio" 
      value="male"
      checked={user.Gender === "male"}
       onChange={(event) => handleInputChange(event)}
        name="Gender"  />
        Male
      </label>
      <label>
      <input type="radio" 
      value="female" 
      checked={user.Gender === "female"}
      onChange={(event) => handleInputChange(event)} 
      name="Gender" />
      Female
      </label>


      </div>
      

      <button type="button" onClick={handleSubmit} >Sumbit</button>
      

      </div >

      
      <div className='skupKartica'>
        <div className='kartica'>
          <h2>Podaci</h2>
            <p>IME: Abdulaziz</p>
            <p>PREZIME: Smajovic:</p>
            <p>GODINE: 20</p>
            <p>Email: nebitno@gmail.com</p>
            <p>POL: musko</p>
            </div>

            {usersList.map((user, index) => (
          <div className='kartica' key={index}>
            <h2>Podaci</h2>
            <p>IME: {user.firstName}</p>
            <p>PREZIME: {user.lastName}</p>
            <p>GODINE: {user.Age}</p>
            <p>Email: {user.Email}</p>
            <p>POL: {user.Gender}</p>
          </div>
        ))}

            {fethcUsers.map((user, ) => (
          <div className='kartica'>
          <h2>Podaci</h2>
            <p>IME: {user.firstName}</p>
            <p>PREZIME: {user.lastName}</p>
            <p>GODINE: {user.age}</p>
            <p>Email: {user.email}</p>
            <p>POL: {user.gender}</p>

          </div>
        ))}

        

        
      </div>



    
    </div>
  )




  


// const [broj, setBroj] = useState(13)
// const [zadaci, setZadaci] = useState([])
// const [loading, setLoading] = useState(false)

// useEffect(() => {
//   setLoading(true);
//   fetch("https://dummyjson.com/todos")
//   .then((res) => {
//     return res.json();
//   })

//   .then((data) => data.todos)
//   .then((todos) => setZadaci(todos))
//   .finally(() => setLoading(false))
// }, []);

// console.log(zadaci, "zadaci");
// return(
// <div>

// <div>
// {loading ? (
//   <h1>Fetcha podatke...</h1>
// ) :(
//   zadaci.map((zadatak) => (
//     <h3> 
//       {zadatak.id}. {zadatak.todo}.
//     </h3>
//   ))
// )
// }
// <button>Promeni</button>
// </div>

// </div>
  
// )


}
export default App;
