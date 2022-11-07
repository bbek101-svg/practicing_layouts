import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

function Right() {
  return (
    <div className="w-full fixed  mb-8 flex flex-row md:flex-col justify-start md:justify-end items-start p-4 gap-4 text-white">
      <MenuIcon />
      <Link href="/" className="text-white">
        <InstagramIcon />
      </Link>
      <Link href="/">
        <TwitterIcon />
      </Link>
      <Link href="/">
        <LinkedInIcon />
      </Link>
      <Link href="/">
        <GitHubIcon />
      </Link>
    </div>
  );
}

export default Right;
