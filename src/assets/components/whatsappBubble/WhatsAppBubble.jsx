// WhatsAppBubble.jsx
import React from "react";

import "./whatsAppBubble.css";

const message = encodeURIComponent(
  "Hola! Vi su sitio y me gustaría obtener más información."
);
const url = `https://api.whatsapp.com/send?phone=541167907664&text=${message}`;

const WhatsAppBubble = () => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="whatsapp-bubble"
  >
    <img src="img/wspico.png" alt="WhatsApp" />
  </a>
);

export default WhatsAppBubble;
