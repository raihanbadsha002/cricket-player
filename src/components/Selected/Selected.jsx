import React from 'react';

const Selected = (props) => {
    const playerInfo = props.select;
    console.log(playerInfo);
    const totalSalary = playerInfo.reduce((total, salary) => total + salary.salary, 0);
    
    
    return (
        <div>
            <div className="">
               <h2 className="text-info my-4 text-center">Selected Player details</h2>
               <div className="card p-3">
                   <h6> <b>Player Count :</b>  {playerInfo.length}</h6>
                   <h6 className="mb-3"> <b>Selected Player: </b> 
                     {
                        playerInfo.map(select =>
                          <li className="my-2" key={select.id}>{select.name} - ${select.salary} / Monthly</li> 
                          )
                     }
                   </h6>
                   <h6><b>Total Salary :</b>  ${totalSalary.toFixed(2)}</h6>

               </div>
           </div> 
        </div>
    );
};

export default Selected;