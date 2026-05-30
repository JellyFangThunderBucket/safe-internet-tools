// ==UserScript==
// @name         Cozy Reading Mode
// @namespace    cozy-reading-mode
// @version      1.0
// @description  Makes websites easier to read.
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function () {

    const button = document.createElement("button");

    button.textContent = "Aa";

    Object.assign(button.style, {
        position: "fixed",
        bottom: "20px",
        right: "20px",
        zIndex: "999999",
        fontSize: "20px",
        padding: "12px 15px",
        borderRadius: "999px",
        border: "none",
        background: "#f3e7d3",
        color: "#2b2118",
        boxShadow: "0 4px 12px rgba(0,0,0,.25)"
    });

    let cozy = false;

    button.onclick = function () {

        cozy = !cozy;

        document.body.style.background =
            cozy ? "#f8f1e7" : "";

        document.body.style.color =
            cozy ? "#2b2118" : "";

        document.body.style.fontSize =
            cozy ? "20px" : "";

        document.body.style.lineHeight =
            cozy ? "1.7" : "";

        document.querySelectorAll(
            "p,li,span,div,article"
        ).forEach(el => {

            el.style.fontSize =
                cozy ? "20px" : "";

            el.style.lineHeight =
                cozy ? "1.7" : "";
        });

        button.textContent =
            cozy ? "✓" : "Aa";
    };

    document.body.appendChild(button);

})();
