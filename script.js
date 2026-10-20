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

document
    .getElementById("butterfly-container")
    .classList.add("show");

const p = document.getElementById("typing");

    const text = `
Happy Birthday...

Hari ini adalah hari yg spesial, bukan hanya usiamu yg bertambah, tp aku bersyukur karna masih diberi kesempatan buat ngerayain ulang tahun sama kamu 🥰

Sehat selalu ya sayang, panjang umur, selalu bahagia lahir & batin, langkah² kamu selalu dimudahkan & dilancarkan, apapun doa kamu segera terkabulkan 😇

Terima kasih ya sayang udah hadir di hidupku, udah jadi tempat bercerita, berkeluh kesah, happy² bareng, dan juga belajar jadi seseorang yg lebih baik ☺

Ga terasa kita udah bareng² selama 1 tahun 2 bulan, semoga hubungan kita ke depannya selalu bahagia, saling nguatin satu sama lain, dan semoga Allah selalu ngejaga kita berdua 😇

Aku mungkin ga bisa ngasih hadiah yg mahal atau mewah, tp aku berharap hadiah kecil ini bisa bikin kamu tersenyum 🤗

Karna ngeliat kamu bahagia, itu juga bikin aku bahagia ☺

Happy Birthday, Sayang 🤍
`;

    p.textContent = "";
    let i = 0;

    function ketik() {

        if (i < text.length) {

            p.textContent += text.charAt(i);
            i++;

            setTimeout(ketik, 25);

        } else {

    // Munculkan tanda tangan
    setTimeout(() => {
        document.getElementById("signature").classList.add("show");
    }, 500);

    // Setelah tanda tangan muncul, baru tampilkan ending
    setTimeout(() => {

        document.getElementById("ending").style.display = "block";

        setTimeout(() => {
            document.getElementById("capyButton").style.display = "block";
        }, 1200);

    }, 1500);

        }

    }

    document.getElementById("letter").style.display = "block";

    ketik();

}

function showGift(){

    // Mainkan suara pop
    const pop = document.getElementById("popSound");
    pop.currentTime = 0;
    pop.play();

    // Ambil tombol kepala capybara
    const capy = document.getElementById("capyButton");

    // Efek goyang
    capy.classList.add("wiggle");

    // Tunggu animasi selesai
    setTimeout(() => {

        // Fade keluar
        document.getElementById("ending").classList.add("fadeOut");
        document.getElementById("letter").classList.add("fadeOut");

        // Setelah fade selesai...
        setTimeout(() => {

            // Sembunyikan
            document.getElementById("ending").style.display = "none";
            document.getElementById("letter").style.display = "none";

            // Tampilkan hadiah
            const gift = document.getElementById("giftMessage");
            gift.style.display = "block";

            // Scroll
            gift.scrollIntoView({
                behavior: "smooth"
            });

        }, 500);

    }, 350);

}

function createHearts(){

    const container = document.getElementById("heartContainer");

    for(let i = 0; i < 6; i++){

        const heart = document.createElement("div");

        heart.className = "heart";

        heart.innerHTML = "🤍";

        heart.style.left = (48 + Math.random()*8) + "%";

        heart.style.top = (window.innerHeight * 0.55) + "px";

        heart.style.animationDelay = (i * 0.08) + "s";

        container.appendChild(heart);

        setTimeout(()=>{
            heart.remove();
        },1200);

    }

}
