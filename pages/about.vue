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
                    Hi, I am Joshua Adewole. I am a self-taught software developer with experience in: 'bringing to life' UI designs, writing good server-side
                    solutions in Python and JavaScript, and professionally building mobile apps with the thought of over tens of thousands of users from over 5
                    countries. I sometimes write; other times, I design(although I am not cut out for this but I still try to make some meaning). Here's a quick
                    look at <a href="https://docs.google.com/document/d/1mGkXLuzm_Rir-n6i1lnwgtECMC9HGQzq/edit?usp=sharing&ouid=115828739539076750598&rtpof=true&sd=true">my resume</a>
                </p>
                <br/>
                <p>
                    I am currently open to Backend roles(especially with python [My love for python is out of this world]), Frontend roles(I love Vue so much!), 
                    Full-stack roles(It would be an Ultimate ecstacy to build a product involving Python(Django/Flask) and VueJs) and/or Mobile app roles(I learnt 
                    Flutter/Dart and it was shocking to know, mobile app development isn't so difficult as I had thought).
                </p>
                <p>
                    I am currently in my penultimate undergraduate year at the University of Lagos, studying Systems Engineering. I love Mathematics
                    (and generally solving problems), good music, cycling and other cool stuff. I don't think I am the life of the party but I sure bring good humor. 
                    When needed, I take communication very seriously (e.g In a team environment). Generally I'm just a cool guy, you'd love to meet (Trust me).
                    I have been involved in some instances of public speaking (Feel free to hit me up if you need a speaker at any event).
                </p>
                <br/>
                <p>
                    Some people I admire are: <a target="_blank" href="https://taniarascia.com">Tania Rascia</a>, Armand Duplantis(World Record Holder in Pole Vault),
                    Jordan Peterson and several others. Feel free to reach out to me: via mail to <a target="_blank" href="mailto:adewole.josh@gmail.com">adewole.josh@gmail.com</a>
                    Feel free to give my blog a read <nuxt-link to="/blog">here</nuxt-link> 
                </p>
                <br/>
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