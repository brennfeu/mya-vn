if (TODAY_DATE < CHAPTER_II_DATE) {
    monogatari.script ({
        'ch2-start': [
            "show message chapterII-unreleased",
            "end"
        ],
    });
}
else {
    monogatari.script ({
        'ch2-start': [
            "TODO"
        ]
    });
}
