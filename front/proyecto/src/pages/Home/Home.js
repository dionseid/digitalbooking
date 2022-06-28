import React, { useState } from "react";
import CardRecomendacion from "../../components/component/Cards/CardRecomendaciones/CardRecomendaciones";
import CardAlojamiento from "../../components/component/Cards/CardAlojamiento/CardAlojamiento";
import Footer from "../../components/component/Footer/Footer";
import Navbar from "../../components/component/Navbar/Navbar";
import Banner from "../../components/component/Banner/Banner";
import "./home.scss";

const Home = ({ authenticated }) => {
  const [search, setSearch] = useState(0);
  const [filter, setFilter] = useState(0);
  const [filterCategoria, setFilterCategoria] = useState(0);
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;

  const handleClick = () => {
    setFilter(search);
  };

  const onDoubleClick = (searchCategoria, e) => {
    setFilterCategoria(searchCategoria);
    console.log("categoria: ", filterCategoria);
  };

  const onClick = () => {
    setFilterCategoria(null);
    setFilter(null);
    setDateRange([null, null]);
  };

  return (
    <div id="page-wrap">
      <header>
        <Navbar authenticated={authenticated} onClick={onClick} />
        <Banner
          startDate={startDate}
          endDate={endDate}
          setDateRange={setDateRange}
          onChange={setSearch}
          onClick={handleClick}
        />
      </header>
      <body>
        <section className="Alojamiento">
          <h2>Buscar por tipo de alojamiento</h2>
          <CardAlojamiento
            idCategoria={filterCategoria}
            setIdCategoria={setFilterCategoria}
            onDoubleClick={onDoubleClick}
          />
        </section>
        <section className="Recomendaciones">
          <h2>Recomendaciones</h2>
          <CardRecomendacion
            selectCiudad={filter}
            selectCategoria={filterCategoria}
            startDate={startDate}
            endDate={endDate}
          />
        </section>
      </body>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Home;
