/* global monogatari */
monogatari.component ('main-screen').template (() => {
    return `
        <h1>Mya's Epic Birthday!</h1>
		<img src="./assets/images/title-screen.png" width="554" height="418" style="
			display: block;
			margin-left: auto;
  			margin-right: auto;"></img>
        <main-menu></main-menu>
    `;
});

// Define the messages used in the game.
monogatari.action ('message').messages ({
	"chapterI": {
		title: "<b>CHAPTER I</b>",
		subtitle: "-- <i>An Unexpected Present</i> --"
	},
	"chapterI-unreleased": {
		title: "Chapter I releases this 14th of December!",
		subtitle: "Gotta wait until your exams are all done, sorry."
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
monogatari.action('Particles').particles({
    'miku-magic-slight': {
        'particles': {
            'number': {
                'value': 50,
                'density': {
                    'enable': true,
                    'value_area': 3000
                }
            },
            'color': {
                'value': '#86cecb'
            },
            'shape': {
                'type': 'circle',
                'stroke': {
                    'width': 0,
                    'color': '#000000'
                },
                'polygon': {
                    'nb_sides': 3
                },
                'image': {
                    'src': 'img/github.svg',
                    'width': 100,
                    'height': 100
                }
            },
            'opacity': {
                'value': 0.5,
                'random': true,
                'anim': {
                    'enable': false,
                    'speed': 1,
                    'opacity_min': 0.1,
                    'sync': false
                }
            },
            'size': {
                'value': 2,
                'random': true,
                'anim': {
                    'enable': true,
                    'speed': 5,
                    'size_min': 0,
                    'sync': false
                }
            },
            'line_linked': {
                'enable': false,
                'distance': 500,
                'color': '#ffffff',
                'opacity': 0.4,
                'width': 2
            },
            'move': {
                'enable': true,
                'speed': 7.8914764163227265,
                'direction': 'top',
                'random': true,
                'straight': false,
                'out_mode': 'out',
                'bounce': false,
                'attract': {
                    'enable': false,
                    'rotateX': 600,
                    'rotateY': 1200
                }
            }
        },
        'interactivity': {
            'detect_on': 'canvas',
            'events': {
                'onhover': {
                    'enable': false,
                    'mode': 'bubble'
                },
                'onclick': {
                    'enable': false,
                    'mode': 'repulse'
                },
                'resize': true
            },
            'modes': {
                'grab': {
                    'distance': 400,
                    'line_linked': {
                        'opacity': 0.5
                    }
                },
                'bubble': {
                    'distance': 400,
                    'size': 4,
                    'duration': 0.3,
                    'opacity': 1,
                    'speed': 3
                },
                'repulse': {
                    'distance': 200,
                    'duration': 0.4
                },
                'push': {
                    'particles_nb': 4
                },
                'remove': {
                    'particles_nb': 2
                }
            }
        },
        'retina_detect': true
    },
    'miku-magic': {
        'particles': {
            'number': {
                'value': 2000,
                'density': {
                    'enable': true,
                    'value_area': 3000
                }
            },
            'color': {
                'value': '#86cecb'
            },
            'shape': {
                'type': 'circle',
                'stroke': {
                    'width': 0,
                    'color': '#000000'
                },
                'polygon': {
                    'nb_sides': 3
                },
                'image': {
                    'src': 'img/github.svg',
                    'width': 100,
                    'height': 100
                }
            },
            'opacity': {
                'value': 0.5,
                'random': true,
                'anim': {
                    'enable': false,
                    'speed': 1,
                    'opacity_min': 0.1,
                    'sync': false
                }
            },
            'size': {
                'value': 2,
                'random': true,
                'anim': {
                    'enable': true,
                    'speed': 5,
                    'size_min': 0,
                    'sync': false
                }
            },
            'line_linked': {
                'enable': false,
                'distance': 500,
                'color': '#ffffff',
                'opacity': 0.4,
                'width': 2
            },
            'move': {
                'enable': true,
                'speed': 7.8914764163227265,
                'direction': 'top',
                'random': true,
                'straight': false,
                'out_mode': 'out',
                'bounce': false,
                'attract': {
                    'enable': false,
                    'rotateX': 600,
                    'rotateY': 1200
                }
            }
        },
        'interactivity': {
            'detect_on': 'canvas',
            'events': {
                'onhover': {
                    'enable': false,
                    'mode': 'bubble'
                },
                'onclick': {
                    'enable': false,
                    'mode': 'repulse'
                },
                'resize': true
            },
            'modes': {
                'grab': {
                    'distance': 400,
                    'line_linked': {
                        'opacity': 0.5
                    }
                },
                'bubble': {
                    'distance': 400,
                    'size': 4,
                    'duration': 0.3,
                    'opacity': 1,
                    'speed': 3
                },
                'repulse': {
                    'distance': 200,
                    'duration': 0.4
                },
                'push': {
                    'particles_nb': 4
                },
                'remove': {
                    'particles_nb': 2
                }
            }
        },
        'retina_detect': true
    },
    'miku-magic-intense': {
        'particles': {
            'number': {
                'value': 5000,
                'density': {
                    'enable': true,
                    'value_area': 3000
                }
            },
            'color': {
                'value': '#86cecb'
            },
            'shape': {
                'type': 'circle',
                'stroke': {
                    'width': 0,
                    'color': '#000000'
                },
                'polygon': {
                    'nb_sides': 3
                },
                'image': {
                    'src': 'img/github.svg',
                    'width': 100,
                    'height': 100
                }
            },
            'opacity': {
                'value': 0.5,
                'random': true,
                'anim': {
                    'enable': false,
                    'speed': 1,
                    'opacity_min': 0.1,
                    'sync': false
                }
            },
            'size': {
                'value': 2,
                'random': true,
                'anim': {
                    'enable': true,
                    'speed': 5,
                    'size_min': 0,
                    'sync': false
                }
            },
            'line_linked': {
                'enable': false,
                'distance': 500,
                'color': '#ffffff',
                'opacity': 0.4,
                'width': 2
            },
            'move': {
                'enable': true,
                'speed': 7.8914764163227265,
                'direction': 'top',
                'random': true,
                'straight': false,
                'out_mode': 'out',
                'bounce': false,
                'attract': {
                    'enable': false,
                    'rotateX': 600,
                    'rotateY': 1200
                }
            }
        },
        'interactivity': {
            'detect_on': 'canvas',
            'events': {
                'onhover': {
                    'enable': false,
                    'mode': 'bubble'
                },
                'onclick': {
                    'enable': false,
                    'mode': 'repulse'
                },
                'resize': true
            },
            'modes': {
                'grab': {
                    'distance': 400,
                    'line_linked': {
                        'opacity': 0.5
                    }
                },
                'bubble': {
                    'distance': 400,
                    'size': 4,
                    'duration': 0.3,
                    'opacity': 1,
                    'speed': 3
                },
                'repulse': {
                    'distance': 200,
                    'duration': 0.4
                },
                'push': {
                    'particles_nb': 4
                },
                'remove': {
                    'particles_nb': 2
                }
            }
        },
        'retina_detect': true
    }
});

// Define the canvas objects used in the game
monogatari.action ('canvas').objects ({ });

// Credits of the people involved in the creation of this awesome game
monogatari.configuration ('credits', { });


// Define the images that will be available on your game's image gallery
monogatari.assets ('gallery', { });

// Define the music used in the game.
monogatari.assets ('music', {
	"main-menu": "stationary-traveller.mp3"
});

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
	"birthday-beedroom": "birthday-bedroom.png",
	"outside-myas-place": "outside.png",
	"outside-mysterious-building": "outside2.png",
    "inside-mysterious-building": "inside.jpg",
	"myo-throne-room": "throne-room.jpg",
});


// Define the Characters
monogatari.characters ({
	'brenn': {
		name: 'Brenn',
		color: '#7C387D',
		directory: "brenn"
	},
	'mya': {
		name: 'Mya',
		color: '#FFFFFF',
		directory: "mya"
	},
	'nota': {
		name: 'Céliane',
		color: '#5bcaff',
		directory: "nota"
	},
    'miku-unknown': {
        name: '???',
		color: '#86cecb'
    },
    'myo-unknown': {
        name: '???',
		color: '#86cecb' // TODO green (opposite of pink)
    },
});
