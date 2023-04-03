import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div class="container-fluid">
      <Link to="/">
        <button className="david">
          <svg
            width="351"
            height="76"
            viewBox="0 0 351 76"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_1_5)">
              <mask
                id="path-1-outside-1_1_5"
                maskUnits="userSpaceOnUse"
                x="4.16"
                y="0.119995"
                width="343"
                height="68"
                fill="black"
              >
                <rect
                  fill="white"
                  x="4.16"
                  y="0.119995"
                  width="343"
                  height="68"
                />
                <path d="M24.52 8.24C30.6 8.24 35.8533 9.38666 40.28 11.68C44.76 13.92 48.1733 17.1467 50.52 21.36C52.92 25.5733 54.12 30.5333 54.12 36.24C54.12 41.9467 52.92 46.9067 50.52 51.12C48.1733 55.28 44.76 58.48 40.28 60.72C35.8533 62.9067 30.6 64 24.52 64H7.16V8.24H24.52ZM24.52 58C31.72 58 37.2133 56.1067 41 52.32C44.7867 48.48 46.68 43.12 46.68 36.24C46.68 29.3067 44.76 23.8933 40.92 20C37.1333 16.1067 31.6667 14.16 24.52 14.16H14.44V58H24.52Z" />
                <path d="M61.0025 41.92C61.0025 37.44 61.9092 33.52 63.7225 30.16C65.5358 26.7467 68.0158 24.1067 71.1625 22.24C74.3625 20.3733 77.9092 19.44 81.8025 19.44C85.6425 19.44 88.9758 20.2667 91.8025 21.92C94.6292 23.5733 96.7358 25.6533 98.1225 28.16V20.16H105.483V64H98.1225V55.84C96.6825 58.4 94.5225 60.5333 91.6425 62.24C88.8158 63.8933 85.5092 64.72 81.7225 64.72C77.8292 64.72 74.3092 63.76 71.1625 61.84C68.0158 59.92 65.5358 57.2267 63.7225 53.76C61.9092 50.2933 61.0025 46.3467 61.0025 41.92ZM98.1225 42C98.1225 38.6933 97.4558 35.8133 96.1225 33.36C94.7892 30.9067 92.9758 29.04 90.6825 27.76C88.4425 26.4267 85.9625 25.76 83.2425 25.76C80.5225 25.76 78.0425 26.4 75.8025 27.68C73.5625 28.96 71.7758 30.8267 70.4425 33.28C69.1092 35.7333 68.4425 38.6133 68.4425 41.92C68.4425 45.28 69.1092 48.2133 70.4425 50.72C71.7758 53.1733 73.5625 55.0667 75.8025 56.4C78.0425 57.68 80.5225 58.32 83.2425 58.32C85.9625 58.32 88.4425 57.68 90.6825 56.4C92.9758 55.0667 94.7892 53.1733 96.1225 50.72C97.4558 48.2133 98.1225 45.3067 98.1225 42Z" />
                <path d="M134.105 57.28L147.705 20.16H155.465L138.265 64H129.785L112.585 20.16H120.425L134.105 57.28Z" />
                <path d="M166.389 13.04C165.002 13.04 163.829 12.56 162.869 11.6C161.909 10.64 161.429 9.46666 161.429 8.07999C161.429 6.69333 161.909 5.52 162.869 4.56C163.829 3.6 165.002 3.12 166.389 3.12C167.722 3.12 168.842 3.6 169.749 4.56C170.709 5.52 171.189 6.69333 171.189 8.07999C171.189 9.46666 170.709 10.64 169.749 11.6C168.842 12.56 167.722 13.04 166.389 13.04ZM169.909 20.16V64H162.629V20.16H169.909Z" />
                <path d="M179.596 41.92C179.596 37.44 180.503 33.52 182.316 30.16C184.13 26.7467 186.61 24.1067 189.756 22.24C192.956 20.3733 196.53 19.44 200.476 19.44C203.89 19.44 207.063 20.24 209.996 21.84C212.93 23.3867 215.17 25.44 216.716 28V4.8H224.076V64H216.716V55.76C215.276 58.3733 213.143 60.5333 210.316 62.24C207.49 63.8933 204.183 64.72 200.396 64.72C196.503 64.72 192.956 63.76 189.756 61.84C186.61 59.92 184.13 57.2267 182.316 53.76C180.503 50.2933 179.596 46.3467 179.596 41.92ZM216.716 42C216.716 38.6933 216.05 35.8133 214.716 33.36C213.383 30.9067 211.57 29.04 209.276 27.76C207.036 26.4267 204.556 25.76 201.836 25.76C199.116 25.76 196.636 26.4 194.396 27.68C192.156 28.96 190.37 30.8267 189.036 33.28C187.703 35.7333 187.036 38.6133 187.036 41.92C187.036 45.28 187.703 48.2133 189.036 50.72C190.37 53.1733 192.156 55.0667 194.396 56.4C196.636 57.68 199.116 58.32 201.836 58.32C204.556 58.32 207.036 57.68 209.276 56.4C211.57 55.0667 213.383 53.1733 214.716 50.72C216.05 48.2133 216.716 45.3067 216.716 42Z" />
                <path d="M296.747 8.24L278.587 42.96V64H271.307V42.96L253.067 8.24H261.147L274.907 36.48L288.667 8.24H296.747Z" />
                <path d="M343.306 20.16V64H336.026V57.52C334.639 59.76 332.692 61.52 330.186 62.8C327.732 64.0267 325.012 64.64 322.026 64.64C318.612 64.64 315.546 63.9467 312.826 62.56C310.106 61.12 307.946 58.9867 306.346 56.16C304.799 53.3333 304.026 49.8933 304.026 45.84V20.16H311.226V44.88C311.226 49.2 312.319 52.5333 314.506 54.88C316.692 57.1733 319.679 58.32 323.466 58.32C327.359 58.32 330.426 57.12 332.666 54.72C334.906 52.32 336.026 48.8267 336.026 44.24V20.16H343.306Z" />
              </mask>
              <path
                d="M24.52 8.24C30.6 8.24 35.8533 9.38666 40.28 11.68C44.76 13.92 48.1733 17.1467 50.52 21.36C52.92 25.5733 54.12 30.5333 54.12 36.24C54.12 41.9467 52.92 46.9067 50.52 51.12C48.1733 55.28 44.76 58.48 40.28 60.72C35.8533 62.9067 30.6 64 24.52 64H7.16V8.24H24.52ZM24.52 58C31.72 58 37.2133 56.1067 41 52.32C44.7867 48.48 46.68 43.12 46.68 36.24C46.68 29.3067 44.76 23.8933 40.92 20C37.1333 16.1067 31.6667 14.16 24.52 14.16H14.44V58H24.52Z"
                stroke="white"
                stroke-width="6"
                shape-rendering="crispEdges"
                mask="url(#path-1-outside-1_1_5)"
              />
              <path
                d="M61.0025 41.92C61.0025 37.44 61.9092 33.52 63.7225 30.16C65.5358 26.7467 68.0158 24.1067 71.1625 22.24C74.3625 20.3733 77.9092 19.44 81.8025 19.44C85.6425 19.44 88.9758 20.2667 91.8025 21.92C94.6292 23.5733 96.7358 25.6533 98.1225 28.16V20.16H105.483V64H98.1225V55.84C96.6825 58.4 94.5225 60.5333 91.6425 62.24C88.8158 63.8933 85.5092 64.72 81.7225 64.72C77.8292 64.72 74.3092 63.76 71.1625 61.84C68.0158 59.92 65.5358 57.2267 63.7225 53.76C61.9092 50.2933 61.0025 46.3467 61.0025 41.92ZM98.1225 42C98.1225 38.6933 97.4558 35.8133 96.1225 33.36C94.7892 30.9067 92.9758 29.04 90.6825 27.76C88.4425 26.4267 85.9625 25.76 83.2425 25.76C80.5225 25.76 78.0425 26.4 75.8025 27.68C73.5625 28.96 71.7758 30.8267 70.4425 33.28C69.1092 35.7333 68.4425 38.6133 68.4425 41.92C68.4425 45.28 69.1092 48.2133 70.4425 50.72C71.7758 53.1733 73.5625 55.0667 75.8025 56.4C78.0425 57.68 80.5225 58.32 83.2425 58.32C85.9625 58.32 88.4425 57.68 90.6825 56.4C92.9758 55.0667 94.7892 53.1733 96.1225 50.72C97.4558 48.2133 98.1225 45.3067 98.1225 42Z"
                stroke="white"
                stroke-width="6"
                shape-rendering="crispEdges"
                mask="url(#path-1-outside-1_1_5)"
              />
              <path
                d="M134.105 57.28L147.705 20.16H155.465L138.265 64H129.785L112.585 20.16H120.425L134.105 57.28Z"
                stroke="white"
                stroke-width="6"
                shape-rendering="crispEdges"
                mask="url(#path-1-outside-1_1_5)"
              />
              <path
                d="M166.389 13.04C165.002 13.04 163.829 12.56 162.869 11.6C161.909 10.64 161.429 9.46666 161.429 8.07999C161.429 6.69333 161.909 5.52 162.869 4.56C163.829 3.6 165.002 3.12 166.389 3.12C167.722 3.12 168.842 3.6 169.749 4.56C170.709 5.52 171.189 6.69333 171.189 8.07999C171.189 9.46666 170.709 10.64 169.749 11.6C168.842 12.56 167.722 13.04 166.389 13.04ZM169.909 20.16V64H162.629V20.16H169.909Z"
                stroke="white"
                stroke-width="6"
                shape-rendering="crispEdges"
                mask="url(#path-1-outside-1_1_5)"
              />
              <path
                d="M179.596 41.92C179.596 37.44 180.503 33.52 182.316 30.16C184.13 26.7467 186.61 24.1067 189.756 22.24C192.956 20.3733 196.53 19.44 200.476 19.44C203.89 19.44 207.063 20.24 209.996 21.84C212.93 23.3867 215.17 25.44 216.716 28V4.8H224.076V64H216.716V55.76C215.276 58.3733 213.143 60.5333 210.316 62.24C207.49 63.8933 204.183 64.72 200.396 64.72C196.503 64.72 192.956 63.76 189.756 61.84C186.61 59.92 184.13 57.2267 182.316 53.76C180.503 50.2933 179.596 46.3467 179.596 41.92ZM216.716 42C216.716 38.6933 216.05 35.8133 214.716 33.36C213.383 30.9067 211.57 29.04 209.276 27.76C207.036 26.4267 204.556 25.76 201.836 25.76C199.116 25.76 196.636 26.4 194.396 27.68C192.156 28.96 190.37 30.8267 189.036 33.28C187.703 35.7333 187.036 38.6133 187.036 41.92C187.036 45.28 187.703 48.2133 189.036 50.72C190.37 53.1733 192.156 55.0667 194.396 56.4C196.636 57.68 199.116 58.32 201.836 58.32C204.556 58.32 207.036 57.68 209.276 56.4C211.57 55.0667 213.383 53.1733 214.716 50.72C216.05 48.2133 216.716 45.3067 216.716 42Z"
                stroke="white"
                stroke-width="6"
                shape-rendering="crispEdges"
                mask="url(#path-1-outside-1_1_5)"
              />
              <path
                d="M296.747 8.24L278.587 42.96V64H271.307V42.96L253.067 8.24H261.147L274.907 36.48L288.667 8.24H296.747Z"
                stroke="white"
                stroke-width="6"
                shape-rendering="crispEdges"
                mask="url(#path-1-outside-1_1_5)"
              />
              <path
                d="M343.306 20.16V64H336.026V57.52C334.639 59.76 332.692 61.52 330.186 62.8C327.732 64.0267 325.012 64.64 322.026 64.64C318.612 64.64 315.546 63.9467 312.826 62.56C310.106 61.12 307.946 58.9867 306.346 56.16C304.799 53.3333 304.026 49.8933 304.026 45.84V20.16H311.226V44.88C311.226 49.2 312.319 52.5333 314.506 54.88C316.692 57.1733 319.679 58.32 323.466 58.32C327.359 58.32 330.426 57.12 332.666 54.72C334.906 52.32 336.026 48.8267 336.026 44.24V20.16H343.306Z"
                stroke="white"
                stroke-width="6"
                shape-rendering="crispEdges"
                mask="url(#path-1-outside-1_1_5)"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_1_5"
                x="0.160004"
                y="0.119995"
                width="350.146"
                height="75.6"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_1_5"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_1_5"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </button>
        
      </Link>
      <div className="links">
        <span id="portfolio">
          <Link to="/Portfolio">Portfolio</Link>
        </span>
        <span id="resume">
          <Link to="/Resume">Resume</Link>
        </span>
        <span id="contact">
          <Link to="/Contact">Contact</Link>
        </span>
      </div>
    </div>
  );
}

export default Navbar;