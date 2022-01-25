<template>

  <form>

    <!-- <text-field type="text" placeholder="Username" v-model="username"/> -->
    <input
        class="m-5 sm:w-1 md:w-1/2 text-black  border-gray-400  hover:bg-gray-200 border-black-200 rounded py-3 px-4 mb-5"
        type="text" placeholder="book title" v-model="title"/>
    <input
        class="m-5 sm:w-1 md:w-1/2 text-black  border-gray-400  hover:bg-gray-200 border-black-200 rounded py-3 px-4 mb-5"
        type="number" placeholder="isbn" v-model="isbn"/>
    <input
        class="m-5 sm:w-1 md:w-1/2 text-black  border-gray-400  hover:bg-gray-200 border-black-200 rounded py-3 px-4 mb-5"
        type="text" placeholder="Author" v-model="author"/>
    <input
        class="m-5 sm:w-1 md:w-1/2 text-black  border-gray-400  hover:bg-gray-200 border-black-200 rounded py-3 px-4 mb-5"
        type="text" placeholder="category" v-model="category"/>
    <input
        class="m-5 sm:w-1 md:w-1/2 text-black  border-gray-400  hover:bg-gray-200 border-black-200 rounded py-3 px-4 mb-5"
        type="text" placeholder="Ksh." v-model="price"/>
    <input
        class="m-5 sm:w-1 md:w-1/2 text-black  border-gray-400  hover:bg-gray-200 border-black-200 rounded py-3 px-4 mb-5"
        type="number" placeholder="pages" v-model="pages"/>
    <br>
    <br>
    <button @click.prevent="addBook"
            class=" mr-20 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
    ADD
    </button>


  </form>
</template>

<script>
const axios = require('axios');
export default {
  data() {
    return {
      title: "",
      isbn: "",
      category: "",
      author: "",
      price: "",
      pages: "",
    };
  },
  methods: {
    addBook() {
      if (this.title == ""){
        alert('Book Title is Required');
        return;
      }
    else
      if (this.isbn == "") {alert('Book Isbn is Required');
      return;}
    else
      if (this.author == "") {alert('Book Author is Required');
      return;}
    else
      if (this.category == "") {alert('Book Category is Required');
      return;}
    else
      if (this.price == "") {alert('Book Price is Required');
      return;}
    else
      if (this.pages == "") {alert('Book Pages is Required');
      return;}
    else
      {
        const data = {
          title: this.title,
          isbn: this.isbn,
          category: this.category,
          author: this.author,
          price: this.price,
          pages: this.pages,
        }
        axios.post('http://localhost:3000/api/v1/create-book',data)
            .then(function(response) {
              console.log(response.data)
            })
            .catch(function(error) {
              console.log(error)
            })

        //Show Loader
        this.loading = true;

        //Waste 5 seconds
        setTimeout(() => {
          this.loading = false;
        }, 2000)

         this.$router.push('/user/books')
      }
    }
  }
};


</script>

<style scoped>

input {
  border: 1px solid #ccc;
}

</style>