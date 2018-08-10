<template>
  <div>
    <b-form @submit="" @reset="">
      <ul class="properties-list">
        <li v-for="(property, index) in propertiesRows">
          <span>{{index + 1}}</span>
          <b-form-select v-model="selected" :options="propertiesRows" />
          <b-button @click="deleteRow(index)" variant="danger" size="sm">Delete</b-button>
        </li>
      </ul>
    
      <b-button @click="addRow" variant="success" size="sm">
        <font-awesome-icon icon="plus-circle" class="mr-2"/>Add property
      </b-button>
    
      <div class="mt-4 text-center">
        <b-button type="submit" variant="primary">Sort</b-button>
      </div>
    </b-form>
  </div>
</template>

<script>
  export default {
    name: "Form",
    
    data () {
      return {
        formObj: [],
        propertiesRows: [],
        selected: null,
        i: 0
      }
    },

    mounted () {
      let formJson = JSON.stringify(this.$store.state.form)
      this.formObj = JSON.parse(formJson)
      console.log(this.formObj)
    },

    methods: {
      addRow () {
        this.propertiesRows.push({
          value: this.formObj[this.i].name,
          text: this.formObj[this.i].title
        })
        this.i++
      },
      deleteRow (index) {
        this.propertiesRows.splice(index, 1)
        this.i--
      }
    }
  }
</script>

<style scoped lang="scss">
  .properties-list {
    list-style-type: none;
    padding-left: 0;
    li {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 5px;
    }
  }
</style>