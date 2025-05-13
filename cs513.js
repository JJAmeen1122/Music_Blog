
         // Get elements
         const searchIcon = document.querySelector('.search');
         const searchContainer = document.getElementById('searchContainer');
 
         // Show the search bar when the search icon is clicked
         searchIcon.addEventListener('click', function (event) {
             event.stopPropagation();
             searchContainer.style.display = 'block';
         });
 
         // Close the search bar if user clicks anywhere outside of it or on the search icon
         document.addEventListener('click', function (event) {
             if (!searchContainer.contains(event.target) && event.target !== searchIcon) {
                 searchContainer.style.display = 'none';
             }
         });
 
 
 
 document.addEventListener('scroll', function () {
     const aboutSection = document.querySelector('.about-section');
     const pictureSection = document.getElementById('pictureSection');
    const sectionPosition = aboutSection.getBoundingClientRect();

    if (sectionPosition.top < window.innerHeight && sectionPosition.bottom >= 0) {
         pictureSection.classList.add('visible');
    }
 });

 const stars = document.querySelectorAll('.rating input');
 stars.forEach(star => {
     star.addEventListener('change', () => {
         alert(`You rated this music ${star.value} out of 5!`);
     });
 });