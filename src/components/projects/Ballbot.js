import React from "react";
import ProjectTemplate from "./ProjectTemplate";
import { imagePath } from "./ProjectCommon";
import Images from "./Images";

const title = "Ballbot";
const coverImage = "ballbot_isometric.JPG";
const description =
  "This robot was build as a homework assignment for Tufts ME-134 (Advanced Robotics) in Fall 2020. The assignment was to create a balancing robot, so we created a robot that balances on a basketball.";
const tags = {
  software: true,
  hardware: true,
};
const data = {
  github: "https://github.com/0xJeremy/me134/tree/master/hw4/v2",
};

export default function Component() {
  return (
    <ProjectTemplate title={title} data={data}>
      <Images
        images={[
          `${imagePath}/ballbot/ballbot_isometric.JPG`,
          `${imagePath}/ballbot/ballbot_2.jpg`,
          `${imagePath}/ballbot/ballbot_3.jpg`,
        ]}
      />
      This robot was made as a homework project for Tufts ME-134 (Advanced
      Robotics) in the Fall of 2020. The prompt was to create a "balancing
      robot" (with the requirement it must be able to freely rotate at least 180
      degrees around any one axis). Theorizing that three axes was more
      impressive than one axis, we built a balancing "ballbot" -- a robot that
      balances on top of a basketball. It uses a sensor fusion algorithm to
      combine the input of 3 gyroscopic and acceleration sensors (2x MPU-6050s,
      and 1 Bosch BNO-055 sensor).
      <Images
        space
        images={[
          `${imagePath}/ballbot/ballbot_1.JPG`,
          `${imagePath}/ballbot/ballbot_4.jpg`,
          `${imagePath}/ballbot/ballbot_5.jpg`,
        ]}
      />
    </ProjectTemplate>
  );
}

export { Component, title, coverImage, description, tags, data };
