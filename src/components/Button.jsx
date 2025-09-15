import codeforcesLogo from '../assets/codeforcesLogo.svg'
import leetcodeLogo from '../assets/leetcodeLogo.svg'
const Button = ({ name, isBeam = false, containerClass, link, logo}) => {
  if(link){
    if(logo == "leetcode"){
      logo = leetcodeLogo;
    }
    else if(logo == "codeforces"){
      logo = codeforcesLogo;
    }
    return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
     className={`flex gap-2 items-center justify-center cursor-pointer p-3 dark:bg-[#393838] bg-[#ffffff] transition-all active:scale-95 dark:text-white mx-auto ${containerClass}`}>
      <img src= {logo} alt="" className='h-[1.3rem]'/>
      
      {name}
      <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#B7B7B7"><path d="m256-240-56-56 384-384H240v-80h480v480h-80v-344L256-240Z"/></svg>
    </a>
    );
  }
  else{
    return (
    <button className={`flex gap-4 items-center justify-center cursor-pointer p-3 dark:bg-[#393838] transition-all active:scale-95 dark:text-white bg-[#ffffff] mx-auto ${containerClass}`}>
      {isBeam && (
        <span className="relative flex h-3 w-3">
          <span className="btn-ping animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="btn-ping_dot relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
        </span>
      )}
      {name}
    </button>
  );
  }
};

export default Button;