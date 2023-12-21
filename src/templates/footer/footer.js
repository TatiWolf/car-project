class Footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML =
      `
      <section class='section section-footer'>
  <footer class='container footer'>
    <p>© Copyright 2023-2024, Swoosh</p>
    <a class='center'>
      <img class='icon-footer' src='./assets/img/icon/telegarm.svg' alt=''>
      @swoosh_car
    </a>
    <a class='center'>
      <img class='icon-footer' src='./assets/img/icon/vk.svg' alt=''>
      @swoosh_car
    </a>
    <a class='center'>
      <img class='icon-footer' src='./assets/img/icon/mail.svg' alt=''>
      swoosh.questions@gmail.com
    </a>
  </footer>
</section>`
  }

}

customElements.define('my-footer', Footer)
