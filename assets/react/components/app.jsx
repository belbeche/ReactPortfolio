import React, { useEffect, useState } from "react";
import { async } from "regenerator-runtime";

const App = () => {

    const [posts, setPosts] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetchDatas()
    }, [])

    const fetchDatas = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
                headers: {
                    'Accept': 'application/json'
                }
            }).then(r => r.json())

            setPosts(response)
            setLoading(false)
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <div>
            <h1>Bonjour tout le monde</h1>

            {loading && <h2>Chargement...</h2>}

            {!loading && <ul>
                {posts.map(post => <li key={post.id}>{post.title}</li>)}
            </ul>}
        </div>
    );
};

export default App;