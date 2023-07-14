class SearchBar extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: 'open'});
    }

    connectedCallback() {
      this.render();
    }
    
    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }
     
    get value() {
        return this.shadowDOM.querySelector('#searchElement').value;
    }

    render() {
        this.shadowDOM.innerHTML = `
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css">
            <style>
              .search-box{
                position: absolute;
                left: 25%;
                width: 800px;
                transform: rotate(-50%, -50%);
                position: sticky;
              }

              input{
                position: relative;
                display: inline-block;
                font-size: 20px;
                box-sizing: border-box;
                transition: .5s;
              }

              input[type="search"]{
                background: #fff;
                width: 500px;
                height: 50px;
                border: none;
                outline: none;
                padding: 0 25px;
                border-radius: 25px 0 0 25px;
              }

              input[type="submit"]{
                position: relative;
                left: -5px;
                border-radius: 0 25px 25px 0;
                width: 150px;
                height: 50px;
                border: none;
                outline: none;
                cursor: pointer;
                background: #2F3E46;
                color: #fff;
              }

              input[type="submit"]:hover{
                background: #52796F;
              }

              @media screen and (max-width: 375px) {
                .search-box{
                  position: absolute;
                  left: 13%;
                  width: 300px;
                  transform: rotate(-50%, -50%);
                  position: sticky;
                }

                input[type="search"]{
                  background: #fff;
                  width: 200px;
                  height: 50px;
                  border: none;
                  outline: none;
                  padding: 0 25px;
                  border-radius: 25px 0 0 25px;
                }
  
                input[type="submit"]{
                  width: 80px;
                  height: 50px;
                }
              }

              @media screen and (max-width: 800px) {
                .search-box{
                  position: absolute;
                  left: 13%;
                  width: 700px;
                  transform: rotate(-50%, -50%);
                  position: sticky;
                }

                input[type="search"]{
                  background: #fff;
                  width: 500px;
                  height: 50px;
                  border: none;
                  outline: none;
                  padding: 0 25px;
                  border-radius: 25px 0 0 25px;
                }
  
                input[type="submit"]{
                  width: 100px;
                  height: 50px;
              }
            </style>
            
              
            <div class="search-box">
                <input type="search" id="searchElement" placeholder="Search">
                <input  id="searchButtonElement" type="submit" value="Search">
            </div>

            
        `;

        this.shadowDOM.querySelector('#searchButtonElement').addEventListener('click', this._clickEvent);
    }
}

customElements.define('search-bar', SearchBar); 