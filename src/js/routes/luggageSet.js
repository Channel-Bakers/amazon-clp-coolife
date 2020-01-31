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
			title: `3 Piece {{COLOR}} Suitcase Spinner Hardshell Lightweight TSA Lock`,
			caption:
				"Spinner wheels, multidirectional smooth and silent 360°wheels. Upgrade With TSA-Accepted Lock for security and peace of mind.",
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
			title: `Expandable {{COLOR}} Suitcase 3 Piece Set with TSA Lock Spinner`,
			caption:
				"360 degree multi-directional spinner wheels offer effortless mobility in any direction. Push-button locking handle adjusts to multiple heights for comfort when rolling the case.",
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
			title: `Expandable {{COLOR}} 3 Piece Set PC+ABS Spinner Suitcase`,
			caption:
				"Made of lightweight and durable PC+ABS material, with an impact-resistant hard shell, Molded corner guard reinforcements for absorbing and deflecting shock for maximum impact resistance.",
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
			title: `{{COLOR}} 3 Piece Set PC+ABS Spinner Suitcase`,
			caption:
				"Fashion enough with the newest slash design, and adopts a variety of internationally latest patented technologies and two-wheel design, which is more smoothly, quieter and more durable.",
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
