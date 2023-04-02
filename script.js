jQuery(document).on("scroll", function () {
  var pageTop = jQuery(document).scrollTop();
  var pageBottom = pageTop + jQuery(window).height();
  var tags = jQuery("p, div, span");

  for (var i = 0; i < tags.length; i++) {
    var tag = tags;

    if (jQuery(tag).position().top < pageBottom) {
      jQuery(tag).addClass("visible");
    }
  }
});

/* TOGGLE */
const chk = document.getElementById("chk");

chk.addEventListener("change", () => {
  document.body.classList.toggle("dark");
});

/* AUTOTYPED */
var typed = new Typed(".auto-type", {
  strings: ["Développement fullstack", "DevOps"],
  typeSpeed: 50,
  backSpeed: 15,
  loop: true,
});

/* TRAINING TABS */
var content1 = document.getElementById("content1");
var content2 = document.getElementById("content2");
var content3 = document.getElementById("content3");
var content4 = document.getElementById("content4");
var content5 = document.getElementById("content5");
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var btn4 = document.getElementById("btn4");
var btn5 = document.getElementById("btn5");

function openHolberton() {
  content1.style.transform = "translateX(0)";
  content2.style.transform = "translateX(100%)";
  content3.style.transform = "translateX(100%)";
  content4.style.transform = "translateX(100%)";
  content5.style.transform = "translateX(100%)";
  btn1.style.color = "var(--fourth-color)";
  btn2.style.color = "var(--second-color)";
  btn3.style.color = "var(--second-color)";
  btn4.style.color = "var(--second-color)";
  btn5.style.color = "var(--second-color)";
  btn1.style.background = "var(--second-color)";
  btn2.style.background = "var(--fifth-color)";
  btn3.style.background = "var(--fifth-color)";
  btn4.style.background = "var(--fifth-color)";
  btn5.style.background = "var(--fifth-color)";
}

function openDataScientest() {
  content1.style.transform = "translateX(100%)";
  content2.style.transform = "translateX(0)";
  content3.style.transform = "translateX(100%)";
  content4.style.transform = "translateX(100%)";
  content5.style.transform = "translateX(100%)";
  btn1.style.color = "var(--second-color)";
  btn2.style.color = "var(--fourth-color)";
  btn3.style.color = "var(--second-color)";
  btn4.style.color = "var(--second-color)";
  btn5.style.color = "var(--second-color)";
  btn1.style.background = "var(--fifth-color)";
  btn2.style.background = "var(--second-color)";
  btn3.style.background = "var(--fifth-color)";
  btn4.style.background = "var(--fifth-color)";
  btn5.style.background = "var(--fifth-color)";
}

function openTBS() {
  content1.style.transform = "translateX(100%)";
  content2.style.transform = "translateX(100%)";
  content3.style.transform = "translateX(0)";
  content4.style.transform = "translateX(100%)";
  content5.style.transform = "translateX(100%)";
  btn1.style.color = "var(--second-color)";
  btn2.style.color = "var(--second-color)";
  btn3.style.color = "var(--fourth-color)";
  btn4.style.color = "var(--second-color)";
  btn5.style.color = "var(--second-color)";
  btn1.style.background = "var(--fifth-color)";
  btn2.style.background = "var(--fifth-color)";
  btn3.style.background = "var(--second-color)";
  btn4.style.background = "var(--fifth-color)";
  btn5.style.background = "var(--fifth-color)";
}

function openUPMC1() {
  content1.style.transform = "translateX(100%)";
  content2.style.transform = "translateX(100%)";
  content3.style.transform = "translateX(100%)";
  content4.style.transform = "translateX(0)";
  content5.style.transform = "translateX(100%)";
  btn1.style.color = "var(--second-color)";
  btn2.style.color = "var(--second-color)";
  btn3.style.color = "var(--second-color)";
  btn4.style.color = "var(--fourth-color)";
  btn5.style.color = "var(--second-color)";
  btn1.style.background = "var(--fifth-color)";
  btn2.style.background = "var(--fifth-color)";
  btn3.style.background = "var(--fifth-color)";
  btn4.style.background = "var(--second-color)";
  btn5.style.background = "var(--fifth-color)";
}

function openUPMC2() {
  content1.style.transform = "translateX(100%)";
  content2.style.transform = "translateX(100%)";
  content3.style.transform = "translateX(100%)";
  content4.style.transform = "translateX(100%)";
  content5.style.transform = "translateX(0)";
  btn1.style.color = "var(--second-color)";
  btn2.style.color = "var(--second-color)";
  btn3.style.color = "var(--second-color)";
  btn4.style.color = "var(--second-color)";
  btn5.style.color = "var(--fourth-color)";
  btn1.style.background = "var(--fifth-color)";
  btn2.style.background = "var(--fifth-color)";
  btn3.style.background = "var(--fifth-color)";
  btn4.style.background = "var(--fifth-color)";
  btn5.style.background = "var(--second-color)";
}
