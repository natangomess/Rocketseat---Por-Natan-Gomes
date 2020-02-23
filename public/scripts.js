const modalOverlay = document.querySelector('.modal-overlay')
const paths = document.querySelectorAll('.path')
//const modal = document.querySelector('.modal')

for (let path of paths) {
  path.addEventListener("click", function() {
    const courseId = path.getAttribute("id")
    window.location.href = `/courses/${courseId}`
  })
}
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    /*const pathId = path.getAttribute("id")
    modalOverlay.classList.add('active')
    modalOverlay.querySelector("iframe").src = `https://rocketseat.com.br/${pathId}`
  })
}

document.querySelector(".close-modal").addEventListener("click", function() {
  modalOverlay.classList.remove("active")
  modalOverlay.querySelector("iframe").src = ""
})

document.querySelector(".maximize-modal").addEventListener("click", function() {
  if (modal.classList.contains('maximize')) {
    modal.classList.remove('maximize')
  } else {
    modal.classList.add('maximize')
  }
})*/