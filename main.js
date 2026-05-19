const mainEl = document.getElementById("mainSection");
const checkThis = document.getElementById("checkThis");
const bar = document.getElementById("bar");

let currentHue = 0;

const iOOptions = {
    root: bar,
    rootMargin: "0px",
    scrollMargin: "0px",
    threshold: 1.0,
}

function updateBGColour(){

    currentHue += 40;
    mainEl.style.backgroundColor = `hsl(${currentHue}, 10%, 50%)`;
}

const intersectionCallback = (entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            let elem = entry.target;

            if (entry.intersectionRatio >= 0.75) {
                updateBGColour();
            }
        }
    });
};

const observer = new IntersectionObserver(intersectionCallback, iOOptions);

observer.observe(checkThis);