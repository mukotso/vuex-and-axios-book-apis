
export const books = {
    namespaced: true,
    state: {
        books: []
    },

    getters: {
        getBooks:state => state.books
    },

    actions: {
        getBooks({commit},payLoad) {
            console.log(payLoad);

            commit('getBooks',payLoad);
        },
    },
    mutations: {
        getBooks(state,books) {
            state.books = books;
        },
    }
};