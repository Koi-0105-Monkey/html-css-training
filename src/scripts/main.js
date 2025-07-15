fetch(new URL('../components/header.html', import.meta.url))
  .then(res => res.text())
  .then(data => {
    document.getElementById('header-container').innerHTML = data;
  })

fetch(new URL('../components/hero.html', import.meta.url))
  .then(res => res.text())
  .then(data => {
    document.getElementById('hero-container').innerHTML = data;
  })
