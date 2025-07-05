export default function Header() {
  return (
    <div className="flex flex-col gap-16 items-center">
      <h1 className="sr-only"></h1>
      <p className="text-3xl lg:text-4xl !leading-tight mx-auto max-w-xl text-center">
        Your hub for learning everything about combat robots -- from design to
        competition.
      </p>
      <a
        href="https://community.combatrobots.io"
        target="_blank"
        className="font-bold hover:underline"
        rel="noreferrer"
      >
        Go to Community
      </a>
      <div className="w-full p-[1px] bg-gradient-to-r from-transparent via-foreground/10 to-transparent my-8" />
    </div>
  );
}
