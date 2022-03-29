<template>
        <div class="row row-cols-1 row-cols-md-3 m-5">
            <div class="col-md-2"></div>
            <div class="col-md-8">
                <nuxt-link to="/">
                    <i class="fas fa-arrow-circle-left fa-2x text-dark"></i>
                </nuxt-link>
                <div class="mt-5 mb-5 me-5 ms-5">
                    <h4 class="text-center mb-5" id="headerz">Writings</h4>
                    <ul>
                        <hr/>
                    <li v-for="article of articles" :key="article.slug" class="list-unstyled">
                        
                        <div class="row rows-cols-1 row-cols-md-2">
                            <div class="col-md-8">
                                <NuxtLink :to="{ name: 'blog-slug', params: { slug: article.slug } }" class="text-dark text-decoration-none">
                                    <h6 id="article-title">{{ article.title }}</h6>
                                </NuxtLink>
                            </div>
                            <div class="col-md-4">
                                <time class="float-md-end" id="article-date">{{ article.date }}</time>
                                <!-- <p class="float-md-end" id="article-date">{{ article.date }}</p> -->
                            </div>
                        </div>
                        <hr/>
                    </li>
                    </ul>
                </div>
            </div>
            <div class="col-md-2"></div>
        </div>
</template>

<script>

    export default {
        async asyncData({ $content, params }) {
        const articles = await $content('blog')
            .only(['title', 'description', 'date', 'slug'])
            .sortBy('createdAt', 'desc')
            .fetch()

            return {
                articles
            }
        },
        data() {
            return {
                title: 'Josh\'s Blog'
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
                    content: 'Welcome to my blog/personal space'
                }
                ]
            }
        }
    }
</script>

<style scoped>

#article-date {
    font-family: Montserrat, serif;
    font-style: italic;
}

#article-title {
    font-family: Lora, sans-serif;
    font-weight: 600;
}

#headerz {
    font-family: Playfair Display;
}

</style>