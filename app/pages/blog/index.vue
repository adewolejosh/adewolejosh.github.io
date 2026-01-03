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
                    <hr />
                    <li v-for="article in articles" :key="article.slug" class="list-unstyled">

                        <div class="row rows-cols-1 row-cols-md-2">
                            <div class="col-md-8">
                                <!-- <NuxtLink :to="{ name: 'blog-slug', params: { slug: article.path } }" -->
                                <NuxtLink :to="`/blog/${article.slug || article.stem.replace('blog/', '')}`"
                                    class="text-dark text-decoration-none">
                                    <h6 id="article-title">{{ article.title }}</h6>
                                </NuxtLink>
                            </div>
                            <div class="col-md-4">
                                <time class="float-md-end" id="article-date">{{ article.meta.date }}</time>
                                <!-- <p class="float-md-end" id="article-date">{{ article.meta.date }}</p> -->
                            </div>
                        </div>
                        <hr />
                    </li>
                </ul>
            </div>
        </div>
        <div class="col-md-2"></div>
    </div>
</template>

<script setup>
    const { data: articles } = await useAsyncData('blog-articles', async () => {
        const allContent = await queryCollection('content').all()

        const blogPosts = allContent.filter(item => {
            return item.stem && item.stem.startsWith('blog/')
        })

        blogPosts.sort((a, b) => {
            const dateA = new Date(a.createdAt || a.meta.date || 0)
            const dateB = new Date(b.createdAt || b.meta.date || 0)
            return dateB - dateA
        })

        // console.log('Blog posts:', blogPosts)
        return blogPosts
    })

    const title = "Josh's blog"

    useHead({
        title: title,
        meta: [
            {
                name: 'description',
                content: 'Welcome to my blog/personal space'
            }
        ]
    })
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