import React from 'react';

const FAQ = () => {
    return (
        <div>
            <section className="dark:bg-gray-800 dark:text-gray-100">
                <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
                    <h2 className="text-2xl font-semibold sm:text-4xl pb-2">
                        Frequently Asked Questions
                    </h2>

                    <div className="space-y-4">
                        <details className="w-full border rounded-lg">
                            <summary className="text-xl font-semibold sm:text-2xl px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
                               Difference between State and Props?
                            </summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
                                <h6 className='text-xl font-semibold sm:text-2xl'>Props</h6>
                                <li>Props are read-only.</li>
                                <li>Props are immutable.</li> 
                                <li>Props allow you to pass data from one component to other components as an argument.</li>
                                <li>Props can be accessed by the child component.</li>
                                <li>Props are external and controlled by whatever renders the component.</li>
                                <h6 className='text-xl font-semibold sm:text-2xl'>State</h6>
                                
                                <li>State changes can be asynchronous.</li>
                                
                                <li>State is mutable.</li>
                                <li>State holds information about the components.</li>
                                <li>State cannot be accessed by child components.</li>
                                
                                <li>The State is internal and controlled by the React Component itself.</li>
                            </p>
                        </details>
                        <details className="w-full border rounded-lg">
                            <summary className="text-xl font-semibold sm:text-2xl px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
                            How does useState and useEffect work?
                            </summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
                            The useState hook is used for storing variables that are part of your application's state and will change as the user interacts with your website. <br /> The useEffect hook allows components to react to lifecycle events such as mounting to the DOM, re-rendering, and unmounting.
                            </p>
                        </details>
                        <details className="w-full border rounded-lg">
                            <summary className="text-xl font-semibold sm:text-2xl px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
                            What is React and how does it works?
                            </summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
                            ReactJS is one of the most popular JavaScript libraries for mobile and web application development. Created by Facebook, React contains a collection of reusable JavaScript code snippets used for user interface (UI) building called components. It's important to note that ReactJS is not a JavaScript framework.
                            </p>
                        </details>
                        <details className="w-full border rounded-lg">
                            <summary className="text-xl font-semibold sm:text-2xl px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
                            Purpose of useEffect other than fetching data.
                            </summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
                            The useEffect in react js allows you to perform side effects in your components. The react useEffect examples of side effects include retrieving data, direct DOM updates, and timers. The second argument is optional.
                            </p>
                        </details>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FAQ;