import React from 'react';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/ReactToastify.css'

export default function Email() {
    // const notify = () => toast("Send")
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_5pss9lb', 'template_so3ognb', form.current, {
                publicKey: 'fpziOZslc4ihQp0G-',
            })
            .then(
                () => {
                    toast.success('Send')
                },
                (error) => {
                    toast.error("Something Went Wrong!", error)
                },
            );
    }
    return (
        <div className="isolate bg-slate-100 px-6 py-24 sm:py-32 lg:px-8" id='Email'>
            <div
                className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
                aria-hidden="true"
            >
                <div
                    className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
                    style={{
                        clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                ></div>
            </div>
            <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                    Contact Us
                </h2>
                {/* <p className="mt-2 text-lg text-gray-600">
                    Aute magna irure deserunt veniam aliqua magna enim voluptate.
                </p> */}
            </div>
            <form className="mx-auto mt-16 max-w-xl sm:mt-20" ref={form} onSubmit={sendEmail}>
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                    {/* <div>
                        <label htmlFor="first-name" className="block text-sm font-semibold text-gray-900">
                            First name
                        </label>
                        <div className="mt-2.5">
                            <input
                                type="text"
                                name="first-name"
                                id="first-name"
                                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-indigo-600"
                            />
                        </div>
                    </div> */}
                    <div className='sm:col-span-2'>
                        <label htmlFor="last-name" className="block text-sm font-semibold text-gray-900">
                            Full Name
                        </label>
                        <div className="mt-2.5">
                            <input
                                required
                                type="text"
                                name="from_name"
                                id="last-name"
                                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-[#000b1c]"
                            />
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="company" className="block text-sm font-semibold text-gray-900">
                            Company
                        </label>
                        <div className="mt-2.5">
                            <input
                                required
                                type="text"
                                name="from_company"
                                id="company"
                                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-[#000b1c]"
                            />
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-900">
                            Email
                        </label>
                        <div className="mt-2.5">
                            <input
                                required
                                type="email"
                                name="from_email"
                                id="email"
                                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-[#000b1c]"
                            />
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="phone-number" className="block text-sm font-semibold text-gray-900">
                            Phone number
                        </label>
                        <div className="mt-2.5">
                            <div className="flex rounded-md bg-white outline outline-1 outline-gray-300">
                                {/* <select
                                    id="country"
                                    name="country"
                                    aria-label="Country"
                                    className="rounded-md py-2 pl-3.5 pr-7 text-base text-gray-500 focus:outline-indigo-600 sm:text-sm"
                                >
                                    <option>US</option>
                                    <option>CA</option>
                                    <option>EU</option>
                                </select> */}
                                <input
                                    required
                                    type="text"
                                    name="from_number"
                                    id="phone-number"
                                    placeholder="123-456-7890"
                                    className="block w-full py-1.5 px-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline-[#000b1c]"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="message" className="block text-sm font-semibold text-gray-900">
                            Message
                        </label>
                        <div className="mt-2.5">
                            <textarea
                                required
                                name="message"
                                id="message"
                                rows="4"
                                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-[#000b1c]"
                            ></textarea>
                        </div>
                    </div>
                    {/* <div className="flex gap-x-4 sm:col-span-2">
                        <div className="flex h-6 items-center">
                            <button
                                type="button"
                                className="flex w-8 cursor-pointer rounded-full bg-gray-200 p-px ring-1 ring-gray-900/5 focus-visible:outline-indigo-600"
                                role="switch"
                                aria-checked="false"
                                aria-labelledby="switch-1-label"
                            >
                                <span className="sr-only">Agree to policies</span>
                                <span
                                    aria-hidden="true"
                                    className="size-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5"
                                ></span>
                            </button>
                        </div>
                        <label className="text-sm text-gray-600" id="switch-1-label">
                            By selecting this, you agree to our{' '}
                            <a href="#" className="font-semibold text-indigo-600">
                                privacy&nbsp;policy
                            </a>
                            .
                        </label>
                    </div> */}
                </div>
                <div className="mt-10">
                    <button
                        type='submit'
                        className="block w-full rounded-md bg-[#000b1c] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#000b1c] focus-visible:outline-[#000b1c]"
                    >
                        Let's talk
                    </button>
                </div>
            </form>
        </div>
    );
}
