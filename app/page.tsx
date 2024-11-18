import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-xl text-center justify-center">
        <span className={title()}>Luis&nbsp;</span>
        <span className={title({ color: "violet" })}>Subiabre&nbsp;</span>
        <br />
        <span className={title()}>
          Tecnología Educativa
        </span>
        <div className={subtitle({ class: "mt-4" })}>
          Robótica, programación y educación.
        </div>
      </div>

      <div className="flex gap-3">

        <Link
          isExternal
          className={buttonStyles({ variant: "bordered", radius: "full" })}
          href={siteConfig.links.github}
        >
          <GithubIcon size={20} />
          GitHub
        </Link>
      </div>
      <div className="mt-8">
        Hola, soy Luis!. Desarrollador Web Full Stack, dedicado a la enseñanza y el avance de la tecnología. Con años de experiencia en programación, robótica y enseñanza, estoy comprometido a guiar a mis estudiantes y colaboradores en la creación de proyectos impresionantes en diversos campos. Si estás interesado en aprender a crear mundos digitales emocionantes, mejorar tus habilidades y competencias digitales, o simplemente explorar el mundo de la robótica y la tecnología, estoy aquí para guiarte en el camino hacia el éxito.
      </div>
      <div className="mt-8">
        <Snippet hideCopyButton hideSymbol variant="bordered">
          <span>
            Get started by editing <Code color="primary">app/page.tsx</Code>
          </span>
        </Snippet>
      </div>
    </section>
  );
}
