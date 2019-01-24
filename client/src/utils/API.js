import axios from "axios";

export default {
    // get books from the google api
    getBooks: function(q) {
        return axios.get("/api/google", { params: { q: "title:" + q } });
    },
    // gets all saved books
    getSavedBooks: function() {
        return axios.get("/api/books");
    },
    // deletes the saved book with the given id
    deleteBook: function(id) {
        return axios.delete("/api/books/" + id);
    },
    saveBook: function(bookData) {
        return axios.post("/api/books", bookData);
    }
};