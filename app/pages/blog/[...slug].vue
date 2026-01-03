<template>
    <div>
        <title>{{ article.title }}</title>
        <div class="row row-cols-1 row-cols-md-3 m-5">
            <div class="col-md-2"></div>
            <div class="col-md-8">
                <nuxt-link to="/blog">
                <i class="fas fa-arrow-circle-left fa-2x text-dark"></i>
                </nuxt-link>
                <div class="mt-5">
                    <div class="mt-5 mb-2">
                        <h3 class="post-title font-weight-bold text-capitalize">{{ article.title }}</h3>
                        <h6 class="post-date">{{ article.meta.date }}</h6>
                        <!-- <div class="mt-3"><h7>{{ readingTime }} min read</h7></div> -->
                        <div class="mt-3">
                            <button v-for="(tag, id) in article.meta.tags" :key="id" class="btn btn-sm btn-outline-dark rounded-pill">
                                {{ tag }}
                            </button>
                        </div>
                    </div>
                    <hr/>
                    <img class="d-flex mx-auto mt-5 mb-5 img-fluid" :src="`/images/blog/${article.meta.img}`" :alt="article.meta.alt" id="post-img"/>
                    
                    <div>
                        <p class="font-weight-lighter post-quote me-3 ms-3 text-center">{{ article.meta.quote }}</p>
                        <p class="font-weight-lighter post-ref text-center">{{ article.meta.ref }}</p>

                    </div>
                    <!-- <nuxt-content class="text-justify lh-lg tracking-wider ignore-css" :document="article.body.value" /> -->
                    <div class="nuxt-content">
                        <ContentRenderer class="text-justify lh-lg tracking-wider ignore-css" :value="article" v-if="article" />
                        
                        <div class="empty-page" v-else>
                            <h1>Page Not Found</h1>
                            <p>Oops! The content you're looking for doesn't exist.</p>
                            <NuxtLink to="/">Go back home</NuxtLink>
                        </div>
                    </div>

                    <hr class="mt-5"/>
                    <div class="footer-copyright text-center">© (20)21-26 Copyright:
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
            <div class="col-md-2"></div>
        </div>
    </div>
</template>

<script setup>
    const route = useRoute()

    const slug = computed(() => {
      const s = route.params.slug
      if (!Array.isArray(s) || s.length === 0) return null
      return s.join('/')
    })

    const { data: article } = await useAsyncData(`blog-${slug}`, async () => {
        const allContent = await queryCollection('content').all()
        
        const found = allContent.find(item => {
            return item.stem === `blog/${slug.value}` || 
                item.stem?.toLowerCase() === `blog/${slug.value.toLowerCase()}`
        })

        if (!found) {
            throw createError({ statusCode: 404 })
        }

        return found
    })

    // // Calculate reading time
    const readingTime = computed(() => {
        if (!article.value) return 0
        
        const contentAsString = JSON.stringify(article.value)
        const words = contentAsString.split(' ').length
        const wordsPerMinute = 250
        
        return Math.ceil(words / wordsPerMinute)
    })

    // Set page meta
    useHead({
        title: (article?.title ?? '') || "Josh's blog",
        meta: [
            {
                name: 'description',
                content: article?.description || ''
            }
        ]
    })

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
    font-weight: 300;
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

.nuxt-content h3 a {
    text-decoration: none;
    color: black;
}

.nuxt-content code {
    font-size: 14px;
}

.tracking-widest {
  letter-spacing: 0.1em;
}
.tracking-wider {
  letter-spacing: 0.05em;
}
.tracking-wide {
  letter-spacing: 0.025em;
}

</style>
