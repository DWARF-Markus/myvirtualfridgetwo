<template>
  <div class="about">
    <p>Shopping List page</p>
    <IngredientForm />
    <IngredientList />
  </div>
</template>

<script>
import IngredientForm from '@/components/IngredientForm'
import IngredientList from '@/components/IngredientsList'

export default {
  components: {
    IngredientForm,
    IngredientList,
  },
}
</script>
