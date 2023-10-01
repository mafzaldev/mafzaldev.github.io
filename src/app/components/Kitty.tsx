import Image from "next/image";

const Kitty = () => {
  return (
    <Image
      src={"/lightbrown_kitty_run.gif"}
      alt="Running kitty"
      width={135}
      height={95}
      className="fixed bottom-0 left-0 z-10 w-20 -translate-x-full"
    />
  );
};

export default Kitty;
