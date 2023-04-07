import {
    AiFillLinkedin,
    AiFillGithub,
} from "react-icons/ai";

function Footer() {
    return (
        <footer className="flex px-24 py-6 bg-white text-center items-center border-t">
            <p className="mr-auto text-lg">© 2023 Abhay Khattry</p>
            <div className="flex items-center w-1/6 justify-between">
                <p className="text-xl">Follow Me</p>
                <a
                    href="https://www.linkedin.com/in/abhay-khattry-793360214/"
                    target="_blank"
                >
                    <AiFillLinkedin size="36" color="#0A66C2" />
                </a>
                <a
                    href="https://github.com/AbhayKhattry"
                    target="_blank"
                >
                    <AiFillGithub size="36" color="#171515" />
                </a>
            </div>
        </footer>
    );
}

export default Footer;
