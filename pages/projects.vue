<template>

    <div class="m-5">
        <nuxt-link to="/">
                <i class="fas fa-arrow-circle-left fa-2x text-dark"></i>
        </nuxt-link>
        <div class="cont-container">
            <div class="">
                <h4 class="text-center" id="headerz">Projects.</h4>
                <!-- <hr class="mb-5 me-5 ms-5"/> -->

                <!-- <div id="carouselExampleControls" class="d-flex text-center carousel carousel-dark slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="@/static/images/projects/green.png" id="image-1" class="d-flex mx-auto carousel-pj"/>
                        </div>
                        <div class="carousel-item">
                            <img src="@/static/images/projects/sky-blue.png" id="image-2" class="d-flex mx-auto carousel-pj"/>
                        </div>
                        <div class="carousel-item">
                            <img src="@/static/images/projects/nude.png" id="image-2" class="d-flex mx-auto carousel-pj"/>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div> -->

                <div id="projects">
                    <div class="m-5">
                        <div id="kechies" class="ms-lg-5">
                            <div class="row row-cols-1 row-cols-md-2">
                                <div class="col-md-9 text-left p-2">
                                    <h5 class="project-title"><span class="icon"> 🏬 </span><a href="https://kechies.herokuapp.com/" class="text-dark"> Kechies Accessories</a></h5>
                                    <h8 class="text-muted project-details">
                                        An E-commerce store made with Django, HTML, CSS, JavaScript and Bootstrap
                                    </h8>
                                </div>
                                <div class="col-md-3 text-center mt-xl-3 p-2">
                                    <div class="">
                                        <a class="gh-ic m-2" href="https://github.com/adewolejosh/kechies">
                                            <i class="fab fa-github text-dark fa-2x"></i>
                                        </a>
                                        <a class="gh-ic m-2" href="https://kechies.herokuapp.com/">
                                            <span class="iconify fa-2x" data-icon="logos-heroku-icon" data-inline="false"></span>
                                            <i class="fab fa-heroku"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        
                        <hr/>
                        
                        <div id="anonymous-messenger" class="ms-lg-5">
                            <div class="row row-cols-1 row-cols-md-2">
                                <div class="col-md-9 text-left p-2">
                                    <h5 class="project-title"><span class="icon"> 📬 </span><a href="http://kubool.herokuapp.com/" class="text-dark"> Anonymous Messenger</a></h5>
                                    <h8 class="text-muted project-details">
                                        My Personal Anonymous Messenger Web app made with Django, HTML and CSS
                                    </h8>
                                </div>
                                <div class="col-md-3 text-center mt-xl-3 p-2">
                                    <div class="">
                                        <a class="gh-ic m-2" href="https://github.com/adewolejosh/Anonymous-Messenger">
                                            <i class="fab fa-github text-dark fa-2x"></i>
                                        </a>
                                        <a class="gh-ic m-2" href="http://kubool.herokuapp.com/">
                                            <span class="iconify fa-2x" data-icon="logos-heroku-icon" data-inline="false"></span>
                                            <i class="fa-heroku"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        
                        <hr/>
                        
                        <div id="christmas-tree" class="ms-lg-5">
                            <div class="row row-cols-1 row-cols-md-2">
                                <div class="col-md-9 text-left p-2">
                                    <h5 class="project-title"><span class="icon"> 🎄 </span><a class="text-dark" href="#"> Christmas Tree </a></h5>
                                    <h8 class="text-muted project-details">
                                        A Christmas design Challenge I tackled simply with Python 3's Turtle module
                                    </h8>
                                </div>
                                <div class="col-md-3 text-center mt-xl-3 p-2">
                                    <div class="">
                                        <a class="gh-ic m-2" href="https://github.com/adewolejosh/christmas-tree-design">
                                            <i class="fab fa-github text-dark fa-2x"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        
                        <hr/>

                        <div id="budget-go" class="ms-lg-5">
                            <div class="row row-cols-1 row-cols-md-2">
                                <div class="col-md-9 text-left p-2">
                                    <h5 class="project-title"><span class="icon"> 📈📉 </span><a href="https://budget-go.netlify.app/" class="text-dark"> Budget-go</a></h5>
                                    <h8 class="text-muted project-details">
                                        A Web app in minimalist design that helps to track and manage monthly budget, made with Vue.js and Material Design Bootsrap
                                    </h8>
                                </div>
                                <div class="col-md-3 text-center mt-xl-3 p-2">
                                    <div class="">
                                        <a class="gh-ic m-2" href="https://github.com/adewolejosh/budget-go">
                                           <i class="fab fa-github text-dark fa-2x"></i>
                                        </a>
                                        <a class="gh-ic m-2" href="https://budget-go.netlify.app/">
                                            <span class="iconify fa-2x" data-icon="logos-netlify" data-inline="false"></span>
                                           <i class="fab fa-netlify"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <hr/>

                    </div>
                </div>

            </div>
        </div>
    </div>
    
</template>

<script>
export default {
    data() {
      return {
        title: 'My Projects'
      }
    },
    head() {
      return {
        title: this.title,
        meta: [
          // hid is used as unique identifier. Do not use `vmid` for it as it will not work
          {
            hid: '',
            name: '',
            content: ''
          }
        ]
      }
    }
    
}
</script>

<style scoped>

.carousel-pj {
    max-width: 50%;
    max-height: 50%;
}

#headerz {
    font-family: Playfair Display;
}

</style>