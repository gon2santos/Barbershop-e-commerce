import { useEffect, useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { RootState } from "../../app/store";
import ProductCard from "./ProductCard";
import { VscArrowLeft } from "react-icons/vsc";
import { useNavigate } from "react-router";
import { getFavoritesProducts, setFavosBulk } from "../slices/productSlice";
import { setFavorites } from "../slices/productSlice";
import { useState } from "react";
import Paginate from "./Paginate";

export default function Favorites() {
  const dispatch = useAppDispatch();
  var favoritos = useAppSelector((state: RootState) => state.products.favs);
  let navigate = useNavigate();
  const favoritosUser = JSON.stringify(favoritos);

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [productsPerPage] = useState(8);
  const [pageLimit] = useState(5);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);
  const lastPostIndex = currentPage * productsPerPage;
  const firstPostIndex = lastPostIndex - productsPerPage;

  const cargarFavs = () => {
    const aux = window.localStorage.getItem("user");
    const aux2 = window.localStorage.getItem("token");
    const aux3 = window.localStorage.getItem("favoritos");

    if (aux && aux2 && aux3) {
      // esta parte es para traerse los favoritos si el usuario se logueo
      const user = JSON.parse(aux);
      const token = JSON.parse(aux2);
      const favos = JSON.parse(aux3);
      const arrayIdsfavos = favos.map((p: any) => p._id);

      window.localStorage.removeItem("favoritos");
      dispatch(setFavosBulk(user._id, token, arrayIdsfavos));
    } else if (aux && aux2) {
      const user = JSON.parse(aux);
      const token = JSON.parse(aux2);
      dispatch(getFavoritesProducts(user._id, token));
    } else if (aux3) {
      const favos = JSON.parse(aux3);
      dispatch(setFavorites(favos));
    }
  };

  const inicializar = useCallback(async () => {
    cargarFavs();
  }, [dispatch]);

  useEffect(() => {
    inicializar();

    return () => {};
  }, [dispatch]);

  useEffect(() => {
    inicializar();
    return () => {};
  }, [dispatch, inicializar]);

  const goBack = () => {
    navigate(-1);
  };
  if (favoritos instanceof Array) {
    const currentFavs = favoritos.slice(firstPostIndex, lastPostIndex);
    return (
      <div className=" bg-white lg:bg-store-banner bg-no-repeat lg:pt-52 lg:pb-2 bg-contain">
        <VscArrowLeft onClick={() => goBack()} className="h-7 w-7 fill-white" />
  
  
        <div className="border bg-white lg:border-black rounded-xl p-3 mx-4 mt-10 ">
        <h1 className="flex justify-center pb-4 lg:pb-10 pt-5 lg:text-6xl text-5xl">
          MIS FAVORITOS
        </h1>
          <div className="lg:grid lg:grid-cols-4 lg:gap-4 lg:p-10 lg:mx-4   ">
            {currentFavs?.map((Favoritos: any) => (
              <ProductCard
                key={Favoritos._id}
                _id={Favoritos._id}
                name={Favoritos.name}
                image={Favoritos.image}
                price={Favoritos.price}
                rating={10}
                available={Favoritos.available}
                userFavorite={favoritosUser.includes(Favoritos._id)}
              />
            ))}
          </div>
          <br />
          <Paginate
            allProducts={favoritos.length}
            productsPerPage={productsPerPage}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
            pageLimit={pageLimit}
            maxPageNumberLimit={maxPageNumberLimit}
            minPageNumberLimit={minPageNumberLimit}
            setMaxPageNumberLimit={setMaxPageNumberLimit}
            setMinPageNumberLimit={setMinPageNumberLimit}
          />
        </div>
      </div>
    );
  } else return <h1>Aún no hay productos favoritos</h1>;
  }
