class AppBar extends HTMLElement {
    connectedCallback() {
      this.render();
    }
   
    render() {
        this.innerHTML =`
            <nav class="navbar fixed-top navbar-expand-lg navbar-light p-md-3">
                <div class="container">
                    <div class="navbar-brand">
                        <a href="#" class="navbar-brand text-white" style="font-size: 25px;">
                            <img src="https://cdn-icons-png.flaticon.com/512/8579/8579703.png" alt="Logo Cinematic" style="margin-right: 6px;" width="45"><strong>Cinematic</strong>
                        </a>
                    </div>
                    <button
                        type="button"
                        class="navbar-toggler"
                        data-bs-target="#navbarNav"
                        data-bs-toggle="collapse"
                        aria-expanded="false"
                        aria-label="Toggle Navbar">
                </div>
            </nav>
        `;
    }
}



customElements.define('app-bar', AppBar);