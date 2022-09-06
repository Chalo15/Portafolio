import photo from "./img/photo.jpg";
import Avatar from "@mui/material/Avatar";
function HomeBody() {
  return (
    <main>
      <div className=" h-screen md:cotainer md:mx-auto bg-gradient-to-r from-[#668A89] to-[#8CBDBC]')] py-20">
        <div >
          <Avatar className="mx-auto" src={photo} sx={{ width: 300, height: 300 }} />
        </div>

        <div className=" bg-slate-300 text-center my-10 mx-8 p-20 ">
          <p className="leading-relaxed text-2xl">
            <span className="text-2xl font-bold">Hola</span>, mi nombre es{" "}
            <span className="text-2xl font-bold">Gonzalo Umaña Cespedes </span>{" "}
            y me desempeño en el desarrollo de{" "}
            <span className="text-2xl font-bold">software</span>, soy una
            persona muy entusiasta en el{" "}
            <span className="text-2xl font-bold">
              {" "}
              desarrollo e investigación
            </span>{" "}
            de nuevas <span className="text-xl font-bold">tecnologías</span>. Me
            encacnta afrontar nuevos retos en áreas nuevas que no se encunetren
            dentro de mi zona de confort.
          </p>
        </div>
      </div>
    </main>
  );
}

export default HomeBody;
