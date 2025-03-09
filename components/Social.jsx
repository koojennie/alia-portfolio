import Link from "next/link";
import { FaGithub, FaLinkedin, FaYoutube, FaTwitter } from 'react-icons/fa'

const socials = [
    {icon: <FaGithub/>, path: "https://github.com/koojennie"},
    {icon: <FaLinkedin/>, path: "https://linkedin.com/in/aliajennifer/"},
]
const Social = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
        {socials.map((item, index)=> {
            return (
                <Link key={index} href={item.path} className={iconStyles} target="_blank" rel="noopener noreferrer">
                    {item.icon}
                </Link>
            )
        })}
    </div>
  )
}

export default Social