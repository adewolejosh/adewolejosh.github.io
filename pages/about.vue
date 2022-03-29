<template>
    <div class="m-5">
        <nuxt-link to="/">
            <i class="fas fa-arrow-circle-left fa-2x text-dark"></i>
        </nuxt-link>
        <div class="mt-5 mb-xl-5 me-xl-5 ms-5" id="about">
            <h4 class="text-center" id="headerz"> About Me </h4>
            <hr/>
            <div class="mt-5 me-xl-5 ms-xl-5 mb-5" id="about-note">
                <p>
                    Hi there, I'm Joshua Adewole. I'm a Software Engineer with experience writing server and client side solutions in Python and JavaScript.
                    I sometimes design and write- mostly undocumented materials which I hope to change from now(at the time of writing). I'm currently Open to Backend
                    and/or Fullstack Engineering roles, here's <a  target="_blank" href="https://docs.google.com/document/d/1rZhml6tSsuClQ7wn2kniYsUlJkNhI_IjCY1RI_zbptI/edit?usp=sharing">My Resume</a>
                </p>
                <br>
                <p>
                    I currently have my BSc Systems Engineering at the University of Lagos in view. I love Mathematics(and generally solving problems),
                    good music, cycling and other cool stuff. I don't think I am the life of the party but I sure bring good humor. When needed, I take
                    communication very seriously (e.g In a team environment). Generally I'm just a cool guy, you'd love to meet (Trust me).
                    I have been involved in some instances of public speaking (Feel free to hit me up if you need a speaker at any event). In a few years
                    from now I hope to see myself as a Lead and possibly diving into Software Testing.
                </p>
                <br>
                <p>
                    I started out coding in Python 2, created word games on my little Techno M3 Phone- most of my friends claim my games were hard.
                    With the help of the book "Learn Python the hard Way" I was able to get used to the Python syntax and then I switched into Python 3,
                    after which I decided to go for web development- Django; on this path I was able to learn django, HTML, CSS and JavaScript extensively.
                    Built quite a number of web apps with this stack; even worked on some Team project(s).
                </p>
                <br>
                <p>
                    Thereafter I made a decision to work on my JavaScript as it seemed to be a very interesting language- which it is. I then took some Hackerrank
                    challenges and with the help of a Friend and a recommended book, "Eloquent JavaScript", I garnered more knowledge on JavaScript.
                    Vue Js was calling out to me (literally), I researched about it; for its simplicity, neat and lovely style of code, I took it up. Much thanks to
                    <a target="_blank" href="https://taniarascia.com">Tania Rascia</a> whose tutorial got me up and running Vue. With that I then made Budget-go.
                </p>
                <br>
                <p>
                    My Journey so far has been great, quite a number of hurdles here and there, but I'm so thankful for where I am. As time goes on, I'll be
                    recounting my experiences, writing tutorials and many other writing expressions on <nuxt-link to="/blog">My Blog.</nuxt-link> Feel free
                    to give it a read and a comment via mail to <a target="_blank" href="mailto:adewole.josh@gmail.com">adewole.josh@gmail.com</a> is very much appreciated and would
                    definitely be replied.
                </p>
            </div>
            <hr class="mt-5"/>
            <div class="footer-copyright text-center">© 2021 Copyright:
                <a target="_blank" class="text-dark text-decoration-none" href="mailto:adewole.josh@gmail.com">Joshua Adewole</a>
                <a target="_blank" class="text-dark text-decoration-none" href="https://github.com/adewolejosh">(adewolejosh)</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>

#headerz {
    font-family: Playfair Display;
}

p {
    font-family: Libre Franklin, sans-serif;
    text-align: justify;
    text-justify: inter-word;
    font-size: 1.2em;
}

</style>