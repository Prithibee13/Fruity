import React from 'react';
import { Table } from 'react-bootstrap';

const Q3 = () => {
    return (
        <div data-aos="fade-up">
            <div className="container">
                <h2 className="text-center my-5">Difference between SQL and NoSQL</h2>
                <div className="row">
                    <div className="col-md-6 col-12 mx-auto">

                        <Table striped responsive bordered hover className='text-center p-5'>
                            <thead>
                                <tr>
                                    <th>Sl</th>
                                    <th>SQL</th>
                                    <th>NoSQL</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>SQL means <span><b>S</b></span>tructure <span><b>Q</b></span>uery <span><b>L</b></span>anguage</td>
                                    <td>NoSQL sometimes called <b>Not</b> only <b>SQL</b></td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>SQL create a tabluler system based database. </td>
                                    <td>NoSQL is not a tabular system based database.</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>SQL is maintained By RDBMS(Relational Database Management System)</td>
                                    <td>NoSQL has no relational or distributed System</td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>SQL tables are based on predefined or static define schema</td>
                                    <td>NoSQL have dynamic schema </td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>SQL is suited for complex queries.</td>
                                    <td>NoSQL is not good for complex queries</td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Q3;