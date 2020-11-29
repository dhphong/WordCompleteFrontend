<template>
  <div class="hello">
    <h1>Word Complete + Huffman</h1>
    <vue-suggestion
      :items="items"
      v-model="item"
      :setLabel="setLabel"
      :itemTemplate="ItemTemplate"
      @changed="inputChange"
      @selected="itemSelected">
    </vue-suggestion>
  </div>
</template>

<script>
import ItemTemplate from './ItemTemplate.vue'
import { getComplete } from '@/services/services'

export default {
  name: 'HelloWorld',
  data () {
    return {
      item: {},
      items: [],
      ItemTemplate
    }
  },
  mounted () {

  },

  methods: {
    itemSelected (item) {
      this.item = item
    },
    setLabel (item) {
      return item.name
    },
    async loadItem (text) {
      const ret = await getComplete(text)
      this.items = ret.candidates.map((can, ind) => ({
        id: ind + 1,
        name: text.trim() + can
      }))
    },
    async inputChange (text) {
      await this.loadItem(text)
    }
  }
}
</script>
<style>

.vue-suggestion {
  width: 50%;
  max-width: 500px;
  margin: 0 auto;
  position: absolute;
  top: 20%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}

.vue-suggestion .vs__input-group .vs__input {
  width: 100%;
  display: block;
  margin: 0 auto;
  padding: .5rem .7rem;
  font-size: 1.1rem;
  height: 50px;
  line-height: 1.25;
  color: #464a4c;
  outline: none;
  background-color: #fff;
  background-image: none;
  background-clip: padding-box;
  border: 1px solid #cecece;
  border-radius: .25rem;
  transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out
}

.vue-suggestion .vs__input-group .vs__input:focus {
  border: 1px solid #023d7b
}

.vue-suggestion .vs__list {
  width: 100%;
  text-align: left;
  border: none;
  border-top: none;
  max-height: 400px;
  overflow-y: auto;
  border-bottom: 1px solid #023d7b
}

.vue-suggestion .vs__list .vs__list-item {
  background-color: #fff;
  padding: 10px;
  border-left: 10px solid #023d7b;
  border-right: 1px solid #023d7b
}

.vue-suggestion .vs__list .vs__list-item:last-child {
  border-bottom: none
}

.vue-suggestion .vs__list .vs__list-item:hover {
  background-color: #eee !important
}

.vue-suggestion {
  position: relative
}

.vue-suggestion .vs__list, .vue-suggestion .vs__loading {
  position: absolute
}

.vue-suggestion .vs__list .vs__list-item {
  cursor: pointer
}

.vue-suggestion .vs__list .vs__list-item.vs__item-active {
  background-color: #f3f6fa
}
</style>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  height: 100%;
  position: relative;
}
</style>
