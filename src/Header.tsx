import { Icon } from "@iconify/react";

const Header = () => {
  return (
    <header className="flex justify-between m-6">
      <div className="w-8" />
      <div className="text-center">
        <h1 className="text-3xl font-bold">
          Julian's amazing programming skill charts 📊
        </h1>
        <p className="italic">cuz i like charts</p>
      </div>
      <div className="">
        <a href="https://github.com/ace-of-aces" target="_blank">
          <Icon
            icon="mdi:github"
            className="h-8 w-8 hover:text-black hover:bg-white rounded-full"
          />
        </a>
      </div>
    </header>
  );
};

export default Header;
