function onScroll () {
  if (scrollY == 0) {
    navigation.classList.remove("scroll")
  } else if (scrollY > 40) {
    navigation.classList.add("scroll")
  }
}

function openMenu() {
  document.body.classList.add("menu-expanded")
}

function closeMenu() {
  document.body.classList.remove("menu-expanded")
}

