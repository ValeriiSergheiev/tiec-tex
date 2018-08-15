<template>
  <div>
    <section class="section-top">
      <div class="container">
        <header>
          <a href="#"><img src="../assets/logo.png" alt=""></a>
        </header>
        
        <div class="row">
          <div class="col-lg-7 col-md-6 col-12">
            <div class="top-content-text">
              <h1>This is the main title placed in h1 tag</h1>
              <div class="text-block dark-blue-block">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus architecto atque cum iusto mollitia nisi pariatur quaerat reprehenderit vel velit! Animi, aspernatur dolor eius expedita iusto laboriosam obcaecati placeat soluta! Corporis doloremque fuga laborum neque odio, pariatur sapiente vero? Id odit repellat vero! A architecto autem commodi cum cumque cupiditate dolore incidunt maxime molestiae nam obcaecati quae, quidem recusandae sunt.</p>
              </div>
            </div>
          </div>
          
          <div class="col-lg-5 col-md-6 col-12">
            <div class="top-content-form">
              <div class="dark-blue-block">
                <Form :formArr="$store.state.form" />
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </section>
    
    <section class="section-bottom">
      <div class="container">
        <div class="active-block">
          <div class="active-block-top">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus architecto atque cum iusto mollitia nisi pariatur quaerat reprehenderit vel velit! Animi, aspernatur dolor eius expedita iusto laboriosam obcaecati placeat soluta! Corporis doloremque fuga laborum neque odio, pariatur sapiente vero? Id odit repellat vero! A architecto autem commodi cum cumque cupiditate dolore incidunt maxime molestiae nam obcaecati quae, quidem recusandae sunt.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus architecto atque cum iusto mollitia nisi pariatur quaerat reprehenderit vel velit! Animi, aspernatur dolor eius expedita iusto laboriosam obcaecati placeat soluta! Corporis doloremque fuga laborum neque odio, pariatur sapiente vero? Id odit repellat vero! A architecto autem commodi cum cumque cupiditate dolore incidunt maxime molestiae nam obcaecati quae, quidem recusandae sunt.</p>
          </div>
          <div class="active-block-bottom">
            <a href="#" @click.prevent="scrollTop">Let's try it</a>
          </div>
        </div>
      </div>
    </section>
  
    <footer>
      <div class="container">
        <pre id="result"></pre>
      </div>
    </footer>
  </div>
</template>

<script>
  import Form from '../components/Form'
  
  export default {
    name: "Landing",
    
    components: {
      Form
    },
    
    data () {
      return {}
    },
    
    mounted () {},
    
    methods: {
      scrollTop () {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        })
      }
    }
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
    padding-bottom: 70px;
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
  
  #result {
    color: tomato;
    margin-bottom: 0;
    font-size: 12px;
  }
  
  /* section bottom */
  .section-bottom {
    background-image: url('../assets/bg-bottom.jpg');
    background-repeat: no-repeat;
    padding: 70px 0;
    background-size: cover;
  }
  
  .active-block {
    border-radius: 4px;
    border: 1px solid #e7e7e7;
    overflow: hidden;
  }
  
  .active-block-top {
    padding: 40px 20px;
    background-color: #ffffff;
    p {
      font-size: 18px;
      color: rgb(40,40,40);
      font-weight: 300;
      text-align: justify;
    }
  }
  
  .active-block-bottom {
    background-color: #fafafa;
    border-top: 1px solid #ececec;
    text-align: center;
    padding: 30px 0;
    a {
      display: inline-block;
      font-size: 22px;
      font-weight: 300;
      padding: 5px 55px;
      color: #fff;
      text-decoration: none;
      border-radius: 19px;
      box-shadow: 0.5px 0.866px 1px rgba(0,0,0,0.44);
      background-color: #3f7f89;
      transition: opacity .2s;
      &:hover {
        opacity: .7;
      }
    }
  }
  
  //Media
  @media only screen and (max-width: 768px) {
    .top-content-text {
      margin-bottom: 20px;
    }
  }
</style>