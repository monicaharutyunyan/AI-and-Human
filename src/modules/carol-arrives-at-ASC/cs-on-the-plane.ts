import make from '../../core/util/make';

const onThePlane = make.module({
  id: 'on-the-plane',
  submodules: [],
  convoSegments: [
    {
      id: 'opening',
      convo: [
        {
          type: 'text',
          text: '<b>Welcome to Apricot Stone City, an interactive storytelling game.</b>',
        },
      ],
      choices: [{
        text: 'start the game',
        logic: [
          {
            do: [
              {
                type: 'goto',
                path: ['setting-the-scene'],
              },
            ],
          },
        ],
      }],
    },
    {
      id: 'setting-the-scene',
      convo: [
        {
          type: 'text',
          text: '<b>Our story begins ten thousand feet in the air, on a Boeing 737 passenger Jet. Here, in seat 31B (the middle seat), we meet Carol. Carol is on a two week vacation to Vienna, she has a layover in Apricot Stone City, Armenia. She\'s never been to Armenia before. Let\'s zoom in and see what\'s happening...</b>',
        },
      ],
      choices: [{
        text: "Carol's story",
        logic: [
          {
            do: [
              {
                type: 'goto',
                path: ['carols-story'],
              },
            ],
          },
        ],
      }],
    },
    {
      id: 'carols-story',
      convo: [
        {
          type: 'text',
          text: `It's been a long flight and Carol is asleep. She's roused suddenly by the feeling that someone is breathing on her. "It's beautiful..." she hears an old woman's voice say. Now, suddenly very awake, she takes note of her surroundings. The passenger beside her, a woman in her 80s or 90s, is gazing down at the landscape. The woman, who is deep in though, doesn't appear to be talking to Carol, just speaking aloud.

          `,
        },
      ],
      choices: [{
        text: "respond to the woman",
        logic: [
          {
            do: [
              {
                type: 'goto',
                path: ['respond-to-woman'],
              },
            ],
          },
        ],
      },
      {
        text: "gaze out at the clouds",
        logic: [
          {
            do: [
              {
                type: 'goto',
                path: ['gaze-at-clouds'],
              },
            ],
          },
        ],
      },
      {
        text: "order a drink",
        logic: [
          {
            do: [
              {
                type: 'goto',
                path: ['order-a-drink'],
              },
            ],
          },
        ],
      },],
    },
    {
      id: 'respond-to-woman',
      convo: [
        {
          type: 'text',
          text: `"It is beautiful," Carol says, not knowing what else to reply, "have you been to Apricot Stone City before?"\n The old woman smiles, her expression multiplying the wrinkles on her already creased face, "No... but I've meaning to make this pilgrimage all my life. My mother was born in Armenia, our family lived for many, many generations in Apricot Stone City. But a long time ago, my grandparents fled the country to the United States, so I've never seen these old streets with my two eyes. I'm thankful that I'm making this trip before I die." She touched her silver tear shaped earrings, "My mother used to tell me that the city is truly like its name, which, by the way, is a favorite fruit of Armenia."`,
        },
      ],
      choices: [{
        text: "Ask why",
        logic: [
          {
            do: [
              {
                type: 'goto',
                path: ['ask-old-woman-about-her-story'],
              },
            ],
          },
        ],
      },
      {
        text: "Comment on the earrings",
        logic: [
          {
            do: [
              {
                type: 'goto',
                path: ['comment-on-earrings'],
              },
            ],
          },
        ],
      },
      {
        text: "nod and gaze at clouds",
        logic: [
          {
            do: [
              {
                type: 'goto',
                path: ['gaze-at-clouds'],
              },
            ],
          },
        ],
      },],
    },
    {
      id: 'ask-old-woman-about-her-story',
      convo: [
        {
          type: 'text',
          text: `"Oh, interesting, why is it called 'Apricot Stone City?'" Carol asks. The woman nods, "well, it's hard to know for sure... it could be the pink color of the actual stone that's used to make many of the original buildings here... it's this volcanic rock that just looks that way when it oxidizes: like a very ripe apricot. You see it everywhere in the city, my mother would tell me, but it's unique to this region.

          `,
        },
      ],
      choices: [{
        text: "nod",
        logic: [
          {
            do: [
              {
                type: 'goto',
                path: ['carol-nods-regarding-pink-rock'],
              },
            ],
          },
        ],
      },],
    },
    {
      id: 'carol-nods-regarding-pink-rock',
      convo: [
        {
          type: 'text',
          text: `Carol nods and the woman continues: "however, that's not how I think the city got its name... did you know that you can eat the seed inside an Apricot?"`,
        },
      ],
      choices: [{
        text: "yep",
        logic: [
          {
            do: [
              {
                type: 'goto',
                path: ['carol-says-yes-to-eating-apricot-nut'],
              },
            ],
          },
        ],
      },
      {
        text: "of course",
        logic: [
          {
            do: [
              {
                type: 'goto',
                path: ['carol-says-yes-to-eating-apricot-nut'],
              },
            ],
          },
        ],
      },
      {
        text: "no",
        logic: [
          {
            do: [
              {
                type: 'goto',
                path: ['carol-says-no-to-eating-apricot-nut'],
              },
            ],
          },
        ],
      },
      {
        text: "Really?",
        logic: [
          {
            do: [
              {
                type: 'goto',
                path: ['carol-says-no-to-eating-apricot-nut'],
              },
            ],
          },
        ],
      },],
    },
    {
      id: 'carol-says-yes-to-eating-apricot-nut',
      convo: [
        {
          type: 'text',
          text: `"Yes," Carol said, "they're delicious." The old woman nodded, "they are indeed. Very nutritious too. Yes, that nut inside an apricot stone is an Armenian favorite. So, I like to think, that's how the city got its name. From those little nuts: the hidden treat inside a sweet fruit. Do you know what I mean?"`,
        },
      ],
      choices: [{
        text: "shake head, 'no'",
        logic: [
          {
            do: [
              {
                type: 'goto',
                path: ['carol-doesnt-get-it'],
              },
            ],
          },
        ],
      },
      {
        text: "nod, 'yes'",
        logic: [
          {
            do: [
              {
                type: 'goto',
                path: ['carol-nods'],
              },
            ],
          },
        ],
      },],
    },
    {
      id: 'carol-doesnt-get-it',
      convo: [
        {
          type: 'text',
          text: `Carol shakes her head, "I'm not sure I follow you..."\n "Let me try and explain better," The woman says, "Like the secret treat inside an apricot, this city is full of hidden stories. And each story has the potential to make your world a little better. Just like the nutrients in that little nut." Carol smiles, "that's beautiful," she says.

          `,
        },
      ],
      choices: [{
        text: "fasten seat belt",
        logic: [
          {
            do: [
              {
                type: 'goto',
                path: ['fasten-seat-belt'],
              },
            ],
          },
        ],
      },],
    },
    {
      id: 'carol-nods',
      convo: [
        {
          type: 'text',
          text: `The old woman settled back into her seat. On the speaker the captain's voice came on: "we'll be landing in Apricot Stone City in 25 minutes. Please put away all large electronic devices." On Carol's other side, a sleeping man wakes up and rummages about in his bag with a serious expression on his face, then lays back and falls asleep again. Carol has a funny feeling about the man, but she can't pin it down.

          `,
        },
      ],
      choices: [{
        text: "fasten seat belt",
        logic: [
          {
            do: [
              {
                type: 'goto',
                path: ['fasten-seat-belt'],
              },
            ],
          },
        ],
      },],
    },
    {
      id: 'carol-says-no-to-eating-apricot-nut',
      convo: [
        {
          type: 'text',
          text: `"No," Carol says, "like the hard seed? I'm pretty sure you can't eat that. It would break your teeth." The woman chuckled, "my dear, she said, "an Apricot stone, also called a seed, has a delicious nut inside of it if you break it open. I like to think that's how the city got its name. From those little nuts: the hidden treat inside a sweet fruit. Do you know what I mean?"

          `,
        },
      ],
      choices: [{
        text: "shake head, 'no'",
        logic: [
          {
            do: [
              {
                type: 'goto',
                path: ['carol-doesnt-get-it'],
              },
            ],
          },
        ],
      },
      {
        text: "nod, 'yes'",
        logic: [
          {
            do: [
              {
                type: 'goto',
                path: ['carol-nods'],
              },
            ],
          },
        ],
      },],
    },
    {
      id: 'comment-on-earrings',
      convo: [
        {
          type: 'text',
          text: `Carol points at the earrings, "those are lovely." The old woman brightens, "these were a gift to me from my mother, and a gift to her from her mother. I was told they go way back in our family history... at some point they once belonged to a princess. But you know, stories like that." she chucked, "who can say. Anyways, they're very dear to me. I've planned for a long time that I would wear them when I finally touch down in Armenia. I feel as if my mother is close by when I wear these." She drifts off into thought. Carol isn't sure what to say.

          `,
        },
      ],
      choices: [{
        text: "look out the window",
        logic: [
          {
            do: [
              {
                type: 'goto',
                path: ['gaze-at-clouds'],
              },
            ],
          },
        ],
      },
      ],
    },
    {
      id: 'gaze-at-clouds',
      convo: [
        {
          type: 'text',
          text: `Carol gazes out the window. It's midday, below her the approaching city comes into view: toy cars, toy buildings. Carol smiles, it might just be coincidence, she thinks, but the pink color of the buildings does remind her of Apricots. In the distance she sees large snow capped mountains and gathering storm clouds. On the speaker the pilot announces, "we'll be landing in Apricot Stone City in 25 minutes. Please put away all large electronic devices." \n Her neighboring passenger, a man who's been asleep the whole flight, wakes up at the sound of the pilot's voice. He reaches into his bag and pulls out two ties, one yellow and one red, and puts them around his neck. "How strange," Carol thinks. The plane goes into descent.

          `,
        },
      ],
      choices: [{
        text: "fasten seat belt",
        logic: [
          {
            do: [
              {
                type: 'goto',
                path: ['fasten-seat-belt'],
              },
            ],
          },
        ],
      },],
    },
    {
      id: 'order-a-drink',
      convo: [
        {
          type: 'text',
          text: `It's been a long flight, Carol thinks, I deserve a drink. She pushes the "flight assistant" button to order a drink. Her movement disturbs her neighbor who wakes up with a grunt. He checks his watch and then reaches into his bag. He pulls out two ties, one yellow and one red, and puts them around his neck. "How strange," Carol thinks. A flight assistant comes over towards her, "we'll be landing soon," she says, "I'm sorry but it's too late to order a drink, sorry, ma'am." On the speaker, the pilot's voice comes on. "we'll be landing in Apricot Stone City in 25 minutes. Please put away all large electronic devices."

          `,
        },
      ],
      choices: [{
        text: "fasten seat belt",
        logic: [
          {
            do: [
              {
                type: 'goto',
                path: ['fasten-seat-belt'],
              },
            ],
          },
        ],
      },],
    },
    {
      id: 'fasten-seat-belt',
      convo: [
        {
          type: 'text',
          text: `Carol fastens her seat belt and closes her eyes. "I have an eight hour layover," she thinks to herself, "that's so much time. I don't know a thing about Armenia, why don't I go out and see the city. I can see a few things, get a good meal (what is Armenian food like? I wonder?) and then be back here with time to spare."\n She's roused from her musings by the screaming of the plane's wheels on the landing strip. Her body tenses... plane landings always always scares her. And then it's over. The plane comes to a halt and pulls up to a terminal. Her neighbor hurriedly closes his bag and stands in the isle, "he in a rush..." Carol thinks, "what a strange man."

          `,
        },
      ],
      choices: [{
        text: "Leave quickly",
        logic: [
          {
            do: [
              {
                type: 'goto',
                path: ['leave-quickly'],
              },
            ],
          },
        ],
      },
      {
        text: "Wait for others",
        logic: [
          {
            do: [
              {
                type: 'goto',
                path: ['wait-on-plane'],
              },
            ],
          },
        ],
      },],
    },
    {
      id: 'leave-quickly',
      convo: [
        {
          type: 'text',
          text: `As soon as she can, Carol rushes off the plane. She's starting to get excited about exploring this unknown city. Apricot Stone City... how intriguing... Once she's off the plane she pushes past the man with the two ties. He has a concentrated look on his face.
          `,
        },
      ],
      choices: [{ 
        text: "Grab your bag",
        logic: [
          {
            do: [
              {
                type: 'goto',
                path: ['root', 'carol-arrives-at-ASC', 'missing-bags', 'miss-bag'],
              },
            ],
          },
        ],
      },],
    },
    {
      id: 'wait-on-plane',
      convo: [
        {
          type: 'text',
          text: `There's no rush, Carol realizes, why hurry? She's got eight hours after all for this layover. She reclines her seat again and waits until everyone else has left. Then she casually makes her way out into the airport.

          `,
        },
      
      ],
      choices: [{ 
        text: "Grab your bag",
        logic: [
          {
            do: [
              {
                type: 'goto',
                path: ['root', 'carol-arrives-at-ASC', 'missing-bags', 'miss-bag'],
              },
            ],
          },
        ],
      },],
    },

  ],  
});

export default onThePlane;
