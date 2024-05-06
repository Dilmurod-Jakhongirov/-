import { createStore } from "vuex";

export default createStore({
    state(){
        return{
            books :[
                {
                    title: "1984",
                    author: "George Orwell",
                    genre: "Dystopian Fiction",
                    year: 1949,
                    img: "https://m.media-amazon.com/images/I/61ZewDE3beL._AC_UF894,1000_QL80_.jpg",
                    isEdit: false,
                    id: 1
                },
                {
                    title: "Green Mile",
                    author: "Stiven King",
                    genre: "Dystopian Fiction",
                    year: 1984,
                    img: "https://m.media-amazon.com/images/I/8171jSR50VL._AC_UF894,1000_QL80_.jpg",
                    isEdit: false,
                    id: 2
                },
                {
                    title: "To Kill a Mockingbird",
                    author: "Harper Lee",
                    genre: "Fiction",
                    year: 1960,
                    img: "https://m.media-amazon.com/images/I/81aY1lxk+9L._AC_UF1000,1000_QL80_DpWeblab_.jpg",
                    isEdit: false,
                    id: 3
                },
                {
                    title: "The Great Gatsby",
                    author: "F. Scott Fitzgerald",
                    genre: "Fiction",
                    year: 1925,
                    img: "https://www.oldcastlebooks.co.uk/images/large/9780857304568.jpg",
                    isEdit: false,
                    id: 4
                },
                {
                    title: "Harry Potter and the Philosopher's Stone",
                    author: "J.K. Rowling",
                    genre: "Fantasy",
                    year: 1997,
                    img: "https://res.cloudinary.com/bloomsbury-atlas/image/upload/w_568,c_scale/jackets/9781408855652.jpg",
                    isEdit: false,
                    id: 5
                },
                {
                    title: "Harry Potter and the sorcerer's stone",
                    author: "J.D. Salinger",
                    genre: "Fiction",
                    year: 1951,
                    img: 'https://m.media-amazon.com/images/I/91pI+R+GE7L._AC_UF1000,1000_QL80_.jpg',
                    isEdit: false,
                    id: 6
                },
                {
                    title: "Crime and Punishment",
                    author: "Fyodor Dostoevsky",
                    genre: "Psychological Fiction",
                    year: 1866,
                    img: 'https://m.media-amazon.com/images/I/71O2XIytdqL._AC_UF1000,1000_QL80_.jpg',
                    isEdit: false,
                    id: 7
                },
                {
                    title: "The Lord of the Rings",
                    author: "J.R.R. Tolkien",
                    genre: "Fantasy",
                    year: 1954,
                    img: 'https://i.harperapps.com/hcanz/covers/9780008537760/y648.jpg',
                    isEdit: false,
                    id: 8
                },
                {
                    title: "One Hundred Years of Solitude",
                    author: "Gabriel García Márquez",
                    genre: "Magical Realism",
                    year: 1967,
                    img: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1327881361i/320.jpg',
                    isEdit: false,
                    id: 9
                }
            ]
        }
    },
    getters:{
        getBooks(state){
            return state.books
        }
    },
    mutations:{
        updateBooks(state, data){
            state.books = data
        }
    },
    actions:{
        loadBooks(context, params){
            context.commit('updateBooks', params)
        }
    }
})