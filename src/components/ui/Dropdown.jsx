import { ChevronRight } from "lucide-react";
const Dropdown = () => {
  return (
    <>
      <div className="absolute z-10 hidden right-1 top-14 sm-laptop:w-[650px] lg-laptop:w-4/5 sm-laptop:block">
        <div className="bg-[#f2f2f2]">
          <ul className="flex flex-row flex-wrap justify-between px-10 py-6 gap-14">
            <li className="flex flex-col gap-4">
              <div>
                <h1 className="text-sm font-semibold">Software</h1>
              </div>
              <div>
                <ul className="flex flex-col gap-4 text-xs">
                  <li>Windows App</li>
                  <li>AI</li>
                  <li>One Drive</li>
                  <li>Outlook</li>
                  <li>Skype</li>
                  <li>One Note</li>
                  <li>Microsoft Teams</li>
                </ul>
              </div>
            </li>
            <li className="flex flex-col gap-5">
              <div>
                <h1 className="text-sm font-semibold">PCs & Devices</h1>
              </div>
              <div>
                <ul className="flex flex-col gap-4 text-xs">
                  <li>Shop Xbox</li>
                  <li>Accessories</li>
                </ul>
              </div>
            </li>
            <li className="flex flex-col gap-5">
              <div>
                <h1 className="text-sm font-semibold">Entertainment</h1>
              </div>
              <div>
                <ul className="flex flex-col gap-4 text-xs">
                  <li>Xbox Game Pass Ultimate</li>
                  <li>Xbox Live Gold</li>
                  <li>Xbox games</li>
                  <li>PC games</li>
                  <li>Windows digital games</li>
                </ul>
              </div>
            </li>
            <li className="flex flex-col gap-5">
              <div>
                <h1 className="text-sm font-semibold">Business</h1>
              </div>
              <div>
                <ul className="flex flex-col gap-4 text-xs">
                  <li>Microsoft Cloud</li>
                  <li>Microsoft Security</li>
                  <li>Azure</li>
                  <li>Dynamic 365</li>
                  <li>Microsoft 365 for business</li>
                  <li>Windows Industry</li>
                  <li>Windows Power Platform</li>
                  <li>Windows 365</li>
                </ul>
              </div>
            </li>
            <li className="flex flex-col gap-5">
              <div>
                <h1 className="text-sm font-semibold">Developer & IT</h1>
              </div>
              <div>
                <ul className="flex flex-col gap-4 text-xs">
                  <li>Developer Center</li>
                  <li>Documentation</li>
                  <li>Microsoft Learn</li>
                  <li>Microsoft Tech Community</li>
                  <li>Azure Marketplace</li>
                  <li>AppSource</li>
                  <li>Visual Studio</li>
                </ul>
              </div>
            </li>
            <li className="flex flex-col gap-5">
              <div>
                <h1 className="text-sm font-semibold">Other</h1>
              </div>
              <div>
                <ul className="flex flex-col gap-4 text-sm text">
                  <li>Free downloads & security</li>
                  <li>Education</li>
                  <li>Gift Card</li>
                  <li>Licensing</li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <div className="flex items-center justify-center w-full h-11 bg-[#e6e6e6] border-b border-black">
          <h1 className="text-sm uppercase">View Sitemap </h1>
          <div>
            <ChevronRight size={24} strokeWidth={1} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dropdown;
