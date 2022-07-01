import make from '../../core/util/make';

const missingBag = make.module({
  id: 'missing-bags',
  submodules: [],
  convoSegments: [
    {
      id: 'miss-bag',
      convo: [
        {
          type: 'text',
          text: '<b>At first Carol check out and then she goes to take her baggage.She is at the line, trying to find her baggage. Carol has bad feeling and restless standing at the line. Someone hit her shoulder and go away. Carol feels unconfident in Apricot Stone City.</b>',
        },
        {
          type: 'text',
          text: '<b>She is exhausted after the flight and doesn\'t remember what her bag exactly looked like. She sees one that looks like her\'s</b>',
        },
      ],
      choices: [
        {
        text: 'take it',
        logic: [
          {
            do: [
              {
                type: 'goto',
                path: ['take-it'],
              },
            ],
          },
        ],
      },
      {
        text: 'leave it',
        logic: [
          {
            do: [
              {
                type: 'goto',
                path: ['leave-it'],
              },
            ],
          },
        ],
      }
    ],
      
    },
    {
      id: 'take-it',
      convo: [
        {
          type: 'text',
          text: 'Carol wants to go out and take a taxi, someone calls her and says: "Excuse me, Can you wait a minute. I think those are my bags with you, can we check it please?". Carol is calm now, she takes a deep breath.They meet and find out that the bags do not belong to Carol. Carol\'s bags were with the person who called, their bags looked identical. They get their bags back. Carol is happy.',
        },
      ],
      choices: [{
        text: 'Carol decides to walk.',
        logic: [
          {
            do: [
              {
                type: 'goto',
                path: ['take-it'],
              },
            ],
          },
        ],
      },
      {
        text: 'She goes to find a taxi.',
        logic: [
          {
            do: [
              {
                type: 'goto',
                path: ['take-it'],
              },
            ],
          },
        ],
      }
      ],
    },
    {
      id: 'leave-it',
      convo: [
        {
          type: 'text',
          text: 'Carol starts panicking and goes to find the police and tells everything. Then the police promises they\'ll find them. Carol decides to sit and wait, she is very nervous, but then someone approaches her and says panicked "I think we got our bags wrong, I think those are mine", Carol jumps up, says "Oh my God, yes, probably, because these aren\'t mine and I can\'t find my bags". Carol gets her bags back.',
        },
      ],
      choices: [{
        text: 'Carol decides to walk.',
        logic: [
          {
            do: [
              {
                type: 'goto',
                path: ['leave-it'],
              },
            ],
          },
        ],
      },
      {
        text: 'She goes to find a taxi.',
        logic: [
          {
            do: [
              {
                type: 'goto',
                path: ['leave-it'],
              },
            ],
          },
        ],
      }],
    }
  ],
});

export default missingBag;
