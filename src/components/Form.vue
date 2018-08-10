<template>
  <div>
    <b-form @submit.prevent="onSubmit">
      <ul class="properties-list">
        <li v-for="(item, index) in propertiesRows" :key="index">
          <span>{{index + 1}}</span>
          <b-form-select v-model="selected" :options="item.options" />
          <b-button @click="deleteRow(index)" variant="danger" size="sm">Delete</b-button>
          <span>{{item.text}}</span>
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
        selectOption: [],
        selected: null,
      }
    },

    mounted () {
      let formJson = JSON.stringify(this.$store.state.form)
      this.formObj = JSON.parse(formJson)
      // console.log(this.formObj)
      for (let k = 0; k < this.formObj.length; k++) {
        this.selectOption.push(
          {
            value: this.formObj[k].name,
            text: this.formObj[k].title
          }
        )
      }
      // console.log(this.selectOption)
    },

    methods: {
      addRow () {
        this.propertiesRows.push(
          {
            options: this.selectOption
          }
        )
      },
      deleteRow (index) {
        this.propertiesRows.splice(index, 1)
        this.i--
      },
      onSubmit () {
        alert('submit')
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