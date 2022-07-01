import make from '../../core/util/make';

const carolGoesToBed = make.module({
	id: 'carol-goes-to-bed',
	submodules: [],
	convoSegments: [
		{
			id: 'carol-enters-the-bedroom',
			convo: [
				{
					type: 'text',
					text: '<b>The family shows Carol her new room, it\'s Anoush\'s childhood bedroom. She says goodnight to the family and thanks them, she carefully closes the door.</b>',
				},
				{
					type: 'image',
					src:
						'https://user-images.githubusercontent.com/108261809/176661026-7520c152-4410-4dbb-ab58-e35b0b116eeb.png',
				},
			],

			choices: [
				{
					text: 'bedroom\'s look',
					logic: [
						{
							do: [
								{
									type: 'goto',
									path: ['bedroom'],
								},
							],
						},
					],
				},
			],
		},
		{
			id: 'bedroom',
			convo: [
				{
					type: 'text',
					text: '<b>There\'s vintage carpets on the walls, the floor paint is in a bad condition, there\'s a crib in the corner filled with old clothes, it smells like dust in there, it feels warm and cozy there, it is slightly damp. The bed is covered with plush dolls.</b>',
				},
				{
					type: 'image',
					src:
						'https://user-images.githubusercontent.com/108261809/176661615-69c548d1-54b7-45c4-9122-65fe7394aab5.png',
				},
			],
			choices: [{
				text: "looking around",
				logic: [
					{
						do: [
							{
								type: 'goto',
								path: ['looking-around'],
							},
						],
					},
				],
			}],
		},
		{
			id: 'looking-around',
			convo: [
				{
					type: 'text',
					text: '<b>There\'s a photobook on the bedside table. She\'s feels very tired, but she wants to know what\'s in the book.</b>',
				},
			],
			choices: [
				{
					text: "goes to bed",
					logic: [
						{
							do: [
								{
									type: 'goto',
									path: ['goes-to-bed'],
								},
							],
						},
					],
				},

				{
					text: "look at the photobook",
					logic: [
						{
							do: [
								{
									type: 'goto',
									path: ['look-photobook'],
								},
							],
						},
					],
				}
			],
		},
		{
			id: 'goes-to-bed',
			convo: [
				{
					type: 'text',
					text: 'She puts the dolls on the crib, then she sits on the itchy bed cover. She frowns and says "Oh no, too itchy!", she puts the plush dolls back and lays on them, "much better", she\'s not very comfortable and it takes an hour to fall asleep. She hopes tomorrow is easier.',
				},
			],
			choices: [{
				text: 'Carol fall asleep.',
				logic: [
					{
						do: [
							{
								type: 'goto',
								path: ['goes-to-bed'],
							},
						],
					},
				],
			},
			],
		},
		{
			id: 'look-photobook',
			convo: [
				{
					type: 'image',
					src:
						'https://user-images.githubusercontent.com/108261809/176661365-1e950df1-cc40-431b-a9c9-d5df498e6d05.png',
				},
				{
					type: 'text',
					text: 'She opens the photobook. In the first page it\'s Anoush as a child, her hands and mouth are covered with ice cream and she has a big smile. In the second page it\'s her again standing in front of a zoo cage with an elephant, and she\'s wearing a pink bucket hat. Next is a photo of her in front of an old armenian church, she\'s wearing a black skirt and a white blouse with a ribbon, she has a serious face.',
				},
			],
			choices: [{
				text: 'Carol continiue to turn pages',
				logic: [
					{
						do: [
							{
								type: 'goto',
								path: ['falling-photo'],
							},
						],
					},
				],
			},
			],
		},
		{
			id: 'falling-photo',
			convo: [
				{
					type: 'text',
					text: '<b>TCarol turns the page and a photo falls out of it faced down on the ground. She reaches down to pick it up and when she turns it over she sees a photo of Anoush surrounded by entertainers wearing teletubbies costumes. She drops the photo "oh hell naaahhhhh!", she picks up the photo again, puts it inside the photobook and closes it. She\'s now creeped out and decides to go to bed.</b>',
				},
				{
					type: 'image',
					src:
						'https://user-images.githubusercontent.com/108261809/176659755-e6a86e4d-b254-4258-9811-4776c10130f8.png',
				},
			],
			choices: [{
				text: "Carol fall asleep.",
				logic: [
					{
						do: [
							{
								type: 'goto',
								path: ['falling-photo'],
							},
						],
					},
				],
			}],
		},

	],
});

export default carolGoesToBed;
