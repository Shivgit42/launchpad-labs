import Link from "next/link";
import Logo from "../icons/Logo";

export default function Footer() {
  return (
    <footer className="w-full bg-white relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-20 pt-12 sm:pt-20 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-16 sm:mb-20">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center justify-center w-[46px] h-[42px] rounded-[9px] bg-white shadow-[0_2px_11px_0_rgba(0,0,0,0.25),0_0_17px_0_rgba(186,192,255,0.25)_inset]">
                <Logo idPrefix="footer" />
              </div>
              <div className="text-[22px] font-bold leading-normal">
                <span className="bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
                  LaunchPad
                </span>
                <span className="text-black"> Labs</span>
              </div>
            </div>
            <p className="text-[#525252] text-[14px] font-medium leading-[31px] mb-6">
              We build high-quality MVPs to transform your ideas into reality.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-[38px] h-[35px] rounded-[9px] bg-white shadow-[0_2px_11px_0_rgba(0,0,0,0.09)] hover:shadow-lg transition-shadow"
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.8125 0.702881H14.1129L9.08786 6.46074L15 14.2972H10.3714L6.74357 9.54538L2.59714 14.2972H0.294643L5.66893 8.13645L0 0.703952H4.74643L8.02071 5.04645L11.8125 0.702881ZM11.0036 12.9172H12.2786L4.05 2.0111H2.68286L11.0036 12.9172Z"
                    fill="#145DCC"
                  />
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-[38px] h-[35px] rounded-[9px] bg-white shadow-[0_2px_11px_0_rgba(0,0,0,0.09)] hover:shadow-lg transition-shadow"
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4.58333 1.14575C3.91477 1.14575 3.27358 1.41134 2.80084 1.88409C2.32809 2.35683 2.0625 2.99802 2.0625 3.66659C2.0625 4.33515 2.32809 4.97634 2.80084 5.44908C3.27358 5.92183 3.91477 6.18742 4.58333 6.18742C5.2519 6.18742 5.89308 5.92183 6.36583 5.44908C6.83858 4.97634 7.10417 4.33515 7.10417 3.66659C7.10417 2.99802 6.83858 2.35683 6.36583 1.88409C5.89308 1.41134 5.2519 1.14575 4.58333 1.14575ZM3.4375 3.66659C3.4375 3.36269 3.55822 3.07124 3.77311 2.85636C3.98799 2.64147 4.27944 2.52075 4.58333 2.52075C4.88723 2.52075 5.17867 2.64147 5.39356 2.85636C5.60845 3.07124 5.72917 3.36269 5.72917 3.66659C5.72917 3.97048 5.60845 4.26193 5.39356 4.47681C5.17867 4.6917 4.88723 4.81242 4.58333 4.81242C4.27944 4.81242 3.98799 4.6917 3.77311 4.47681C3.55822 4.26193 3.4375 3.97048 3.4375 3.66659ZM2.0625 7.33325C2.0625 7.15092 2.13493 6.97605 2.26386 6.84712C2.3928 6.71818 2.56766 6.64575 2.75 6.64575H6.41667C6.599 6.64575 6.77387 6.71818 6.9028 6.84712C7.03173 6.97605 7.10417 7.15092 7.10417 7.33325V19.2499C7.10417 19.4323 7.03173 19.6071 6.9028 19.7361C6.77387 19.865 6.599 19.9374 6.41667 19.9374H2.75C2.56766 19.9374 2.3928 19.865 2.26386 19.7361C2.13493 19.6071 2.0625 19.4323 2.0625 19.2499V7.33325ZM3.4375 8.02075V18.5624H5.72917V8.02075H3.4375ZM8.47917 7.33325C8.47917 7.15092 8.5516 6.97605 8.68053 6.84712C8.80946 6.71818 8.98433 6.64575 9.16667 6.64575H12.8333C13.0157 6.64575 13.1905 6.71818 13.3195 6.84712C13.4484 6.97605 13.5208 7.15092 13.5208 7.33325V7.73108L13.9196 7.55967C14.6071 7.26597 15.3365 7.08193 16.0811 7.01425C18.6248 6.78325 20.8542 8.78159 20.8542 11.3483V19.2499C20.8542 19.4323 20.7817 19.6071 20.6528 19.7361C20.5239 19.865 20.349 19.9374 20.1667 19.9374H16.5C16.3177 19.9374 16.1428 19.865 16.0139 19.7361C15.8849 19.6071 15.8125 19.4323 15.8125 19.2499V12.8333C15.8125 12.5294 15.6918 12.2379 15.4769 12.023C15.262 11.8081 14.9706 11.6874 14.6667 11.6874C14.3628 11.6874 14.0713 11.8081 13.8564 12.023C13.6416 12.2379 13.5208 12.5294 13.5208 12.8333V19.2499C13.5208 19.4323 13.4484 19.6071 13.3195 19.7361C13.1905 19.865 13.0157 19.9374 12.8333 19.9374H9.16667C8.98433 19.9374 8.80946 19.865 8.68053 19.7361C8.5516 19.6071 8.47917 19.4323 8.47917 19.2499V7.33325ZM9.85417 8.02075V18.5624H12.1458V12.8333C12.1458 12.1647 12.4114 11.5235 12.8842 11.0508C13.3569 10.578 13.9981 10.3124 14.6667 10.3124C15.3352 10.3124 15.9764 10.578 16.4492 11.0508C16.9219 11.5235 17.1875 12.1647 17.1875 12.8333V18.5624H19.4792V11.3483C19.4792 9.60292 17.9566 8.22425 16.2067 8.38375C15.6055 8.4383 15.0165 8.58677 14.4613 8.82375L13.1047 9.40583C13 9.45078 12.8859 9.46903 12.7724 9.45894C12.659 9.44885 12.5498 9.41074 12.4548 9.34803C12.3597 9.28532 12.2817 9.19998 12.2278 9.09966C12.1739 8.99935 12.1457 8.88722 12.1458 8.77333V8.02075H9.85417Z"
                    fill="#145DCC"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="text-black text-[17px] font-bold leading-[31px] mb-1">
              Services
            </h3>
            <Link
              href="#"
              className="text-[#616161] text-[14px] font-medium leading-[31px] hover:text-black transition-colors"
            >
              MVP Development
            </Link>
            <Link
              href="#"
              className="text-[#616161] text-[14px] font-medium leading-[31px] hover:text-black transition-colors"
            >
              UI/UX Design
            </Link>
            <Link
              href="#"
              className="text-[#616161] text-[14px] font-medium leading-[31px] hover:text-black transition-colors"
            >
              Web Development
            </Link>
            <Link
              href="#"
              className="text-[#616161] text-[14px] font-medium leading-[31px] hover:text-black transition-colors"
            >
              Mobile Apps
            </Link>
            <Link
              href="#"
              className="text-[#616161] text-[14px] font-medium leading-[31px] hover:text-black transition-colors"
            >
              Consulting
            </Link>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="text-black text-[17px] font-bold leading-[31px] mb-1">
              About
            </h3>
            <Link
              href="#"
              className="text-[#616161] text-[14px] font-medium leading-[31px] hover:text-black transition-colors"
            >
              Our Process
            </Link>
            <Link
              href="#"
              className="text-[#616161] text-[14px] font-medium leading-[31px] hover:text-black transition-colors"
            >
              How We Work
            </Link>
            <Link
              href="#book"
              className="text-[#616161] text-[14px] font-medium leading-[31px] hover:text-black transition-colors"
            >
              Contact
            </Link>
            <Link
              href="#faq"
              className="text-[#616161] text-[14px] font-medium leading-[31px] hover:text-black transition-colors"
            >
              FAQs
            </Link>
            <Link
              href="#book"
              className="text-[#616161] text-[14px] font-medium leading-[31px] hover:text-black transition-colors"
            >
              Contact
            </Link>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="text-black text-[17px] font-bold leading-[31px] mb-1">
              Portfolio
            </h3>
            <Link
              href="/our-work"
              className="text-[#616161] text-[14px] font-medium leading-[31px] hover:text-black transition-colors"
            >
              Case Studies
            </Link>
            <Link
              href="/our-work"
              className="text-[#616161] text-[14px] font-medium leading-[31px] hover:text-black transition-colors"
            >
              Success Stories
            </Link>
            <Link
              href="/our-work"
              className="text-[#616161] text-[14px] font-medium leading-[31px] hover:text-black transition-colors"
            >
              MVP Showcase
            </Link>
            <Link
              href="/our-work"
              className="text-[#616161] text-[14px] font-medium leading-[31px] hover:text-black transition-colors"
            >
              Testimonials
            </Link>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="text-black text-[17px] font-bold leading-[31px] mb-1">
              Legal
            </h3>
            <Link
              href="/privacy"
              className="text-[#616161] text-[14px] font-medium leading-[31px] hover:text-black transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-[#616161] text-[14px] font-medium leading-[31px] hover:text-black transition-colors"
            >
              Terms of Services
            </Link>
            <Link
              href="#"
              className="text-[#616161] text-[14px] font-medium leading-[31px] hover:text-black transition-colors"
            >
              Cookie Policy
            </Link>
          </div>
        </div>

        <div className="relative">
          <div className="w-full h-px bg-linear-to-r from-transparent via-[#93B3D8] to-transparent mb-4"></div>
          <p className="text-[#818181] text-center text-[13px] font-medium leading-[31px]">
            © {new Date().getFullYear()} LaunchPad Labs. All rights reserved.
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 pointer-events-none overflow-hidden h-[200px] sm:h-[250px]">
        <h2 className="text-[60px] sm:text-[100px] lg:text-[177px] font-bold leading-none bg-linear-to-b from-[#C2DCFF] via-[#E5F0FF] to-white bg-clip-text text-transparent opacity-90 text-center whitespace-nowrap">
          LaunchPad Labs
        </h2>
      </div>
    </footer>
  );
}
