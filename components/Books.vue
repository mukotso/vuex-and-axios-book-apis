<template>

  <div v-if="loading">
    <loader object="#ff9633" color1="#ffffff" color2="#17fd3d" size="5" speed="2" bg="#343a40" objectbg="#999793" opacity="80" name="circular"></loader>

  </div>
  <div v-else class="container">

    <button  class=" mb-5 ml-5 bg-green-500 hover:bg-maroon-700 text-white font-bold py-2 px-4 border  rounded">

      <router-link :to="{ name: 'addBook'}">ADD NEW BOOK</router-link><br>
    </button>

    <button @click="toggleSearch()" class="mb-5 ml-5 bg-green-500 hover:bg-maroon-700 text-white font-bold py-2 px-4 border  rounded">SEARCH </button>
    <button v-if="search" class=" bg-gray-500 text-white font-bold py-2 px-4 border  rounded">
      <div   id="inputs">
        <form>
        <input class="m-5 sm:w-1 md:w-1/2 text-black  border-gray-400  hover:bg-gray-200 border-black-200 rounded py-3 px-4 mb-5" type="number" placeholder="max price" v-model="max"/>
        <input class="m-5 sm:w-1 md:w-1/2 text-black  border-gray-400  hover:bg-gray-200 border-black-200 rounded py-3 px-4 mb-5" type="number" placeholder="min price" v-model="min"/><br>


          <button @click="searchBooks" class=" mr-20 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            Search
          </button>
        </form>

      </div>

    </button>

    <div class='overflow-x-auto w-full'>

<!--      <div v-if="books==[]">-->
<!--        NO BOOKS AVAILABLE-->
<!--      </div>-->
      <table  class=' mb-20 mx-auto max-w-4xl w-full whitespace-nowrap rounded-lg bg-white divide-y divide-gray-300 overflow-hidden'>
        <thead class="bg-gray-900">
        <tr class="text-white text-left">
          <th class="font-semibold text-sm uppercase px-6 py-4">Isbn</th>
          <th class="font-semibold text-sm uppercase px-6 py-4">Title</th>
          <th class="font-semibold text-sm uppercase px-6 py-4">Author </th>
          <th class="font-semibold text-sm uppercase px-6 py-4">Category </th>
          <th class="font-semibold text-sm uppercase px-6 py-4">Price</th>
          <th class="font-semibold text-sm uppercase px-6 py-4">Pages</th>
          <th class="font-semibold text-sm uppercase px-6 py-4">Action </th>
        </tr>
        </thead>
        <tbody class="divide-y divide-gray-200">

        <tr v-for="(book,index) in books" :key="index">
          <td>{{ book.isbn }}</td>
          <td>{{ book.title }}</td>
          <td>{{ book.author }}</td>
          <td>{{ book.category }}</td>
          <td>{{ book.price }}</td>
          <td>{{ book.pages }}</td>
          <td>
            <button @click="editTask" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
              EDIT
            </button>
            <button @click="deleteTask(book.isbn)"  class=" ml-5 bg-red-500 hover:bg-maroon-700 text-white font-bold py-2 px-4 border  rounded">
              DELETE
            </button>

            <button  class=" ml-5 bg-green-500 hover:bg-green-100 text-white font-bold py-2 px-4 border  rounded">
              <router-link :to="{ name: 'book-details', params: { id: book.isbn }}">VIEW DETAILS</router-link>
            </button>
          </td>

        </tr>




        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
const axios = require('axios');
export default {
  data() {
    return {
      search:false,
      loading:false,
      books:[],
      completed:true,
      isScheduled:true,
      min:"",
      max:""
    };
  },
  methods: {
    getBooks() {
      axios.get('http://localhost:3000/api/v1/books')
          .then((response) => {
            console.log(response.data);
            this.books = response.data;
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          })
    },
    deleteTask(isbn) {

      confirm('A YOU SURE YOU WANT TO DELETE THE TASK');
          axios.get('http://localhost:3000/api/v1/book/delete/'+isbn)
              .then((response) => {
                console.log(response.data);
                this.getBooks()
              })
              .catch(function (error) {
                // handle error
                console.log(error);
              })
      alert('TASK DELETED SUCCESSFULLY');
    },
    toggleSearch(){
      this.search =!this.search;
    },
    searchBooks() {
console.log(this.min);
        if (this.min == ""){
          alert('min price is Required');
          return;
        }
        else if (this.max == "") {
          alert('Max price is Required');
          return;
        }
        else {
          const data = {
            min: this.min,
            max: this.max,
          }
          axios.post('http://localhost:3000/api/v1/filter-by-price', data)
              .then((response) => {
                console.log(response.data);
                this.books = response.data;
              })
              .catch(function (error) {
                // handle error
                console.log(error);
              })

          this.$router.push('/user/books')
        }
    },
    editTask() {
      alert('TASK EDITED SUCCESSFULLY');
    },

  },
  beforeMount(){
    //Show Loader
    this.loading = true;

    //Waste 2 seconds
    setTimeout(() => {
      this.loading = false;
    }, 2000)
    this.getBooks()
  }
};


</script>