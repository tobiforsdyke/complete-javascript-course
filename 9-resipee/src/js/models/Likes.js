export default class Likes {
    constructor() {
        this.likes = [];
    }

    addLike(id, title, credits, img) {
        const like = {id, title, credits, img};
        this.likes.push(like);
        // Persist data in localStorage
        this.persistData();
        return like;
    }

    deleteLike(id) {
        const index = this.likes.findIndex(el => el.id === id);
        this.likes.splice(index, 1);
        // Persist data in localStorage
        this.persistData();
    }

    isLiked(id) {
        return this.likes.findIndex(el => el.id === id) !== -1;
    }

    getNumLikes() {
        return this.likes.length;
    }

    // Set the items into the browsers storage and JSON.stringify to convert to a string
    persistData() {
        localStorage.setItem('likes', JSON.stringify(this.likes));
    }

    // Retrieve the items from the browser storage and JSON.parse to convert back from a string
    readStorage() {
        const storage = JSON.parse(localStorage.getItem('likes'));
        // Restoring likes from the localStorage
        if (storage) this.likes = storage;
    }
}