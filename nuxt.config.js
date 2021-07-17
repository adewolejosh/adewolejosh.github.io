export default {
    target: 'static',
    modules: [
        '@nuxt/content'
      ],
    head: {
        link: [
            {
                rel: 'icon',
                type: 'image/x-icon',
                href: '/favicon.ico',
            },
            {
                // bootstrap
                rel: 'stylesheet',
                href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css'
            },
            {
                // mdbootstrap
                rel: 'stylesheet',
                href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css'
            },
            {
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/css2?family=Montserrat'
            },
            {
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/css2?family=Playfair+Display'
            },
            {
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/css2?family=Lora:ital@1&display=swap'
            },
            {
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/css2?family=Libre+Franklin:wght@200&display=swap'
            },
            {
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&amp;display=swap'
            }
        ],

        script:[
            {
                // bootsrap popper and js
                charset: 'utf-8',
                src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js'
            }
        ]
    }
  }