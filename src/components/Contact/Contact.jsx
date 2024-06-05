import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaPhoneAlt } from 'react-icons/fa';
import { CiLocationOn, CiMail } from "react-icons/ci";
import Swal from 'sweetalert2';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
            .sendForm('service_ktexr9w', 'template_33npnkp', form.current, {
                publicKey: 'B8T8yiI5aCfiQrANA',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Message to Email successfully",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
        //     'service_ktexr9w',
        //     'template_33npnkp',
        //     form.current,
        //     'B8T8yiI5aCfiQrANA'
        // )
        //     .then((result) => {
        //         console.log(result.text);
        //         Swal.fire({
        //             position: "top-end",
        //             icon: "success",
        //             title: "Message to Email successfully",
        //             showConfirmButton: false,
        //             timer: 1500,
        //         });
        //     }, (error) => {
        //         console.log(error.text);
        //     });
    };

    return (
        <div id='contact' className='mx-3 lg:mx-12 style mt-28 mb-20'>
            <div className="border-b-2 border-black">
                <h1 className="text-3xl font-bold">Contact Through</h1>
            </div>
            <div className='flex flex-col lg:flex-row my-10'>
                {/* contact form */}
                <section className="bg-white lg:w-2/3">
                    <div className="py-8 lg:py-16 mx-auto max-w-screen-md">
                        <form ref={form} onSubmit={sendEmail} className="space-y-8">
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Name</label>
                                <input type="text" id="name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" name='form_name' placeholder="Gul Gappa" required />
                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email</label>
                                <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" name='form_email' placeholder="name@gmail.com" required />
                            </div>
                            <div className="sm:col-span-2">
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Message</label>
                                <textarea name="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 rounded-lg shadow-sm border border-gray-300" required placeholder="Leave a comment..."></textarea>
                            </div>
                            <div className="w-full">
                                <button type="submit" className="text-white btn bg-orange-400 w-full">Send message</button>
                            </div>
                        </form>
                    </div>
                </section>
                {/* divider */}
                <div className="divider lg:divider-horizontal">OR</div>
                {/* links */}
                <div className='flex flex-col md:flex-row lg:flex-col justify-normal md:justify-between lg:justify-normal items-start md:items-center lg:items-start ml-3 lg:ml-10 mt-5 lg:mt-20 space-y-16'>
                    <div>
                        <h3 className='text-xl lg:text-3xl mb-4 border-b border-gray-600 w-52'>Get In Touch</h3>
                        <div className='space-y-2'>
                            <h3> <CiLocationOn className='inline mr-4' /> Chattogram, Bangladesh</h3>
                            <h3> <FaPhoneAlt className='inline mr-4' /> 01871-850192</h3>
                            <h3> <CiMail className='inline mr-4' /> mdmorshed0187@gmail.com</h3>
                        </div>
                    </div>
                    {/* social links */}
                    <div className=''>
                        <h3 className='text-xl lg:text-3xl mb-4 border-b border-gray-600 w-44'>Socials</h3>
                        <div className='flex gap-3 items-center'>
                            <Link className='text-blue-600 text-2xl' title='LinkedIn' target='blank' to='https://www.linkedin.com/in/md-morshed-b634692a3/'><FaLinkedin /></Link>
                            <Link title='Github' className='text-2xl' target='blank' to='https://github.com/I-am-MoRsHeD'><FaGithub /></Link>
                            <Link title='Facebook' className='text-2xl' target='blank' to='https://www.facebook.com/md.morshed.73997861/'>
                                <img className='w-8 h-8' src="https://i.ibb.co/37d2Xd6/facebook.png" alt="" />
                            </Link>
                            <Link title='Facebook' className='text-2xl' target='blank' to='https://www.instagram.com/ig_moshiiii/'>
                                <img className='w-8 h-8' src="https://i.ibb.co/48bZk1N/instagram.png" alt="" />
                            </Link>
                            {/* <Link title='Facebook' className='text-2xl' target='blank' to='https://www.facebook.com/md.morshed.73997861/'>
                                <img className='w-8 h-8' src="https://i.ibb.co/kJWqxQZ/whatsapp.png" alt="" />
                            </Link> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;