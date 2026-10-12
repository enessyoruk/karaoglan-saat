import { Reveal } from "@/components/Reveal";

const principles = [
  {
    title: "%100 Orijinallik Garantisi",
    body: "Uzman ekspertiz kontrolüyle",
  },
  {
    title: "Güvenilir Teslimat",
    body: "Sigortalı ve özenli sevkiyat",
  },
  {
    title: "Şeffaf Ticaret",
    body: "Fiziksel işletmemizde birebir güven ve muhatap",
  },
];

export function Trust() {
  return (
    <section id="guven" className="bg-black">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-3 md:gap-8 md:px-10 lg:px-14">
        {principles.map((p, i) => (
          <Reveal key={p.title} delay={i * 120} className="px-0 py-8 text-center md:px-8">
            <h3 className="text-[13px] font-medium tracking-[0.14em] text-white">
              {p.title}
            </h3>
            <p className="mt-2 text-[12px] leading-5 text-white/40">{p.body}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
