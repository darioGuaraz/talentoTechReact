import Header from "../../components/header/Header.jsx";
import "../../components/header/header.css";

import "./about.css";

function About() {
  return (
    <div className="about-container">
      <header>
        <video
          src="img/heroVideoAbout.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="video-header"
        ></video>
        <img src="img/headerlogo1.png" className="hero-logo" alt="" />
      </header>
      <h1>Quiénes Somos</h1>

      <article className="about-intro">
        <p>
          En WinerWines nos dedicamos a conectar a nuestros clientes con los
          mejores vinos boutique de Argentina. Trabajamos con bodegas pequeñas,
          proyectos impulsados por enólogos e ingenieros apasionados, y
          productores que buscan destacar en el mercado sin perder su esencia
          artesanal.
        </p>
        <p>
          Seleccionamos cada etiqueta cuidadosamente, filtrando entre
          proveedores tradicionales y plataformas de pedidos online para ofrecer
          siempre la mejor relación calidad–precio, sin sobrecargar al cliente.
          Nuestro objetivo es acercarte experiencias, cultura y vinos de origen
          nacional.
        </p>
      </article>

      <div className="about-values">
        <h2>Nuestros Valores</h2>
        <div className="values-grid">
          <div className="value-card">
            <h3>Curaduría Responsable</h3>
            <p>
              Elegimos vinos que creemos que valen la pena descubrir: bodegas
              pequeñas, etiquetas emergentes y proyectos boutique que suelen
              explotar luego de concursos internacionales. Queremos que
              encuentres calidad real sin pagar precios inflados.
            </p>
          </div>

          <div className="value-card">
            <h3>Transparencia</h3>
            <p>
              No buscamos vender por vender. Ofrecemos precios honestos y
              información clara, porque creemos que disfrutar un buen vino no
              debería ser un lujo inaccesible.
            </p>
          </div>

          <div className="value-card">
            <h3>Cultura & Origen</h3>
            <p>
              Promovemos productos nacionales y acercamos la riqueza del vino
              argentino, tierra de cepas únicas y tradiciones que nos
              representan en todo el mundo.
            </p>
          </div>
        </div>
      </div>

      <div className="about-mission">
        <h2>Nuestra Misión</h2>
        <p>
          Democratizar el acceso a vinos boutique y experiencias auténticas,
          brindando una selección cuidada, precios accesibles y un servicio
          personalizado. Queremos que cada cliente descubra nuevas bodegas,
          nuevos sabores y la pasión detrás de cada etiqueta.
        </p>
      </div>

      <div className="about-vision">
        <h2>Nuestra Visión</h2>
        <p>
          Convertirnos en la plataforma de referencia para quienes buscan vinos
          distintos, exclusivos y accesibles. Aspiramos a impulsar proyectos
          locales y ayudar a que nuevas bodegas ganen el reconocimiento que
          merecen.
        </p>
      </div>

      <div className="about-team">
        <h2>Cómo Funciona Nuestra Plataforma</h2>
        <p>
          En WinerWines podés explorar nuestra selección de productos, ver
          precios, descripciones y datos de contacto. Agregá los vinos que más
          te gusten al carrito y, al presionar “Comprar”, te llevaremos
          directamente a WhatsApp con un mensaje automático detallando tu
          pedido.
        </p>
        <p>
          Uno de nuestros agentes se comunicará con vos para coordinar el envío
          a través de correo tradicional, Webpack, Andreani u otras alternativas
          según tu zona. Todo simple, rápido y sin vueltas.
        </p>
      </div>
    </div>
  );
}

export default About;
