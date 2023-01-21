import React, { useState, useEffect } from "react";
import "../lib";
import { Link, useParams } from "react-router-dom";

const ProjetShow = () => {
    useEffect(() => {
        getProjetDetail();
    }, []);

    const [projet, setProjet] = useState({});
    const [comments, setComments] = useState([]);

    const { id } = useParams();

    const getProjetDetail = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/' + id);
        const post = await response.json();

        const response2 = await fetch('https://jsonplaceholder.typicode.com/posts/' + id + '/comments');

        const allComments = await response2.json();

        setProjet(post);
        setComments(allComments);
    }
    return (
        <article>
            <h3>{projet.title}</h3>
            <p>{projet.body}</p>
            <div className="comments">
                {
                    comments.map((comment) => (
                        <div key={comment.id} className="comment">
                            <h5>{comment.name}</h5>
                            <p>{comment.body}</p>
                        </div>
                    ))
                }
            </div>
            <Link to="/projets">Retour</Link>
        </article>
    );
}

export default ProjetShow;