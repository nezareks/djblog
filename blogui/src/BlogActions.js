/**
 * Created by nezaralsaleh on 5/9/17.
 */
import dispatcher from "./BlogDispatcher"

const actions = {
    fetchArticles: () => {
        console.log("fetching ...");
        const url = 'http://127.0.0.1:8000/api/articles.json';
        fetch(url).then(resp => {
            if(resp.ok){
                return resp.json();
            }
        }).then(json => {
            dispatcher.dispatch({
                type: 'blog-articles',
                value: json
            })
        })
    }
};

export default actions;