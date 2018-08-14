<template>
  <div>
    <b-form @submit.prevent="onSubmit">
      <ul class="properties-list">
        <li v-for="(item, index) in items" :key="index">
          <span>{{index + 1}}</span>
          <b-form-select
            :options="formArr"
            v-model="item.selected"
            @input="changeSelected(item.selected, index)"
            :disabled="item.disabled">
          </b-form-select>
          <b-button @click="changeOrder(item.selected, index)" variant="primary" size="sm">order</b-button>
          <b-button @click="deleteRow(index, item.selected)" :disabled="disableBtn" variant="danger" size="sm">Delete</b-button>
        </li>
      </ul>
      
      <b-button @click="addRow" variant="success" :disabled="disableBtn" size="sm">
        <font-awesome-icon icon="plus-circle" class="mr-2"/>Add property
      </b-button>
      
      <div class="mt-4 text-center">
        <b-button v-show="showSortBtn" type="submit" variant="primary">Sort</b-button>
      </div>
    </b-form>
  </div>
</template>

<script>
  export default {
    name: "Form",
    
    props: [
      'formArr'
    ],

    data () {
      return {
        options: [],
        menus: [],
        items: [],
        showSortBtn: false,
        disableBtn: false,
        result: []
      }
    },

    mounted () {
      for (let i = 0; i < this.formArr.length; i++) {
        this.formArr[i].text = this.formArr[i].title
        this.formArr[i].value = this.formArr[i].name
        this.formArr[i].disabled = false
        this.formArr[i].priority = i + 1
      }
    },

    methods: {
      addRow () {
        this.items.push(
          {
            selected: null,
            disabled: false
          }
        )
        this.disableBtn = true
      },

      changeOrder (itemSelected, index) {
        for (let i = 0;  i < this.formArr.length; i++) {
          // this.formArr[i].orderTypeDefault = (this.formArr[i].name == itemSelected && this.formArr[i].orderTypeDefault == 'ASC') ? 'DESC' : 'ASC'
          // this.result[index].order = this.formArr[i].orderTypeDefault
          if (this.formArr[i].name == itemSelected) {
            if (this.formArr[i].orderTypeDefault == 'ASC') {
              this.formArr[i].orderTypeDefault = 'DESC'
              this.result[index].order = this.formArr[i].orderTypeDefault
            } else {
              this.formArr[i].orderTypeDefault = 'ASC'
              this.result[index].order = this.formArr[i].orderTypeDefault
            }
          }
        }
      },
      
      deleteRow (index, itemSelected) {
        for (let i = 0;  i < this.formArr.length; i++) {
          if (this.formArr[i].name == itemSelected) {
            this.formArr[i].disabled = false
            this.result.splice(i, 1)
          }
        }
        this.items.splice(index, 1)
        document.getElementById('result').innerHTML = ''
      },

      changeSelected (itemSelected, index) {
        for (let i = 0;  i < this.formArr.length; i++) {
          if (this.formArr[i].name == itemSelected) {
            this.formArr[i].disabled = true
            this.result.push(
              {
                priority: this.formArr[i].priority,
                property: this.formArr[i].title,
                order: this.formArr[i].orderTypeDefault
              }
            )
          }
        }
        this.items[index].disabled = true
        this.showSortBtn = (itemSelected != null) ? true : false
        this.disableBtn = (itemSelected == null) ? true : false
      },
      
      onSubmit () {
        document.getElementById('result').innerHTML = ''
        document.getElementById('result').innerHTML = JSON.stringify(this.result, null, 2)
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