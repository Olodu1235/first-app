import { cn } from "../utils/class";

export default function Test() {
  return (
    <div
      className={cn(
        `
      bg-carrotOrange font-ubuntu text-white
    `,
        newLandingPaddingHorizontal
      )}
    >
      <h1>Just testing tailwind</h1>
    </div>
  );
}
