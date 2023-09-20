import logo from "../asset/newLogo.svg";
import search from "../asset/newSearch.svg";
import { cn, newLandingPaddingHorizontal } from "../utils/class";
import { CButton } from "./CButton";

export const NewHeader = () => {
  return (
    <header
      className={cn(
        `
        bg-kuroiBlack
        flex
        justify-between
        py-6
        items-center`,
        newLandingPaddingHorizontal
      )}
    >
      <img
        src={logo}
        className={"w-[60px] sm:w-[80px] md:w-[104px]"}
        alt={"logo"}
      />

      <div className={"flex gap-x-6 md:gap-x-10 lg:gap-x-16"}>
        <div>
          <CButton transparent>Login</CButton>
          <CButton>Sign Up</CButton>
        </div>

        <CButton noPadding transparent>
          <img src={search} />
        </CButton>
      </div>
    </header>
  );
};
