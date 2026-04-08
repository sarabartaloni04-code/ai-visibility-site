export default function AIBrandVisibilityWebsite() {
  const services = [
    {
      title: "AI Search Analysis",
      description:
        "Analizziamo come il tuo brand appare nelle risposte generate da ChatGPT, Claude e altri sistemi, identificando presenza, tono e opportunità di crescita.",
    },
    {
      title: "Prompt Intelligence",
      description:
        "Studiamo i prompt reali utilizzati dagli utenti per scoprire prodotti e aziende, così da posizionare il tuo brand nei momenti decisivi.",
    },
    {
      title: "Visibility Strategy",
      description:
        "Costruiamo una strategia per aumentare la probabilità che il tuo brand venga citato e raccomandato nelle risposte AI.",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <main className="mx-auto max-w-6xl px-6 py-12">

        <header className="flex items-center justify-between border-b border-green-500/20 pb-6">
          <div className="text-xl font-semibold tracking-wide text-green-400">
            AI Visibility
          </div>
          <nav className="hidden gap-8 text-sm text-white/60 md:flex">
            <a href="#servizi" className="hover:text-green-400">Servizi</a>
            <a href="#contatti" className="hover:text-green-400">Contatti</a>
          </nav>
        </header>

        <section className="py-20">
          <h1 className="text-5xl font-semibold leading-tight tracking-tight">
            Il tuo brand deve esistere
            <span className="block text-green-400">nelle risposte delle AI.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/70">
            Le persone non cercano più solo su Google. Oggi chiedono direttamente agli assistenti come ChatGPT o Claude. Noi analizziamo queste ricerche e costruiamo strategie per far emergere il tuo brand nelle risposte generate.
          </p>
        </section>

        <section id="servizi" className="py-12">
          <h2 className="text-3xl font-semibold text-green-400">
            Servizi essenziali
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-2xl border border-green-500/20 bg-black p-6 transition hover:border-green-400"
              >
                <h3 className="text-xl font-medium text-white">
                  {service.title}
                </h3>
                <p className="mt-4 text-white/70 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-20">
          <div className="border border-green-500/20 rounded-2xl p-10">
            <h2 className="text-3xl font-semibold">
              Un nuovo tipo di SEO
            </h2>
            <p className="mt-6 text-white/70 max-w-2xl">
              Non si tratta più solo di posizionarsi nei risultati di ricerca, ma di essere presenti nelle risposte. Questo richiede un approccio diverso, basato su linguaggio, contesto e interpretazione delle AI.
            </p>
          </div>
        </section>

        <section id="contatti" className="py-12">
          <h2 className="text-3xl font-semibold text-green-400">
            Contattaci
          </h2>

          <form className="mt-8 max-w-xl space-y-5">
            <input
              type="text"
              placeholder="Nome"
              className="w-full border border-green-500/20 bg-black px-4 py-4 text-white outline-none focus:border-green-400"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full border border-green-500/20 bg-black px-4 py-4 text-white outline-none focus:border-green-400"
            />
            <textarea
              rows={4}
              placeholder="Di cosa hai bisogno"
              className="w-full border border-green-500/20 bg-black px-4 py-4 text-white outline-none focus:border-green-400"
            />
            <button className="w-full bg-green-500 text-black py-4 font-medium hover:bg-green-400">
              Invia
            </button>
          </form>
        </section>

        <footer className="mt-16 border-t border-green-500/20 pt-6 text-sm text-white/40">
          AI Visibility Studio
        </footer>
      </main>
    </div>
  );
}
