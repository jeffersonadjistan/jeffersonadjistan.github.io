const moodLinks = {
    Joy: "moods_positive_joy.html",
    Proud: "moods_positive_proud.html",
    Motivated: "moods_positive_motivated.html",
    Amazed: "moods_positive_amazed.html",
    Calm: "moods_neutral_calm.html",
    Okay: "moods_neutral_okay.html",
    Bored: "moods_neutral_bored.html",
    Lazy: "moods_neutral_lazy.html",
    Sad: "moods_negative_sad.html",
    Guilty: "moods_negative_guilty.html",
    Angry: "moods_negative_angry.html",
    Disappointed: "moods_negative_disappointed.html"
};

Object.keys(moodLinks).forEach(mood => {
    const btn = document.getElementById(mood);
    if (btn) {
        btn.addEventListener("click", () => {
            window.location.href = moodLinks[mood];
        });
    }
});
