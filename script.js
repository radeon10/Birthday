function start() {

    document.body.classList.add("open");

    // Konfeti
    for (let i = 0; i < 120; i++) {

        let d = document.createElement("div");
        d.className = "conf";

        d.style.left = Math.random() * 100 + "vw";
        d.style.background =
            `hsl(${Math.random()*360},90%,70%)`;

        d.style.animationDuration =
            (2 + Math.random() * 3) + "s";

        document.body.appendChild(d);

        setTimeout(() => d.remove(), 5000);
    }

    // Scroll ke surat
    document.getElementById("letter")
        .scrollIntoView({
            behavior: "smooth"
        });

}
