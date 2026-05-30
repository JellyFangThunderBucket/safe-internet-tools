// ==UserScript==
// @name         Mom Safety Filter
// @namespace    mom-safety-filter
// @version      1.0
// @description  Warns before scam pages trick someone into spending money.
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function () {

    const dangerWords = [
        "dark web",
        "your information has been leaked",
        "your device is infected",
        "virus detected",
        "trojan detected",
        "click here to remove",
        "your ip address is exposed",
        "vpn required",
        "renew your protection",
        "security alert",
        "immediate action required",
        "your computer is at risk",
        "your phone is infected",
        "call microsoft",
        "call apple support"
    ];

    function scanPage() {

        if (!document.body) return;

        const text = document.body.innerText.toLowerCase();

        const found = dangerWords.some(word =>
            text.includes(word)
        );

        if (found && !document.getElementById("momSafetyWarning")) {

            const warning = document.createElement("div");

            warning.id = "momSafetyWarning";

            warning.innerHTML = `
                <strong>⚠ Pause.</strong><br>
                This page may be trying to scare you.<br><br>
                Do not call numbers.<br>
                Do not buy anything.<br>
                Close the tab and call Cody first.
            `;

            Object.assign(warning.style, {
                position: "fixed",
                top: "0",
                left: "0",
                right: "0",
                zIndex: "999999999",
                background: "#fff3cd",
                color: "#3b2f00",
                padding: "20px",
                textAlign: "center",
                fontSize: "20px",
                fontFamily: "Arial",
                borderBottom: "4px solid #d39e00",
                boxShadow: "0 4px 12px rgba(0,0,0,.3)"
            });

            document.body.appendChild(warning);
        }
    }

    scanPage();
    setInterval(scanPage, 2000);

})();
