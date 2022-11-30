if (TODAY_DATE < CHAPTER_I_DATE) {
    monogatari.script ({
        'ch1-start': [
            "Chapter I releases this 14th of December!",
            "Gotta wait until your exams are all done, sorry.",
        ],
    });
}
else {
    monogatari.script ({
        'ch1-start': [
            "show scene birthday-beedroom with fadeIn",
            "brenn Happy Birthday!!",
            "nota Happy Birthday Mya!",
            "Thank you guys!",
            "I love you!",
        ],
    });

}
