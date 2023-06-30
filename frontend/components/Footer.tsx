import Link from "next/link"

const Footer =()=>{
    return(<div className="bg-black">
        <div className="grid grid-cols-3 p-10 text-white gap-5">
            <div>
                <h3 className="text-lg border-l-2 pl-3 border-[#E7B912]">Customer service</h3>
                <ul className="mt-2">
                    <li className="mt-[15px] text-sm">
                        <Link href={"#"}>Help Centre</Link>
                    </li>
                    <li className="mt-[15px] text-sm">
                        <Link href={"#"}>Track your order</Link>
                    </li>
                    <li className="mt-[15px] text-sm">
                        <Link href={"#"}>My account</Link>
                    </li>
                    <li className="mt-[15px] text-sm">
                        <Link href={"#"}>Store Locator</Link>
                    </li>
                    <li className="mt-[15px] text-sm">
                        <Link href={"#"}>Home Delivery</Link>
                    </li>
                    <li className="mt-[15px] text-sm">
                        <Link href={"#"}>Click & Collect</Link>
                    </li>
                    <li className="mt-[15px] text-sm">
                        <Link href={"#"}>Returns & Refunds</Link>
                    </li>
                </ul>
            </div>

            <div>
                <h3 className="text-lg border-l-2 pl-3 border-[#E7B912]">Conatct</h3>
                <ul className="mt-2">
                    <li className="mt-[15px] text-sm">
                        <Link href={"#"}>Branch 1 : 202 Helga Springs Rd, Crawford, TN 38554</Link>
                    </li>
                    <li className="mt-[15px] text-sm">
                        <Link href={"#"}>Branch 2 : 2972 Westheimer Rd. Santa Ana, Illinois 85486</Link>
                    </li>
                    <li className="mt-[15px] text-sm">
                        <Link href={"#"}>Call Us : 020 7946 0496</Link>
                    </li>
                    <li className="mt-[15px] text-sm">
                        <Link href={"#"}>tim.jennings@example.com</Link>
                    </li>
                </ul>
            </div>
            <div>
                <h3 className="text-lg border-l-2 pl-3 border-[#E7B912]">Conatct</h3>
                <form className="mt-2">
                    <input type="email" name="email" placeholder="email" />
                    <button>Subscribe Now -{">"}</button>
                    </form>
                <p className="mt-2">Sign up with your email address to receive news and updates</p>
            </div>
        </div>
    </div>)
}

export default Footer