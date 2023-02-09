window.addEventListener('DOMContentLoaded', () =>
{
  const modal = document.getElementById("myModal");

  // Get the button that opens the modal
  const btn = document.querySelector("#myBtn");

  // Get the <span> element that closes the modal
  const span = document.getElementsByClassName("close")[2];

  // When the user clicks on the button, open the modal
  if (btn)
  {
    btn.addEventListener('click', () =>
    {
      modal.style.display = "flex";
    })
  }

  // btn.onclick = function() {
  //   modal.style.display = "flex";
  // }

  // When the user clicks on <span> (x), close the modal
  if (span)
  {
    span.addEventListener('click', () =>
    {
      modal.style.display = "none";
    })
  }

  // span.onclick = function() {
  //   modal.style.display = "none";
  // }

  // When the user clicks anywhere outside of the modal, close it
  window.addEventListener('click', (event) =>
  {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  })

  window.onclick = function(event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  } 	

  const modal2 = document.getElementById("myModal1");

  // Get the button that opens the modal
  const btn2 = document.getElementById("myBtn1");

  // Get the <span> element that closes the modal
  const span2 = document.getElementsByClassName("close")[1];

  // When the user clicks on the button, open the modal
  if (btn2)
  {
    btn2.addEventListener('click', () =>
    {
      modal2.style.display = "flex";
    })
  }

  // btn2.onclick = function() {
  //   modal2.style.display = "flex";
  // }

  // When the user clicks on <span> (x), close the modal
  if (span2)
  {
    span2.addEventListener('click', () =>
    {
      modal2.style.display = "none";
    })
  }

  // span2.onclick = function() {
  //   modal2.style.display = "none";
  // }

  // When the user clicks anywhere outside of the modal, close it
  window.addEventListener('click', (event) =>
  {
    if (event.target === modal2) {
      modal2.style.display = "none";
    }
  })

  window.onclick = function(event) {
    if (event.target === modal2) {
      modal2.style.display = "none";
    }
  } 

  // const modal1 = document.getElementById("promoModal");

  // // Get the button that opens the modal
  // const btn1 = document.getElementById("promoButton");

  // // Get the <span> element that closes the modal
  // const span1 = document.getElementsByClassName("close")[0];

  // // // When the user clicks on the button, open the modal
  // if (btn1)
  // {
  //   btn1.onclick = function() {
  //     modal1.style.display = "flex";
  //   }
  // }

  // // // When the user clicks on <span> (x), close the modal
  // if (span1)
  // {
  //   span1.onclick = function() {
  //     modal1.style.display = "none";
  //   }
  // }

  // // // When the user clicks anywhere outside of the modal, close it
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

  // const closeVideoBtns = document.querySelectorAll('.close')

  // closeVideoBtns.forEach(btn =>
  // {
  //     btn.addEventListener('click', (e) =>
  //     {
  //         let iframes = document.querySelectorAll('iframe')
  //         iframes.forEach(iframe =>
  //         {
  //             if (iframe)
  //             {
  //                 let iframeSrc = iframe.src
  //                 iframe.src =  iframeSrc
  //             }
  //         })
  //     })
  // })

  // const modalWindows = document.querySelectorAll('.modal')

  // window.addEventListener('click', (e) =>
  // {
  //     modalWindows.forEach(modal =>
  //     {
  //         if (e.target === modal)
  //         {
  //             modal.style.display = 'none'
  //         }
  //         let iframes = document.querySelectorAll('iframe')
  //         iframes.forEach(iframe =>
  //         {
  //             if (iframe)
  //             {
  //                 let iframeSrc = iframe.src
  //                 iframe.src =  iframeSrc
  //             }
  //         })
  //     })
  // })
})