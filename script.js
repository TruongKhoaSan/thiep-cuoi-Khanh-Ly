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
    function revealOnScroll() {
  const persons = document.querySelectorAll('.person');
  const windowHeight = window.innerHeight;

  persons.forEach(person => {
    const top = person.getBoundingClientRect().top;

    if (top < windowHeight - 100) { // khi phần tử vào viewport
      person.classList.add('animate');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);


    // Trái tim rơi toàn màn
    function createHeart() {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "💗";

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
// Animation khi cuộn
const fadeElements = document.querySelectorAll(".fade-in");
function checkFade() {
    fadeElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            el.classList.add("show");
        }
    });
}
window.addEventListener("scroll", checkFade);
checkFade();

/* Countdown hàm chung */
// function countdown(targetDate, prefix) {
//     setInterval(() => {
//         const now = new Date().getTime();
//         const distance = new Date(targetDate).getTime() - now;

//         const days = Math.floor(distance / (1000 * 60 * 60 * 24));
//         const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
//         const mins = Math.floor((distance / (1000 * 60)) % 60);
//         const secs = Math.floor((distance / 1000) % 60);

//         document.getElementById(prefix + "-days").innerText = days;
//         document.getElementById(prefix + "-hours").innerText = hours;
//         document.getElementById(prefix + "-mins").innerText = mins;
//         document.getElementById(prefix + "-secs").innerText = secs;
//     }, 1000);
// }

/* Gọi countdown cho từng div */
// countdown("2025-11-29T10:00:00", "groom");  
// countdown("2025-11-30T14:00:00", "bride");
//  slide 3 ảnh 
const swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 3,
  loop: true,
  spaceBetween: 20,
  initialSlide: 0,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: false,
  },
  breakpoints: {
    // Khi màn hình <= 480px (điện thoại nhỏ)
    480: {
      slidesPerView: 1.5,
      spaceBetween: 10,
    },
    // Khi màn hình <= 768px (tablet)
    768: {
      slidesPerView: 2.3,
      spaceBetween: 15,
    },
    // Màn hình lớn (desktop)
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
    }
  }
});


// Hàm countdown chung
function startCountdown(targetDate, ids) {
    const { daysId, hoursId, minsId, secsId } = ids;

    const interval = setInterval(() => {
        const now = new Date().getTime();
        const distance = new Date(targetDate).getTime() - now;

        if (distance < 0) {
            clearInterval(interval);
            document.getElementById(daysId).innerText = 0;
            document.getElementById(hoursId).innerText = 0;
            document.getElementById(minsId).innerText = 0;
            document.getElementById(secsId).innerText = 0;
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

// Gọi countdown cho từng div với thời gian khác nhau
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



// Lịch tháng 11/2025
const daysContainer = document.querySelector(".days");
const year = 2025;
const month = 10; // tháng 0-based: 0 = Jan, 10 = Nov
const weddingDay = 30; // ngày cưới

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
// function showWedding(info) {
//     weddingDateTime.textContent = "Ngày & giờ: " + info.datetime;
//     weddingAddress.textContent = "Địa điểm: " + info.address;
//     weddingMap.innerHTML = `<iframe src="${info.mapSrc}" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`;
//     weddingInfo.style.display = "block";
// }

// // Event listener
// btnGroom.addEventListener("click", () => showWedding(groomInfo));
// btnBride.addEventListener("click", () => showWedding(brideInfo));

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

// timeline 
const timelineItems = document.querySelectorAll('.timeline-item');

function revealTimeline() {
  const triggerBottom = window.innerHeight * 0.85;

  timelineItems.forEach((item, index) => {
    const top = item.getBoundingClientRect().top;
    if (top < triggerBottom) {
      const img = item.querySelector('img');
      
      // Gán biến CSS để giữ rotate cho từng mốc
      switch(index) {
        case 0: img.style.setProperty('--rotate', '-15deg'); break;
        case 1: img.style.setProperty('--rotate', '10deg'); break;
        case 2: img.style.setProperty('--rotate', '-10deg'); break;
      }

      item.classList.add('show');
    }
  });
}

window.addEventListener('scroll', revealTimeline);
window.addEventListener('load', revealTimeline);


document.querySelectorAll(".wedding-box").forEach((box) => {
    const btn = box.querySelector(".toggleMapBtn");
    const mapDiv = box.querySelector(".map");
    const mapUrl = mapDiv.dataset.map;

    let isOpen = false;

    btn.addEventListener("click", () => {
        if (!isOpen) {
            mapDiv.innerHTML = `<iframe src="${mapUrl}" width="100%" height="100%" style="border:0;" loading="lazy"></iframe>`;
            mapDiv.style.height = "250px";
            btn.textContent = "Ẩn chỉ đường";
            isOpen = true;
        } else {
            mapDiv.style.height = "0";
            btn.textContent = "Xem chỉ đường";
            isOpen = false;

            setTimeout(() => {
                mapDiv.innerHTML = "";
            }, 400);
        }
    });
});



});
