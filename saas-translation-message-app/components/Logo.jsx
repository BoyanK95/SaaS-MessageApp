import LogoImage from "@logos/white-chat-logo.gif";
import StaticLogoImage from '@logos/logo-chat-static.png'
import Link from "next/link";
import { AspectRatio } from "./ui/aspect-ratio";
import Image from "next/image";

function Logo() {
  return (
    <Link href="/">
      <div className="flex items-center w-72 h-14">
        <AspectRatio
          ratio={16 / 9}
          className="flex items-center justify-center"
        >
          <Image
            src={LogoImage}
            alt="white-logo-image"
            priority
            className="roundef-full dark:filter dark:invert"
          />
        </AspectRatio>
      </div>
    </Link>
  );
}

export default Logo;
