function onScroll () {
  if (scrollY == 0) {
    navigation.classList.remove("scroll")
  } else if (scrollY > 40) {
    navigation.classList.add("scroll")
  }
  // navigation.classList.add("scroll")
}

