const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost/dive-sites');

const { DB_URI } = require('../config/environment');

const Site = require('../models/site');

Site.collection.drop();

Site
  .create([
    {
      name: 'Chumphon Pinacle',
      location: 'Koh Tao, Thailand',
      depth: 40,
      picture: 'https://i.ytimg.com/vi/JhMJqGHf8rQ/maxresdefault.jpg',
      commonSpecies: [
        'Whale Shark',
        'Barracuda',
        'Kobia',
        'Bull Shark'
      ],
      dificultyLevel: 'Intermediate',
      description: '40 minutes by boat off the west side of Koh Tao is this popular dive site, known for it\'s macro life at depth and abundance of fish across the top of the pinacles. The site can be dived on air, or for those wishing to spend a little more time exploring the ocean floor Nitrox is perfect.'
    },
    {
      name: 'Twins',
      location: 'Koh Tao, Thailand',
      depth: 20,
      picture: 'https://i.pinimg.com/originals/c0/67/34/c06734d3bf6802ef0d54804027cd2273.jpg',
      commonSpecies: [
        'Titan Triggerfish',
        'Blue Spotted Stingray',
        'Saddleback Clown Fish',
        'File Fish'
      ],
      dificultyLevel: 'Intermediate',
      description: 'A 10 minute boat ride from Koh Tao, or a shore dive from Koh Nang-Yuan, Twins is ideal for divers looking for a relaxing pinacle dive with no currents. 3 minutes swim due-north of the site will land you at Buoyancy World, where divers can practice their buoyancy control on a variety of man-made structures.'
    },
    {
      name: 'Dos Ojos',
      location: 'Cancun, Mexico',
      depth: 15,
      picture: 'https://dzkgkjt1g6slx.cloudfront.net/dan/2328/cenote-dos-ojos2.jpg',
      commonSpecies: ['sand'],
      dificultyLevel: 'Advanced Caves',
      description: 'A beautiful cave dive with amazing visablity. Although it\'s a shallow dive, the route takes roughly 40 minutes to complete with no access to the surface until exiting the cave. Cave diving experience is essential to avoid fatalities.'
    },
    {
      name: 'C-56 Wreck',
      location: 'Puerto Morelos, Mexico',
      depth: 33,
      picture: 'https://aquaworld.com.mx/en/wp-content/uploads/sites/2/2014/10/Diving-in-Wreck-and-Reef.jpg',
      commonSpecies: [
        'Eagle Ray',
        'Garden Eel',
        'Nurse Shark'
      ],
      difficultyLevel: 'Advanced',
      description: 'The C-56 sits 30 minutes by speed boat off the coast of Puerto Morelos. Purpose sunk to create a reef, it\'s home to a huge number of rays and groupers. Wreck certs are essential to penetrate the structure, but once in divers can access 3 floors (if you have the stomach to squeeze through the rusty gaps).'
    },
    {
      name: 'Sail Rock',
      location: 'Koh Samui, Thailand',
      depth: 50,
      // picture: 'https://i.ytimg.com/vi/XG86ow-f5ww/maxresdefault.jpg',
      picture: 'https://scontent-lhr3-1.xx.fbcdn.net/v/t1.0-9/988754_10153486337570456_1101547263_n.jpg?_nc_cat=0&oh=199af911c68780d9f49b02a533e2e6fa&oe=5C0B174F',
      commonSpecies: [
        'Big Eyed Traveli',
        'Black Tip Reef Shark',
        'Chevronne Barracuda'
      ],
      difficultyLevel: 'Advanced',
      description: 'Equidistant from Koh Samui and Koh Tao, this pinacle dive offers a huge amount of wildlife, regular whale sharks and a challenging vertical swim-through nicknamed "The Chimney". Regular visits from Bull Sharks give this site a real adrenaline kick.'
    }

  ])

  .then(sites => console.log(`Created ${sites.length} sites`))
  .catch(err => console.log(err))
  .finally(() => mongoose.connection.close());
