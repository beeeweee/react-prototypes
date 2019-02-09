import React from 'react';
import ReactDOM from 'react-dom';

const userObj = {
    name:'Bill',
    luckyNumber: luckyNumber()
    
}

function luckyNumber(){
    return Math.floor(Math.random() * 1000);
}

function greeting(user){
    console.log(user);
    return (
        <div className="container">
            <h1>{user.name}</h1>
            <h2 className="text-muted">{user.luckyNumber}</h2>
        </div>
    );
}

ReactDOM.render(
    // <h1 className="container">React Prototypes!</h1>,

        greeting(userObj),
    document.getElementById('root')
);
