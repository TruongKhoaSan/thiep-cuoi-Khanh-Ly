window.addEventListener("load", () => {
    // Ảnh top di chuyển
    const topImage = document.querySelector(".top img");
    setTimeout(() => {
        topImage.style.transform = "translateY(0)";
        topImage.style.opacity = "1";
    }, 500);

    // Chữ Thư Mời Tiệc Cưới
    const textTop = document.querySelector(".text_top");
    setTimeout(() => {
        textTop.style.transform = "translateY(0)";
        textTop.style.opacity = "1";
    }, 1200);

    // Chữ Tuấn Khanh & Cẩm Ly + trái tim giữa
    const textLeft = document.querySelector(".text1");
    const textRight = document.querySelector(".text2");
    const heartBetween = document.querySelector(".heart-between");

    setTimeout(() => {
        textLeft.style.left = "0";
        textLeft.style.opacity = "1";

        textRight.style.right = "0";
        textRight.style.opacity = "1";

        heartBetween.style.opacity = "1";
    }, 1800);

    // Thông tin mời dự tiệc
    const infoTexts = document.querySelectorAll(".info-text p");
    setTimeout(() => {
        infoTexts.forEach((p, i) => {
            setTimeout(() => {
                p.style.opacity = "1";
                p.style.transform = "translateY(0)";
            }, i * 300);
        });
    }, 2200);

    // Slide ảnh auto loop
    const slides = document.querySelectorAll(".slider .slide");
    let current = 0;

    function showSlide(index){
        slides.forEach((slide,i)=>{
            slide.classList.toggle("active", i === index);
        });
    }

    setInterval(()=>{
        current = (current + 1) % slides.length;
        showSlide(current);
    }, 2000);

    // Couple fade in
    const persons = document.querySelectorAll(".person");
    setTimeout(() => {
        persons.forEach((p, i) => {
            setTimeout(() => {
                p.style.opacity = "1";
                p.style.transform = "translateY(0)";
            }, i * 300);
        });
    }, 2800);

    // Trái tim rơi toàn màn
    function createHeart() {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "❤️";

        heart.style.left = Math.random() * 100 + "vw";
        const size = Math.random() * 20 + 10;
        heart.style.fontSize = size + "px";
        const duration = Math.random() * 3 + 3;
        heart.style.animationDuration = duration + "s";

        document.getElementById("hearts-container").appendChild(heart);
        setTimeout(() => heart.remove(), duration * 1000);
    }

    setInterval(createHeart, 300);
    // Đếm ngược đến ngày cưới
const weddingDate = new Date("2025-11-29T18:00:00"); // thay bằng giờ lễ cưới
function updateCountdown() {
    const now = new Date();
    const diff = weddingDate - now;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
}
setInterval(updateCountdown, 1000);
updateCountdown();

// Lịch tháng 11/2025
const daysContainer = document.querySelector(".days");
const year = 2025;
const month = 10; // tháng 0-based: 0 = Jan, 10 = Nov
const weddingDay = 29; // ngày cưới

const firstDay = new Date(year, month, 1).getDay(); // 0=CN, 1=T2,...
const lastDate = new Date(year, month + 1, 0).getDate(); // ngày cuối tháng

// Thêm khoảng trống đầu tháng
for(let i=0;i<firstDay;i++){
    const empty = document.createElement("div");
    daysContainer.appendChild(empty);
}

// Thêm các ngày
for(let d=1; d<=lastDate; d++){
    const dayDiv = document.createElement("div");
    if(d === weddingDay) {
        dayDiv.classList.add("wedding-day");
        const span = document.createElement("span");
        span.textContent = d;
        dayDiv.appendChild(span);
    } else {
        dayDiv.textContent = d;
    }
    daysContainer.appendChild(dayDiv);
}

const btnGroom = document.getElementById("btnGroom");
const btnBride = document.getElementById("btnBride");
const weddingInfo = document.getElementById("weddingInfo");
const weddingDateTime = document.getElementById("weddingDateTime");
const weddingAddress = document.getElementById("weddingAddress");
const weddingMap = document.getElementById("weddingMap");

// Thông tin tiệc cưới
const groomInfo = {
    datetime: "29/11/2025 - 16:30",
    address: "268 đường Cổ Loa - Xã Đông Anh - Thành Phố Hà Nội",
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.7808432734455!2d105.87074201249233!3d21.12130178450923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313500ca81be3483%3A0x38a3128dbbc0de07!2zMjY4IEPhu5UgTG9hLCDEkMO0bmcgQW5oLCBIw6AgTuG7mWksIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1764112112214!5m2!1svi!2s"
};

const brideInfo = {
    datetime: "30/11/2025 - 08:00",
    address: "Thôn Nguyên Khê - Xã Cẩm Giàng - Thành Phố Hải Phòng",
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1053.585232560865!2d106.1708874548225!3d20.95824441051516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313598bb60e1e1c7%3A0xd3807e5e85afa894!2zTmd1ecOqbiBLaMOqLCBD4bqpbSBHaWFuZywgQ-G6qW0gR2nDoG5nLCBI4bqjaSBExrDGoW5nLCBWaeG7h3QgTmFt!5e1!3m2!1svi!2s!4v1764112338255!5m2!1svi!2s"
};

// Hàm hiển thị thông tin
function showWedding(info) {
    weddingDateTime.textContent = "Ngày & giờ: " + info.datetime;
    weddingAddress.textContent = "Địa điểm: " + info.address;
    weddingMap.innerHTML = `<iframe src="${info.mapSrc}" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`;
    weddingInfo.style.display = "block";
}

// Event listener
btnGroom.addEventListener("click", () => showWedding(groomInfo));
btnBride.addEventListener("click", () => showWedding(brideInfo));

// qr 
const toggleQR = document.getElementById("toggleQR");
const qrContent = document.getElementById("qrContent");
const leftQR = document.querySelector(".qr-item.left");
const rightQR = document.querySelector(".qr-item.right");

toggleQR.addEventListener("click", () => {
    // Thêm class show để mở
    qrContent.classList.toggle("show");

    if (qrContent.classList.contains("show")) {
        // Delay để slide xuống trước rồi 2 ảnh di chuyển từ 2 bên
        setTimeout(() => {
            leftQR.classList.add("show");
            rightQR.classList.add("show");
        }, 200); // độ trễ 200ms
    } else {
        // Ẩn ảnh trước khi slide lên
        leftQR.classList.remove("show");
        rightQR.classList.remove("show");
    }
});




});
