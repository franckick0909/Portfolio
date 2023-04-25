

// BACK TO TOP BUTTON OK !!

var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 400) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});









// Header TOGGLE OK !!

let MenuBtn = document.getElementById('MenuBtn')

MenuBtn.addEventListener('click', function(e) {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('fa-xmark')
})






// DARK LIGHT MODE  OK!!

const Switch_Mode = document.getElementById('switch');
const Inner_Text = document.getElementById('inner-text');

Mode.onclick = function(){
    document.body.classList.toggle('dark-mode');

    Switch_Mode.classList.toggle('switch-active');
    Inner_Text.classList.toggle('Inner-text-active');
    if(document.body.classList.contains('dark-mode')){
        Inner_Text.innerHTML = 'Light';
    }else{
        Inner_Text.innerHTML = 'Dark';
    }
}


//  SEND MAIL                 Pas ok

function validate() {
    let name = document.querySelector('.name')
    let email = document.querySelector('.email')
    let msg = document.querySelector('.message')
    let sendBtn = document.querySelector('.send-btn')

    sendBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (name.value == "" || email.value == "" || msg == "") {
            emptyerror();
        }else{
            sendmail (name.value, email.value, msg.value);
            success();
        }
    });
}

validate();

function sendmail(name,email,msg){
    emailjs.send("service_snaav6f", "template_l8qdthm", {
        from_name: email,
        to_name: name,
        message: msg,
        });
}

function emptyerror() {
swal({
    title: "Oh No....",
    text: "Remplissez tous les champs!",
    icon: "error",
  });
}

function success() {
swal({
    title: "Email envoyé avec succes!",
    text: "Je réponds sous 48h",
    icon: "success",
    });
}


// ACTIVE LINK  OK!!!


let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop -  150;
        let height = sec.offsetHeight;
        let id =sec.getAttribute('id');
        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add                
                ('active');
            });
        };
    });
};


// SCROLLREVEAL  OK !!!


ScrollReveal({ reset: true });

ScrollReveal().reveal(".show-once", {             //  fade-in
  reset: false
});

ScrollReveal().reveal(".title", {               //  fade-in
  duration: 500,
  origin: "top",
  distance: "100px",
  easing: "cubic-bezier(.37,.01,.74,1)",
  interval: 200,
  opacity: 0,
  rotate: {
    x: 20,
    z: 5
  }
});

ScrollReveal().reveal(".fade-in", {             //  fade-in
  duration: 4000,
  interval: 200,
  move: 0
});

ScrollReveal().reveal(".scaleUp", {              //  scaleUp
  duration: 2000,
  interval: 200,
  scale: 0.85
});

ScrollReveal().reveal(".flip", {                 //  flip
  delay: 500,
  duration: 2000,
  rotate: {
    x: 20,
    z: 20
  }
});


// EDUCATION

ScrollReveal().reveal(".card", {  
  delay: 0,             //  fade-in
  duration: 400,
  distance: "150px",
  easing: "cubic-bezier(.37,.01,.74,1)",
  interval: 200,
  opacity: 0,
  scale: 1.2
});

// SERVICES

ScrollReveal().reveal(".slide-right", {            //  slide-right
  duration: 500,
  interval: 200,
  origin: "left",
  distance: "100px",
  opacity: 0,
  easing: "cubic-bezier(.37,.01,.74,1)",
});

ScrollReveal().reveal(".slide-left", {             //  slide-left
    duration: 500,
    origin: "right",
    distance: "100px",
    opacity: 0,
    easing: "cubic-bezier(.37,.01,.74,1)",
});

ScrollReveal().reveal(".slide-down", {             //  slide-down
  duration: 500,
  interval: 200,
  origin: "top",
  distance: "100px",
  easing: "cubic-bezier(.37,.01,.74,1)",
  opacity: 0,
});

ScrollReveal().reveal(".slide-up", {                 //  slide-up
    duration: 500,
    interval: 200,
    origin: "bottom",
    distance: "200px",
    easing: "cubic-bezier(.37,.01,.74,1)",
    opacity: 0,
});


// PORTFOLIO 

ScrollReveal().reveal(".title", {               //  fade-in
    duration: 500,
    origin: "right",
    distance: "100px",
    easing: "cubic-bezier(.37,.01,.74,1)",
    interval: 200,
    opacity: 0,
    rotate: {
      x: 20,
      z: 2
    }
  });




  

// CIRCLE SKILLS (pourcentage)  OK !!!!


let options = {
  startAngle: -1.55,
  size: 150,
  value: 0.92,
  fill: {gradient: ["#FC5130", "#B18FCF"]} 
}
$(".circle .bar").circleProgress(options).on('circle-animation-progress',
function(event, progress, stepValue){
    $(this).parent().find("span").text(String(stepValue.toFixed(2).substr(2)) + "%");
});
$(".css .bar").circleProgress({
  value: 0.87,
});
$(".js .bar").circleProgress({
  value: 0.15,
});
$(".sass .bar").circleProgress({
  value: 0.65,
});
$(".git .bar").circleProgress({
  value: 0.54,
});
$(".pc .bar").circleProgress({
  value: 0.97,
});