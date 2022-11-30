/* global monogatari */

// Define the messages used in the game.
monogatari.action ('message').messages ({
	"chapterI": {
		title: "<b>CHAPTER I</b>",
		subtitle: "-- <i>An Unexpected Present</i> --"
	},
	"chapterII": {
		title: "<b>CHAPTER II</b>",
		subtitle: "-- <i>An Uncertain Future</i> --"
	},
	"chapterIII": {
		title: "<b>CHAPTER III</b>",
		subtitle: "-- <i>An Unbelievable Past</i> --"
	}
});

// Define the notifications used in the game
monogatari.action ('notification').notifications ({ });

// Define the Particles JS Configurations used in the game
monogatari.action ('particles').particles ({ });

// Define the canvas objects used in the game
monogatari.action ('canvas').objects ({ });

// Credits of the people involved in the creation of this awesome game
monogatari.configuration ('credits', { });


// Define the images that will be available on your game's image gallery
monogatari.assets ('gallery', { });

// Define the music used in the game.
monogatari.assets ('music', { });

// Define the voice files used in the game.
monogatari.assets ('voices', { });

// Define the sounds used in the game.
monogatari.assets ('sounds', { });

// Define the videos used in the game.
monogatari.assets ('videos', { });

// Define the images used in the game.
monogatari.assets ('images', { });

// Define the backgrounds for each scene.
monogatari.assets ('scenes', {
	"birthday-beedroom": "birthday-bedroom.png"
});


// Define the Characters
monogatari.characters ({
	'brenn': {
		name: 'Brenn',
		color: '#5bcaff',
		directory: "brenn"
	},
	'mya': {
		name: 'Mya',
		color: '#5bcaff',
		directory: "mya"
	},
	'nota': {
		name: 'Céliane',
		color: '#5bcaff',
		directory: "nota"
	},
});
