import { useState } from "react";
import { BsGithub, BsGlobe2, BsLinkedin } from "react-icons/bs";

const Desarroladores = () => {
  const [open, setOpen] = useState(false);
  const info = [
    {
      nombre: "Adib Raed",
      linkedIn: "https://www.linkedin.com/in/adib-raed-a9376823a/",
      gitHub: "https://github.com/adibzr",
      portforlio: "",
    },
    {
      nombre: "Agustin Puggioni",
      linkedIn: "https://www.linkedin.com/in/agustin-puggioni/",
      gitHub: "https://github.com/puggioni",
      portforlio: "",
    },
    {
      nombre: "Manuel Seisdedos",
      linkedIn: "",
      gitHub: "https://github.com/ManuelSeisdedos",
      portforlio: "",
    },
    {
      nombre: "Gonzalo Dos Santos",
      linkedIn: "",
      gitHub: "https://github.com/gon2santos",
      portforlio: "",
    },
    {
      nombre: "Ignacio Silva",
      linkedIn: "",
      gitHub: "https://github.com/ignacioansilva",
      portforlio: "",
    },
    {
      nombre: "Jaime Gutièrrez",
      linkedIn: "",
      gitHub: "https://github.com/Riguja89",
      portforlio: "",
    },
  ];

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="absolute top-[1rem] left-[2rem] font-bold bg-[#855C20] text-xl px-4 py-2"
      >
        Creadores
      </button>
      <div
        className={`inline-block absolute top-[4rem] ${
          open ? " translate-y-0 scale-100" : "scale-0 -translate-y-[50%]"
        } ease-in-out duration-200 p-8 mx-6 bg-white text-black border border-black`}
      >
        {info.map((info) => (
          <div className=" grid grid-cols-[3fr_.5fr_.5fr_.5fr] items-center gap-2 m-3 border border-black p-2 rounded-lg mx-auto">
            {info.nombre}
            <a
              href={info.linkedIn}
              target="_blank"
              className=""
              rel="noreferrer"
            >
              <BsLinkedin fill={"#0a66c2"} />
            </a>
            <a
              href={info.gitHub}
              target="_blank"
              className="inline-block"
              rel="noreferrer"
            >
              <BsGithub fill="black" />
            </a>
            <a
              href={info.portforlio}
              target="_blank"
              className="inline-block"
              rel="noreferrer"
            >
              <BsGlobe2 fill="black" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Desarroladores;
