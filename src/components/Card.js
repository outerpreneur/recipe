import React from "react";
import Header from "./Header";
import Main from "./Main";

export default function Card() {
  return (
    <section className="bg-white p-10 max-w-[736px] mx-auto rounded-2xl">
      <Header />
      <Main />
    </section>
  );
}
