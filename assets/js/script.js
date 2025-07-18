const contactForm = document.getElementById("contact-form");
const contactMessage = document.getElementById("contact-message");

const Sendmail = (e) => {
    e.preventDefault();
    
    emailjs.sendForm("service_3r6gg1e", "template_1ueujvh", "#contact-form", "58WQhsbINJCvvFxK5")
    .then(() => {  // Removed the incorrect dot before `.then()`
        contactMessage.textContent = "Message Sent Successfully ✅";
        
        setTimeout(() => {
            contactMessage.textContent = ""; 
        }, 5000);
        
        contactForm.reset();
    })
    .catch((error) => {  // Added error handling for debugging
        console.error("Error sending email:", error);
        contactMessage.textContent = "Failed to send message ❌";
    });
};

contactForm.addEventListener("submit", Sendmail);

const scrolup =()=>{
  const scrolup = document.getElementById("scroll-up");
    this.scrollY>=350 ? scrolup.classList.add("show-scrol"): scrolup.classList.remove("show-scrol")
}
window.addEventListener("scroll",scrolup)


const section = document.querySelectorAll('section[id]')
const scrollActive = ()=>{
    const scrolDown = window.scrollY;
    section.forEach(current=>{
        const sectionH=current.offsetHeight,
        sectionTop=current.offsetTop-58,
        sectionID=current.getAttribute('id'),
        sectionClass = document.querySelector('.ul a[href*=' + sectionID+']')
        if (scrolDown>sectionTop && scrolDown<=sectionTop + sectionH) {
            sectionClass.classList.add('active_link')
        }
        else{
            sectionClass.classList.remove('active_link')
        }

    })

}
window.addEventListener('scroll',scrollActive);

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration:2500,
    delay:400,
    // reset:true
}
)
sr.reveal('.profile,.contact_form')
sr.reveal('.info',{orgin:'left',delay:800})
sr.reveal('.skillset',{orgin:'left',delay:900})
sr.reveal('.intro',{orgin:'left',delay:1200})
sr.reveal('.serv_card, .Project_card',{interval:100})

var typed = new Typed('#element', {
    strings: ['Mahyudeen Shahid', 'Web Developer.', 'Web Designer.', 'Software Engineer.'],
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 1000,
    startDelay: 500,
    loop: true,
    showCursor: true,
    cursorChar: '|',
    preStringTyped: function (arrayPos, self) {
        // Before typing 'Mahyudeen', set the text to 'I am a Passionate'
        if (self.strings[arrayPos] === 'Mahyudeen Shahid') {
            document.getElementById('before').innerHTML = 'I am ';
        }
    },
    onStringTyped: function (arrayPos, self) {
        // After 'Mahyudeen' is typed, update the text to 'a Passionate' in the 'before' element
        if (self.strings[arrayPos] === 'Mahyudeen Shahid') {
            function write(){
                document.getElementById('before').innerHTML = 'I am a Passionate';
            }
           setTimeout(write,2300) ;
        }
    }
    
});