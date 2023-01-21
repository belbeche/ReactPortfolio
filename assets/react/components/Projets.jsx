import React, { useState, useEffect } from "react";
import "../lib";
import { Link } from "react-router-dom";

const Projets = () => {
    useEffect(() => {
        getAllPosts();
    }, []);

    const [posts, setPosts] = useState([]);

    const getAllPosts = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const allPosts = await response.json();
        // console.log(allPosts);
        setPosts(allPosts);
    }
    return (
        <div className="container">
            <h1>Projets</h1>
            {posts.take(10).map((post) => (
                <h4 className="blog-link" key={post.id}><Link to={`/projet/${post.id}`}>{post.title}</Link></h4>
            ))}
        </div>
    );
}

export default Projets;