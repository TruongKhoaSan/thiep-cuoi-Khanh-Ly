window.addEventListener("load", () => {

// --- Ảnh top di chuyển ---
const topImage = document.querySelector(".top img");
if (topImage) {
    setTimeout(() => {
        topImage.style.transform = "translateY(0)";
        topImage.style.opacity = "1";
    }, 500);
}

// --- Chữ Thư Mời Tiệc Cưới ---
const textTop = document.querySelector(".text_top");
if (textTop) {
    setTimeout(() => {
        textTop.style.transform = "translateY(0)";
        textTop.style.opacity = "1";
    }, 1200);
}

// --- Chữ Tuấn Khanh & Cẩm Ly + trái tim giữa ---
const textLeft = document.querySelector(".text1");
const textRight = document.querySelector(".text2");
const heartBetween = document.querySelector(".heart-between");
if (textLeft && textRight && heartBetween) {
    setTimeout(() => {
        textLeft.style.left = "0";
        textLeft.style.opacity = "1";
        textRight.style.right = "0";
        textRight.style.opacity = "1";
        heartBetween.style.opacity = "1";
    }, 1800);
}

// --- Slide 3 ảnh Swiper ---
if (typeof Swiper !== "undefined") {
    const swiper = new Swiper(".mySwiper", {
        loop: true,
        slidesPerView: 1.3,
        centeredSlides: true,
        spaceBetween: 20,
        speed: 700,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        grabCursor: true,
    });
}

// --- Couple fade in khi cuộn ---
const coupleImages = document.querySelectorAll(".person");
if (coupleImages.length) {
    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        coupleImages.forEach(person => {
            const top = person.getBoundingClientRect().top;
            if (top < windowHeight - 100) {
                person.classList.add("animate");
            }
        });
    };
    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();
}

// --- Trái tim rơi toàn màn ---
function createHeart() {
    const container = document.getElementById("hearts-container");
    if (!container) return;

    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "💗";
    heart.style.left = Math.random() * 100 + "vw";
    const size = Math.random() * 20 + 10;
    heart.style.fontSize = size + "px";
    const duration = Math.random() * 3 + 3;
    heart.style.animationDuration = duration + "s";
    container.appendChild(heart);
    setTimeout(() => heart.remove(), duration * 1000);
}
setInterval(createHeart, 300);

// --- Timeline typewriter ---
const timelineItems = document.querySelectorAll(".timeline-item");
function typeWriterWithHearts(element, speed = 25) {
    const original = element.innerHTML;
    element.innerHTML = "";
    let index = 0;
    function type() {
        if (index <= original.length) {
            element.innerHTML = original.slice(0, index);
            if (index % 3 === 0) createHeart();
            index++;
            setTimeout(type, speed);
        }
    }
    type();
}
function showTimelineOnScroll() {
    timelineItems.forEach(item => {
        const rect = item.getBoundingClientRect();
        if (rect.top < window.innerHeight - 80 && !item.classList.contains("show")) {
            item.classList.add("show");
            const story = item.querySelector(".story");
            if (story && !story.classList.contains("typed")) {
                story.classList.add("typed");
                typeWriterWithHearts(story);
            }
        }
    });
}
window.addEventListener("scroll", showTimelineOnScroll);
showTimelineOnScroll();

// --- Thank you ---
const thankText = document.querySelector(".thank-text");
if (thankText) {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    observer.observe(thankText);
}

// --- Map toggle ---
document.querySelectorAll(".wedding-box").forEach(box => {
    const btn = box.querySelector(".toggleMapBtn");
    const map = box.querySelector(".map");
    if (btn && map) {
        btn.addEventListener("click", () => {
            if (!map.classList.contains("active")) {
                // bật map
                map.innerHTML = `<iframe src="${map.dataset.map}" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`;
                map.classList.add("active");
            } else {
                // tắt map
                map.innerHTML = "";
                map.classList.remove("active");
            }
        });
    }
});


// --- QR toggle ---
const qrBtn = document.getElementById("toggleQR");
const qrContent = document.getElementById("qrContent");

if (qrBtn && qrContent) {
    qrBtn.addEventListener("click", () => {
        qrContent.classList.toggle("show"); // sửa từ "active" thành "show"
    });
}


// video-title 
// Lấy element title
const videoTitle = document.querySelector('.video-title .text_title_video');

// Observer
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      videoTitle.classList.add('active'); // thêm class active
      observer.unobserve(entry.target);   // chỉ trigger 1 lần
    }
  });
}, {
  threshold: 0.5 // 50% element xuất hiện trong viewport
});

// Bắt đầu quan sát
observer.observe(videoTitle);



// --- Video sound toggle ---
const video = document.getElementById("myVideo");
const soundBtn = document.getElementById("soundBtn");
if (video && soundBtn) {
    soundBtn.addEventListener("click", () => {
        if (video.muted) {
            video.muted = false;
            soundBtn.textContent = "🔊";
        } else {
            video.muted = true;
            soundBtn.textContent = "🔇";
        }
    });
}

// --- Countdown ---
function startCountdown(targetDate, ids) {
    const { daysId, hoursId, minsId, secsId } = ids;
    const interval = setInterval(() => {
        const now = new Date().getTime();
        const distance = new Date(targetDate).getTime() - now;
        if (distance < 0) {
            clearInterval(interval);
            [daysId, hoursId, minsId, secsId].forEach(id => document.getElementById(id).innerText = 0);
            return;
        }
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
        const mins = Math.floor((distance / (1000 * 60)) % 60);
        const secs = Math.floor((distance / 1000) % 60);
        document.getElementById(daysId).innerText = days;
        document.getElementById(hoursId).innerText = hours;
        document.getElementById(minsId).innerText = mins;
        document.getElementById(secsId).innerText = secs;
    }, 1000);
}

// Start countdowns
startCountdown("2025-11-29T16:30:00", {
    daysId: "groom-days",
    hoursId: "groom-hours",
    minsId: "groom-mins",
    secsId: "groom-secs"
});
startCountdown("2025-11-30T08:00:00", {
    daysId: "bride-days",
    hoursId: "bride-hours",
    minsId: "bride-mins",
    secsId: "bride-secs"
});

// --- Calendar ---
const daysContainer = document.querySelector(".calendar .days");
const weddingDay = 30; // NGÀY CƯỚI

if (daysContainer) {
    const month = 10; // Tháng 11 (0-index)
    const year = 2025;

    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    let daysHTML = "";

    // Ô trống đầu tuần
    for (let i = 0; i < firstDay; i++) {
        daysHTML += `<div class="empty"></div>`;
    }

    // Tạo ngày
    for (let d = 1; d <= daysInMonth; d++) {

        if (d === weddingDay) {
            daysHTML += `
                <div class="heart-day special-day">${d}</div>
            `;
        } else {
            daysHTML += `<div>${d}</div>`;
        }
    }

    daysContainer.innerHTML = daysHTML;
}

// lời chúc 
// Hiệu ứng xuất hiện khi scroll
const wishSection = document.querySelector(".wish-section");

const wishObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            wishSection.classList.add("show");
            wishObserver.unobserve(wishSection);
        }
    });
}, { threshold: 0.3 });

wishObserver.observe(wishSection);


// Form gửi lời chúc
const wishForm = document.getElementById("wishForm");
const wishList = document.getElementById("wishList");

let wishes = JSON.parse(localStorage.getItem("wishes") || "[]");

function renderWishes() {
    wishList.innerHTML = "";
    wishes.forEach(w => {
        const item = document.createElement("div");
        item.className = "wish-item";
        item.innerHTML = `<strong>${w.name}:</strong> ${w.msg}`;
        wishList.appendChild(item);
    });
}

renderWishes();

wishForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("wishName").value.trim();
    const msg = document.getElementById("wishMessage").value.trim();

    if (!name || !msg) return;

    wishes.push({ name, msg });
    localStorage.setItem("wishes", JSON.stringify(wishes));

    renderWishes();

    wishForm.reset();
});



});
