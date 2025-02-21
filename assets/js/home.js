document.addEventListener('DOMContentLoaded', function()
 {
    const contents = document.querySelectorAll('.loaddata .content');
    const imageElement = document.getElementById('image');

    contents.forEach(content =>
         {
        content.addEventListener('mouseover', function()
         {
            const newImage = content.getAttribute('data-image');
            imageElement.src = newImage;
        }
       );
    });
});



document.addEventListener('DOMContentLoaded', function() {
   const faqs = document.querySelectorAll('.faq');


   faqs.forEach(faq => {
       const question = faq.querySelector('.question');
       const answer = faq.querySelector('.answer');
       const toggleIcon = faq.querySelector('.toggle-icon');


       question.addEventListener('click', function() {
           // Toggle the clicked answer
           if (answer.style.display === 'block') {
               answer.style.display = 'none';
               toggleIcon.textContent = '+';
               question.classList.remove('active-question');
           } else {
               answer.style.display = 'block';
               toggleIcon.textContent = '×';
               question.classList.add('active-question');
           }
       });
   });
});
     
/* testimonial section start */

// Used bootstrap v4.5,jquery v3.5.1, owl carousel v2, font awesome v4.7.0

// Used bootstrap v4.5,jquery v3.5.1, owl carousel v2, font awesome v4.7.0

// $('.testi.owl-carousel').owlCarousel({
//     items: 2,
//     margin:10,
//     lazyLoad: true,
//     dots:true,
//     autoPlay: true,
//     autoPlayTimeout: 3000,
//     responsive:{
//       0:{
//         items:1,
//       },
//       600:{
//         items:2,
//       },
//       1000:{
//         items:2,
//       }
//     }
//   });
/* testimonial section end */