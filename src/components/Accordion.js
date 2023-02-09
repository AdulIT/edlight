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