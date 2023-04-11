import React from 'react';

const Blog = () => {
    return (
        <div>
            <h1 className='bg-gray-100 px-5 md:px-28 text-2xl font-bold text-center py-10'>React FAQ Blog</h1>
            <div className='px-5 md:px-28 py-10'>
                <div className=''>
                    <h1 className='text-xl font-semibold'>1. Why should we use Context API?</h1>
                    <p className='p-5 tracking-wider leading-8'>Context provide to access data from whole components without having to pass props down manually at every level. We can create global variables in the Context API and arrive to them form any component. So we don’t need to pass props to other components and we write clean code. This situation add flexibility to application and improves code readability and clarity. Besides, operating cost and intensity are reduced. If we have data that isn’t frequently refreshed or changed and we are working on a medium sized application then we might be prefer Context API.</p>
                </div>
                <div>
                    <h1 className='text-xl font-semibold'>2. What is custom Hook?</h1>
                    <p className='p-5 tracking-wider leading-8'>Custom React hooks are reusable functions that we can use to add special and unique functionality to the React applications. Usually, if there is a requirement to add a feature, one can install a third-party library and solve the problem. But what if there is no such library with hooks that can be used? This problem is solved by using custom React JS hooks.

                    A custom hook is a special JavaScript function whose name starts with ‘use’ and can be used to call other hooks. </p>
                </div>
                <div>
                    <h1 className='text-xl font-semibold'>3. What is useRef?</h1>
                    <p className='p-5 tracking-wider leading-8'>The useRef Hook in React can be used to directly access DOM nodes, as well as persist a mutable value across rerenders of a component. The useRef returns a mutable ref object. This object has a property called .current. The value is persisted in the refContainer.current property. These values are accessed from the current property of the returned object. The .current property could be initialised to the passed argument initialValue e.g. useRef(initialValue). The object can persist a value for a full lifetime of the component. </p>
                </div>
                <div>
                    <h1 className='text-xl font-semibold'>4. What is useMemo?</h1>
                    <p className='p-5 tracking-wider leading-8'>React has a built-in hook called useMemo that allows you to memoize expensive functions so that you can avoid calling them on every render. You simple pass in a function and an array of inputs and useMemo will only recompute the memoized value when one of the inputs has changed. </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;