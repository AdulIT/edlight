(function () {
    const items = document.querySelectorAll(".timeline-section li");
  
    function isElementInViewport(el) {
      let rect = el.getBoundingClientRect();
      if(window.innerWidth >= 560){
        return(
            rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
          (window.innerHeight  || document.documentElement.clientHeight ) &&
        rect.right <= (window.innerWidth  || document.documentElement.clientWidth )
        );
      }
      else {
        return (
            true
          );
      }
    }
  
    function slideIn() {
      for (let i = 0; i < items.length; i++) {
        if (isElementInViewport(items[i])) {
          items[i].classList.add("slide-in");
        } else {
          items[i].classList.remove("slide-in");
        }
      }
    }
  
    window.addEventListener("load", slideIn);
    window.addEventListener("scroll", slideIn);
    window.addEventListener("resize", slideIn);

    
  })();
  

document.querySelectorAll('.accordion__button').forEach(button =>{
  
  button.addEventListener('click', () => {
    console.log("fdsfds");
    const accordionContent = button.parentElement.nextElementSibling;
    button.classList.toggle("accordion__button--active");
    const servicesContent = button.parentElement;
    
    if(button.classList.contains("accordion__button--active")){
      accordionContent.style.maxHeight = accordionContent.scrollHeight +  "px";
      servicesContent.classList.add("services-list-item--active");
      servicesContent.classList.remove("services-list-item--closed");
    }
    else{
      accordionContent.style.maxHeight = 0;
      servicesContent.classList.remove("services-list-item--active");
      servicesContent.classList.add("services-list-item--closed");
    }
  })
});

// const modal = document.getElementById("myModal");

// // Get the button that opens the modal
// const btn = document.querySelector("#myBtn");

// // Get the <span> element that closes the modal
// const span = document.getElementsByClassName("close")[2];

// // When the user clicks on the button, open the modal
// btn.addEventListener('click', () =>
// {
//   modal.style.display = "flex";
// })

// // btn.onclick = function() {
// //   modal.style.display = "flex";
// // }

// // When the user clicks on <span> (x), close the modal
// span.addEventListener('click', () =>
// {
//   modal.style.display = "none";
// })

// // span.onclick = function() {
// //   modal.style.display = "none";
// // }

// // When the user clicks anywhere outside of the modal, close it
// window.addEventListener('click', (event) =>
// {
//   if (event.target === modal) {
//     modal.style.display = "none";
//   }
// })

// window.onclick = function(event) {
//   if (event.target === modal) {
//     modal.style.display = "none";
//   }
// } 	

// const modal2 = document.getElementById("myModal1");

// // Get the button that opens the modal
// const btn2 = document.getElementById("myBtn1");

// // Get the <span> element that closes the modal
// const span2 = document.getElementsByClassName("close")[1];

// // When the user clicks on the button, open the modal
// btn2.addEventListener('click', () =>
// {
//   modal2.style.display = "flex";
// })

// // btn2.onclick = function() {
// //   modal2.style.display = "flex";
// // }

// // When the user clicks on <span> (x), close the modal
// span2.addEventListener('click', () =>
// {
//   modal2.style.display = "none";
// })

// // span2.onclick = function() {
// //   modal2.style.display = "none";
// // }

// // When the user clicks anywhere outside of the modal, close it
// window.addEventListener('click', (event) =>
// {
//   if (event.target === modal2) {
//     modal2.style.display = "none";
//   }
// })

// window.onclick = function(event) {
//   if (event.target === modal2) {
//     modal2.style.display = "none";
//   }
// } 

// const modal1 = document.getElementById("promoModal");

// // Get the button that opens the modal
// const btn1 = document.getElementById("promoButton");

// // Get the <span> element that closes the modal
// const span1 = document.getElementsByClassName("close")[0];

// // When the user clicks on the button, open the modal
// btn1.onclick = function() {
//   modal1.style.display = "flex";
// }

// // When the user clicks on <span> (x), close the modal
// span1.onclick = function() {
//   modal1.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target === modal1) {
//     modal1.style.display = "none";
//     let iframe = document.querySelector('iframe')
//     if (iframe)
//     {
//         let iframeSrc = iframe.src
//         iframe.src =  iframeSrc
//     }
//   }
// }

// pause the video when click close span

const closeVideoBtns = document.querySelectorAll('.close')

closeVideoBtns.forEach(btn =>
{
    btn.addEventListener('click', (e) =>
    {
        let iframes = document.querySelectorAll('iframe')
        iframes.forEach(iframe =>
        {
            if (iframe)
            {
                let iframeSrc = iframe.src
                iframe.src =  iframeSrc
            }
        })
    })
})

const modalWindows = document.querySelectorAll('.modal')

window.addEventListener('click', (e) =>
{
    modalWindows.forEach(modal =>
    {
        if (e.target === modal)
        {
            modal.style.display = 'none'
        }
        let iframes = document.querySelectorAll('iframe')
        iframes.forEach(iframe =>
        {
            if (iframe)
            {
                let iframeSrc = iframe.src
                iframe.src =  iframeSrc
            }
        })
    })
})