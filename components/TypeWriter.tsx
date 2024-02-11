"use client";
import Typewriter from "typewriter-effect";
const TypeWriter = () => {
  return (
    <div className="py-4 text-xl sm:text-2xl md:text-xl lg:text-2xl xl:text-3xl">
      <Typewriter
        options={{
          loop: true,
          delay: 50,
          deleteSpeed: 20,
        }}
        onInit={(typewriter) => {
          typewriter
            .typeString("Web Developer")
            .pauseFor(1500)
            .deleteAll()
            .typeString("App Developer")
            .pauseFor(1500)
            .start();
        }}
      />{" "}
    </div>
  );
};

export default TypeWriter;
