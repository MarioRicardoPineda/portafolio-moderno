
const nav = $('#nav'),
    menu = $('#enlaces'),
    openMenu = $('#open'),
    botones = $('.btn-header')
let cerrar = true

const menus = _ => {

    desplazamiento_inicial = pageYOffset

    if(desplazamiento_inicial <= 300){
      nav.removeClass('nav2')
      nav.addClass('nav1')
      menu.css({ top: '80px' })
      openMenu.css('color', '#fff')
    }else {
      nav.removeClass('nav1')
      nav.addClass('nav2')
      menu.css({ top: '100px' })
      openMenu.css('color', '#333')
    }

}

const apertura = _ => {

  if(cerrar){
    menu.css({ width: '70vw' })
    cerrar = false
  }else {
    menu.css({ width: '0', overflow: 'hidden' })
    cerrar = true
  }

}

addEventListener('DOMContentLoaded', _ => {

  $('#onload').fadeOut()

  menus()

})

addEventListener('scroll', _ => {

  menus()

})

addEventListener('click', e => {

  if (cerrar == false) {
    let i = document.querySelector('i')

    if(e.target !== i && e.target !== openMenu[0]){
      menu.css({ width: '0', overflow: 'hidden' })
      cerrar = true
    }

  }

})

addEventListener('resize', _ => {

  if (screen.width >= 700) {
    cerrar = true
    menu[0].style.removeProperty('overflow')
    menu[0].style.removeProperty('width')
  }
})

openMenu.click( _ => {
  apertura()
})


