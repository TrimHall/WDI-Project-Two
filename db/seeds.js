const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost/dive-sites');

const Site = require('../models/site');

Site.collection.drop();

Site
  .create([
    {
      name: 'Chumphon Pinacle',
      location: 'Koh Tao, Thailand',
      depth: 40,
      picture: 'https://www.google.co.uk/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjOsfaMvMbcAhVCqxoKHWYQAEUQjRx6BAgBEAU&url=https%3A%2F%2Fwww.phoenixdiverskohtao.com%2Fchumphon-pinnacle-koh-tao%2F&psig=AOvVaw2eCbEeEzuUDdCm5BiLjn1c&ust=1533027776729453',
      commonSpecies: [
        'Whale Shark',
        'Barracuda',
        'Kobia',
        'Bull Shark'
      ],
      dificultyLevel: 'Intermediate'
    },
    {
      name: 'Twins',
      location: 'Koh Tao, Thailand',
      depth: 20,
      commonSpecies: [
        'Titan Triggerfish',
        'Blue Spotted Stingray',
        'Saddleback Clown Fish',
        'File Fish'
      ],
      dificultyLevel: 'Intermediate'
    },
    {
      name: 'Dos Ojos',
      location: 'Cancun, Mexico',
      depth: 15,
      commonSpecies: [],
      dificultyLevel: 'Advanced Caves'
    },
    {
      name: 'H14 Wreck',
      location: 'Isla Mujeres, Mexico',
      depth: 33,
      commonSpecies: [
        'Eagle Ray',
        'Garden Eel',
        'Nurse Shark'
      ],
      difficultyLevel: 'Advanced'
    }
  ])

  .then(sites => console.log(`Created ${sites.length} sites`))
  .catch(err => console.log(err))
  .finally(() => mongoose.connection.close());
