import { BsCart2 } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";

export default function Header() {
  return (
    <header>
      <section className="mini-header">
        <p>
          Ganhe <span className="header-price">R$10,00</span> de desconto no seu
          primeiro pedido. Utilize o cupom{' '}
          <span className="header-cupom">DESCONTO10</span>
        </p>
      </section>

      <section>

      <section>
        <div>
          <figure>
            <img src="/logo_avanti.svg" alt="Logo da Avanti" />
          </figure>
          <div>
            <input type="search" placeholder="Digite o que você procura" />
            <IoIosSearch />
          </div>
        </div>
      </section>

      <section>
        <FaRegUser />
        <p>Olá, Nome cliente!</p>
        <BsCart2 />
      </section>
      </section>

    </header>
  );
}
