import { FC } from "react";
import { Link } from "react-router-dom";

interface NavigationProps {
    pages: Array<Page>;
}

export type Page = {
    label: string;
    path: string;
};

const Navigation: FC<NavigationProps> = ({ pages }) => {
    const links = pages.map((page, index) => (
        <Link key={index + page.label} to={page.path}>
            {page.label}
        </Link>
    ));
    return (
        <section className="w-[50vw] flex justify-between items-center">
            {links}
        </section>
    );
};

export default Navigation;
