<template>
  <div class="about">
    <b-container>
      <b-row>
        <b-col>
          <h1>About me.</h1>
          <p>
            Hey, I'm Asthriona, And I still dont have a name, except "HEY!" or
            "Hey YOU!" I'm somekind of WebDev, I work for Sirius Media Group, as
            Lead Producer and Lead Project developer. I hate Coding, But I love
            it at the same time. dont ask me why, Talking about code, i'm also
            working for
            <a
              href="https://rainboomStudio.com"
              target="_blank"
              rel="noopener noreferrer"
              >Rainboom Studio</a
            >
            <br />

            Outside of code and work, i love to have fun with friend at The
            Wall, And watch anime. You can find my Anilist here I'm Maybe a weeb
            after all.. I dont know... Is this bad? You can find my Main WoW
            Character here. My top 3 Fav anime is Angel beats!, Charlotte And
            HitoriBocchi. Fav (Console) Game -> Persona 5, Fav (PC) game -> WoW
          </p>
          <h1>About this website</h1>
          <p>
            This website is developped and hosted by
            <a
              href="http://asthriona.com"
              target="_blank"
              rel="noopener noreferrer"
              >Asthriona</a
            >
            <br />
            This is a beta version. if you find bugs, please contact me at
            <a href="mailto:im@asthriona.com">im@asthriona.com</a> or on twitter
            <a
              href="https://twitter.com/asthriona"
              target="_blank"
              rel="noopener noreferrer"
              >@Asthriona</a
            >

            The content of this blog is under © Copyright Asthriona, All Right
            Reserved. 2020. The code is under
            <a
              href="https://github.com/Asthriona/Ashtriona-Blog/blob/master/LICENSE"
              target="_blank"
              rel="noopener noreferrer"
              >Mozilla Public License 2.0</a
            >
            which means you can use & modify the code for yourself, but you have
            to credit me. All credit on images or videos goes directly to their
            creator. We are using different technologies such as NodeJS,
            Express, MongoDB & apache. The code is availiable on GitHub.
          </p>
          <h1>Sources:</h1>
          <ul>
            <li>— NodeJS</li>
            <li>— VueJS</li>
            <li>— Discord Login</li>
            <li>— MongoDB</li>
            <li>— Boostrap</li>
            <li>— AshquiRenee Web Server</li>
            <li>— Google Font</li>
            <li>— Snyk</li>
          </ul>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  beforeMount(){
    document.title = "Asthriona - About";
  },
};
</script>

<style scoped>
ul li {
  text-decoration: none;
  list-style-type: none;
}
</style>
