if (TODAY_DATE < CHAPTER_I_DATE) {
    monogatari.script ({
        'ch1-start': [
            "Chapter I releases this 14th of December!",
            "Gotta wait until your exams are all done, sorry.",
            "end"
        ],
    });
}
else {
    monogatari.script ({
        'ch1-start': [
            "show message chapterI",
            "show scene birthday-beedroom with fadeIn",
            "brenn Happy Birthday!!",
            "nota Happy Birthday Mya!",
            "Thank you guys! I love you!",
            "brenn Hold on, let me fetch your present!",
            "<i>I can't believe they came all the way to America for my birthday.</i>",
            "<i>It doesn't make sense since they both have a full-time activity, but I'll have to let it slide for the sake of the story.</i>",
            "<i>They really hyped this birthday party up. For once, I have high expectations.</i>",
            "brenn You wanted a drawing of a stickman made by me, right? I hope you didn't change your mind because it's too late now.",
            "brenn Here you go!",
            // TODO stickman pic
            "...",
            "brenn :D",
            "...",
            "<i>...</i>",
            "<i>Well, they made the effort to travel here, I can't expect too much.</i>",
            "<i>Still, I hope Céliane's present will make up for that.</i>",
            "nota My turn!",
            "nota Sorry Brenn, but your present sucks ass!",
            "nota Please ignore his stupid joke Mya. I got you something worth your time!",
            "nota I present to you...",
            // TODO plane ticket pic
            "nota A plane ticket!",
            "<i>A fake ticket? What??</i>",
            "nota Well, technically, it's not a real ticket.",
            "<i>I noticed.</i>",
            "<i>Did they really tell me it was going to be the best birthday ever, to then hand me two pieces of paper?</i>",
            "<i>There's more to it, right? There has to be.</i>",
            "nota I have yet to discover the Blessed Land of Owsseqs, where the sun shines and the harems are plentiful.",
            "nota When I do find it though, I'll get you there in no time!",
            "nota Can you imagine? A land of pure bliss! You can take the train at any time! Everyone speaks japanese (with subtitles for those who need them)! Harems are legal! It's the perfect land!",
            "nota Also, don't worry about meeting Rem simps there! I'll gatekeep the area! By myself!",
            "nota Take this as a promise Mya! One day, I will take you there, and we'll be the happiest people on Earth!",
            "nota I'll get you the real plane ticket when we build an airport there. I can't wait!",
            "nota Kakkoyoku kikoeru yō ni nihongo o hanasu furi o suru!",
            "<i>What?</i>",
            "brenn By the way, I'm sorry but we don't have any cake for you.",
            "nota Not having a birthday cake for your birthday is surprising! You can see it as an additional birthday surprise!",
            "<i>Wow, thank you guys.</i>",
            "<i>You really OUTDID yourself.</i>",
            "brenn Oh, I almost forgot the letter.",
            "brenn Apparently, someone sent you something. I don't even know if it's for you or not to be honest.",
            "brenn I hope it's not an electricity bill or something like that, I'd look pretty stupid if that were the case.",
            "brenn Hahaha!",
            "<i>Hahaha.</i>",
            "<i>Well, this letter is my last hope.</i>",
            "<i>Really guys, I expected nothing. And THIS is what I get?</i>",
            "<i>You told me this was going to be the best birthday ever.</i>",
            "<i>The best birthday ever.</i>",
            "<i>Next year, I'll just play dead and reappear once I'm sure you've forgotten about it.</i>",
            "<i>Now, let's read the letter.</i>",
            // TODO letter image
            "nvl <br>Hello Mya Rousseau, Happy Birthday!",
            "nvl I hope you're having a good time! If not, this letter might be the one thing you need!",
            "nvl I have something for you. A hidden present, some kind of treasure hunt if you will.",
            "nvl Here are the coordinates: 43.3068° N 0.7668° W. It shouldn't be too far from where you are.",
            "nvl I look forward to meeting you.",
            "nvl Have fun!",
            "<i>That's quite creepy actually.</i>",
            "<i>Who the hell writes that kind of stuff?</i>",
            "<i>On the other hand, it's not like I've got lots of other things to do. I can't say this birthday party was super exciting.</i>",
            "<i>Looks like my two guests are already getting dressed. Did they actually plan this in advance?</i>",
            "We're going already?",
            "brenn What?",
            "nota ...",
            "nota Yes! We are!",
            "brenn ...",
            "brenn What?",
            "nota Let's Go!",
            "show scene outside-myas-place with fadeIn",
            "Alright!",
            "nota So, where are we going?",
            "All I have are those coordinates. Can you look them up?",
            "brenn Sure.",
            "brenn ...",
            "brenn Alright, it's pretty far away actually. Something like a 2 hours long car ride.",
            "I don't have a car though.",
            "nota Do you think we can <i>borrow</i> one? Surely, we can just take someone's car.",
            "First of all, no, we can't steal random people's cars. Second of all, how would you even enter the car without damaging it?",
            "brenn Just... date the car?",
            "nota You sound like someone that never used the power of love to steal a car.",
            "nota HAHAHAHA!",
            "brenn HAHAHAHAHAHAHAHAHAHAHAHAHAHA!1!!!!11!!",
            "brenn Hey Mya, you're a Love Expert™️, right?",
            "brenn It'll probably be faster if you're the one doing it. I'll be taking notes in silence.",
            "...",
            "Alright.",
            "<i>Oddly enough, I feel quite confident.</i>",
            "show scene #000000 with fadeIn",
            // TODO display engine
            "jump ch1-date-start"
        ],
        'ch1-date-start': [
            { 'Choice': {
                'Dialog': 'How do I handle this?',
                "A": { "Text": "Listen", "Do": "jump ch1-date-A" },
                "B": { "Text": "talkA", "Do": "end" },
                "Z": { "Text": "Guess", "Do": "jump ch1-date-Z" }
            } }
        ],
        "ch1-date-A": [
            "test",
            "jump ch1-date-start",
        ],
        "ch1-date-Z": [
            { 'Input': {
                'Text': 'What does love mean to this car?',
                'Save': (input) => { monogatari.storage ({ choice: input }); },
            }},
            { 'Conditional': {
                'Condition': function () {
                    return this.storage('choice') == 'TODO';
                },
                'True': 'jump ch1-date-success',
                'False': 'jump ch1-date-fail'
            }},
        ],
        "ch1-date-fail": [
            "...",
            "No reaction, looks like that's not it.",
            "jump ch1-date-start"
        ],
        "ch1-date-success": [
            "...",
            "It worked!",
            "jump ch1-end"
        ],
        "ch1-end": [
            "show scene outside-myas-place with fadeIn",
            "I did it!",
            "The car's willing to get us to the coordinates, and back home once we're done.",
            "Let's go!",
            "show scene #000000 with fadeIn",
            "wait 3000",
            "show scene outside-mysterious-building with fadeIn",
            "...",
            "<i>Sleeping in the car wasn't the best idea, now I feel tired and my vision is still blurry.</i>",
            "nota You're alright?",
            "Of course I am. Go ahead, I'm following you.",
            "show scene inside-mysterious-building with fadeIn",
            "So, that's the mystrious location?",
            "brenn Yup. There doesn't seem to be anyone here though. That letter of yours might just be a bad joke.",
            "<i>Wait, the letter wasn't their doing?</i>",
            "end"
        ]
    });
}
