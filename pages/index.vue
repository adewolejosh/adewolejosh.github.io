<template>
    <div>
        <navigation></navigation>
        <div class="mt-5 me-5 ms-5 mb-5" id="index-content">
            <div class="cont-container">
                <div class="row row-cols-1 row-cols-md-3">

                    <div class="col-md-6 mt-3">
                        <div class="main-write">
                            <h3>Hi,</h3>
                            <h2>I'm Joshua Adewole</h2>
                            <div>
                                <p>
                                    <small class="intro">
                                        Currently studying Systems Engineering; Open for SWE roles as well as hackathons. <br/>
                                        For fun: Design elegant web apps and major in Backend.<br/>
                                        <nuxt-link class="text-decoration-none" to="/about">
                                            <button class="btn btn-outline-dark mt-3 btn-sm waves-effect">
                                                About Me
                                            </button>
                                        </nuxt-link>
                                    </small>
                                </p>
                            </div>
                        </div>
                        <div>
                            <a href="https://github.com/adewolejosh/" target="_blank">
                               <i class="fab fa-github text-dark"></i>
                            </a>
                            <a href="https://twitter.com/adewole_josh/" target="_blank">
                                <i class="fab fa-twitter p-3 text-dark"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/joshua-adewole/" target="_blank">
                               <i class="fab fa-linkedin-in text-dark"></i>
                           </a>
                           
                        </div> 
                    </div>

                    <div class="col-md-2"></div>

                    <div class="col-md-4 mt-3 main-photo order-first order-sm-first order-md-1">
                        <div class="main-photo">
                            <img class="mx-auto d-block" src="@/static/images/josh.jpg" id="josh">
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>

import Navigation from '@/components/navigation.vue';

export default {
components: {
    Navigation
},

data() {
      return {
        title: 'I am Josh!'
      }
    },
    head() {
      return {
        title: this.title,
        meta: [
          // hid is used as unique identifier. Do not use `vmid` for it as it will not work
          {
            hid: 'All of Me',
            name: 'Josh\'s',
            content: 'welcome to my portfolio/blog/personal space'
          }
        ]
      }
    }
} 

</script>

<style scoped>

.main-write {
    margin-top: 20%;
}

.main-photo {
    margin-top: 15%;
}

#josh {
    border-radius: 50%;
    max-height: 50%;
    max-width: 50%;
    pointer-events: none;
}

.cont-container {
    margin-right: 5%;
    margin-left: 5%;
}

h2 {
    font-family: Playfair Display;
    font-weight: 500;
}

h3 {
    font-family: Playfair Display;
    font-weight: 500;
}

.intro {
    font-family: Libre Franklin;
    line-height: 0.5cm;
}

</style>