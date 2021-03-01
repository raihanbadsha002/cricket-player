import React from 'react';
import { useEffect, useState } from 'react';
import playerData from '../../data/data.json';
import Player from '../Player/Player';
import Selected from '../Selected/Selected';

const Cricket = () => {
    const [players, setPlayer] = useState([]);
    const [select, setSelect] = useState([])

    useEffect(() => {
    setPlayer(playerData) ;
    }, []);

    const addPlayer = (player) => {
        const newAdd = [...select, player];
        setSelect(newAdd);
    }

        return (
            <div className="main__div">
                <div className="container">
                    <div className="row">
                        <div className="col-md-7 order-lg-1 order-2">
                        <h2 className="mt-4 text-info">Select your Player</h2>
                          {
                              players.map(player => 
                                        <Player
                                            addPlayer={addPlayer}
                                            player={player}
                                            key={player.id}

                                        />)
                          }
                        </div>
                        <div className="col-md-5 order-lg-2 order-1">
                            <Selected select={select}
                            
                            />   
                        </div>
                    </div>
                </div>
            </div>
        );
};

export default Cricket;