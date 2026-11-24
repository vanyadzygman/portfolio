import "./Header.scss";
import Socials from "../socials/Socials";

export default () => {
  return (
    <header className="header">
      <a className="header__logo" href="">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 137 134"
          width="137"
          height="134"
        >
          <title>code-icon</title>
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M8.08,8.45 C6.93,9.80 5.23,11.93 4.35,14.00 C3.48,16.07 3.08,4.56 2.83,20.88 C2.58,37.19 2.80,96.00 2.84,111.88 C2.89,127.75 2.92,114.85 3.11,116.12 C3.31,117.40 3.58,118.38 4.01,119.50 C4.45,120.62 5.03,121.81 5.73,122.87 C6.43,123.94 6.91,124.78 8.21,125.90 C9.50,127.02 11.64,128.73 13.50,129.57 C15.36,130.41 2.00,130.74 19.38,130.95 C36.75,131.16 100.79,130.98 117.75,130.82 C134.71,130.66 119.98,130.40 121.12,129.97 C122.27,129.54 123.54,128.92 124.62,128.22 C125.71,127.52 126.53,127.09 127.64,125.78 C128.74,124.47 130.40,122.32 131.24,120.38 C132.08,118.43 132.43,127.00 132.68,114.12 C132.93,101.25 132.80,59.08 132.75,43.12 C132.70,27.17 132.74,23.42 132.38,18.38 C132.01,13.33 131.42,14.57 130.55,12.88 C129.68,11.18 128.66,9.61 127.17,8.21 C125.69,6.81 123.55,5.34 121.62,4.48 C119.70,3.62 132.88,3.26 115.62,3.05 C98.38,2.84 34.94,3.03 18.12,3.20 C1.31,3.38 15.90,3.65 14.75,4.09 C13.60,4.54 12.36,5.15 11.25,5.88 C10.14,6.60 9.23,7.09 8.08,8.45 Z M91.38,44.00 C92.04,44.50 92.32,44.26 95.38,47.01 C98.44,49.76 106.94,57.78 109.74,60.51 C112.54,63.24 111.66,62.50 112.19,63.38 C112.73,64.25 112.91,65.02 112.94,65.75 C112.96,66.48 112.78,67.01 112.34,67.75 C111.91,68.49 113.23,67.36 110.34,70.20 C107.45,73.04 98.17,81.88 95.00,84.79 C91.84,87.69 91.98,87.15 91.38,87.62 C90.84,87.20 89.21,86.13 88.18,85.09 C87.16,84.05 85.74,81.99 85.25,81.38 C85.60,80.92 85.16,80.81 87.32,78.63 C89.48,76.46 96.02,70.48 98.19,68.31 C100.37,66.14 100.01,66.07 100.38,65.62 C97.85,63.04 87.77,52.71 85.25,50.12 C85.71,49.53 87.01,47.55 88.03,46.53 C89.05,45.51 90.82,44.42 91.38,44.00 Z M44.00,44.00 C44.02,44.00 44.10,44.00 44.12,44.00 C44.66,44.40 46.34,45.42 47.36,46.42 C48.38,47.42 49.77,49.40 50.25,50.00 C49.90,50.46 50.70,50.13 48.18,52.73 C45.66,55.33 37.30,63.48 35.12,65.62 C35.12,65.65 35.12,65.73 35.12,65.75 C37.32,67.91 45.75,76.10 48.30,78.70 C50.84,81.31 50.03,80.93 50.38,81.38 C49.91,81.95 48.64,83.81 47.60,84.85 C46.56,85.89 44.70,87.16 44.12,87.62 C43.52,87.16 43.60,87.67 40.50,84.84 C37.40,82.01 28.39,73.45 25.52,70.62 C22.64,67.79 23.73,68.71 23.24,67.87 C22.75,67.04 22.57,66.37 22.57,65.63 C22.58,64.88 22.80,64.18 23.27,63.38 C23.75,62.58 22.51,63.63 25.41,60.81 C28.30,58.00 37.52,49.28 40.62,46.48 C43.72,43.68 43.44,44.41 44.00,44.00 Z M81.62,35.25 C81.65,35.27 81.73,35.35 81.75,35.38 C79.06,44.33 68.77,78.85 65.61,89.12 C62.44,99.40 63.23,95.69 62.75,97.00 C61.79,97.06 58.53,97.40 57.01,97.36 C55.49,97.32 54.19,96.85 53.62,96.75 C55.17,91.48 59.74,75.42 62.91,65.12 C66.07,54.83 71.01,40.02 72.62,35.00 C73.62,34.96 77.11,34.72 78.61,34.77 C80.11,34.81 81.12,35.17 81.62,35.25 Z"
          />
        </svg>
      </a>
      <nav className="header__nav">
        <ul className="header__nav-list">
          <li>
            <a className="header__nav-link" href="#home">Home</a>
          </li>
          <li>
            <a className="header__nav-link" href="#about">About</a>
          </li>
          <li>
            <a className="header__nav-link" href="#projects">Projects</a>
          </li>
          <li>
            <a className="header__nav-link" href="#contacts">Contacts</a>
          </li>
        </ul>
      </nav>
      <Socials size="small" />
      <button
        className="header__menu-btn"
        type="button"
        aria-label="Toggle menu"
        aria-controls="menu"
        aria-expanded="false"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          overflow="visible"
        >
          <defs>
            <linearGradient
              id="menu-glass-g"
              gradientUnits="userSpaceOnUse"
              x1="0"
              y1="0"
              x2="0"
              y2="24"
            >
              <stop offset="0" stopColor="currentColor" stopOpacity="0.78" />
              <stop offset="1" stopColor="currentColor" stopOpacity="0.36" />
            </linearGradient>
            <linearGradient
              id="menu-glass-ge"
              gradientUnits="userSpaceOnUse"
              x1="0"
              y1="0"
              x2="0"
              y2="24"
            >
              <stop offset="0" stopColor="currentColor" stopOpacity="1" />
              <stop offset="1" stopColor="currentColor" stopOpacity="0.55" />
            </linearGradient>
            <mask
              id="menu-glass-gm"
              maskUnits="userSpaceOnUse"
              x="-2"
              y="-2"
              width="28"
              height="28"
            >
              <path
                d="M4 6L20 6"
                fill="none"
                stroke="#fff"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4 12L20 12"
                fill="none"
                stroke="#fff"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4 18L20 18"
                fill="none"
                stroke="#fff"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </mask>
            <mask
              id="menu-glass-gp"
              maskUnits="userSpaceOnUse"
              x="-2"
              y="-2"
              width="28"
              height="28"
            >
              <rect x="-2" y="-2" width="28" height="28" fill="#fff" />
            </mask>
            <mask
              id="menu-glass-go"
              maskUnits="userSpaceOnUse"
              x="-2"
              y="-2"
              width="28"
              height="28"
            >
              <rect x="-2" y="-2" width="28" height="28" fill="#fff" />
            </mask>
          </defs>
          <g mask="url(#menu-glass-gp)"></g>
          <rect
            x="-2"
            y="-2"
            width="28"
            height="28"
            fill="url(#menu-glass-ge)"
            mask="url(#menu-glass-gm)"
          />
        </svg>
      </button>
    </header>
  );
};
