const jokes = [
    "Humari chats ka 10% conversation aur 90% “kuch nahi” hota hai. 😂",
    "Relationship ka golden rule: “Main gussa nahi hoon” ka matlab usually… kuch toh gadbad hai. 😭😂",
    "Tum: Bas 5 minute baat karungi. Also tum: 2 ghante later 👀😂",
    "Hum dono ek dusre ko irritate bhi karte hain aur phir khud hi hasne lagte hain. 😂❤️",
    "Tumhara gussa aur meri manana ki skill… dono ka competition chal raha hai. 😭",
    "Relationship status: ek dusre ko tang karo, phir ek dusre ke bina bhi nahi rehna. 🤝😂"
];

let jokeIndex = 0;

function showScreen(id) {
    document.querySelectorAll(".screen").forEach(screen => {
        screen.classList.remove("active");
    });

    const next = document.getElementById(id);

    if (next) {
        next.classList.add("active");
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
}

function nextJoke() {
    jokeIndex++;

    if (jokeIndex >= jokes.length) {
        jokeIndex = 0;
    }

    const jokeBox = document.getElementById("joke");

    jokeBox.style.opacity = "0";

    setTimeout(() => {
        jokeBox.textContent = jokes[jokeIndex];
        jokeBox.style.opacity = "1";
    }, 200);
}


/* Cute floating hearts */

function createHeart() {
    const heart = document.createElement("div");

    heart.innerHTML = ["🤍", "✨", "🌸", "🍊"][Math.floor(Math.random() * 4)];

    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.bottom = "-30px";
    heart.style.fontSize = (15 + Math.random() * 15) + "px";
    heart.style.opacity = "0.7";
    heart.style.pointerEvents = "none";
    heart.style.zIndex = "10";
    heart.style.transition = "transform 5s linear, opacity 5s linear";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.style.transform =
            `translateY(-110vh) rotate(${Math.random() * 360}deg)`;
        heart.style.opacity = "0";
    }, 50);

    setTimeout(() => {
        heart.remove();
    }, 5200);
}

setInterval(createHeart, 900);
