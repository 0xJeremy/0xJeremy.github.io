import React from "react";
import ProjectTemplate from "./ProjectTemplate";
import { imagePath } from "./ProjectCommon";
import Images from "./Images";

const title = "MLE (My Little Eye)";
const coverImage = "mle.png";
const description =
  "MLE (My Little Eye) was part of a hackathon project at HackMIT where we created a fleet of semi-autonomous robots that track down lost objects for people with vision and mobility impairments.";
const tags = {
  software: true,
  hardware: true,
  hackathon: true,
};
const data = {
  github: "https://github.com/0xJeremy/MLE",
};

export default function Component() {
  return (
    <ProjectTemplate title={title} data={data}>
      <Images
        images={[`${imagePath}/mle/mle.png`, `${imagePath}/mle/mle3.png`]}
      />
      MLE (My Little Eye) was a hackathon project for HackMIT in 2019. The goal
      of this project was to create a tool to help the vision and mobility
      impaired by helping to find lost objects, or just finds objects in the
      environment. It did this by deploying a small fleet of autonomous robots
      (based on the "Fleet" swarm robot design) armed with cameras and the
      vision APIs from Microsoft Azure. The user-interface allowed users to say
      the name of an object and using Google speech recognition would command
      the robots to begin hunting for the object. The camera feed would
      live-stream to the user (along with robot controls), and once an object is
      found would report it's position to the user, along with the path the
      robot took to get there. We didn't win, but we got some great sweatshirts.
      <Images space images={[`${imagePath}/mle/mle2.png`]} />
    </ProjectTemplate>
  );
}

export { Component, title, coverImage, description, tags, data };
