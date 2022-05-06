import React from 'react';
import { Table } from 'react-bootstrap';

const Q1 = () => {
    return (
        <div>
            <div className="container my-5">

                <h2 className='text-center my-3 py-3'>Difference between Javascript an Node js</h2>

                <div className="row">
                    <div className="col-md-6 col-12 mx-auto">

                        <Table responsive striped bordered hover className='text-center p-5'>
                            <thead>
                                <tr>
                                    <th>Sl</th>
                                    <th>Javascript</th>
                                    <th>Node JS</th>
                                </tr>
                            </thead>
                            
                            <tbody >
                                <tr>
                                    <td>1</td>
                                    <td>Javascript is a high-level , interpreted, scripting programming language</td>
                                    <td>Node js is a javascript runtime environment</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Javascript work on web Browsers</td>
                                    <td>Node js mainly work in machine , but we can also run it on browser.</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Javascript can manupulate HTML DOM</td>
                                    <td>Node js use for make customs APIs which can organzied later in DOM</td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>Javascript is mainly use for client-sides.</td>
                                    <td>Node js manly use for server sides.</td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>Some Javascript framework is React Js, Angular Js  ,Vue Js etc</td>
                                    <td>Some node js framework is express , lodash etc.</td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Q1;

/*  */