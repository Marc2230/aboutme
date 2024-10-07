
fetch('nav.html')
  .then(response => response.text())
  .then(html => {
    const container = document.getElementById('nav-included');
    container.innerHTML = html;

    // THIS LINE OF CODE WILL MAKE SURE THAT THE DIV CONTAINER WITH THE ANIMATION CLASS 
    // WILL HAVE THE CORRECT CLASSNAME FOR THE CURRENT PAGE NAVIGATION BAR.
    // THIS WILL GET THE CURRENT PAGE LOCATION BY USING THE PATHNAME IN THE WINDOW LOCATION.
    // THE IF ELSE STATEMENT WILL CHECK IF THE PATHNAME IS EQUAL TO THE CURRENT PAGE.
    // IF TRUE, THE CURRENT CLASSS NAME WILL BE REMOVE AND WILL ADD THE NEW CLASS NAME.
    
    const currentPage = window.location.pathname;

    if (currentPage === '/extra.html') {
      
      const navAnimation = document.querySelector('.animation');
      navAnimation.classList.remove('start-home');
      navAnimation.classList.add('start-extra');

    } else if (currentPage === '/about.html') {

      const navAnimation = document.querySelector('.animation');
      navAnimation.classList.remove('start-home');
      navAnimation.classList.add('start-about');

    } else if (currentPage === '/contacts.html') {

      const navAnimation = document.querySelector('.animation');
      navAnimation.classList.remove('start-home');
      navAnimation.classList.add('start-contact');
      
    }
    
  });