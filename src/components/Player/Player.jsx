import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';

const Player = (props) => {
    const {image, name, team, salary} = props.player;    
    return (
        <div>
             <div className="card my-4 bg-dark text-white">
          <div className="card-body ">
               <img className="mb-3" src={image} alt=""/>
               <p><b>Name :-</b> {name}</p>
               <p><b>Team :-</b> {team} </p>
               <p><b>Salary :-</b> ${salary} / Monthly </p>
              <button onClick={() => props.addPlayer(props.player)} className="btn btn-primary px-4"><FontAwesomeIcon icon={faUserPlus} /> Select Player</button>
         </div> 
           </div>
        </div>
    );
};

export default Player;