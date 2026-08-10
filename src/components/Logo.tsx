import {Link} from "react-router-dom";
import myLogo from "../assets/logo.svg";

export const Logo = () => {
    return (
        <div className="flex min-h-9 items-center">
            <Link
                to="/boards"
                className="inline-flex focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-400"
                aria-label="LemonAd — перейти к доскам"
            >
                <img className="h-7 w-auto opacity-90 transition hover:opacity-100" src={myLogo} alt="LemonAd"/>
            </Link>
        </div>
    );
};
