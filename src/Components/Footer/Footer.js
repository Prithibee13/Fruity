import React from 'react';
import "./Footer.css"

const Footer = () => 
{
    const date = new Date();

    const year = date.getFullYear();
    return (
        <section>
            <footer className='p-5'>
                <div className="container">
                    <div className="row g-5">
                        <div className="col-md-4 col-12">
                            <h3>Copyright &copy; {year}</h3>
                            <h3>Designed and developed by Aziz Prithibee</h3>
                        </div>
                        <div className="col-md-4 col-12">
                            <div className="d-flex justify-content-evenly">
                                <p>Story</p>
                                <p>Pages</p>
                                <p>Works</p>
                            </div>
                        </div>
                        <div className="col-md-4 col-12">
                            <h4>Contact us</h4>
                            <p>2405 , Jacson Heights , NY</p>
                        </div>
                    </div>
                </div>
            </footer>
        </section>
    );
};

export default Footer;