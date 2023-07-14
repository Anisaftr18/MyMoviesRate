class FooterBar extends HTMLElement{
    connectedCallback(){
        this.render();
    }
    render() {
        this.innerHTML =`
        <section class="footer">
            <div class="container">
                    <div class="d-flex justify-content-between border-top">
                        <p>© 2022 Cinematic. All rights reserved<br>create by Anisa Fitrianida</p>
                        <ul class="list-unstyled d-flex sosmed">
                            <li class="ms-3">
                                <a href="https://www.instagram.com/anisaftr.18/" target="_blank"><i class="bi bi-twitter"></i></a>
                            </li>
                            <li class="ms-3">
                                <a href="https://www.instagram.com/anisaftr.18/" target="_blank"><i class="bi bi-instagram"></i></a>
                            </li>
                            <li class="ms-3">
                                <a href="https://www.facebook.com/nissa.fitrianida/" target="_blank"><i class="bi bi-facebook"></i></a>
                            </li>
                            <li class="ms-3">
                                <a href="https://www.youtube.com/channel/UCR4XM5TL6of3eSZEBix1vBw" target="_blank"><i class="bi bi-youtube"></i></a>
                            </li>
                            <li class="ms-3">
                                <a href="mailto:anisafitrianida75@gmail.com"><i class="bi bi-envelope-fill"></i></a>
                            </li>
                        </ul>
                    </div>
            </div>
        </section>
        `;
    }
}
customElements.define('footer-bar', FooterBar);