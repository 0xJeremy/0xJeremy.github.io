/**
 * Projects Content
 *
 * Edit this file to add, remove, or modify projects displayed on the site.
 * Each project can have multiple images, with one designated as the main/cover image.
 *
 * Projects migrated from old website (0xJeremy.github.io).
 * Featured projects: Hexapod, Meteorites, Daedalus (displayed in showcase section)
 * Other projects: Displayed in grid below featured section
 */

/** Single image in a project gallery */
export interface ProjectImage {
  /** Image URL (relative or absolute) */
  url: string;
  /** Alt text for accessibility */
  alt: string;
  /** Whether this is the main/cover image shown on cards */
  isMain?: boolean;
}

/** Technology tag for a project */
export interface ProjectTag {
  /** Display label */
  label: string;
  /** Optional color override (uses accent color if not specified) */
  color?: string;
}

/** Full project data structure */
export interface Project {
  /** Unique identifier for the project */
  id: string;
  /** Project name/title */
  name: string;
  /** Short description (1-2 sentences, shown on card) */
  shortDescription: string;
  /** Full description (shown on detail page) */
  fullDescription?: string;
  /** Project images - at least one should have isMain: true */
  images: ProjectImage[];
  /** Technology/skill tags */
  tags: ProjectTag[];
  /** Link to source code (e.g., GitHub) */
  sourceUrl?: string;
  /** Internal route to project detail page */
  detailUrl: string;
  /** Whether this project is featured/highlighted */
  featured?: boolean;
}

/**
 * Helper to get the main image from a project's images array.
 * Falls back to first image if none marked as main.
 */
export const getMainImage = (
  images: ProjectImage[],
): ProjectImage | undefined => {
  return images.find((img) => img.isMain) ?? images[0];
};

/** Base path for project images (includes Vite base path) */
const IMAGE_PATH = "/static/projects";

/**
 * Projects data - edit this array to change displayed projects
 */
export const projectsContent: Project[] = [
  // ==================== FEATURED PROJECTS ====================
  {
    id: "hexapod",
    name: "Hexapod Robot",
    shortDescription:
      "This was the final project for Tufts ME-134 (Advanced Robotics) in Fall 2020. We were tasked with creating a robot that could navigate an obstacle course (containing a tunnel, wall, and rough terrain) autonomously.",
    fullDescription:
      "This robot was made for the final project of Tufts ME-134 (Advanced Robotics) in the Fall of 2020. The prompt was to create a robot capable of navigating an obstacle course (comprised of a tunnel to go through, a wall to climb over, and a patch of rough terrain) autonomously. This hexapod uses a Raspberry Pi 4 (and camera) to perform the onboard processing and 18 high-torque servo motors for actuation. It did pretty well on the wall.",
    images: [
      {
        url: `${IMAGE_PATH}/hexapod/hexapod_isometric.JPG`,
        alt: "Hexapod robot isometric view",
        isMain: true,
      },
      {
        url: `${IMAGE_PATH}/hexapod/hexapod_1.jpg`,
        alt: "Hexapod robot view 1",
      },
      {
        url: `${IMAGE_PATH}/hexapod/hexapod_2.jpg`,
        alt: "Hexapod robot view 2",
      },
      {
        url: `${IMAGE_PATH}/hexapod/hexapod_3.jpg`,
        alt: "Hexapod robot view 3",
      },
      {
        url: `${IMAGE_PATH}/hexapod/hexapod_4.jpg`,
        alt: "Hexapod robot view 4",
      },
      {
        url: `${IMAGE_PATH}/hexapod/hexapod_5.jpg`,
        alt: "Hexapod robot view 5",
      },
      {
        url: `${IMAGE_PATH}/hexapod/hexapod_6.jpg`,
        alt: "Hexapod robot view 6",
      },
      {
        url: `${IMAGE_PATH}/hexapod/hexapod_7.jpg`,
        alt: "Hexapod robot view 7",
      },
      {
        url: `${IMAGE_PATH}/hexapod/hexapod_8.jpg`,
        alt: "Hexapod robot view 8",
      },
    ],
    tags: [
      { label: "Raspberry Pi" },
      { label: "Python" },
      { label: "Solidworks" },
    ],
    sourceUrl: "https://github.com/0xJeremy/me134/tree/master/final",
    detailUrl: "/projects/hexapod",
    featured: true,
  },
  {
    id: "meteorites",
    name: "Meteorite Visualizer",
    shortDescription:
      "This is a meteorite impact visualizer made for COMP-177 (Data Visualization) at Tufts in Spring 2020.",
    fullDescription:
      "This website was made as the final project in Tufts COMP-177 Data Visualization in the Spring of 2020. The prompt was to create a website to display a dataset in a number of different ways, and to allow the user to explore the dataset. We used a dataset provided by NASA which lists all the known meteorite impacts on Earth dating back to the 1800s. We built the site with React.js and D3.js. It can be viewed live at lab84.org.",
    images: [
      {
        url: `${IMAGE_PATH}/meteorites/meteorites.png`,
        alt: "Meteorite visualizer interface",
        isMain: true,
      },
    ],
    tags: [
      { label: "React.js" },
      { label: "Visualization" },
      { label: "Heroku" },
    ],
    sourceUrl: "https://github.com/0xJeremy/Meteorite-Visualizer/",
    detailUrl: "/projects/meteorites",
    featured: true,
  },
  {
    id: "daedalus",
    name: "Daedalus BLDC Motor Controller",
    shortDescription:
      "This is a custom PCB designed to drive high-speed, high-power brushless motors. It includes current monitoring and positional feedback, turning the brushless motor into a high-torque servo motor.",
    fullDescription:
      "This PCB is the Daedalus High-Power BLDC Motor Controller. Using the on-board magnetic encoder it can turn a regular brushless DC motor into a high-power, ultra high-precision servo motor. It uses CAN bus communication, and cable be daisy chained together with other Daedalus controllers. This is one of the first PCBs I have designed, and I expect to iterate on it in the future.",
    images: [
      {
        url: `${IMAGE_PATH}/daedalus/Daedalus_Brackets_Board.png`,
        alt: "Daedalus board render",
        isMain: true,
      },
      {
        url: `${IMAGE_PATH}/daedalus/Front.jpg`,
        alt: "Daedalus board front view",
      },
      {
        url: `${IMAGE_PATH}/daedalus/Board_Layout.png`,
        alt: "Daedalus board layout",
      },
    ],
    tags: [{ label: "KiCAD" }, { label: "STM32CubeIDE" }],
    sourceUrl: "https://github.com/0xJeremy/Daedalus",
    detailUrl: "/projects/daedalus",
    featured: true,
  },

  // ==================== OTHER PROJECTS ====================
  {
    id: "socketengine",
    name: "socket.engine",
    shortDescription:
      "socket.engine is the open-source successor to FireEye. It enabled real-time communication between devices that is optimized to be light-weight and very fast.",
    fullDescription:
      "socket.engine is the successor to FireEye. It is a real-time bi-directional UNIX socket communication library built on top of ZMQ sockets. It operates at extremely high speeds and is even capable of streaming full video across the sockets. It was originally designed for use in robots, but provides an interface to stream arbitrary data across arbitrary devices. It was written in Python and Javascript (via Node.js). It also holds the distinction of being my most successful project on GitHub. The source is published on GitHub, and it is available for download on PIP via PyPi, and on NPM.",
    images: [
      {
        url: `${IMAGE_PATH}/socketengine/socketengine.png`,
        alt: "socket.engine logo",
        isMain: true,
      },
    ],
    tags: [
      { label: "Python" },
      { label: "Node.js" },
      { label: "Unix Sockets" },
      { label: "ZMQ" },
    ],
    sourceUrl: "https://github.com/0xJeremy/socket.engine",
    detailUrl: "/projects/socketengine",
  },
  {
    id: "helios",
    name: "Helios Pi-Hat Robot Controller",
    shortDescription:
      "This is a custom PCB Raspberry Pi hat designed to enable CAN bus communication and high-precision servo control. It can also supply power to the Pi.",
    fullDescription:
      "This PCB is the Helios Pi-Hat Robot Controller. It is a companion board to the Daedalus Motor controller. It provides 4x high-speed CAN bus lines (through the 2x on-board STM32 microprocessors), along with a host of other features such as absolute orientation sensing (by providing sockets for a Bosch BNO-055 sensor), breakouts for 12 servo motors (6x high-precision, 6x standard), and by providing up to 3.5 amps to power the Raspberry Pi host. This is one of the first PCBs I've designed, and I expect to iterate on it in the future.",
    images: [
      {
        url: `${IMAGE_PATH}/helios/Helios_Board.png`,
        alt: "Helios board render",
        isMain: true,
      },
      {
        url: `${IMAGE_PATH}/helios/Board_Layout.png`,
        alt: "Helios board layout",
      },
    ],
    tags: [{ label: "KiCAD" }],
    sourceUrl: "https://github.com/0xJeremy/Helios",
    detailUrl: "/projects/helios",
  },
  {
    id: "icarus",
    name: "Icarus Power Distribution Board",
    shortDescription:
      "This is a custom PCB power distribution board designed for use with the Daedalus BLDC motor controller for driving high-current motors and the Helios Raspberry Pi hat. It has 6 power breakouts.",
    fullDescription:
      "This PCB was made as a companion board to the Daedalus motor controller, and provides 6x high-current power breakouts from a single source. Along with providing power, it has a host of other features like power shutoff, current draw monitoring, and temperature sensing. It communicates with the CAN bus protocol and can be daisy-chained with a number of other devices (including the Helios Pi-Hat and the Daedalus Motor Controller). This is one of the first PCBs I've made and I expect to iterate on it in the future.",
    images: [
      {
        url: `${IMAGE_PATH}/icarus/Icarus_Board.png`,
        alt: "Icarus board render",
        isMain: true,
      },
      { url: `${IMAGE_PATH}/icarus/icarus_1.JPG`, alt: "Icarus board view 1" },
      { url: `${IMAGE_PATH}/icarus/icarus_2.JPG`, alt: "Icarus board view 2" },
      { url: `${IMAGE_PATH}/icarus/icarus_3.JPG`, alt: "Icarus board view 3" },
      {
        url: `${IMAGE_PATH}/icarus/Board_Layout.png`,
        alt: "Icarus board layout",
      },
    ],
    tags: [{ label: "KiCAD" }],
    sourceUrl: "https://github.com/0xJeremy/Icarus",
    detailUrl: "/projects/icarus",
  },
  {
    id: "pico-oscilloscope",
    name: "Raspberry Pi Pico Oscilloscope",
    shortDescription:
      "This is an open-source project to turn the $4 Raspberry Pi Pico into a (reasonable) powerful 4-channel oscilloscope using the onboard analog to digital converters.",
    fullDescription:
      "As the final project for Tufts ME-193 MPP (Microcontroller Programming Projects) in the Spring of 2021, I turned the $4 Raspberry Pi Pico into a (reasonably) powerful 4-channel oscilloscope using the onboard analog to digital converters. The Pico streams the ADC readings over a USB to a host device (either a Raspberry Pi or any computer), which displays the data in a webpage. The idea being this project mimics the functionality of OctoPrint (the cloud 3D printer manager software) but for an Oscilloscope. This would make its use ideal in makerspaces or shared electronics labs. The webpage was written in React.js using Plot.js. The code on the Pico uses both cores and was written to run as quickly as possible in C.",
    images: [
      {
        url: `${IMAGE_PATH}/pico_oscilloscope/repo_logo.png`,
        alt: "Pico Oscilloscope logo",
        isMain: true,
      },
      {
        url: `${IMAGE_PATH}/pico_oscilloscope/pico_oscilloscope.png`,
        alt: "Pico Oscilloscope interface",
      },
    ],
    tags: [
      { label: "C" },
      { label: "Node.js" },
      { label: "React.js" },
      { label: "Plotly.js" },
    ],
    sourceUrl: "https://github.com/0xJeremy/Pico-Oscilloscope",
    detailUrl: "/projects/pico-oscilloscope",
  },
  {
    id: "surge",
    name: "Surge PL",
    shortDescription:
      "Surge is a small, Ruby-esque programming language I've build from scratch in Python.",
    fullDescription:
      "Surge is a small programming language I built from scratch. It is an interpreted language, written on top of Python with Ruby like syntax. To my knowledge it is turing complete. As part of this project I build a testing framework inside of Surge to test the capabilities of the language and ensure the parser, lexer, and interpreter were working as expected. It's not a large project, but perhaps one of my more interesting. The source code, test cases, and operational semantics can be viewed on the GitHub project page.",
    images: [
      {
        url: `${IMAGE_PATH}/surge/surge.png`,
        alt: "Surge programming language logo",
        isMain: true,
      },
    ],
    tags: [{ label: "Python" }, { label: "Lex-Yacc" }],
    sourceUrl: "https://github.com/0xJeremy/surge",
    detailUrl: "/projects/surge",
  },
  {
    id: "ballbot",
    name: "Ballbot",
    shortDescription:
      "This robot was build as a homework assignment for Tufts ME-134 (Advanced Robotics) in Fall 2020. The assignment was to create a balancing robot, so we created a robot that balances on a basketball.",
    fullDescription:
      'This robot was made as a homework project for Tufts ME-134 (Advanced Robotics) in the Fall of 2020. The prompt was to create a "balancing robot" (with the requirement it must be able to freely rotate at least 180 degrees around any one axis). Theorizing that three axes was more impressive than one axis, we built a balancing "ballbot" -- a robot that balances on top of a basketball. It uses a sensor fusion algorithm to combine the input of 3 gyroscopic and acceleration sensors (2x MPU-6050s, and 1 Bosch BNO-055 sensor).',
    images: [
      {
        url: `${IMAGE_PATH}/ballbot/ballbot_isometric.JPG`,
        alt: "Ballbot isometric view",
        isMain: true,
      },
      { url: `${IMAGE_PATH}/ballbot/ballbot_1.JPG`, alt: "Ballbot view 1" },
      { url: `${IMAGE_PATH}/ballbot/ballbot_2.jpg`, alt: "Ballbot view 2" },
      { url: `${IMAGE_PATH}/ballbot/ballbot_3.jpg`, alt: "Ballbot view 3" },
      { url: `${IMAGE_PATH}/ballbot/ballbot_4.jpg`, alt: "Ballbot view 4" },
      { url: `${IMAGE_PATH}/ballbot/ballbot_5.jpg`, alt: "Ballbot view 5" },
    ],
    tags: [
      { label: "Python" },
      { label: "Solidworks" },
      { label: "Raspberry Pi" },
    ],
    sourceUrl: "https://github.com/0xJeremy/me134/tree/master/hw4/v2",
    detailUrl: "/projects/ballbot",
  },
  {
    id: "drawing-robot",
    name: "Drawing Robot",
    shortDescription:
      "This robot was build as a homework assignment for Tufts ME-134 (Advanced Robotics) in Fall 2020. The assignment was to create a robotic arm capable of writing our initials.",
    fullDescription:
      'This robot was made as a homework project for Tufts ME-134 (Advanced Robotics) in the Fall of 2020. The prompt was to create a robotic arm capable of writing our initials. This robot arm (which is the second iteration, the first being a standard 3-DOF vertical arm) is capable of writing arbitrary shapes and letters. Instead of hard-coding the positions of the arms for each point of our initials, I wrote an SVG parser and pather in Python that dissects any arbitrary SVG file and generates "g-code" (really just tuples of position for motors 1 and 2) which the arm them reads through and executes. It was pretty successful.',
    images: [
      {
        url: `${IMAGE_PATH}/drawing_robot/drawing_isometric.JPG`,
        alt: "Drawing robot isometric view",
        isMain: true,
      },
      {
        url: `${IMAGE_PATH}/drawing_robot/drawing_robot_1.jpg`,
        alt: "Drawing robot view 1",
      },
      {
        url: `${IMAGE_PATH}/drawing_robot/drawing_robot_2.jpg`,
        alt: "Drawing robot view 2",
      },
      {
        url: `${IMAGE_PATH}/drawing_robot/drawing_robot_3.jpg`,
        alt: "Drawing robot view 3",
      },
      {
        url: `${IMAGE_PATH}/drawing_robot/drawing_robot_4.jpg`,
        alt: "Drawing robot view 4",
      },
      {
        url: `${IMAGE_PATH}/drawing_robot/drawing_robot_5.jpg`,
        alt: "Drawing robot view 5",
      },
    ],
    tags: [
      { label: "Python" },
      { label: "Solidworks" },
      { label: "Raspberry Pi" },
    ],
    sourceUrl: "https://github.com/0xJeremy/me134/tree/master/hw3/v2",
    detailUrl: "/projects/drawing-robot",
  },
  {
    id: "vegas",
    name: '"Banned From Vegas"',
    shortDescription:
      "This is an automatic card-dealing and sorting robot made at MakeHarvard 2020. It uses computer vision to detect and sort the cards (and a little bit of card-counting to make sure you always win).",
    fullDescription:
      '"Banned From Vegas" is an automatic card-dealing and sorting robot made at MakeHarvard 2020. It uses computer vision to detect and sort a deck of cards (and with a little bit of card-counting thrown in can make the operator always win at cards). It was built over the course of 24 hours and was powered by a Raspberry Pi and a large number of servos and motors. The end result worked shockingly well.',
    images: [
      {
        url: `${IMAGE_PATH}/vegas/vegas.jpg`,
        alt: "Vegas robot main view",
        isMain: true,
      },
      { url: `${IMAGE_PATH}/vegas/vegas2.jpeg`, alt: "Vegas robot view 2" },
      { url: `${IMAGE_PATH}/vegas/vegas3.jpeg`, alt: "Vegas robot view 3" },
      { url: `${IMAGE_PATH}/vegas/vegas4.jpeg`, alt: "Vegas robot view 4" },
    ],
    tags: [
      { label: "Python" },
      { label: "Computer Vision" },
      { label: "Raspberry Pi" },
    ],
    sourceUrl: "https://github.com/0xJeremy/MakeHarvard2020",
    detailUrl: "/projects/vegas",
  },
  {
    id: "fleet",
    name: "Fleet",
    shortDescription:
      "This project is an open-source hardware platform for developing robotics software. It is intended to be a low-cost, modular swarm robotic system to test swarm algorithms.",
    fullDescription:
      '"Fleet" is a series of small, modular robots I made as an open-source hardware platform for developing swarm robotics software. It is intended to be a low cost solution for labs, researchers, and hobbiests to experiment with cutting edge swarm algorithms. Each robot is equipped with a Raspberry Pi, 2x DC motors with encoders, Raspberry Pi camera, and batteries to last several hours. Newer versions also have front and back facing time of flight distance sensors.',
    images: [
      {
        url: `${IMAGE_PATH}/fleet/fleet.png`,
        alt: "Fleet robot render",
        isMain: true,
      },
      { url: `${IMAGE_PATH}/fleet/fleet2.png`, alt: "Fleet robot view 2" },
      { url: `${IMAGE_PATH}/fleet/fleet3.jpeg`, alt: "Fleet robot view 3" },
      { url: `${IMAGE_PATH}/fleet/fleet4.jpeg`, alt: "Fleet robot view 4" },
      { url: `${IMAGE_PATH}/fleet/fleet5.JPG`, alt: "Fleet robot view 5" },
    ],
    tags: [
      { label: "Python" },
      { label: "Computer Vision" },
      { label: "Solidworks" },
    ],
    sourceUrl: "https://github.com/0xJeremy/fleet",
    detailUrl: "/projects/fleet",
  },
  {
    id: "space-printer",
    name: '"Space Jam": Space Printer',
    shortDescription:
      "This is a 3D printer designed to be used in zero-gravity (such as on the ISS). it was made as a senior design project at Tufts in the Fall of 2020 for Professor Doug Matson.",
    fullDescription:
      "This is a 3D printer designed to be used in *space* (specifically, zero-gravity environments, such as on the International Space Station). It was built for Professor Douglas Matson for his use in research. We also built the firmware from scratch for this printer given the unique control style and setup of the stepper motors.",
    images: [
      {
        url: `${IMAGE_PATH}/space_printer/spaceprinter.JPG`,
        alt: "Space printer",
        isMain: true,
      },
    ],
    tags: [
      { label: "Solidworks" },
      { label: "Python" },
      { label: "Electronics" },
    ],
    sourceUrl: "https://github.com/0xJeremy/senior-design",
    detailUrl: "/projects/space-printer",
  },
  {
    id: "crawler",
    name: "Crawling Robot",
    shortDescription:
      'This robot was build as a homework assignment for Tufts ME-134 (Advanced Robotics) in Fall 2020. The assignment was to create a "crawling robot", so we created a modular robot that rolls end over end.',
    fullDescription:
      "This robot was made as a homework project for Tufts ME-134 (Advanced Robotics) in the Fall of 2020. The prompt was to create a \"crawling robot\" (defined as: a robot which uses it's entire body to locomote). This robot rolls segments of it's body over one another in series to create a crawling / rolling motion. It is modular with each segment containing a piece of the robot (Raspberry Pi Zero, 2x voltage regulators, 2x servo drivers, 3x LiPo batteries).",
    images: [
      {
        url: `${IMAGE_PATH}/crawler/crawler_isometric.JPG`,
        alt: "Crawler robot isometric view",
        isMain: true,
      },
      {
        url: `${IMAGE_PATH}/crawler/crawler_1.JPG`,
        alt: "Crawler robot view 1",
      },
      {
        url: `${IMAGE_PATH}/crawler/crawler_2.jpg`,
        alt: "Crawler robot view 2",
      },
      {
        url: `${IMAGE_PATH}/crawler/crawler_3.jpg`,
        alt: "Crawler robot view 3",
      },
      {
        url: `${IMAGE_PATH}/crawler/crawler_4.jpg`,
        alt: "Crawler robot view 4",
      },
      {
        url: `${IMAGE_PATH}/crawler/crawler_5.jpg`,
        alt: "Crawler robot view 5",
      },
      {
        url: `${IMAGE_PATH}/crawler/crawler_6.jpg`,
        alt: "Crawler robot view 6",
      },
      {
        url: `${IMAGE_PATH}/crawler/crawler_7.jpg`,
        alt: "Crawler robot view 7",
      },
    ],
    tags: [
      { label: "Python" },
      { label: "Solidworks" },
      { label: "Raspberry Pi" },
    ],
    sourceUrl: "https://github.com/0xJeremy/me134/tree/master/hw5",
    detailUrl: "/projects/crawler",
  },
  {
    id: "devboard",
    name: "STM32 Development Board",
    shortDescription:
      "This is a development breakout board for the STM32F405 series microcontroller. I made it to learn about PCB design and embedded microcontroller programming.",
    fullDescription:
      "This PCB is a custom-designed breakout for the STM32F405 series microcontroller. I made it to practice PCB design, and learn about programming embedded microcontrollers from scratch. I designed a custom power-chain for supplying power to the MCU and added breakouts around the side for serial breakouts.",
    images: [
      {
        url: `${IMAGE_PATH}/devboard/devboard.JPG`,
        alt: "STM32 development board",
        isMain: true,
      },
      {
        url: `${IMAGE_PATH}/devboard/devboard_1.JPG`,
        alt: "Development board view 1",
      },
      {
        url: `${IMAGE_PATH}/devboard/devboard_2.JPG`,
        alt: "Development board view 2",
      },
      {
        url: `${IMAGE_PATH}/devboard/devboard_3.JPG`,
        alt: "Development board view 3",
      },
      {
        url: `${IMAGE_PATH}/devboard/devboard_4.JPG`,
        alt: "Development board view 4",
      },
      {
        url: `${IMAGE_PATH}/devboard/devboard_5.JPG`,
        alt: "Development board view 5",
      },
      {
        url: `${IMAGE_PATH}/devboard/devboard_layout.JPG`,
        alt: "Development board layout",
      },
    ],
    tags: [{ label: "KiCAD" }],
    sourceUrl: "https://github.com/0xJeremy/mpp/tree/master/stm32",
    detailUrl: "/projects/devboard",
  },
  {
    id: "fireeye",
    name: "FireEye",
    shortDescription:
      "FireEye is an open-source real-time socket communication library designed for low-latency video streaming from remote sources. It was designed to steam a Raspberry Pi camera to a webpage.",
    fullDescription:
      "FireEye is an open-source cross-language (Python / Javascript via Node.js) UNIX socket communication library. It was originally build and optimized for streaming video from a Raspberry Pi camera to remote devices in real-time, but has since been generalized to work for arbitrary communication. It is extremely easy to use and handles almost all of the setup for the user. It was later replaced with socket.engine (which is newer and better for a number of reasons).",
    images: [
      {
        url: `${IMAGE_PATH}/fireeye/fireeye.png`,
        alt: "FireEye logo",
        isMain: true,
      },
    ],
    tags: [{ label: "Python" }, { label: "Node.js" }],
    sourceUrl: "https://github.com/0xJeremy/FireEye",
    detailUrl: "/projects/fireeye",
  },
  {
    id: "bci",
    name: "Tufts BCI Team",
    shortDescription:
      "As part of the Tufts BCI (Brain-Computer Interface) team, I created a user-interface for viewing real-time brain activity on a 3D model. Data can be streamed from a remote sensor to the page.",
    fullDescription:
      "The Tufts BCI Team (Brain-Computer Interface Team) is a cross-major team working on new interfaces for computers, devices, and robots. It uses hardware from OpenBCI and some custom software we've written. I was responsible for creating a user-interface for streaming, in real-time, data from remote sensors to an interface which would display the brain activity onto a 3D model of the brain. This interface I originally wrote in vanilla HTML/CSS/Javascript, but later I re-wrote it in React.js. I also made the team logo (below) which I an unreasonably proud of.",
    images: [
      {
        url: `${IMAGE_PATH}/bci/bci.png`,
        alt: "Tufts BCI Team logo",
        isMain: true,
      },
    ],
    tags: [
      { label: "React.js" },
      { label: "WebSockets" },
      { label: "3D Visualization" },
    ],
    detailUrl: "/projects/bci",
  },
  {
    id: "mle",
    name: "MLE (My Little Eye)",
    shortDescription:
      "MLE (My Little Eye) was part of a hackathon project at HackMIT where we created a fleet of semi-autonomous robots that track down lost objects for people with vision and mobility impairments.",
    fullDescription:
      "MLE (My Little Eye) was a hackathon project for HackMIT in 2019. The goal of this project was to create a tool to help the vision and mobility impaired by helping to find lost objects, or just finds objects in the environment. It did this by deploying a small fleet of autonomous robots (based on the \"Fleet\" swarm robot design) armed with cameras and the vision APIs from Microsoft Azure. The user-interface allowed users to say the name of an object and using Google speech recognition would command the robots to begin hunting for the object. The camera feed would live-stream to the user (along with robot controls), and once an object is found would report it's position to the user, along with the path the robot took to get there. We didn't win, but we got some great sweatshirts.",
    images: [
      { url: `${IMAGE_PATH}/mle/mle.png`, alt: "MLE interface", isMain: true },
      { url: `${IMAGE_PATH}/mle/mle2.png`, alt: "MLE view 2" },
      { url: `${IMAGE_PATH}/mle/mle3.png`, alt: "MLE view 3" },
    ],
    tags: [
      { label: "Python" },
      { label: "Azure Vision" },
      { label: "Robotics" },
    ],
    sourceUrl: "https://github.com/0xJeremy/MLE",
    detailUrl: "/projects/mle",
  },
  {
    id: "vizengine",
    name: "viz.engine",
    shortDescription:
      "viz.engine is an open-source library and framework for robot user-interfaces. It is designed to give real-time feedback about the state of the robot and provide a control interface.",
    fullDescription:
      "viz.engine is an open-source React.js powered interface for controlling robots. It was originally designed to help operators handle large swarms of robots simultaneously by streaming real-time information about the state of each system, and providing a unified and straight-forward method of operating all the bots. It uses the socket.engine library for communication between the robots and the server (which allows for standard data to be streamed, as well as real-time video feeds from each robot).",
    images: [
      {
        url: `${IMAGE_PATH}/vizengine/vizengine.png`,
        alt: "viz.engine logo",
        isMain: true,
      },
      {
        url: `${IMAGE_PATH}/vizengine/dashboard.png`,
        alt: "viz.engine dashboard",
      },
    ],
    tags: [{ label: "React.js" }, { label: "WebSockets" }],
    sourceUrl: "https://github.com/0xJeremy/viz.engine",
    detailUrl: "/projects/vizengine",
  },
  {
    id: "ctrlengine",
    name: "ctrl.engine",
    shortDescription:
      "ctrl.engine is an open-source robotics library. It provides various tools in Python to make writing software for robotics easier and faster. It gives boilerplate multi-threaded code to multiple APIs and image processing tools.",
    fullDescription:
      "ctrl.engine is an open-source robotics library written in Python. It was designed to provide a common set of tools to quickly prototype robots (specifically those running on a Raspberry Pi, but in theory is multiplatform). It provides boilerplate multi-threaded code for a number of web-APIs, as well as numerous computer vision examples. It also supports a number of input devices like xbox controllers, and provides standard implementations of common algorithms (like PID controllers and signal filters).",
    images: [
      {
        url: `${IMAGE_PATH}/ctrlengine/ctrlengine.png`,
        alt: "ctrl.engine logo",
        isMain: true,
      },
    ],
    tags: [
      { label: "Python" },
      { label: "Raspberry Pi" },
      { label: "Computer Vision" },
    ],
    sourceUrl: "https://github.com/0xJeremy/ctrl.engine",
    detailUrl: "/projects/ctrlengine",
  },
  {
    id: "couch",
    name: "Drivable Couch",
    shortDescription:
      "This is a project done as part of the Tufts Robotics club in which we built a drivable, remote-controlled couch. It's pretty much exactly what it sounds like.",
    fullDescription:
      "This is a robotic couch. It is remote-controlled via an xbox controller. It can carry three people. It's exactly what it sounds like, and is a ton of fun. This project was made with the Tufts Robotics Club, and was one of my first large-scale robotics projects. It was built using FIRST robotics hardware, and programmed in C++. At one point we had an actual couch on it, but due to storage problems it had to be thrown out.",
    images: [
      {
        url: `${IMAGE_PATH}/couch/couch.png`,
        alt: "Drivable couch render",
        isMain: true,
      },
      { url: `${IMAGE_PATH}/couch/couch2.jpeg`, alt: "Drivable couch view 2" },
    ],
    tags: [{ label: "C++" }, { label: "FIRST Robotics" }],
    detailUrl: "/projects/couch",
  },
  {
    id: "clock",
    name: "Analog Clock",
    shortDescription:
      "This robot was build as a homework assignment for Tufts ME-134 (Advanced Robotics) in Fall 2020. The assignment was to create an analog clock, so we created a (digital) analog clock.",
    fullDescription:
      'This robot was made for a homework project as part of Tufts ME-134 (Advanced Robotics) in the Fall of 2020. The prompt was to create an analog clock. Twisting the prompt slightly, I chose to make a "digital" analog clock. This clock comprises 28 individual micro-servo motors controlled by 2 servo drivers being controlled by a Raspberry Pi Zero.',
    images: [
      {
        url: `${IMAGE_PATH}/clock/clock_isometric.JPG`,
        alt: "Analog clock isometric view",
        isMain: true,
      },
      { url: `${IMAGE_PATH}/clock/clock_1.jpg`, alt: "Clock view 1" },
      { url: `${IMAGE_PATH}/clock/clock_3.jpg`, alt: "Clock view 3" },
      { url: `${IMAGE_PATH}/clock/clock_4.jpg`, alt: "Clock view 4" },
      { url: `${IMAGE_PATH}/clock/clock_5.jpg`, alt: "Clock view 5" },
    ],
    tags: [{ label: "Raspberry Pi" }, { label: "Python" }],
    sourceUrl: "https://github.com/0xJeremy/me134/tree/master/hw2",
    detailUrl: "/projects/clock",
  },
  {
    id: "led",
    name: "LED Display",
    shortDescription:
      "This robot was build as a homework assignment for Tufts ME-134 (Advanced Robotics) in Fall 2020. The assignment was to create a human-interface robot, so we made an interactive display.",
    fullDescription:
      "This robot was made for a homework project as part of Tufts ME-134 (Advanced Robotics) in the Fall of 2020. The prompt was to create a robot that interacts with a human by using computer vision to take input. The robot must respond to a number of different fundamental cues (such as head position, or hand position). We chose to build a large LED display (human for scale) made up of 300 individually addressible LEDs. It used a camera to enable the user to play PONG by waving their hands in the air, or snake by moving their head relative to the camera. Because the Raspberry Pi (which is driving the display) could not be loaded with the proper libraries to perform hand-detection, I built a real-time image streamer that sent data from my laptop (which could process the images) to the Raspberry Pi.",
    images: [
      {
        url: `${IMAGE_PATH}/led/led_isometric.JPG`,
        alt: "LED display isometric view",
        isMain: true,
      },
      { url: `${IMAGE_PATH}/led/led_1.jpg`, alt: "LED display view 1" },
      { url: `${IMAGE_PATH}/led/led_2.jpg`, alt: "LED display view 2" },
      { url: `${IMAGE_PATH}/led/led_3.jpg`, alt: "LED display view 3" },
      { url: `${IMAGE_PATH}/led/led_4.jpg`, alt: "LED display view 4" },
    ],
    tags: [
      { label: "Raspberry Pi" },
      { label: "Python" },
      { label: "Computer Vision" },
    ],
    sourceUrl: "https://github.com/0xJeremy/me134/tree/master/hw6",
    detailUrl: "/projects/led",
  },
  {
    id: "autodrive",
    name: "Autodrive",
    shortDescription:
      "This is a project done for ME-84 (Intro. Robotics & Mechatronics) in Fall 2018. This robot drives autonomously using image processing with markers on the ground.",
    fullDescription:
      "This project was made as a homework assigmnet for Tufts ME-84 (Intro. Robotics & Mechatronics) in Fall of 2018. The assignment was to use image processing to make a line following robot. We did this by pointing an OpenMV camera facing downwards and using canny edge-detection to find the lines on the table. We also used a PyBoard v2 to control the servo motors attached to the car (acting as drive motors).",
    images: [
      {
        url: `${IMAGE_PATH}/autodrive/autodrive.jpeg`,
        alt: "Autodrive robot",
        isMain: true,
      },
      {
        url: `${IMAGE_PATH}/autodrive/autodrive_1.JPG`,
        alt: "Autodrive view 1",
      },
      {
        url: `${IMAGE_PATH}/autodrive/autodrive_2.JPG`,
        alt: "Autodrive view 2",
      },
      {
        url: `${IMAGE_PATH}/autodrive/autodrive_3.JPG`,
        alt: "Autodrive view 3",
      },
    ],
    tags: [
      { label: "OpenMV" },
      { label: "PyBoard" },
      { label: "Computer Vision" },
    ],
    detailUrl: "/projects/autodrive",
  },
  {
    id: "dume-arms",
    name: "Dum-E IoT Arms",
    shortDescription:
      "These internet-enabled robotic arm swarm was made at the MakeHarvard hackathon in 2019. They were made to be an educational tool for teaching introductory robotics for universities.",
    fullDescription:
      "The Dum-E IoT Arms (Dum-E being the name of the robotic arm Tony Stark keeps in his workshop, of course) is a project made at the MakeHarvard hackathon in 2019. We made them to be an educational teaching tool for univresity students to learn about the basics of IoT, robotics, and fabrication. We used them briefly in our university robotics club to teach some of these topics after we had made the prototypes. The arms can be controlled by a single centralized web-server and use ESP8266s to stream instructions from the internet.",
    images: [
      {
        url: `${IMAGE_PATH}/dume_arms/dume_arms.jpeg`,
        alt: "Dum-E IoT Arms",
        isMain: true,
      },
      {
        url: `${IMAGE_PATH}/dume_arms/dume_arms_1.JPG`,
        alt: "Dum-E Arms view 1",
      },
      {
        url: `${IMAGE_PATH}/dume_arms/dume_arms_2.JPG`,
        alt: "Dum-E Arms view 2",
      },
      {
        url: `${IMAGE_PATH}/dume_arms/dume_arms_3.JPG`,
        alt: "Dum-E Arms view 3",
      },
    ],
    tags: [{ label: "ESP8266" }, { label: "IoT" }, { label: "Robotics" }],
    sourceUrl: "https://github.com/0xJeremy/Dum-E-IOT",
    detailUrl: "/projects/dume-arms",
  },
  {
    id: "lego",
    name: "LEGO Robots",
    shortDescription:
      "These are a series of LEGO robots made for ME-84 (Intro. Robotics & Mechatronics) in Fall 2018 at Tufts University.",
    fullDescription:
      "These are a series of robots made for Tufts ME-84 (Intro. Robotics & Mechatronics) in the Fall of 2018. Each one was a homework assignment, and all the robots were programmed in LabVIEW. The assignments include making a kinetic art sculpture, an wirelessly-communicating clock, a childrens toy, and a remote-control robotic arm. All these robots used the LEGO EV3 platform.",
    images: [
      {
        url: `${IMAGE_PATH}/lego/lego.jpeg`,
        alt: "LEGO robots collection",
        isMain: true,
      },
      { url: `${IMAGE_PATH}/lego/iot_arms_1.JPG`, alt: "LEGO IoT arms" },
      { url: `${IMAGE_PATH}/lego/clock_1.JPG`, alt: "LEGO clock" },
      { url: `${IMAGE_PATH}/lego/towers_1.JPG`, alt: "LEGO towers" },
      { url: `${IMAGE_PATH}/lego/gear_1.JPG`, alt: "LEGO gear sculpture" },
    ],
    tags: [{ label: "LabVIEW" }, { label: "LEGO EV3" }],
    detailUrl: "/projects/lego",
  },
  {
    id: "qbot",
    name: "QBot",
    shortDescription:
      "QBot was a robot made as part of ME-84 (Intro. Robotics & Mechatronics) in Fall 2018. It uses image recognition to respond to commands from QR codes.",
    fullDescription:
      'This robot was a homework project from Tufts ME-84 (Intro. Robotics & Mechatronics). The assignment was to create a robot that takes its cues for movement from a camera (computer vision). We created a driving robot that uses an OpenMV camera to recognize QR tags representing "move forward", "move backward", "turn left", "turn right", "stop", etc. The OpenMV camera commanded a PyBoard v2 which in turn sent commands to the two servo motors (here being used as drive motors).',
    images: [
      { url: `${IMAGE_PATH}/qbot/qbot.jpeg`, alt: "QBot robot", isMain: true },
      { url: `${IMAGE_PATH}/qbot/bot_1.JPG`, alt: "QBot view 1" },
      { url: `${IMAGE_PATH}/qbot/bot_2.JPG`, alt: "QBot view 2" },
      { url: `${IMAGE_PATH}/qbot/bot_3.JPG`, alt: "QBot view 3" },
    ],
    tags: [
      { label: "OpenMV" },
      { label: "PyBoard" },
      { label: "Computer Vision" },
    ],
    detailUrl: "/projects/qbot",
  },
  {
    id: "ujumbo",
    name: "µJumbo",
    shortDescription:
      'µJumbo was an entry to the Trinity International Robotic Firefighting competition in the "small robot" category.',
    fullDescription:
      'µJumbo was an entry to the Trinity International Robotic Firefighting competition in the "smallest robot" category. Unfortunately, that year it was only the second smallest robot (losing by a matter of several cubic centimeters). This robot was to navigate a maze autonomously and extinguish a fire (a candle). It was also required to recognize a tone played as the starting signal (thus the microphone and filtering circuit on the top of the robot). We equipped this robot with an Arduino Nano, wheels encoders, and multiple time-of-flight distance sensors placed around the robot.',
    images: [
      {
        url: `${IMAGE_PATH}/ujumbo/ujumbo.jpeg`,
        alt: "µJumbo robot",
        isMain: true,
      },
      { url: `${IMAGE_PATH}/ujumbo/jumbo_2.JPG`, alt: "µJumbo view 2" },
      { url: `${IMAGE_PATH}/ujumbo/jumbo_3.JPG`, alt: "µJumbo view 3" },
      { url: `${IMAGE_PATH}/ujumbo/jumbo_4.JPG`, alt: "µJumbo view 4" },
    ],
    tags: [{ label: "Arduino" }, { label: "C++" }, { label: "Robotics" }],
    detailUrl: "/projects/ujumbo",
  },
  {
    id: "firefighting",
    name: "Firefighting Robot",
    shortDescription:
      "This robot was our entry into the Trinity International Robotic Firefighting Competition.",
    fullDescription:
      "This robot is one of the first I've made from scratch, and was made for the Trinity International Robotic Firefighting Competition in the Spring of 2018. It's task was to listen for a tone, and when signaled would begin to autonomously navigate a maze and extinguish a fire. It was powered by a Raspberry Pi Zero and was surrounded by ultrasonic distance sensors to detect the walls of the maze.",
    images: [
      {
        url: `${IMAGE_PATH}/firefighting/firefighting.jpeg`,
        alt: "Firefighting robot",
        isMain: true,
      },
      {
        url: `${IMAGE_PATH}/firefighting/firefighting_1.JPG`,
        alt: "Firefighting robot view 1",
      },
      {
        url: `${IMAGE_PATH}/firefighting/firefighting_2.JPG`,
        alt: "Firefighting robot view 2",
      },
    ],
    tags: [
      { label: "Raspberry Pi" },
      { label: "Python" },
      { label: "Robotics" },
    ],
    detailUrl: "/projects/firefighting",
  },
  {
    id: "expo-digitizer",
    name: "Expo Digitizer",
    shortDescription:
      "This is an attachment for an Expo marker to turn it into an active digitizer.",
    fullDescription:
      "This project was made as part of Tufts Polyhack in Fall 2017. It is an attachment for an Expo marker to turn it into an active digitizer. Using an accelerometer mounted to the marker, and a button to detect when it makes contact with the board, this marker could generate a PDF of the hardwriting of the user.",
    images: [
      {
        url: `${IMAGE_PATH}/expo_digitizer/expo_digitizer.jpeg`,
        alt: "Expo Digitizer",
        isMain: true,
      },
      {
        url: `${IMAGE_PATH}/expo_digitizer/expo_digitizer_2.jpeg`,
        alt: "Expo Digitizer view 2",
      },
    ],
    tags: [{ label: "Arduino" }, { label: "Accelerometer" }],
    detailUrl: "/projects/expo-digitizer",
  },
  {
    id: "hobbesbot",
    name: "HobbesBot",
    shortDescription:
      'This is a robotic puppet with 7 degrees of freedom called "HobbesBot" after the tiger in Calvin and Hobbes. It was the final project from ME-84 (Intro. Robotics & Mechatronics) in Fall 2018 at Tufts.',
    fullDescription:
      "HobbesBot is the final project from Tufts ME-84 (Intro. Robotics & Mechatronics). The assignment was to build an animatronic puppet that takes cues from a human, and can interact with them. We created Hobbes, the tiger from Calvin & Hobbes, as a 7 degrees-of-freedom robot equipped with computer vision. Using a Raspberry Pi and a camera (along with half of Google Cloud Platforms vision APIs), Hobbes determines the users mood and reacts accordingly. As a cherry on top, we made two IoT enabled LED cubes to light up when Hobbes detects the user is happy.",
    images: [
      {
        url: `${IMAGE_PATH}/hobbesbot/hobbesbot.jpeg`,
        alt: "HobbesBot",
        isMain: true,
      },
      { url: `${IMAGE_PATH}/hobbesbot/hobbes_1.JPG`, alt: "HobbesBot view 1" },
      { url: `${IMAGE_PATH}/hobbesbot/hobbes_2.JPG`, alt: "HobbesBot view 2" },
      { url: `${IMAGE_PATH}/hobbesbot/hobbes_3.JPG`, alt: "HobbesBot view 3" },
    ],
    tags: [
      { label: "Raspberry Pi" },
      { label: "Python" },
      { label: "GCP Vision" },
    ],
    detailUrl: "/projects/hobbesbot",
  },
  {
    id: "quadcopter",
    name: "Quadcopter UAV",
    shortDescription:
      "This is a quadcopter UAV made with the Tufts MAKE club. It was originally designed to be semi-autonomous.",
    fullDescription:
      "This quadcopter was built with the Tufts MAKE club. The project was to build a quadcopter from scratch, and program it to fly semi-autonomously using computer vision. Unfortunately, due to semester time constraints, we were unable to finish the autonomous portion of the build, but it flew pretty well.",
    images: [
      {
        url: `${IMAGE_PATH}/quadcopter/quadcopter.jpeg`,
        alt: "Quadcopter UAV",
        isMain: true,
      },
      {
        url: `${IMAGE_PATH}/quadcopter/quadcopter_2.jpeg`,
        alt: "Quadcopter view 2",
      },
    ],
    tags: [{ label: "Drone" }, { label: "Computer Vision" }],
    detailUrl: "/projects/quadcopter",
  },
  {
    id: "longboard",
    name: "Electric Longboard",
    shortDescription:
      "This is an electric longboard made with the Tufts MAKE club.",
    fullDescription:
      "This was a project with the Tufts MAKE club in which we built an electric longboard. It was a pretty straight forward project, and the end result worked suprisingly well.",
    images: [
      {
        url: `${IMAGE_PATH}/longboard/longboard.jpeg`,
        alt: "Electric longboard",
        isMain: true,
      },
      {
        url: `${IMAGE_PATH}/longboard/longboard_1.jpeg`,
        alt: "Longboard view 2",
      },
    ],
    tags: [{ label: "Electronics" }, { label: "Fabrication" }],
    detailUrl: "/projects/longboard",
  },
  {
    id: "pico-pca",
    name: "Raspberry Pi Pico Servo Driver",
    shortDescription:
      "This is a PCB daughterboard for the Raspberry Pi Pico that carries a PCB9685 16 channel servo-driver.",
    fullDescription:
      "This PCB is a breakout board for the Raspberry Pi Pico. It carries a PCA9685 16-channel PWM driver chip, and provides breakouts for 16 servos. It also includes breakouts for Stemma QWIIC connectors on the side of the board.",
    images: [
      {
        url: `${IMAGE_PATH}/pico_pca/pico_pca.JPG`,
        alt: "Pico Servo Driver",
        isMain: true,
      },
      {
        url: `${IMAGE_PATH}/pico_pca/pico_pca_1.JPG`,
        alt: "Pico Servo Driver view 1",
      },
      {
        url: `${IMAGE_PATH}/pico_pca/pico_pca_2.JPG`,
        alt: "Pico Servo Driver view 2",
      },
      {
        url: `${IMAGE_PATH}/pico_pca/pico_pca_3.JPG`,
        alt: "Pico Servo Driver view 3",
      },
      {
        url: `${IMAGE_PATH}/pico_pca/pico_pca_4.JPG`,
        alt: "Pico Servo Driver view 4",
      },
    ],
    tags: [{ label: "KiCAD" }, { label: "PCB Design" }],
    detailUrl: "/projects/pico-pca",
  },
];

/** Section header content for projects grid */
export const projectsSectionContent = {
  title: "Projects",
  subtitle: "A selection of my work",
};
