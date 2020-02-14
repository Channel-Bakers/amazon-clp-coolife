'use strict';

import Builder from '../util/Builder';
import * as luggageSet1 from './../../../data/asins/1-30-2020/luggageSet/luggageSet1.json';
import * as luggageSet2 from './../../../data/asins/1-30-2020/luggageSet/luggageSet2.json';
import * as luggageSet3 from './../../../data/asins/1-30-2020/luggageSet/luggageSet3.json';
import * as luggageSet4 from './../../../data/asins/1-30-2020/luggageSet/luggageSet4.json';

export default {
	init() {
		// One Piece #1
		const BUILDER_1_DATA = luggageSet1.default;
		const BUILDER_1_OPTIONS = {
			target: 'luggageSet-1',
			title: `The Navigator 3-Piece Hardshell Set &mdash; {{COLOR}}`,
			caption:
				'Get on track to a fun trip with this affordable luggage set featuring a spacious main compartment and a wide internal pocket for better organization.',
			sizing: 'INCHES H x W x D:  S (22.5x 15.5 x 9.25),  M (26.5 x 18.25 x 10.25), L (30.25 x 20.75 x 11.75)',
			image: {
				position: 'left',
			},
			colors: [
				{
					name: 'blue',
					hex: '#003c97',
					image:
						'https://images-na.ssl-images-amazon.com/images/I/71ERPRYMRIL._AC_UX466_.jpg',
					active: true,
				},
				{
					name: 'purple',
					hex: '#462d54',
					image:
						'https://images-na.ssl-images-amazon.com/images/I/81B2EdRHOeL._UX679_.jpg',
					active: false,
				},
				{
					name: 'navy',
					hex: '#202138',
					image:
						'https://images-na.ssl-images-amazon.com/images/I/81bk7xetwqL._AC_UX679_.jpg',
					active: false,
				},
				{
					name: 'dark-green',
					hex: '#0d251b',
					image:
						'https://images-na.ssl-images-amazon.com/images/I/81x95xNYaPL._AC_UX466_.jpg',
					active: false,
				},
				{
					name: 'black',
					hex: '#333333',
					image:
						'https://images-na.ssl-images-amazon.com/images/I/81JWQwAV8hL._UX679_.jpg',
					active: false,
				},
			],
			dropdowns: [
				{
					title: `3 Piece {{COLOR}} Suitcase Spinner Hardshell Lightweight TSA Lock`,
					id: 'luggageSet-1',
					data: BUILDER_1_DATA,
				},
			],
		};

		const BUILDER_1 = new Builder({
			...BUILDER_1_OPTIONS,
		});

		// One Piece #1
		const BUILDER_2_DATA = luggageSet2.default;
		const BUILDER_2_OPTIONS = {
			target: 'luggageSet-2',
			title: `The Jetstream 3-Piece Hardshell Set &mdash; {{COLOR}}`,
			caption:
				'Become a jet-setter with modern taste and luggage with enough room to pack all of your belongings for your next trip.',
			sizing: 'INCHES H x W x D:  S (22.4x 15.4 x 8.7),  M (26.4 x 17.7 x 9.8), L (30.3 x 20.9 x 11.4-12.6)',	
			image: {
				position: 'right',
			},
			colors: [
				{
					name: 'grey',
					hex: '#70707a',
					image:
						'https://images-na.ssl-images-amazon.com/images/I/71E-bGBJGaL._SX425_.jpg',
					active: true,
				},
				{
					name: 'purple',
					hex: '#462d54',
					image:
						'https://images-na.ssl-images-amazon.com/images/I/81-us4Mu%2BpL._AC_SX425_.jpg',
					active: false,
				},
				{
					name: 'lake-blue',
					hex: '#1eaacb',
					image:
						'https://images-na.ssl-images-amazon.com/images/I/81yC%2BR1rxzL._SX425_.jpg',
					active: false,
				},
			],
			dropdowns: [
				{
					title: `Expandable {{COLOR}} Suitcase 3 Piece Set with TSA Lock Spinner`,
					id: 'luggageSet-2',
					data: BUILDER_2_DATA,
				},
			],
		};

		const BUILDER_2 = new Builder({
			...BUILDER_2_OPTIONS,
		});

		// One Piece #3
		const BUILDER_3_DATA = luggageSet3.default;
		const BUILDER_3_OPTIONS = {
			target: 'luggageSet-3',
			title: `The Landing Stripe 3-Piece Hardshell Set &mdash; {{COLOR}}`,
			caption:
				'Touch down and be more prepared for you adventured with a full zip interior and several mesh pockets.',
			sizing: 'INCHES H x W x D:  S (22.4x 15.4 x 8.7),  M (26.4 x 17.3 x 9.8), L (30.3 x 20.1 x 11.8-13)',
			image: {
				position: 'left',
			},
			colors: [
				{
					name: 'white',
					hex: '#faf6f8',
					image:
						'https://images-na.ssl-images-amazon.com/images/I/81wuS%2BK7Z8L._AC_SX425_.jpg',
					active: true,
				},
				{
					name: 'wine-red',
					hex: '#541722',
					image:
						'https://images-na.ssl-images-amazon.com/images/I/810dmQCIFqL._SX425_.jpg',
					active: false,
				},
				{
					name: 'green',
					hex: '#084c5b',
					image:
						'https://images-na.ssl-images-amazon.com/images/I/71t%2Bf-vNu%2BL._SX425_.jpg',
					active: false,
				},
			],
			dropdowns: [
				{
					title: `Expandable {{COLOR}} 3 Piece Set PC+ABS Spinner Suitcase`,
					id: 'luggageSet-3',
					data: BUILDER_3_DATA,
				},
			],
		};

		const BUILDER_3 = new Builder({
			...BUILDER_3_OPTIONS,
		});

		// One Piece #4
		const BUILDER_4_DATA = luggageSet4.default;
		const BUILDER_4_OPTIONS = {
			target: 'luggageSet-4',
			title: `The Runway 3-Piece Hardshell Set &mdash; {{COLOR}}`,
			caption:
				'Any runway is your runway with this fashion-forward set featuring a stylish exterior design and several ways to keep your clothes organized with multiple internal pockets.',
			sizing: 'INCHES H x W x D:  S (21.9x 13.4 x 8.2),  M (26 x 16.9 x 9.7), L (30.3 x 19.7 x 11.5)',
			image: {
				position: 'right',
			},
			colors: [
				{
					name: 'white',
					hex: '#faf6f8',
					image:
						'https://images-na.ssl-images-amazon.com/images/I/71bIY33WuXL._SX425_.jpg',
					active: true,
				},
				{
					name: 'black',
					hex: '#333333',
					image:
						'https://images-na.ssl-images-amazon.com/images/I/81Y3d2lps8L._AC_SX425_.jpg',
					active: false,
				},
				{
					name: 'mustard-yellow',
					hex: '#e79529',
					image:
						'https://images-na.ssl-images-amazon.com/images/I/81-mP9UCJ0L._AC_SX425_.jpg',
					active: false,
				},
				{
					name: 'dark-green',
					hex: '#203b2f',
					image:
						'https://images-na.ssl-images-amazon.com/images/I/81XtGAl8DIL._SX425_.jpg',
					active: false,
				},
			],
			dropdowns: [
				{
					title: `{{COLOR}} 3 Piece Set PC+ABS Spinner Suitcase`,
					id: 'luggageSet-4',
					data: BUILDER_4_DATA,
				},
			],
		};

		const BUILDER_4 = new Builder({
			...BUILDER_4_OPTIONS,
		});
	},

	finalize() {
		
	}
};
