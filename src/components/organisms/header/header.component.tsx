import { useAppSelector } from "@/store";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const auth = useAppSelector((state) => state.auth);

  return (
    <header className="o-header">
      <div className="o-header__left">
        <Link className="o-header__link" href="/buy">
          Buy
        </Link>
        <Link className="o-header__link" href="/rent">
          Rent
        </Link>
        <Link className="o-header__link" href="/sell">
          Sell
        </Link>
        <Link className="o-header__link" href="/home-loan">
          Home Loans
        </Link>
        <Link className="o-header__link" href="/agent-finder">
          Agent finder
        </Link>
      </div>
      <div className="o-header__center">
        <Link href="/">
          <Image
            src="https://s.zillowstatic.com/pfs/static/z-logo-default.svg"
            alt="z-logo-default"
            width={160}
            height={30}
          />
        </Link>
      </div>
      <div className="o-header__right">
        <Link className="o-header__link" href="/manage-rental">
          Manage Rentals
        </Link>
        <Link className="o-header__link" href="/advertise">
          Advertise
        </Link>
        <Link className="o-header__link" href="/help">
          Help
        </Link>
        {auth.isAuth ? (
          <Link className="o-header__link" href="/account/profile">
            Profile
          </Link>
        ) : (
          <Link className="o-header__link" href="/account/login">
            Sign In
          </Link>
        )}
      </div>
    </header>
  );
};

export { Header };
