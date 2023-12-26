export class MyFrame extends HTMLElement {
  connectedCallback() {
    this.innerHTML =
      `<section class="section">
  <div class='container'>
  <header class="header">
    <a  href='index.html'>
      <img src="../../assets/img/logo/dark-logo.svg" alt="">
    </a>
    <div class='header-links'>
      <a href='template-1.html' class='header-links__element'>
        sos
      </a>
      <a href='template-2.html' id=''  class='header-links__element'>
        лайфхаки
      </a>
      <a href='template-3.html' class='header-links__element'>
        для будущих автомобилистов
      </a>
    </div>
  </header>
</div>
</section>`
  }

}

customElements.define('my-header', MyFrame)
