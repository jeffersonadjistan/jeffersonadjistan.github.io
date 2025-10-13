const moodLinks = {
    Home: "ecamp.html",
    Joy: "joy.html",
    Proud: "proud.html",
    Motivated: "motivated.html",
    Amazed: "amazed.html",
    Calm: "calm.html",
    Okay: "okay.html",
    Bored: "bored.html",
    Lazy: "lazy.html",
    Sad: "sad.html",
    Guilty: "guilty.html",
    Angry: "angry.html",
    Disappointed: "disappointed.html"
};

Object.keys(moodLinks).forEach(mood => {
    const btn = document.getElementById(mood);
    if (btn) {
        btn.addEventListener("click", () => {
            window.location.href = moodLinks[mood];
        });
    }
});