import Header from "../../components/header/Header.jsx";
import "../../components/header/header.css";
import "./testify.css";

function Testify() {
  return (
    <div className="testify-container">
      <Header />
      <h1 className="testify-title">Testimonios de Nuestros Clientes</h1>

      <section className="testify-list">
        <div className="testify-card">
          <h3>María Gómez • Palermo, CABA</h3>
          <p>
            “La experiencia fue excelente. Pude comprar vinos boutique que no
            encontraba en ningún lado y a un precio muchísimo más accesible.
            Mucho mejor que cualquier club del vino: más variedad, entrega
            rápida y atención personalizada.”
          </p>
        </div>

        <div className="testify-card">
          <h3>Carlos Herrera • Córdoba Capital</h3>
          <p>
            “Lo que más me sorprendió fue lo sencillo que es comprar. Seleccioné
            las botellas, apreté comprar y ya estaba hablando con un agente por
            WhatsApp. Todo transparente, económico y sin vueltas. Los recomiendo
            100%.”
          </p>
        </div>

        <div className="testify-card">
          <h3>Luciana Pérez • Rosario, Santa Fe</h3>
          <p>
            “Se nota que trabajan con bodegas reales, chicos que están
            arrancando pero hacen vinos increíbles. Probé etiquetas que después
            terminaron ganando premios. Calidad altísima y precios súper
            razonables.”
          </p>
        </div>

        <div className="testify-card">
          <h3>Federico Rivas • Mendoza</h3>
          <p>
            “Soy de Mendoza y aún así WinerWines me sorprendió con varietales
            que ni conocía. La curaduría que hacen es impecable. No es solo
            vender vinos, es acercar cultura.”
          </p>
        </div>

        <div className="testify-card">
          <h3>Daniela Alarcón • Mar del Plata</h3>
          <p>
            “Antes estaba suscrita a un club del vino y pagaba el doble por 2
            botellas comunes. Con WinerWines tengo más opciones, mejores vinos y
            gasto menos. Ya hice 3 pedidos y siempre llegó todo perfecto.”
          </p>
        </div>

        <div className="testify-card">
          <h3>Joaquín Paredes • Tucumán</h3>
          <p>
            “Los contacté por recomendación y la verdad superaron mis
            expectativas. Súper atentos, rápidos y con etiquetas que no se
            consiguen en mi provincia. Vale cada peso que gastás.”
          </p>
        </div>
      </section>
    </div>
  );
}

export default Testify;
