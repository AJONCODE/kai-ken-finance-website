import Image from "next/image"

function HeaderImage (props) {
    return(
        <div>
            <Image src={props.image} alt="header-banner" layout="fill" />
        </div>
    )
}

export default HeaderImage