import React from 'react';
const Q2 = () => {
    return (
        <div>
            <div className="container">
                <h2 className='my-5 text-center'>When should we use Node Js and when  should we use mongodb?</h2>

                <div style={{marginTop : '5%', marginBottom : "10%"}}>
                    <p>Node Js is a javascript runtime environment. It is the bridge javascript front-end and back-end. </p>
                    <p>When I need to make my apis sequre , I can hide them into a sequre servers. Express JS , a framework of Node JS is help us to make a sequre server system. We can create our custom rest apis. We can send apis through Get method and get data from client side's through POST method.</p>
                </div>

                <div style={{marginTop : '5%', marginBottom : "10%"}}>
                    <p>Mongodb is a NoSQL database. Its a light-weight,fast and easy to use.</p>
                    <p>When we need to store some data parmanently, or insert/delete/update/retrive data from a existing database, we use mongodb. It has a fluid , dynamic charecteristics for using it. And Node Js has a easy connections to use it on javascript server side.</p>
                </div>

            </div>
        </div>
    );
};

export default Q2;