var IngamePanelEBAGPanelLoaded = false;
document.addEventListener('beforeunload', function () {
    IngamePanelEBAGPanelLoaded = false;
}, false);
class IngamePanelEBAGPanel extends HTMLElement {
    constructor() {
        super();
        console.log('IngamePanelEBAGPanel2');
        var iframe = document.querySelector("#EBAGPanelIframe");
        if (iframe) {
            iframe.src = "http://localhost/index.html";
        }
    }
    connectedCallback() {
        var self = this;
        
        console.log('IngamePanelEBAGPanel1');

        this.m_MainDisplay = document.querySelector("#MainDisplay");
        this.m_MainDisplay.classList.add("hidden");

        this.m_Footer = document.querySelector("#Footer");
        this.m_Footer.classList.add("hidden");

        var iframe = document.querySelector("#EBAGPanelIframe");
        if (iframe) {
            iframe.src = "http://localhost/index.html";
        }
    }
    updateImage() {
    }
}
window.customElements.define("ingamepanel-ebag", IngamePanelEBAGPanel);
checkAutoload();