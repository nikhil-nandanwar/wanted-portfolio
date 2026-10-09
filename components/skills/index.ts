import type { ComponentType, SVGProps } from "react";
import { HTML5 } from "./html";
import { CSS } from "./css";
import { JavaScript } from "./javascript";
import { React } from "./reactJs";
import { Nodejs } from "./nodeJs";
import { C } from "./cSharp";
import { MicrosoftNET } from "./dotNet";
import { Angular } from "./angular";
import { MongoDB } from "./mongoDB";
import { Cpp } from "./cpp";
import { PostgreSQL } from "./postgreSQL";
import { Docker } from "./docker";
import { Git } from "./git";
import { Expo } from "./expo";
import { TailwindCSS } from "./tailwindCss";
import { Nextjs } from "./nextJs";

type Icon = ComponentType<SVGProps<SVGSVGElement>>;

export const skillIcons: Record<string, Icon> = {
  HTML5, CSS3: CSS, JavaScript, React, "Node.js": Nodejs, "C#": C,
  ".NET": MicrosoftNET, Angular, MongoDB, "C++": Cpp, SQL: PostgreSQL,
  Docker, Git, "React Native": Expo, TailwindCSS, "Next.js": Nextjs,
};