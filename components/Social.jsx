import { FaLinkedin, FaGithub, FaDiscord, FaWhatsapp } from "react-icons/fa";

const socials = [
  { icon: <FaLinkedin />, path: "https://www.linkedin.com/in/adil-malik-376b1a268/" },
  { icon: <FaGithub />, path: "https://github.com/adilmalik01" },
  { icon: <FaWhatsapp />, path: "https://wa.me/923136196041" },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => (
        <a
          key={index}
          href={item.path}
          className={iconStyles}
          target="_blank"
          rel="noopener noreferrer"
        >
          {item.icon}
        </a>
      ))}
    </div>
  );
};

export default Social;
