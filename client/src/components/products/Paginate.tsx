import { BiChevronsLeft, BiChevronsRight } from "react-icons/bi";

interface props {
  allProducts: number;
  productsPerPage: number;
  setCurrentPage: any;
  currentPage: number;
  maxPageNumberLimit: number;
  setMaxPageNumberLimit: any;
  pageLimit: number;
  setMinPageNumberLimit: any;
  minPageNumberLimit: number;
  setActive: any;
  active: number;
}

const Paginate = (props: props) => {
  // const [active, setActive] = useState(props.currentPage);
  const pageNumbers: number[] = [];
  for (
    let i = 1;
    i <= Math.ceil(props.allProducts / props.productsPerPage);
    i++
  ) {
    pageNumbers.push(i);
  }

  //==========================handlers=================================0
  const handleNextBtn = () => {
    if (pageNumbers.length > props.currentPage) {
      props.setActive((prev: number) => prev + 1);
      props.setCurrentPage((prev: number) => prev + 1);
      if (props.currentPage + 1 > props.maxPageNumberLimit) {
        props.setMaxPageNumberLimit(props.maxPageNumberLimit + props.pageLimit);
        props.setMinPageNumberLimit(props.minPageNumberLimit + props.pageLimit);
      }
    }
  };
  const handlePrevBtn = () => {
    if (1 < props.currentPage) {
      props.setActive((prev: number) => prev - 1);
      props.setCurrentPage((prev: number) => prev - 1);
      if ((props.currentPage - 1) % props.pageLimit === 0) {
        props.setMaxPageNumberLimit(props.maxPageNumberLimit - props.pageLimit);
        props.setMinPageNumberLimit(props.minPageNumberLimit - props.pageLimit);
      }
    }
  };
  //============================puntitos======================0
  let pageIncrementBtn = null;
  if (pageNumbers.length > props.maxPageNumberLimit) {
    pageIncrementBtn = (
      <li onClick={handleNextBtn} className="list-none">
        &hellip;
      </li>
    );
  }
  let pageDecrement = null;
  if (pageNumbers.length < props.maxPageNumberLimit) {
    pageDecrement = pageIncrementBtn = (
      <li onClick={handlePrevBtn} className="list-none ">
        &hellip;
      </li>
    );
  }

  //===========================render====================
  return (
    <div className=" text-center w-full flex items-center  justify-center ">
      <button
        onClick={handlePrevBtn}
        className={`border border-black rounded-lg font-bold text-base bg-white text-black lg:h-9 lg:mb-2 py-1 px-3 lg:my-10 lg:mx-3  hover:text-[#855C20] hover:border-[#855C20]`}
      >
        <BiChevronsLeft />
      </button>

      {pageDecrement}
      <div className="lg:m-4">
        {pageNumbers.map((page, index) => {
          if (
            page < props.maxPageNumberLimit + 1 &&
            page > props.minPageNumberLimit
          ) {
            return (
              <button
                key={index}
                className={`${
                  props.active === index
                    ? "text-[#855C20] border-[#855C20]"
                    : ""
                }  border border-black rounded-lg font-bold text-base bg-white text-black lg:h-9 lg:mb-2 py-1 px-3 lg:my-10 lg:mx-3 hover:text-[#855C20] hover:border-[#855C20]`}
                onClick={() => {
                  props.setActive(index);
                  props.setCurrentPage(page);
                }}
              >
                {page}
              </button>
            );
          } else {
            return null;
          }
        })}
      </div>
      {pageIncrementBtn}

      <div>
        <button
          onClick={handleNextBtn}
          className={`border border-black rounded-lg font-bold text-base bg-white text-black lg:h-9 lg:mb-2 py-1 px-3 lg:my-10 lg:mx-3  hover:text-[#855C20] hover:border-[#855C20]`}
        >
          <BiChevronsRight />
        </button>
      </div>
    </div>
  );
};

export default Paginate;
