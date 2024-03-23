import { Copyright, Earth } from "lucide-react";

const FooterNavigation = () => {
  return (
    <div className="bg-[#f2f2f2] py-6 flex flex-col gap-10">
      <div className="flex flex-row flex-wrap justify-start mx-8 space-y-8 lg-tablet:space-y-0 lg-laptop:mx-10 lg-laptop:justify-around">
        <div className="flex flex-col w-full gap-4 lg-tablet:w-[234px] sm-laptop:w-[320px] lg-laptop:w-fit">
          <div>
            <h1 className="text-base font-semibold text-[#616161]">
              What&apos;s new
            </h1>
          </div>
          <div>
            <ul className="flex flex-col gap-4 text-sm text-[#616161]">
              <li>Games</li>
              <li>Surface 9 Pro</li>
              <li>Surface Laptop 5</li>
              <li>Surface Laptop Go 2</li>
              <li>Microsoft Copilot</li>
              <li>Microsoft 365</li>
              <li>Windows 11 apps</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col w-full gap-4 lg-tablet:w-[234px] sm-laptop:w-[320px] lg-laptop:w-fit">
          <div>
            <h1 className="text-base font-semibold text-[#616161]">
              Microsoft Store
            </h1>
          </div>
          <div>
            <ul className="flex flex-col gap-4 text-sm text-[#616161]">
              <li>Account Profile</li>
              <li>Download Center</li>
              <li>Microsoft Store Support</li>
              <li>Returns</li>
              <li>Order tracking</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col w-full gap-4 lg-tablet:w-[234px] sm-laptop:w-[320px] lg-laptop:w-fit">
          <div>
            <h1 className="text-base font-semibold text-[#616161]">
              Education
            </h1>
          </div>
          <div>
            <ul className="flex flex-col gap-4 text-sm text-[#616161]">
              <li>Microsoft in education</li>
              <li>Devices for education</li>
              <li>Microsoft Teams for Education</li>
              <li>Microsoft 365 Education</li>
              <li>Office Education</li>
              <li>Educator training and development</li>
              <li>Deals for students</li>
              <li>Azure for students</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col w-full gap-4 lg-tablet:w-[234px] lg-tablet:pt-7 sm-laptop:w-[320px] lg-laptop:w-fit">
          <div>
            <h1 className="text-base font-semibold text-[#616161]">Business</h1>
          </div>
          <div>
            <ul className="flex flex-col gap-4 text-sm text-[#616161]">
              <li>Microsoft Cloud</li>
              <li>Microsoft Security</li>
              <li>Azure</li>
              <li>Dynamic 365</li>
              <li>Microsoft 365</li>
              <li>Microsoft Advertising</li>
              <li>Copilot for Microsoft 365</li>
              <li>Microsoft Teams</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col w-full gap-4 lg-tablet:w-[234px] lg-tablet:pt-7 sm-laptop:w-[320px] lg-laptop:w-fit">
          <div>
            <h1 className="text-base font-semibold text-[#616161]">
              Developer & IT
            </h1>
          </div>
          <div>
            <ul className="flex flex-col gap-4 text-sm text-[#616161]">
              <li>Developer Center</li>
              <li>Documentation</li>
              <li>Microsoft Learn</li>
              <li>Microsoft Tech Community</li>
              <li>Azure Marketplace</li>
              <li>AppSource</li>
              <li>Microsoft Power Platform</li>
              <li>Visual Studio</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col w-full gap-4 lg-tablet:w-[234px] lg-tablet:pt-7 sm-laptop:w-[320px] lg-laptop:w-fit">
          <div>
            <h1 className="text-base font-semibold text-[#616161]">Company</h1>
          </div>
          <div>
            <ul className="flex flex-col gap-4 text-sm text-[#616161]">
              <li>Careers</li>
              <li>About Microsoft</li>
              <li>Company news</li>
              <li>Privacy at Microsoft</li>
              <li>Investors</li>
              <li>Security</li>
              <li>Sustainability</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col flex-wrap justify-between gap-5 px-8 lg-tablet:flex-row lg-laptop:px-20">
        <div className="flex flex-col sm-laptop:flex-row gap-2 text-sm text-[#616161]">
          <div className="flex flex-row gap-1">
            <span>
              <Earth size={20} strokeWidth={1.5} />
            </span>
            <p>English(India)</p>
          </div>

          <div>
            <p>Your Privacy Choices</p>
          </div>
        </div>
        <div>
          <ul className="flex flex-row flex-wrap gap-2 lg-laptop:gap-8 text-sm text-[#616161]">
            <li>Contact Microsoft</li>
            <li>Privacy</li>
            <li>Terms of use</li>
            <li>Trademark</li>
            <li>About our ads</li>
            <li className="flex flex-row items-center justify-center gap-1">
              <span>
                <Copyright size={15} strokeWidth={1.5} />
              </span>{" "}
              Microsoft 2024
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default FooterNavigation;
