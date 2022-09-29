import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='container blog-container'>
            <div my-5>
                <h2>How does React work?</h2>
                <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores explicabo recusandae quia. Nam debitis, accusamus harum, animi facere, blanditiis error maxime fugiat veniam provident molestias? Unde earum quasi iure! Distinctio.</h6>
            </div>
            <div>
                <h2>Differences between props and state</h2>
                <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, ducimus reprehenderit nostrum ab impedit autem harum fugiat soluta accusamus provident iusto nulla rerum molestias eos, tenetur vitae possimus, incidunt esse. Laudantium omnis minima consequuntur temporibus ducimus cumque reprehenderit exercitationem adipisci!</h6>
            </div>
            <div>
                <h2>What is the useEffect used for?</h2>
                <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam obcaecati provident culpa aperiam quo, at veritatis modi aliquam sapiente minus. Quaerat eius, culpa a doloremque commodi suscipit quasi alias velit assumenda est ab rerum perferendis repudiandae ipsum. Aut, debitis assumenda?</h6>
            </div>
        </div>
    );
};

export default Blog;