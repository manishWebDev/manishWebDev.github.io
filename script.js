    
    var logo = document.getElementById('logo');
    
    function logoTranslate() {
        logo.style.transform = "translate(-10%, 10%) rotate(-8deg)"
    }
    function logoTranslateoff() {
        logo.style.transform = "translate(0%, 0%) rotate(0deg)"
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) =>{
      console.log(entry)
      if (entry.isIntersecting) {
      if (!entry.target.classList.contains('show')) {
      entry.target.classList.add('show');
      }
      } else {
      entry.target.classList.remove('show');
      }
      });
      });
      
      const hiddenElements = document.querySelectorAll('.hidden');
      hiddenElements.forEach((el) => observer.observe(el));

    function toggleClassName () {
        var sendBtn = document.getElementById("send-btn-svg");
            sendBtn.classList.toggle("send-btn-svg-clicked");
            document.getElementById("send-p").innerHTML = "Sent!";

}


function removeClassName () {
sendBtn.removeClass("send-btn-svg-clicked");
}
setTimeout(removeClassName (), 40);

