import { subtitle, title } from "@/components/primitives";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="max-w-lg text-center justify-center space-y-4">
        <h1 className={title()}>Caroline Vella</h1>
        <p className={subtitle()}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident
          quia, officiis vel sequi iste hic! Voluptatibus repellat ducimus
          beatae quas id ad, possimus alias ipsam voluptates incidunt vitae
          repellendus laborum. Placeat nostrum accusantium iure laboriosam
          eligendi reiciendis ipsa nihil explicabo, vitae officiis qui
          repellendus mollitia non veritatis neque tempora, incidunt sit numquam
          eveniet consectetur beatae? Modi numquam mollitia tenetur nihil?
        </p>
        <br />
      </div>
    </section>
  );
}
