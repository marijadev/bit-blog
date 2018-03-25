import { Post } from "../entities/Post";
import { url } from '../shared/constants';

class ServicePost {
    fetchPosts = () => {
        return fetch(url.postsURL)
            .then(response => response.json())
            .then(posts => {
                return posts.map(post => {
                    return new Post(post);
                });
            });
    }
    fetchPost = (id) => {
        return fetch(`${url.postsURL}/${id}`)  
            .then(response => response.json())
            .then(post => new Post(post))
    }

}

export const servicePost = new ServicePost()