function showFrame() {
  // create a image element
  let img = document.createElement("img")

  // set the image source
  img.src = "https://github.com/joshuansu0897/te_parece_que_somos_ricos/blob/main/img/te-parece-que-somos-ricos-lois.gif?raw=true"

  // set the delete logic
  img.onclick = function () {
    document.body.removeChild(this)
  }

  // fix image to a corner of the screen
  img.style.position = "fixed"
  img.style.top = "10px"
  img.style.right = "20px"
  img.style.margin = "auto"
  img.style.zIndex = "9999"
  img.style.width = "325px"
  img.style.height = "175px"
  img.style.opacity = "1"

  // add image to the page
  document.body.appendChild(img);
}

function ModifyWebPage() {
  let words = [
    "agregar al carrito"
  ]

  var allText = document.body.innerText.toLocaleLowerCase()

  const contains = words.some(element => {
    if (allText.includes(element)) {
      return true
    }
    return false
  })

  if (contains) {
    setTimeout(showFrame, 1);
  }
}

ModifyWebPage()
