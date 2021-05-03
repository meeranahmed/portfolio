let toggleBtn = document.querySelector("#toggleBtn");

let bodyEl = document.querySelector("body");

let darkMode = false;

toggleBtn.addEventListener('change', (event) => {
  darkMode = event.target.checked;
  if(darkMode) {
    bodyEl.classList.add("dark");
  } else {
    bodyEl.classList.remove("dark");
  }
});

const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})

sr.reveal('.title-text',{})
sr.reveal('.text-uppercase',{delay:200})
sr.reveal('.img-fluid',{delay:400})

sr.reveal('.title-text',{})
sr.reveal('.text',{delay:200})
sr.reveal('.img-fluid',{delay:400})

sr.reveal('skills_subtitle',{})
sr.reveal('.skills_data',{delay:200})
sr.reveal('.skills_name',{interval:200})
sr.reveal('.skills_percentage',{delay:400})
sr.reveal('.img-fluid',{delay:600})

sr.reveal('work_title',{})
sr.reveal('.img ',{delay:200})
sr.reveal('.img ',{delay:400})
sr.reveal('.img ',{delay:600})
sr.reveal('work_title',{delay:800})
sr.reveal('.img ',{delay:1000})
sr.reveal('work_title',{delay:1200})
sr.reveal('.img ',{delay:1400})

sr.reveal('.contact_form',{})
sr.reveal('.contact_input',{delay:200})
sr.reveal('.contact_input',{delay:400})
sr.reveal('.button',{delay:600})

sr.reveal('.p',{})
sr.reveal('.fab',{delay:200})
sr.reveal('.fab',{delay:400})
sr.reveal('.fab',{delay:600})
sr.reveal('.para',{delay:800})






