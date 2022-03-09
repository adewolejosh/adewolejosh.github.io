<template>
    <div>
        <title>{{ article.title }}</title>            
        <div class="row row-cols-1 row-cols-sm-3 m-5">
            <div class="col-sm-2"></div>
            <div class="col-sm-8">
                <nuxt-link to="/blog">
                <i class="fas fa-arrow-circle-left fa-2x text-dark"></i>
                </nuxt-link>
                <div class="mt-5">
                    <div class="mt-5 mb-2">
                        <h3 class="post-title font-weight-bold text-capitalize">{{ article.title }}</h3>
                        <h6 class="post-date">{{ article.date }}</h6>
                        <div class="mt-3"><h7>{{ readingTime }} min read</h7></div>
                        <div class="mt-3">
                            <button v-for="(tag, id) in article.tags" :key="id" class="btn btn-sm btn-outline-dark rounded-pill">
                                {{ tag }}
                            </button>
                        </div>
                    </div>
                    <hr/>
                    <img class="d-flex mx-auto mt-5 mb-5 img-fluid" :src="require(`@/static/images/blog/${article.img}`)" :alt="article.alt" id="post-img"/>
                    
                    <div>
                        <p class="font-weight-lighter post-quote me-3 ms-3 text-center">{{ article.quote }}</p>
                        <p class="font-weight-lighter post-ref text-center">{{ article.ref }}</p>

                    </div>
                    <nuxt-content class="text-justify ignore-css" :document="article" />
                    <hr class="mt-5"/>
                    <div class="footer-copyright text-center">© 2021 Copyright:
                        <a target="_blank" class="text-dark text-decoration-none" href="mailto:adewole.josh@gmail.com">Joshua Adewole</a>
                        <a target="_blank" class="text-dark text-decoration-none" href="https://github.com/adewolejosh">(adewolejosh)</a>
                    </div>
                    <div class="text-center">
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
            </div>
            <div class="col-sm-2"></div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                article: this.article
            }
        },

        computed: {
            readingTime () {
            let minutes = 0
            const contentAsString = JSON.stringify(this.article)
            const words = contentAsString.split(' ').length
            const wordsPerMinute = 200
            
            minutes = Math.ceil(words / wordsPerMinute)
            
            return minutes
            }
        },

        async asyncData({ $content, params }) {
            const article = await $content(`blog`, params.slug).fetch()

            return { article }
        }

    }
</script>

<style>

.post-title {
    font-family: Lora, serif;
    font-weight: 600;
}

.post-date {
    font-family: Montserrat, sans-serif;
    font-style: italic;
}

.post-quote {
    font-family: Libre Franklin;
    font-style: italic;
    font-size: 0.9rem;
}

#post-img {
    pointer-events: none;
}

.post-ref {
    font-family: Libre Franklin;
    font-size: 0.9rem;
}

.nuxt-content h3{
    font-family: Playfair Display;
    margin-top: 2rem;
}

.nuxt-content p{
    font-family: Libre Franklin, sans-serif;
    text-align: justify;
    text-justify: inter-word;
}

h7 {
    font-size: 0.8rem;
}

.nuxt-content blockquote {
  background: #f9f9f9;
  border-left: 5px solid #ccc;
  margin: 1.5em 10px;
  padding: 0.5em 20px;
  quotes: "\201C""\201D""\2018""\2019";
}

.nuxt-content blockquote:before {
  color: #ccc;
  font-size: 4em;
  line-height: 0.1em;
  margin-right: 0.25em;
  vertical-align: -0.4em;
}

.nuxt-content blockquote p {
  display: inline;
  text-align: justify;
  font-family: Roboto;
  font-weight: 300;
}

.nuxt-content code {
    font-size: 14px;
}

</style>
