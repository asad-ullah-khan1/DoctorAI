import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const asad = () => {
    return (
        <div>
            <section class="text-gray-600 body-font">
                <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                    <Image class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="asad ullah Khan" width={500} height={500} src="/asad.jpeg" />
                        <div class="text-center lg:w-2/3 w-full">
                            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Hi! I am Asad - Learning Full Stack Web Development using NextJS, NodeJs, ReactJs</h1>
                            <p class="mb-8 leading-relaxed">I created this tool using GPT -3 Open AI API and using NEXTJS - ReactJs Framework just for fun.</p>
                            <div class="flex justify-center">
                                <Link href={'https://www.facebook.com/akhrota1/'}><button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Get in touch</button></Link>
                            </div>
                        </div>
                </div>
            </section>
        </div>
    )
}

export default asad