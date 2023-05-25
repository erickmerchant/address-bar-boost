const addressBar = document.createElement("address-bar");

addressBar.attachShadow({ mode: "open" });

addressBar.shadowRoot.innerHTML = `
  <style>
    * {
      box-sizing: border-box;
    }

    :host {
      display: block;
      position: fixed;
      bottom: 0;
      right: 0;
      z-index: 2147483647 !important;
      transform: translateY(var(--bottom, 0));
      transition: transform linear 0.25s;
      transition-delay: 0.25s;
    }

    div {      
      color: var(--arc-palette-title, hsl(0 0% 100%)); 
      background: var(--arc-palette-backgroundExtra, hsl(0 0% 0% / 0.75)); 
      font-family: system-ui, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
      font-size: 12px; /* sorry! */
      line-height: 1; 
      padding: 0.5em; 
      border-radius: 0.5em 0 0 0;
      border-left: 0.25px solid currentColor;
      border-top: 0.25px solid currentColor;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      max-width: 98vw;
      user-select: none;
    }
  </style>
  <div>${window.location.protocol === "https:" ? "🔒" : "🚧"} ${window.location.href}</div>
`;

addressBar.addEventListener("mouseover", () => {
  addressBar.style.setProperty("--bottom", "100%");

  setTimeout(() => {
    addressBar.style.setProperty("--bottom", "0");
  }, 15000);
});

document.body.after(addressBar);
