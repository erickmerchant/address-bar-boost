const div = document.createElement("div");

div.attachShadow({ mode: "open" });

div.shadowRoot.innerHTML = `
  <style>
    :host { 
      position: fixed;
      bottom: 0;
      right: 0;
      z-index: 2147483647 !important;
      transform: translateY(var(--bottom, 0));
      transition: transform linear 0.25s;
      transition-delay: 0.25s;
    }

    div {      
      color: hsl(0 0% 100%); 
      background: hsl(0 0% 0% / 0.75); 
      font-family: system-ui;
      font-size: 16px; /* sorry! */
      line-height: 1; 
      padding: 0.5em; 
      border-radius: 0.5em 0 0 0;
      border: 0.25px solid currentColor;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      max-width: 100%;
    }
  </style>
  <div>${window.location.protocol === "https:" ? "🔒" : ""} ${
  window.location.href
}</div>
`;

div.addEventListener("mouseover", () => {
  div.style.setProperty("--bottom", "100%");

  setTimeout(() => {
    div.style.setProperty("--bottom", "0");
  }, 15000);
});

document.body.after(div);
