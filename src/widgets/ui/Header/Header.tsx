import { Page, Navigation } from "../../../features";

const Header = () => {
    const links: Array<Page> = [
        {
            label: "Landing",
            path: "/",
        },
        {
            label: "Games",
            path: "/games",
        },
    ];

    return (
        <header className="flex w-screen h-[15vh] bg-slate-400">
            <Navigation pages={links} />
        </header>
    );
};

export default Header;
