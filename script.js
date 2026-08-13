const jokes = [
    "Hum dono ka communication: 10% baat, 90% “kuch nahi” 😭😂",
    "Relationship rule: jo bole “main gussa nahi hoon”... wahi sabse zyada gussa hota hai 😂",
    "Tum: Bas 5 minute baat karungi. Also tum: 2 ghante later 👀😂",
    "Humari chats ka storage NASA ko dena padega 😭📱",
    "Ek dusre ko irritate karna bhi ek love language hai apparently 😂❤️"
];

let jokeIndex = 0;

function show(id) {
    document.querySelectorAll(".screen").forEach(screen => {
        screen.classList.remove("active");
    });

    document.getElementById(id).classList.add("active");
}

function joke() {
    jokeIndex++;

    if (jokeIndex >= jokes.length) {
        jokeIndex = 0;
    }

    document.getElementById("joke").textContent = jokes[jokeIndex];
}
