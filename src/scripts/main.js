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


fetch(new URL('../components/partner.html', import.meta.url))
  .then(res => res.text())
  .then(data => {
    document.getElementById('partner-container').innerHTML = data;
  })


fetch(new URL('../components/service.html', import.meta.url))
  .then(res => res.text())
  .then(data => {
    document.getElementById('service-container').innerHTML = data;
  })

fetch(new URL('../components/destination.html', import.meta.url))
  .then(res => res.text())
  .then(data => {
    document.getElementById('destination-container').innerHTML = data;
  })

fetch(new URL('../components/travel-point.html', import.meta.url))
  .then(res => res.text())
  .then(data => {
    document.getElementById('travel-container').innerHTML = data;
  })

fetch(new URL('../components/features.html', import.meta.url))
  .then(res => res.text())
  .then(data => {
    document.getElementById('features-container').innerHTML = data;
  })

fetch(new URL('../components/testimonial.html', import.meta.url))
  .then(res => res.text())
  .then(data => {
    document.getElementById('testimonial-container').innerHTML = data;
  })


fetch(new URL('../components/subscribe.html', import.meta.url))
  .then(res => res.text())
  .then(data => {
    document.getElementById('subscribe-container').innerHTML = data;
  })

fetch(new URL('../components/footer.html', import.meta.url))
  .then(res => res.text())
  .then(data => {
    document.getElementById('footer-container').innerHTML = data;
  })