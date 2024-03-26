import { Copyright, Earth } from "lucide-react";
import privacyChoices from "../../assets/svgs/privacy-choices.svg";

const FooterNavigation = () => {
  return (
    <div className="bg-[#f2f2f2] py-7 flex flex-col gap-10">
      <div className="flex flex-row flex-wrap justify-start mx-8 space-y-8 lg-tablet:space-y-0 lg-laptop:mx-10 lg-laptop:justify-around">
        <div className="flex flex-col w-full gap-4 lg-tablet:w-[234px] sm-laptop:w-[320px] lg-laptop:w-fit">
          <div>
            <h1 className="text-base font-semibold text-[#616161] cursor-pointer">
              What&apos;s new
            </h1>
          </div>
          <div>
            <ul className="flex flex-col gap-4 text-xs text-[#616161]">
              <li className="cursor-pointer">Games</li>
              <li className="cursor-pointer">Surface 9 Pro</li>
              <li className="cursor-pointer">Surface Laptop 5</li>
              <li className="cursor-pointer">Surface Laptop Go 2</li>
              <li className="cursor-pointer">Microsoft Copilot</li>
              <li className="cursor-pointer">Microsoft 365</li>
              <li className="cursor-pointer">Windows 11 apps</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col w-full gap-4 lg-tablet:w-[234px] sm-laptop:w-[320px] lg-laptop:w-fit">
          <div>
            <h1 className="text-base cursor-pointer font-semibold text-[#616161]">
              Microsoft Store
            </h1>
          </div>
          <div>
            <ul className="flex flex-col gap-4 text-xs text-[#616161]">
              <li className="cursor-pointer">Account Profile</li>
              <li className="cursor-pointer">Download Center</li>
              <li className="cursor-pointer">Microsoft Store Support</li>
              <li className="cursor-pointer">Returns</li>
              <li className="cursor-pointer">Order tracking</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col w-full gap-4 lg-tablet:w-[234px] sm-laptop:w-[320px] lg-laptop:w-fit">
          <div>
            <h1 className="text-base cursor-pointer font-semibold text-[#616161]">
              Education
            </h1>
          </div>
          <div>
            <ul className="flex flex-col gap-4 text-xs text-[#616161]">
              <li className="cursor-pointer">Microsoft in education</li>
              <li className="cursor-pointer">Devices for education</li>
              <li className="cursor-pointer">Microsoft Teams for Education</li>
              <li className="cursor-pointer">Microsoft 365 Education</li>
              <li className="cursor-pointer">Office Education</li>
              <li className="cursor-pointer">
                Educator training and development
              </li>
              <li className="cursor-pointer">Deals for students</li>
              <li className="cursor-pointer">Azure for students</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col w-full gap-4 lg-tablet:w-[234px] lg-tablet:pt-7 lg-laptop:pt-0 sm-laptop:w-[320px] lg-laptop:w-fit">
          <div>
            <h1 className="text-base cursor-pointer font-semibold text-[#616161]">
              Business
            </h1>
          </div>
          <div>
            <ul className="flex flex-col gap-4 text-xs text-[#616161]">
              <li className="cursor-pointer">Microsoft Cloud</li>
              <li className="cursor-pointer">Microsoft Security</li>
              <li className="cursor-pointer">Azure</li>
              <li className="cursor-pointer">Dynamic 365</li>
              <li className="cursor-pointer">Microsoft 365</li>
              <li className="cursor-pointer">Microsoft Advertising</li>
              <li className="cursor-pointer">Copilot for Microsoft 365</li>
              <li className="cursor-pointer">Microsoft Teams</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col w-full gap-4 lg-tablet:w-[234px] lg-tablet:pt-7 lg-laptop:pt-0 sm-laptop:w-[320px] lg-laptop:w-fit">
          <div>
            <h1 className="text-base cursor-pointer font-semibold text-[#616161]">
              Developer & IT
            </h1>
          </div>
          <div>
            <ul className="flex flex-col gap-4 text-xs text-[#616161]">
              <li className="cursor-pointer">Developer Center</li>
              <li className="cursor-pointer">Documentation</li>
              <li className="cursor-pointer">Microsoft Learn</li>
              <li className="cursor-pointer">Microsoft Tech Community</li>
              <li className="cursor-pointer">Azure Marketplace</li>
              <li className="cursor-pointer">AppSource</li>
              <li className="cursor-pointer">Microsoft Power Platform</li>
              <li className="cursor-pointer">Visual Studio</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col w-full gap-4 lg-tablet:w-[234px] lg-tablet:pt-7 lg-laptop:pt-0 sm-laptop:w-[320px] lg-laptop:w-fit">
          <div>
            <h1 className="text-base cursor-pointer font-semibold text-[#616161]">
              Company
            </h1>
          </div>
          <div>
            <ul className="flex flex-col gap-4 text-xs text-[#616161]">
              <li className="cursor-pointer">Careers</li>
              <li className="cursor-pointer">About Microsoft</li>
              <li className="cursor-pointer">Company news</li>
              <li className="cursor-pointer">Privacy at Microsoft</li>
              <li className="cursor-pointer">Investors</li>
              <li className="cursor-pointer">Security</li>
              <li className="cursor-pointer">Sustainability</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col flex-wrap justify-between gap-5 px-8 lg-tablet:flex-row lg-laptop:px-20">
        <div className="flex flex-col sm-laptop:flex-row gap-2 text-xs text-[#616161]">
          <div className="flex flex-row gap-1 sm-laptop:items-center sm-laptop:justify-center">
            <span>
              <Earth size={20} strokeWidth={1.5} />
            </span>
            <p className="cursor-pointer">English(India)</p>
          </div>

          <div className="flex flex-row gap-1 sm-laptop:items-center sm-laptop:justify-center">
            <img className="w-10" src={privacyChoices} alt="Privacy Choices" />
            <p className="cursor-pointer">Your Privacy Choices</p>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <ul className="flex flex-row flex-wrap gap-2 lg-laptop:gap-8 text-xs text-[#616161]">
            <li className="cursor-pointer">Contact Microsoft</li>
            <li className="cursor-pointer">Privacy</li>
            <li className="cursor-pointer">Terms of use</li>
            <li className="cursor-pointer">Trademark</li>
            <li className="cursor-pointer">About our ads</li>
            <li className="flex flex-row items-center justify-center gap-1 cursor-pointer">
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
