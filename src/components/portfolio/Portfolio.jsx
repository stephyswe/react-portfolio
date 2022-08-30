import "./portfolio.css";

const data = [
  {
    image:
      "https://raw.githubusercontent.com/stephyswe/nuber-fe-next/main/doc/preview.png",
    title: "Uber Eats Clone",
    github: "https://github.com/stephyswe/nuber-fe-next",
    demo: "https://nuber-fe-next.vercel.app/client/dining/delivery",
  },
  {
    image:
      "https://raw.githubusercontent.com/stephyswe/next-movie-app/main/preview.png",
    title: "Movie Time!",
    github: "https://github.com/stephyswe/next-movie-app",
    demo: "https://next-movie-app-mu.vercel.app",
  },
  {
    image:
      "https://github.com/stephyswe/react-tinyhouse-replica/raw/main/preview.png?raw=true",
    title: "Tiny House ( AirBnB Clone )",
    github: "https://github.com/stephyswe/airbnb-clone",
    demo: "https://tinyhouse-app-clone.herokuapp.com/",
  },
  {
    image: "https://github.com/stephyswe/carzone/raw/master/preview.png",
    title: "Automotive car selling and re-buying",
    github: "https://github.com/stephyswe/carzone",
    demo: "https://glacial-retreat-43749.herokuapp.com/",
  },
  {
    image: "https://github.com/stephyswe/devchat/raw/master/header.png",
    title: "Slack clone with interactive chat and messages",
    github: "https://github.com/stephyswe/devchat",
    demo: "https://react-slack-clone-d5116.firebaseapp.com",
    subtitle:
      "login in with user@gmail.com / password12 or create new account.",
  },
  {
    image: "https://github.com/stephyswe/geotourism/raw/master/map.png",
    title: "Geo Tourism - Places to Visit in Gothenburg",
    github: "https://github.com/stephyswe/geotourism",
    demo: "https://geotourism-73jp8ldgi.now.sh/",
  },
  {
    image: "https://github.com/stephyswe/devconnect/raw/master/preview.png",
    title: "DevConnect - Social Network for Developers",
    github: "https://github.com/stephyswe/devconnect",
    demo: "https://react-devconnector-community.herokuapp.com/",
  },
  {
    image:
      "https://github.com/stephyswe/next-linkedin-clone/raw/main/preview.png?raw=true",
    title: "LinkedIn Clone in NextJS",
    github: "https://github.com/stephyswe/next-linkedin-clone",
    demo: "https://next-linkedin-clone-chi.vercel.app/",
  },
  {
    image:
      "https://github.com/stephyswe/next-spotify-clone/raw/main/preview.png?raw=true",
    title: "Spotify Clone in NextJS",
    github: "https://github.com/stephyswe/next-spotify-clone",
    demo: "http://next-spotify-clone-mocha.vercel.app/",
    subtitle: "require premium Spotify account to play music.",
  },
  {
    image: "https://github.com/stephyswe/crypto/blob/master/logo.png?raw=true",
    title: "Crypto Currency Dashboard & Financial Visualization",
    github: "https://github.com/stephyswe/crypto",
    demo: "https://cryptodash-2331zd4pn.now.sh/",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ image, title, github, demo, subtitle }) => {
          return (
            <article key={demo} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
              <p>{subtitle}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
