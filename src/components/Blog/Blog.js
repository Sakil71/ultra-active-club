import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='container blog-container my-5'>
            <div className='bg-info p-3 rounded'>
                <h3 className='mb-4'>How does React work?</h3>
                <h6>React is without a doubt one of the most powerful and flexible frontend frameworks. But with its great power comes great responsibility - it's easy to misuse it and create a mess of an app. To avoid it, one needs to really understand how React works internally by studying its code implementation and structure. Coincidentally, it is also one of the best ways to learn React in general. Let's do this today!</h6>

                <h6>Working with a non-opinionated framework such as React gives you a lot of freedom, but also introduces more room for mistakes. Wait a second… What's the deal with opinionated and non-opinionated frameworks?</h6>
                <h6>During my career as a frontend developer, I've mostly been building user interfaces with two very popular frameworks: React and Vue (both placed in the top 10 of all GitHub-hosted projects with 181k and 192k stars respectively). What captivated me the most about these frameworks was the flexibility and freedom in web development that they had to offer.Back then I also had the opportunity to work with Ember.js - a very pleasant framework with a great Ember Data feature. </h6>
            </div>
            <div className='bg-info p-3 rounded'>
                <h3 className='mb-4'>Differences between props and state</h3>
                <h6>Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components</h6>
                <h6>Have you ever wondered how can we pass the data between the components in ReactJS? We can pass the data between the components using Props and State. So, let us know how we can pass the data using props and state and understand the difference between the two.</h6>
                <h6>The following will be the output when we execute the above command. The data will be passed from the Parent component i.e. App.js to the Child component i.e. Fruit.js with the usage of the “Props” feature. </h6>
                <h6>. This is the 'functional' aspect of React. All data (almost) flows downwards. Since the prop is owned by the parent, only the parent should change it. Ideally, children should be stateless. That's not possible in practice (see forms documentation on the React site). 2. You can either feed it in at the top, which is a recommended practice, or you can store it in separate objects. One popular approach is Flux, which uses singleton objects called Stores. This is part of a larger architectural pattern.</h6>
            </div>
            <div className='bg-info p-3 rounded'>
                <h3 className='mb-4'>What is the useEffect used for?</h3>
                <h6>The useEffect Hook allows you to perform side effects in your components. Some examples of side effects are: fetching data, directly updating the DOM, and timers. useEffect accepts two arguments.</h6>
                <h6>In React class components, the render method itself shouldn't cause side effects. It would be too early — we typically want to perform our effects after React has updated the DOM.This is why in React classes, we put side effects into componentDidMount and componentDidUpdate.</h6>
                <h6>This is because in many cases we want to perform the same side effect regardless of whether the component just mounted, or if it has been updated. Conceptually, we want it to happen after every render — but React class components don't have a method like this. We could extract a separate method but we would still have to call it in two places.</h6>
                <h6> By using this Hook, you tell React that your component needs to do something after render. React will remember the function you passed (we'll refer to it as our “effect”), and call it later after performing the DOM updates. In this effect, we set the document title, but we could also perform data fetching or call some other imperative API.</h6>
            </div>
        </div>
    );
};

export default Blog;