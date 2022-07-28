import { useState } from "react";
import "./App.css";


function App() {

  const [data, setData] = useState({id:101, advice: "Always do anything for love, but don't do that."});
  // console.log(data.id) 
  const handleClick = async () => {
    try{
      const response = await fetch('https://api.adviceslip.com/advice');
      const responseJson = await response.json();
      console.log(responseJson)
      const data = responseJson.slip;
      setData(data)
      
      } catch (err) {}
 
    }

   

  return (
    <div className="container">
      <div className="card">
        <div className="adviceNumber">ADVICE  {data?.id} </div>
        <div className="advice">
         {
           data?.advice
         }
        </div>
        <div className="divider-desktop">
          <svg width="444" height="16" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fillRule="evenodd">
              <path fill="#4F5D74" d="M0 8h196v1H0zM248 8h196v1H248z" />
              <g transform="translate(212)" fill="#CEE3E9">
                <rect width="6" height="16" rx="3" />
                <rect x="14" width="6" height="16" rx="3" />
              </g>
            </g>
          </svg>
        </div>
        <div className="divider-mobile">
        <svg width="295" height="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><path fill="#4F5D74" d="M0 8h122v1H0zM173 8h122v1H173z"/><g transform="translate(138)" fill="#CEE3E9"><rect width="6" height="16" rx="3"/><rect x="14" width="6" height="16" rx="3"/></g></g></svg>

        </div>
        <div className="icon" >
          <button className="dice" onClick={handleClick}>
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"
                fill="#202733"
              />
            </svg>
          </button>
        </div>
      </div>
       <footer className="attribution">
      Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
      Coded by <a href="https://www.frontendmentor.io/profile/Raj-Kunal">Kunal Raj</a>.
    </footer> 
    </div>
  );
}

export default App;
