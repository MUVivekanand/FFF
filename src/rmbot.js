import React from 'react';
import './styles/rmbot.css';
import botlogofff from './img/logofff2.jpg';
import { useState } from 'react';
import axios from 'axios';
import RmBot from './img/fffrmbot.png';
import { useNavigate } from 'react-router-dom';

function RMBot(){

    let navigate = useNavigate();

    const [bot, setBot] = useState("");
    const [msg, setMsg] = useState("");

    const ok = () => {
      axios.post('http://localhost:5000/chat', { message: msg }) 
        .then(response => {
          setBot(response.data.message); 
          console.log(response.data.message);
        })
        .catch(error => {
          console.error(error);
        });
    };

    const onH = () => {
      navigate("/");
      
    }

    const onD = () => {
      navigate("/dtracker");
    }

    const onB = () => {
      navigate("/budget");
    }

    const onS = () => {
      navigate("/spend");
    }

    const onRs = () => {
      navigate("/rmstore")
    }

    const coins = localStorage.getItem('coins');

    return(
      <div className='rmbot2'>
      
      <nav className="navbar navbar-expand-lg" id="botnav">
        <img className="botlogo" src={botlogofff} id="fffbotnav" />
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a onClick={onH} className="nav-link" href="#"><b>Home</b></a>
            </li>
            <li className="nav-item">
              <a onClick={onB} className="nav-link" href="#"><b>Budgeting</b></a>
            </li>
            <li className="nav-item">
              <a onClick={onS} className="nav-link" href="#"><b>Spending Analysis</b></a>
            </li>
            <li className="nav-item">
              <a onClick={onD} className="nav-link" href="#"><b>Daily Tracker</b></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#"><b>RM Bot</b></a>
            </li>
            <li className="nav-item">
            <a onClick={onRs} className="nav-link" href="#"><b>RM Store</b></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#"><b>RM COINS:{coins}</b></a>
            </li>
          </ul>
        </div>
      </nav>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>

      
      <div className="botcontainer-fluid">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-12">
            <div className="botcard budget-card budget-card-center">
              <div className="card-body">
                <div className="fade-in-once">
                <img className="botimage" src={RmBot} id="rmbot2"/>
                
                <br/>
                <br/>
                <div className="botcardtext">
                  <h3><b>Your Queries</b></h3>
                </div>
                <br/>
                  <input onChange={(e) => setMsg(e.target.value)} type="text" id="chatbot" placeholder='Ask your queries'/>
                </div>
                <br/>

               
                  <button onClick={ok} className="botbutton">
                    Ask
                  </button>
                

                
               
              
              </div>
              
            </div>
            <br/>
            <br/>
            <br/>
        <div className="botrespcard">
          <div className="responsetab">
            <p>{bot}</p>
          </div>
          </div>
          </div>
        </div>
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      
     
         
       



      </div>

    );
}

export default RMBot;