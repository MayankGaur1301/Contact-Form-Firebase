import React, { useState } from 'react';
import './style.css';

const ReactContact = () => {

    const [user, setUser] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        message: '',
    });

    let name, value;
    const getUserData = (event) => {
        name = event.target.name;
        value = event.target.value;

        setUser({ ...user, [name]: value })
    };

    const postData = async (e) => {
        e.preventDefault();

        const { name, email, phone, address, message, } = user;

        if (name && email && phone && address && message) {
            const res = await fetch(
                'https://react-contact-form-4e849-default-rtdb.firebaseio.com/UserDetail.json',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        name,
                        email,
                        phone,
                        address,
                        message,
                    }),
                }
            );

            if (res) {
                setUser({
                    name: '',
                    email: '',
                    phone: '',
                    address: '',
                    message: '',
                });

                alert('Data Stored Succesfully');
            }
        } else {
            alert('Please Fill Data First');
        }



    };

    return (
        <>
            <div className='container-contact100'>
                <div className='wrap-container100'>
                    <form className='contact100-form' method='POST'>
                        <span className='contact100-form-title'>Contact Us</span>

                        <div className='wrap-input100-rs1-wrap-input100'>
                            <span className='label-input100'> Name</span>
                            <input
                                className='input100'
                                type='text'
                                name='name'
                                placeholder='Enter Your Name...'
                                value={user.name}
                                onChange={getUserData}
                                autoComplete='off'
                                required
                            />
                            <span className='focus-input100'></span>
                        </div>

                        <div className='wrap-input100-rs1-wrap-input100'>
                            <span className='label-input100'>Email</span>
                            <input
                                className='input100'
                                type='text'
                                name='email'
                                placeholder='Enter Your Email Address...'
                                value={user.email}
                                onChange={getUserData}
                                autoComplete='off'
                                required
                            />
                            <span className='focus-input100'></span>
                        </div>

                        <div className='wrap-input100-rs1-wrap-input100'>
                            <span className='label-input100'>Mobile Number</span>
                            <input
                                className='input100'
                                type='number'
                                name='phone'
                                placeholder='Enter Your Phone Number...'
                                value={user.phone}
                                onChange={getUserData}
                                autoComplete='off'
                                required
                            />
                            <span className='focus-input100'></span>
                        </div>

                        <div className='wrap-input100-rs1-wrap-input100'>
                            <span className='label-input100'>Address</span>
                            <input
                                className='input100'
                                type='text'
                                name='address'
                                placeholder='Enter Your Address...'
                                value={user.address}
                                onChange={getUserData}
                                autoComplete='off'
                                required
                            />
                            <span className='focus-input100'></span>
                        </div>

                        <div className='wrap-input100'>
                            <span className='label-input-message'>Message</span>
                         
                            <textarea
                                className='input100'
                                name='message'
                                placeholder='Your Message Here...'
                                value={user.message}
                                onChange={getUserData}
                            ></textarea>
                            <span className='focus-input100'></span>
                        </div>

                        <div className='container-contact100-form-btn'>
                            <button className='contact100-form-btn' onClick={postData}>
                                <span>
                                    Submit
                                    <i
                                        className='fa fa-ling-arrow-right m-l-7'
                                        aria-hidden='true'></i>
                                </span>
                            </button>
                        </div>
                    </form>
                    <span className='contact100-more'>
                        for any quetion contact our 24/7 call center:
                        <span className='contact100-more-highlight'>+91 123 6889</span>
                    </span>
                </div>
            </div>
        </>
    );
};

export default ReactContact;
