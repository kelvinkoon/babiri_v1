import React from "react";

export const About = () => {
  return (
    <div className="container">
      <h3>
        <b>Welcome!</b>
      </h3>
      <h4>
        <b>About</b>{" "}
        <img
          src={require(`../../img/sprites/togekiss.gif`)}
          alt="togekisslogo"
          key="togekisslogo"
          className="ml-1"
        />
      </h4>
      <p>
        babiri.net was made to gain insight on daily{" "}
        <a
          href="https://pokemonshowdown.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Pokémon Showdown
        </a>{" "}
        usage for VGC using public replays from the server. Since teambuilding
        is a difficult task for both new and old players, the objective was to
        help inspire players in their teambuilding and help provide insight to
        which teams in the metagame are most prevalent. The application also
        provides the percentage of teams that specific Pokémon are featured on,
        as well as their usage over time through data visualization. babiri.net
        was inspired by other stats usage sites such as{" "}
        <a
          href="https://vgcstats.com/#/"
          target="_blank"
          rel="noopener noreferrer"
        >
          VGC Stats
        </a>{" "}
        and{" "}
        <a
          href="https://pikalytics.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Pikalytics.
        </a>{" "}
        The goal was to develop a useful application to help VGC players become
        better and inspire others to develop tools for the game.
      </p>
      <br />
      <h4>
        <b>FAQ </b>{" "}
        <img
          src={require(`../../img/sprites/togetic.gif`)}
          alt="togeticlogo"
          key="togeticlogo"
          className="ml-2"
        />
      </h4>
      <b>
        <p>What does babiri.net mean?</p>
      </b>
      <p>
        babiri.net is inspired by the{" "}
        <a
          href="https://bulbapedia.bulbagarden.net/wiki/Babiri_Berry"
          target="_blank"
          rel="noopener noreferrer"
        >
          Babiri Berry
        </a>{" "}
        item from the main series games. The Babiri Berry is one of the most
        common held items used with Togekiss, the site's mascot.
      </p>
      <b>
        <p>How was babiri.net built?</p>
      </b>
      <p>
        The front-end was written in React.js with the data visualizations done
        using Chart.js. while the back-end was built in Node.js and Express with
        MongoDB as the database. Python was used to pull data from the{" "}
        <a
          href="https://pokemonshowdown.com/ladder/gen8vgc2020"
          target="_blank"
          rel="noopener noreferrer"
        >
          VGC 2020 Ladder
        </a>{" "}
        and replays using the Requests and BeautifulSoup libraries. The Python
        script is hosted on an AWS EC2 instance and is scheduled to run every 24
        hours through cron.
      </p>
      <p>
        The sprites used are all from the Pokémon Showdown sprites library,
        which can be found{" "}
        <a
          href="https://play.pokemonshowdown.com/sprites/"
          target="_blank"
          rel="noopener noreferrer"
        >
          here
        </a>
        .
      </p>
      <p>
        The first iteration of this idea started as a single Python script that
        wrote to a CSV last year. I revisited the script this year upon starting
        my internship and made it much faster, which served as a starting point
        for the project.
      </p>
      <b>
        <p>Does babiri.net use bots?</p>
      </b>
      <p>
        A common concern that was brought to attention. babiri.net believes that
        using bots to scout is dishonest and shouldn't be relied upon. The
        information displayed on the website is all from public replays on the
        Showdown server. The website is simply used to aggregate and neatly
        display the data. Any teams featuring the "?" slots means no public
        information was available for those users. Those who are concerned about
        the privacy of their team should exercise caution and make replays
        private.
      </p>
      <b>
        <p>
          How long did it take to make babiri.net? Are there any plans to add
          more features?
        </p>
      </b>
      <p>
        I am currently a full-time student who's on an internship, so the
        majority of development was done after work. From writing the first line
        of Python in early January to deploying on Heroku in mid-February, the
        project took exactly 6 weeks with equal time spent on both front-end and
        back-end development. The announcement tweet can be found{" "}
        <a
          href="https://twitter.com/NotCelsiusDeg/status/1229494964477775873"
          target="_blank"
          rel="noopener noreferrer"
        >
          here
        </a>
        .
      </p>
      <p>
        If babiri.net is well-received and there is demand, I will update the
        website for the new format when it comes. I don't expect to make updates
        to include other formats at the moment as I'm unfamiliar with them. That
        said, I may make adjustments when I have the time to do so. Current
        improvements to the website include adding team upload date, recording
        only public replays, and minor UI fixes. The project started as a neat
        idea to practice developing a full-stack web app.
      </p>
      <br />
      <h4>
        <b>Thank You</b>{" "}
        <img
          src={require(`../../img/sprites/togepi.gif`)}
          alt="togepilogo"
          key="togepilogo"
        />
      </h4>
      <b>
        <p>Pokémon Showdown</p>
      </b>
      <p>
        Much credit goes to Pokémon Showdown and their open-source work,
        especially to the artists who created the sprites. Without Pokémon
        Showdown, this website wouldn't exist. You can contribute to their{" "}
        <a
          href="https://pokemonshowdown.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          open-source
        </a>{" "}
        and help with their future development.
      </p>
      <b>
        <p>Pikalytics</p>
      </b>
      <p>
        An excellent competitive Pokémon stats application. The usage cards are
        associated with Pikalytics to provide insight on commonly used sets for
        each Pokémon. You can find out more about the project through their{" "}
        <a
          href="https://pikalytics.com/pokedex/ss"
          target="_blank"
          rel="noopener noreferrer"
        >
          website
        </a>{" "}
        or
        <a
          href="https://twitter.com/pikalytics"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          Twitter
        </a>
        .
      </p>
      <b>
        <p>VGC Community</p>
      </b>
      <p>
        For constantly providing feedback as the web application grew. All of
        the players telling me they would use it kept me working on it every
        night. Having the opportunity to connect with both players and
        developers through this project has been one of the most enjoyable parts
        of my work.
      </p>
      <b>
        <p>You!</p>
      </b>
      <p>
        The users on this site are a major part of why I finished the project.
        Your support is amazing and knowing that people enjoy something I built
        means a lot to me. I hope to continue bringing my best efforts to
        babiri.net in the future.
      </p>
      <br />
      <h4>
        <b>
          Contact
          <img
            src={require(`../../img/sprites/shiny-stone.png`)}
            alt="shinylogo"
            key="shinylogo"
            className="ml-2"
          />
        </b>
      </h4>
      <p>
        <a
          href="https://kelvinkoon.github.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          My Website
        </a>
        ,{" "}
        <a
          href="https://twitter.com/NotCelsiusDeg"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </a>
        , and{" "}
        <a
          href="https://github.com/kelvinkoon"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>{" "}
        are all ways to contact if you have any questions/feedback about the
        application, software, or anything else!
      </p>
      <br />
    </div>
  );
};

export default About;
