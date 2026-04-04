function home() {
  mainPage.style.display = "flex";
  cardMen.style.display = "block";
  cardgirl.style.display = "block";
  blogContent.style.display = "block"
  contactus.style.display="none"
}

window.addEventListener('load', function() {
  $('.r-search').keyup(function(e){
  if(($('.r-search').val() == '') && ($('#searchModalContainer').length)){
      /* Changing display (TrynBuy) since ST returns it as display block */
      if($('.FreeShippingBanner-banner-expanded').length){
          $('.FreeShippingBanner-banner-expanded').css('display','none');
          $('.FreeShippingBanner-sidebar').removeClass('FreeShippingBanner-sidebar-expanded');                        
      }
  } 
});
});

// Add to Cart

function addItem(){
  document.querySelector(".addCart").style.display="block";
  contactus.style.display="none";
  aboutPage.style.display = "none";
  cardMen.style.display = "none";
  cardgirl.style.display = "none";
  mainPage.style.display = "none";
  blogContent.style.display = "none"
}

 const slides = document.querySelector('.slides');
    const slideElements = document.querySelectorAll('.slide');

    let currentIndex = 0;
    const totalSlides = slideElements.length;

    function updateSliderPosition() {
      slides.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    function showNextSlide() {
      currentIndex = (currentIndex + 1) % totalSlides;
      updateSliderPosition();
    }

    function copyCode(element) {
            const code = element.dataset.code;
            navigator.clipboard.writeText(code)
                .then(() => {
                    // Optional: Provide user feedback that the code was copied
                    alert("Code copied to clipboard: " + code);
                })
                .catch(err => {
                    console.error('Failed to copy: ', err);
                });
        }

        function viewProducts() {
            // Replace with your logic to view eligible products
            alert("View Eligible Products clicked!");
        }

        function viewMoreOffers() {
            // Replace with your logic to view more offers
            alert("View More Offers clicked!");
        }


    // Auto-slide every 3 seconds
    setInterval(showNextSlide, 3000);

    function addToCart() {
            // Replace with your add to cart logic
            alert("Item added....!");
        }

        //show and hide
        const sections = document.querySelectorAll('.header');
        sections.forEach(header => {
          header.addEventListener('click', function () {
            this.classList.toggle('active');
            const content = this.nextElementSibling;
            content.style.display = content.style.display === 'block' ? 'none' : 'block';
          });
        });

        //checkout
      function checkPincode() {
      const pincode = document.getElementById('pincode').value;
      if (pincode === "") {
        alert("Please enter a valid pincode.");
      } else {
        alert(`Delivery service is available for pincode: ${pincode}`);
      }
    }