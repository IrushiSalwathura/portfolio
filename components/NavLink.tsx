import Link from "next/link"

const NavLink = ({href, title}:{href:string, title:string}) => {
    return(
        <Link href={href} className="block py-2 pl-3 pr-4 text-black-200 text-l rounded md:p-0 hover:text-yellow-100">
        {title}
        </Link>
    )
}

export default NavLink;