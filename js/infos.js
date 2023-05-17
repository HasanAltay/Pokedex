function renderAbout() {
  document.getElementById("left_right_navigation").style.visibility = "hidden";
  let infos = document.getElementById('infos');
  infos.innerHTML = `
  <div class="text">
    <h3>About Pokédex API</h3>
      <span>
        Welcome to my portfolio website, featuring
        Pokémon characters
        and information from the popular Pokémon
        franchise.
        This website was built using the Pokédex
        API, which provides
        access to a wealth of information about all
        of your favorite
        Pokémon characters, including their names,
        abilities, moves,
        and statistics. With this API, I was able to
        create a website
        that showcases my skills as a developer,
        while also providing
        a fun and interactive experience for
        visitors.
        Don't hesitate to check out the different
        sections of the website
        to discover all features. Feel free to
        contact me if you have
        any questions or feedback.<br><br>
        A Pokédex API, also known as a Pokémon API,
        is a type
        of web-based service that allows users to
        access and retrieve
        information about the various Pokémon
        characters from the popular
        Pokémon franchise. This information can
        include things like
        Pokémon names, abilities, moves, and
        statistics.
        These APIs can be used by developers to
        create a wide
        range of applications and services, such as
        video games,
        mobile apps, and websites. They can also be
        used by researchers
        and data analysts to gather and analyze
        information about the
        Pokémon franchise. The Pokédex API typically
        uses RESTful principles
        and returns data in JSON format.
        <br><br>
        Please note: This page is a part of my
        portfolio
        and is intended solely for demonstration
        purposes.
        Pokémon is a protected trademark of
        Nintendo.
        The use of the term "Pokémon" and associated
        content in connection with the Pokedex API
        is for informational purposes only and is
        not intended for the promotion of products
        or services.
    </span>
</div>
`;
}