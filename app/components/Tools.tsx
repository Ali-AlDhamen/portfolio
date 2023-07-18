import React from "react";

type Props = {};

const Tools = (props: Props) => {
  return (
    <div className="w-10/12 mx-auto">
      <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl">Tools</h1>
      <p className="pt-6 text-neutral-300">
        The products, apps and services I use on a daily basis for work and
        life.
      </p>
      <div className="grid grid-cols-1 mt-20 lg:grid-cols-3 sm:grid-cols-2 sm:gap-10">
        <a
          href="https://firebase.google.com/"
          target="_blank"
          rel="noreferrer"
          className="border-[0.5px] border-neutral-500 block rounded-2xl my-6"
        >
          <div className="w-full py-8 text-center bg-neutral-800 rounded-t-2xl">
            <img
              className="max-w-[80px] rounded-2xl mx-auto brightness-90 contrast-125"
              src="fire.png"
              alt=""
            />
          </div>
          <div className="p-8 py-10">
            <h1 className="mb-1 font-bold">Firebase</h1>
            <p className="text-neutral-400">For My Apps Backend</p>
          </div>
        </a>
        <a
          href="https://flutter.dev/"
          target="_blank"
          rel="noreferrer"
          className="border-[0.5px] border-neutral-500 block rounded-2xl my-6"
        >
          <div className="w-full py-8 text-center bg-neutral-800 rounded-t-2xl">
            <img
              className="max-w-[80px] rounded-2xl mx-auto brightness-90 contrast-125"
              src="flutter.png"
              alt=""
            />
          </div>
          <div className="p-8 py-10">
            <h1 className="mb-1 font-bold">Flutter</h1>
            <p className="text-neutral-400">
              For Creating Mobile User-Friendly Interfaces{" "}
            </p>
          </div>
        </a>
        <a
          href="https://react.dev/"
          target="_blank"
          rel="noreferrer"
          className="border-[0.5px] border-neutral-500 block rounded-2xl my-6"
        >
          <div className="w-full py-8 text-center bg-neutral-800 rounded-t-2xl">
            <img
              className="max-w-[80px] rounded-2xl mx-auto brightness-90 contrast-125"
              src="react.png"
              alt=""
            />
          </div>
          <div className="p-8 py-10">
            <h1 className="mb-1 font-bold">React</h1>
            <p className="text-neutral-400">
              For Creating Interactive User-Friendly Interfaces{" "}
            </p>
          </div>
        </a>
        <a
          href="https://supabase.com/"
          target="_blank"
          rel="noreferrer"
          className="border-[0.5px] border-neutral-500 block rounded-2xl my-6"
        >
          <div className="w-full py-8 text-center bg-neutral-800 rounded-t-2xl">
            <img
              className="max-w-[80px] rounded-2xl mx-auto brightness-90 contrast-125"
              src="supabase.png"
              alt=""
            />
          </div>
          <div className="p-8 py-10">
            <h1 className="mb-1 font-bold">Supabase</h1>
            <p className="text-neutral-400">For Authentication & Databases</p>
          </div>
        </a>
        {/* <a
          href="https://www.figma.com/"
          target="_blank"
          rel="noreferrer"
          className="border-[0.5px] border-neutral-500 block rounded-2xl my-6"
        >
          <div className="w-full py-8 text-center bg-neutral-800 rounded-t-2xl">
            <img
              className="max-w-[80px] rounded-2xl mx-auto brightness-90 contrast-125"
              src="icon-figma.png"
              alt=""
            />
          </div>
          <div className="p-8 py-10">
            <h1 className="mb-1 font-bold">Figma</h1>
            <p className="text-neutral-400">My design tool of choice</p>
          </div>
        </a> */}
        <a
          href="https://code.visualstudio.com/"
          target="_blank"
          rel="noreferrer"
          className="border-[0.5px] border-neutral-500 block rounded-2xl my-6"
        >
          <div className="w-full py-8 text-center bg-neutral-800 rounded-t-2xl">
            <img
              className="max-w-[80px] rounded-2xl mx-auto brightness-90 contrast-125"
              src="vscode.png"
              alt=""
            />
          </div>
          <div className="p-8 py-10">
            <h1 className="mb-1 font-bold">Vs Code</h1>
            <p className="text-neutral-400">
            Where I Spend Most Of My Time Writing Code & Crying
            </p>
          </div>
        </a>
        <a
          href="https://vercel.com/"
          target="_blank"
          rel="noreferrer"
          className="border-[0.5px] border-neutral-500 block rounded-2xl my-6"
        >
          <div className="w-full py-8 text-center bg-neutral-800 rounded-t-2xl">
            <img
              className="max-w-[80px] rounded-2xl mx-auto brightness-90 contrast-125"
              src="vercel.png"
              alt=""
            />
          </div>
          <div className="p-8 py-10">
            <h1 className="mb-1 font-bold">Vercel</h1>
            <p className="text-neutral-400">For deployement purposes</p>
          </div>
        </a>
        {/* <a
          href="https://dribbble.com"
          target="_blank"
          rel="noreferrer"
          className="border-[0.5px] border-neutral-500 block rounded-2xl my-6"
        >
          <div className="w-full py-8 text-center bg-neutral-800 rounded-t-2xl">
            <img
              className="max-w-[80px] rounded-2xl mx-auto brightness-90 contrast-125"
              src="dribbble.png"
              alt=""
            />
          </div>
          <div className="p-8 py-10">
            <h1 className="mb-1 font-bold">Dribbble</h1>
            <p className="text-neutral-400">
              Daily Inspiration for my projects
            </p>
          </div>
        </a> */}
      </div>
    </div>
  );
};

export default Tools;
