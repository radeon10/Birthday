function start(){

    const card=document.querySelector(".card");

    card.classList.add("hide");

    setTimeout(()=>{

        document.body.classList.add("open");

        const bgm = document.getElementById("bgm");

if (bgm) {
    bgm.volume = 0.3;
    bgm.play().catch(() => {});
}

card.style.display = "none";

mulaiSurat();

    },600);

}

function mulaiSurat() {

    // Konfeti
    for (let i = 0; i < 120; i++) {

        let d = document.createElement("div");
        d.className = "conf";

        d.style.left = Math.random() * 100 + "vw";
        d.style.background = `hsl(${Math.random()*360},90%,70%)`;
        d.style.animationDuration = (2 + Math.random()*3) + "s";

        document.body.appendChild(d);

        setTimeout(() => d.remove(), 5000);
    }

    // Efek mengetik
    const p = document.getElementById("typing");
    const text = p.textContent;

    p.textContent = "";

    let i = 0;

    function ketik() {

        if (i < text.length) {

            p.textContent += text.charAt(i);

            i++;

            setTimeout(ketik, 25);

        }

    }

    document.getElementById("letter").style.display = "block";
    
    ketik();

}
