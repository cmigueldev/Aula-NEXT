import Image from "next/image";

export default function Home() {
  return (
    <div className="container">
      <h1>
        Bem vindo ao ifpb
      </h1>
      <Image
      src="/logo-ifpb.png"
      alt="logo ifpb"
      width={300} 
      height={250}
      />

      <p>Explore nossa coleção de livros, artigos e recursos digitais</p>
    </div>
  );
}
