<template>
  <div>
    <section class="section-top">
      <div class="container">
        <header>
          <a href="#"><img src="../assets/logo.png" alt=""></a>
        </header>
        <div class="row">
          <div class="col-md-7 col-12">
            <div class="top-content-text">
              <h1>This is the main title placed in h1 tag</h1>
              <div class="text-block dark-blue-block">
                <p><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus architecto atque cum iusto mollitia nisi pariatur quaerat reprehenderit vel velit! Animi, aspernatur dolor eius expedita iusto laboriosam obcaecati placeat soluta!</span><span>Corporis doloremque fuga laborum neque odio, pariatur sapiente vero? Id odit repellat vero! A architecto autem commodi cum cumque cupiditate dolore incidunt maxime molestiae nam obcaecati quae, quidem recusandae sunt.</span></p>
              </div>
            </div>
          </div>
          
          <div class="col-md-5 col-12">
            <div class="top-content-form">
              <div class="dark-blue-block">
                <Form />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <section class="section-bottom"></section>
  </div>
</template>

<script>
  import Form from './../components/Form'
  
  export default {
    name: "Landing",
    
    components: {
      Form
    },
    
    data () {
      return {}
    },
    
    mounted () {},
    
    methods: {}
  }
</script>

<style scoped lang="scss">
  header {
    padding: 10px 0 30px;
  }
  
  .section-top {
    background-image: url('../assets/bg-top.jpg');
    background-repeat: no-repeat;
    background-size: cover;
  }
  
  .top-content-text {
    & > h1 {
      font-size: 40px;
      color: #fff;
      font-weight: 300;
      text-align: center;
      text-transform: uppercase;
      margin-bottom: 30px;
    }
  }
  
  .text-block {
    max-width: 380px;
  }
  
  .dark-blue-block {
    border-radius: 6px;
    background-color: rgba(11,31,42,0.8117647058823529);
    padding: 20px;
    p {
      color: #fff;
      font-size: 18px;
      font-weight: 300;
    }
  }
  
  .top-content-form {
    color: #fff;
  }
</style>