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
      picture: 'https://res.cloudinary.com/teepublic/image/private/s--UiWmKxBE--/t_Preview/b_rgb:262c3a,c_limit,f_jpg,h_630,q_90,w_630/v1512111245/production/designs/2125678_1.jpg',
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
      picture: 'https://s-media-cache-ak0.pinimg.com/originals/52/d1/e4/52d1e4dee186d10883a7f5445cc8a10a.jpg',
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
      picture: 'https://dzkgkjt1g6slx.cloudfront.net/dan/2326/cenote-dos-ojos.jpg',
      commonSpecies: ['sand'],
      dificultyLevel: 'Advanced Caves'
    },
    {
      name: 'C-56 Wreck',
      location: 'Puerto Morelos, Mexico',
      depth: 33,
      picture: 'https://media-cdn.tripadvisor.com/media/photo-s/05/34/d8/92/c-56-wreck.jpg',
      commonSpecies: [
        'Eagle Ray',
        'Garden Eel',
        'Nurse Shark'
      ],
      difficultyLevel: 'Advanced'
    },
    {
      name: 'Sail Rock',
      location: 'Koh Samui, Thailand',
      depth: 50,
      picture: 'https://scontent-lhr3-1.xx.fbcdn.net/v/t1.0-9/988754_10153486337570456_1101547263_n.jpg?_nc_cat=0&oh=199af911c68780d9f49b02a533e2e6fa&oe=5C0B174F',
      commonSpecies: [
        'Big Eyed Traveli',
        'Black Tip Reef Shark',
        'Chevronne Barracuda'
      ],
      difficultyLevel: 'Advanced'
    }

  ])

  .then(sites => console.log(`Created ${sites.length} sites`))
  .catch(err => console.log(err))
  .finally(() => mongoose.connection.close());
