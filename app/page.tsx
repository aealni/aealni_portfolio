import Image from "next/image";
import { socialLinks } from "./config";


export default function Page() {
  return (
    <section>
      <a href={socialLinks.linkedin} target="_blank">
        <Image
          src="/profile.jpg"
          alt="Profile photo"
          className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5"
          unoptimized
          width={160}
          height={160}
          priority
        />
      </a>

      <h1 className="mb-8 text-2xl font-medium tracking-tight">
        About Me
      </h1>

      <div className="prose prose-neutral dark:prose-invert">
        <p>
          Hi! My name is Jeffrey Lu. I am pursuing a B.S. in Computer Science at 
          the University of Illinois Urbana-Champaign. My interests lie at the 
          intersection of computer science and innovation, and I am passionate 
          about leveraging technology to solve real-world problems.
        </p>
        <p>
          During my academic journey, I’ve worked on diverse projects ranging from 
          software development to data-driven research, exploring fields such as AI, 
          machine learning, and simulations. I enjoy diving deep into complex challenges, 
          whether it’s through hands-on coding, algorithm optimization, or uncovering 
          insights from data.
        </p>
        <p>
          Beyond academics, I’ve had the privilege of mentoring students, engaging in 
          community outreach, and sharing my passion for learning through programs I’ve 
          developed. When I’m not coding, you’ll often find me immersed in strategy or 
          rhythm games, stargazing to explore my love for astronomy, reading about 
          emerging technologies, or discovering new ways to challenge myself.
        </p>
        <p>
          Feel free to check out my projects and blog posts to learn more about my work and interests!
        </p>
      </div>
    </section>
  );
}
