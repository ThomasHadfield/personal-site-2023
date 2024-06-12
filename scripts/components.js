// PROJECT PAGE HEADER
class ProjectPageHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `

            <section class="project-header">
                <nav class= "project-nav">
                    <div class="th-monogram-wrap">
                        <img src="images/TH_Logo_Monogram_RGB_Black.svg" alt="TH Logo">
                    </div>

                    <div class="small-text-wrap">
                        <h3>
                            <a class="link-hover" href="index.html" target="_self" rel="noopener noreferrer">back to work</a>
                        </h3>
                    </div>
                    
                </nav>
            </section>
        `
    }
}

customElements.define('project-page-header', ProjectPageHeader)



// FOOTER
class PageFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <footer>
                <section class="footer-content">

                    <div class="footer-content-left">

                        <div class="small-text-wrap footer-left-first">
                            <h3>© Thomas Hadield</h3>
                            <h3 class="h3-reg">Site coded from scratch.</h3> 
                        </div>

                        <div class="small-text-wrap">
                            <div class="circle-before"></div>
                            <h3>social</h3>
                            <h3 class="h3-reg"> 
                                <a class="link-hover" href="https://www.linkedin.com/in/thomashadfield" target="_blank" rel="noopener noreferrer">LinkedIn</a>,
                                <a class="link-hover" href="https://www.instagram.com/field.type/" target="_blank" rel="noopener noreferrer">Instagram</a>
                            </h3> 
                        </div>
                    </div>


                    <div class="footer-content-right">

                        <div class="small-text-wrap">
                            <h3>
                                <a class="link-hover" href="#top" target="_self" rel="noopener noreferrer">back to the top</a>
                            </h3>
                        </div>

                    </div>

                </section>
            </footer>
        `
    }
}

customElements.define('page-footer', PageFooter)