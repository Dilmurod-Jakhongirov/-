<script>
  import { ref, onMounted, computed, watch } from 'vue'
  import { useRouter } from 'vue-router'
  import { useStore } from 'vuex'

  export default {
    setup() {
      const store = useStore()
      const books = computed(() => store.getters.getBooks)

      function load(params) {
        store.dispatch('loadBooks', params)
      }


      // store.commit('updateName', 'name qwerty')

      return {
        books,
        load,
      }
    },
    data() {
      return {
        queryParams: [],
        data: [],
        newTitle: '',
        newAuthor: '',
        newImg: '',
        newGenre: '',
        year: '',
      }
    },
    created() {
      console.log('created')
    },
    mounted() {
      console.log('option mounted')
    },
    methods: {

    },
  }
</script>

<template>
  <div class="wrapper">
    <header>
    </header>
    <section>
      <div class="actions">
        <form
          class="form"
          @submit.prevent="(e) => {
            const newBook = {
              title: this.newTitle,
              author: newAuthor,
              img: this.newImg,
              genre: this.newGenre,
              year: this.year,
              isEdit: false,
              id: Date.now(),
            }
            queryParams = books
            this.queryParams.push(newBook)
            load(queryParams)
            this.data = books
            this.newTitle = ''
            this.newAuthor = ''
            this.newDesc = ''
            this.newGenre = ''
            this.newImg = ''
            this.year = ''
            e.currentTarget.style.top = '-100%'
          }"
        >
          <input v-model="newTitle" type="text" placeholder="Title:">
          <input v-model="newImg" type="text" placeholder="Img:">
          <input v-model="newAuthor" type="text" placeholder="Author:">
          <input v-model="newGenre" type="text" placeholder="Genre:">
          <input v-model="year" type="text" placeholder="Year:">
          <button class="button-19" type="submit">Add book</button>
        </form>
        <div class="search">
            <button class="button-19" @click="(e) => {
                queryParams = books
                queryParams.sort((a, b) => {
                  const titleA = a.title.toLowerCase()
                  const titleB = b.title.toLowerCase()
                  if (titleA < titleB) return -1
                  if (titleA > titleB) return 1
                  return 0
                })
                load(queryParams)
            }">sort by name</button>
          <router-link class="button-19" style="text-decoration: none; margin-top: 50px;" to="/add">Add new book</router-link>
        </div>
      </div>
      <div class="allBooks">
        <div class="book" v-for="e in books">
          <div class="left">
            <img :src="e.img" alt="">
          </div>
          <div class="right">
            <input :disabled=!e.isEdit class="elText" type="text" :placeholder="e.title">
            <input :disabled=!e.isEdit class="elText" type="text" :placeholder="e.author">
            <input :disabled=!e.isEdit class="elText" type="text" :placeholder="e.genre">
            <input :disabled=!e.isEdit class="elText" type="text" :placeholder="e.year">
            <div class="right__actions">
              <button class="button-10" style='cursor: pointer;' @click="e.isEdit = !e.isEdit, console.log(e.isEdit)">{{ e.isEdit ? 'save': 'edit' }}</button>
              <button class="button-10" style='cursor: pointer;' @click="(el) => { 
                this.queryParams = books
                this.queryParams = this.queryParams.filter(item => item.id !== e.id)
                 console.log(e.isEdit)
                  load(queryParams) }">remove</button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <footer></footer>
  </div>
</template>

<style scoped> 
.right__actions{ display: flex; gap: 20px; justify-content: center; padding-top: 10px; } .elText{ border: none; outline: none; text-align: center; } .search{ margin-bottom: 30px; } input { padding: .25em; width: 100%; font-size: 18px; background: none; outline: none; border: none; border-bottom: 1px solid gray; } .button-19 { appearance: button; background-color: #1899D6; border: solid transparent; border-radius: 16px; border-width: 0 0 4px; box-sizing: border-box; color: #FFFFFF; cursor: pointer; display: inline-block; font-family: din-round,sans-serif; font-size: 15px; font-weight: 700; letter-spacing: .8px; line-height: 20px; margin: 0; outline: none; overflow: visible; padding: 13px 16px; text-align: center; text-transform: uppercase; touch-action: manipulation; transform: translateZ(0); transition: filter .2s; user-select: none; -webkit-user-select: none; vertical-align: middle; white-space: nowrap; width: 100%; } .button-19:after { background-clip: padding-box; background-color: #1CB0F6; border: solid transparent; border-radius: 16px; border-width: 0 0 4px; bottom: -4px; content: ""; left: 0; position: absolute; right: 0; top: 0; z-index: -1; } .button-19:main, .button-19:focus { user-select: auto; } .button-19:hover:not(:disabled) { filter: brightness(1.1); -webkit-filter: brightness(1.1); } .button-19:disabled { cursor: auto; } .button-19:active { border-width: 4px 0 0; background: none; } .actions{ width: 100%; display: flex; align-items: center; justify-content: center; flex-direction: column; } .form{ background: whitesmoke; position: fixed; z-index: 3; top: -100%; border-radius: 10px; display: flex; align-items: center; justify-content: center; flex-direction: column; gap: 20px; box-shadow: 0px 0px 76px 0px rgba(0, 0, 0, 0.18); width: 320px; padding: 20px; margin-bottom: 50px; transition: .3s all; } .wrapper{ max-width: 1200px; width: 100%; margin: auto; min-height: 100vh; padding: 20px 40px; background-color: whitesmoke; } .allBooks{ display: flex; flex-wrap: wrap; gap: 30px; justify-content: center; } .book{ padding: 20px; width: 300px; height: 550px; border-radius: 10px; box-shadow: 0px 0px 15px 0px rgba(95,  95,  95, 0.13); background-color: white; overflow: hidden; display: flex; flex-direction: column; justify-content: center; } .left{ padding-top: 10px; width: 100%; height: 75%; } img{ width: 100%; height: 100%; } .right{ display: flex; align-items: center; justify-content: center; flex-direction: column; padding: 10px; } .button-10 { display: flex; flex-direction: column; align-items: center; padding: 6px 14px; font-family: -apple-system, BlinkMacSystemFont, 'Roboto', sans-serif; border-radius: 6px; border: none; color: #fff; background: linear-gradient(180deg, #4B91F7 0%, #367AF6 100%); background-origin: border-box; box-shadow: 0px 0.5px 1.5px rgba(54, 122, 246, 0.25), inset 0px 0.8px 0px -0.25px rgba(255, 255, 255, 0.2); user-select: none; -webkit-user-select: none; touch-action: manipulation; } .button-10:focus { box-shadow: inset 0px 0.8px 0px -0.25px rgba(255, 255, 255, 0.2), 0px 0.5px 1.5px rgba(54, 122, 246, 0.25), 0px 0px 0px 3.5px rgba(58, 108, 217, 0.5); outline: 0; } </style>







