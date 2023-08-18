let projects = [
  {
    id: 5,
    title: "Contacts App",
    description:
      "This application helps keep track of contacts. Contacts can be added, edited, deleted, added to favorites. There is also the ability to search through the contacts by name.",
    image: "projects/contacts-app.png",
    url: "https://contacts-app-cecilytoro.netlify.app/",
    repo: "https://github.com/its-cess/contacts",
    using:
      "This project was built using Vue3, Vue Router, Pinia, Maska, Tailwind CSS, Supabase as the database, and hosted on Netlify."
  },
  {
    id: 4,
    title: "Velvet Acres Boarding Facility",
    description:
      "This website was built for a horse boarding business. Users can read about how the business got started and their values. They can also see the services and facilities offered at Velvet Acres. They can also see the horses that are currently being boarded there. A contact page is available with the farm's information.",
    image: "projects/velvet-acres.png",
    url: "https://velvetacres.netlify.app/",
    repo: "https://github.com/its-cess/velvet-acres",
    using:
      "This project was built using SvelteKit v1, Tailwind CSS, and Sanity as a headless CMS. Rich text editors and images are displayed on the site from Sanity Studio. This site was built with the farm owner in mind. The integration with Sanity allows the business owner to easily update any of the facilities, services, or horses. Any changes made would immediately go live to the website. Hosted on Netlify."
  },
  {
    id: 3,
    title: "Simon Says",
    description:
      "The game starts when a player pushes any key. The computer picks a color and a user has to click the matching color. Every round the pattern gets longer and the user has to repeat the pattern in the correct order or they lose. Different sounds are played with each color pressed. The level is shown at the top and increases each round the player gets correct. When a player gets the pattern incorrect, the screen flashes red and returns them back to Level 1.",
    image: "projects/simon-game.png",
    url: "https://its-cess.github.io/simon-game/",
    repo: "https://github.com/its-cess/simon-game",
    using: "This game was created using HTML, CSS, JavaScript, and jQuery."
  },
  {
    id: 2,
    title: "Monster Slayer Game",
    description:
      "Users get to play against the computer to try to slay the monster. Users can choose to attack, heal themselves, use a special attack, or surrender. The monster's and player's health are displayed on screen. Special attacks are only available every third turn. Surrender automatically ends the game and the player loses. When a player's health runs out, the monster wins. When the monster's health runs out, the player wins. A battle log is output on the screen displaying each move that is made by the player and monster. The battle log also displays how much damage or healing occurred.",
    image: "projects/monster-slayer.png",
    url: "https://its-cess.github.io/monster-slayer/",
    repo: "https://github.com/its-cess/monster-slayer",
    using: "This game was created using Vue.js and CSS."
  },
  {
    id: 1,
    title: "To-Do List",
    description:
      "This is an interactive to-do list. You can add items, check them off the list when complete, and clear the list when everything is done. If everything is not finished, the items will be stored and can be finished at another time. Items will only be removed when the list is cleared.",
    image: "projects/to-do-list.png",
    url: "https://its-cess.github.io/to-do-list/",
    repo: "https://github.com/its-cess/to-do-list",
    using:
      "This to-do list was created with React v17 and CSS. It is built using functional components and uses localStorage to store the items on the list."
  }
];

export default projects;
