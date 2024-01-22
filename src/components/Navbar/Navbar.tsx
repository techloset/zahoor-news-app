import logo from "./logo.png";

const Navbar = () => {
  return (
    <div className="flex justify-center  bg-white bg-opacity-90 backdrop-blur-[28px] ">
      <div className="font-Nunito text-[16px] sm:w-[1920px] sm:h-20">
        <nav className="sm:mx-[295px] mx-[24px] flex h-[80px] my-[14px] items-center justify-center">
          <img
            className="mr-[136px] sm:h-[52px] sm:w-[62.79px] h-[40px] w-[49.33px]"
            src={logo}
            alt="logo"
          />
          <div className="flex sm:gap-[40px] gap-[14px] items-center justify-evenly">
            <ul className="w-[893px] sm:flex hidden gap-[40px] h-[22px] items-center">
              <li className="flex gap-[4px] items-center">
                <div className="h-[8px] w-[8px] bg-red-700 rounded-full"></div>
                <span>Corona Updates</span>
              </li>
              <li>Politics</li>
              <li>Business</li>
              <li>Sports</li>
              <li>World</li>
              <li>Travel</li>
              <li>Podcast</li>
              <svg
                className="sm:h-[12px] sm:w-[12px]"
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="13"
                viewBox="0 0 12 13"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11.8567 6.86896L5.88976 12.343C5.68876 12.545 5.36276 12.545 5.16076 12.343C4.95976 12.141 4.95976 11.8139 5.16076 11.6129L10.7367 6.49793L5.14477 1.36896C4.94377 1.16696 4.94377 0.839918 5.14477 0.638918C5.34577 0.437918 5.67177 0.436918 5.87377 0.638918L11.8417 6.11396C11.8487 6.11996 11.8457 6.13097 11.8517 6.13697C11.8537 6.13897 11.8568 6.13692 11.8578 6.13892C12.0598 6.33992 12.0597 6.66696 11.8567 6.86896ZM5.85778 6.13593C5.85978 6.13793 5.86274 6.13594 5.86474 6.13794C6.06574 6.33994 6.06574 6.66592 5.86474 6.86792L0.895745 11.3419C0.694745 11.5439 0.368741 11.5439 0.166741 11.3419C-0.0342588 11.1399 -0.0342588 10.8139 0.166741 10.6129L4.73675 6.49793L0.15075 2.36792C-0.05025 2.16692 -0.05025 1.83992 0.15075 1.63892C0.35275 1.43692 0.677754 1.43692 0.879754 1.63892L5.84875 6.11292C5.85475 6.11992 5.85178 6.12993 5.85778 6.13593Z"
                  fill="black"
                />
              </svg>
            </ul>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="19"
              viewBox="0 0 16 19"
              fill="none"
              className="sm:h-[24px] h-[19] sm:w-[19.2px] w-[15px]"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M14.5139 17.7345C14.5139 14.2357 11.5597 11.4007 7.91667 11.4007C4.27236 11.4007 1.31944 14.2357 1.31944 17.7345V19H0V17.7345C0 14.522 2.07812 11.7807 5.01124 10.6698C3.20229 9.69313 1.97917 7.83484 1.97917 5.70037C1.97917 2.5525 4.63785 0 7.91667 0C11.1955 0 13.8542 2.5525 13.8542 5.70037C13.8542 7.83484 12.6297 9.69186 10.8208 10.6698C13.7552 11.7807 15.8333 14.522 15.8333 17.7345V19H14.5139V17.7345ZM12.5347 5.70037C12.5347 3.25174 10.4672 1.26675 7.91667 1.26675C5.36618 1.26675 3.29861 3.25174 3.29861 5.70037C3.29861 8.149 5.36618 10.134 7.91667 10.134C10.4672 10.134 12.5347 8.149 12.5347 5.70037Z"
                fill="#2A2A2A"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
              className="sm:h-[24px] sm:w-[24px] h-[19px] w-[19px] "
            >
              <path
                d="M8.9888 16.2167C4.9944 16.2167 1.76084 12.9755 1.76084 8.98876C1.76084 4.99438 4.9944 1.76083 8.9888 1.76083C12.9832 1.76083 16.2168 4.99438 16.2168 8.98876C16.2168 12.9755 12.9832 16.2167 8.9888 16.2167ZM19.8916 19.3588L14.8929 14.3603C16.1863 12.9375 16.9776 11.0582 16.9776 8.98876C16.9776 4.57592 13.4017 1 8.9888 1C4.57594 1 1 4.57592 1 8.98876C1 13.4016 4.57594 16.9775 8.9888 16.9775C11.0583 16.9775 12.9376 16.1787 14.3604 14.8928L19.359 19.8916C19.5036 20.0361 19.747 20.0361 19.8916 19.8916C20.0361 19.7394 20.0361 19.5034 19.8916 19.3588Z"
                fill="#2A2A2A"
                stroke="#2A2A2A"
                stroke-width="0.5"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
              className="sm:h-[24px] sm:w-[24px] h-[17px] w-[17px]"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0.607143 1.30769H16.3929C16.728 1.30769 17 1.01477 17 0.653846C17 0.292923 16.728 0 16.3929 0H0.607143C0.273214 0 0 0.292923 0 0.653846C0 1.01477 0.273214 1.30769 0.607143 1.30769ZM16.3929 5.23077H5.46429C5.13036 5.23077 4.85714 5.52369 4.85714 5.88462C4.85714 6.24554 5.13036 6.53846 5.46429 6.53846H16.3929C16.728 6.53846 17 6.24554 17 5.88462C17 5.52238 16.728 5.23077 16.3929 5.23077ZM16.3929 10.4602H0.607143C0.273214 10.4602 0 10.7531 0 11.114C0 11.475 0.273214 11.7679 0.607143 11.7679H16.3929C16.728 11.7679 17 11.475 17 11.114C17 10.7531 16.728 10.4602 16.3929 10.4602ZM16.3929 15.6923H7.28571C6.95179 15.6923 6.67857 15.9852 6.67857 16.3462C6.67857 16.7071 6.95179 17 7.28571 17H16.3929C16.728 17 17 16.7071 17 16.3462C17 15.9852 16.728 15.6923 16.3929 15.6923Z"
                fill="#2A2A2A"
              />
            </svg>
            {/* <img src={nav} height="22px" width="23.05px" alt="Navigation Bar" /> */}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
