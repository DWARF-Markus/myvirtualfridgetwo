<template>
  <div>
    <input v-model="ingredient" type="text" placeholder="Add ingredient" />
    <input v-model="quantity" type="text" placeholder="Add ingredient" />
    <button @click="handleNewIngredient">Add</button>
    <button @click="readIngredients">Read</button>
    <p>Read ingredient: {{ readIngredient }}</p>
  </div>
</template>

<script>
import { v4 as uuidv4 } from 'uuid'

export default {
  name: 'IngredientForm',
  data() {
    return {
      ingredient: '',
      quantity: '',
      readIngredient: '',
    }
  },
  methods: {
    async handleNewIngredient() {
      const id = uuidv4()
      const ref = this.$fireStore.collection('ingredients').doc(id)
      try {
        await ref.set({
          ingredient: this.ingredient,
          quantity: this.quantity,
        })
      } catch (e) {
        console.log('e', e)
      }
    },
    async readIngredients() {
      const ref = this.$fireStore
        .collection('ingredients')
        .doc('TcrrMkA9a74jtWBsr70O')
      try {
        const refDoc = await ref.get()
        this.readIngredient = refDoc.data()
      } catch (e) {
        console.log('e', e)
      }
    },
  },
}
</script>

<style lang="scss" scoped></style>
