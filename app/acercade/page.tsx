import { title } from "@/components/primitives";
import { Avatar, AvatarGroup, AvatarIcon } from "@nextui-org/avatar";
export default function AboutPage() {
  return (
    <div>
      <h1 className={title()}>Acerca de</h1>
      <div className="flex gap-3 items-center ">
        <Avatar src="./avatar.jpg" className="w-20 h-20 text-large" />

      </div>
      <div className="mt-8">
        Hola, soy Luis!. Desarrollador Web Full Stack, dedicado a la enseñanza y el avance de la tecnología. Con años de experiencia en programación, robótica y enseñanza, estoy comprometido a guiar a mis estudiantes y colaboradores en la creación de proyectos impresionantes en diversos campos. Si estás interesado en aprender a crear mundos digitales emocionantes, mejorar tus habilidades y competencias digitales, o simplemente explorar el mundo de la robótica y la tecnología, estoy aquí para guiarte en el camino hacia el éxito.
      </div>
    </div>
  );
}
