import React from "react";
import ProjectTemplate from "./ProjectTemplate";
import { imagePath } from "./ProjectCommon";
import Images from "./Images";

const title = "Surge PL";
const coverImage = "surge.png";
const description =
  "Surge is a small, Ruby-esque programming language I've build from scratch in Python.";
const tags = {
  software: true,
};
const data = {
  github: "https://github.com/0xJeremy/surge",
};

export default function Component() {
  return (
    <ProjectTemplate title={title} data={data}>
      <Images images={[`${imagePath}/surge/surge.png`]} />
      Surge is a small programming language I built from scratch. It is an
      interpreted language, written on top of Python with Ruby like syntax. To
      my knowledge it is turing complete. As part of this project I build a
      testing framework inside of Surge to test the capabilities of the language
      and ensure the parser, lexer, and interpreter were working as expected.
      It's not a large project, but perhaps one of my more interesting. The
      source code, test cases, and operational semantics can be viewed on the
      GitHub project page.
    </ProjectTemplate>
  );
}

export { Component, title, coverImage, description, tags, data };
