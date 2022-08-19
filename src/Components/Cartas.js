import CartasMitosYLeyendas from "../utils/jsons/cartasMitosYLeyendas.json";
import Carta from "./Carta";
const Cartas = () => {
  return (
    <div class="container text-center">
      <div class="row">
        {CartasMitosYLeyendas.map((carta, index) => (
          <div class="col-4">
            <Carta
              nombre={carta.nombre}
              imagen={carta.imagen}
              historia={carta.historia}
              key={index}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cartas;
