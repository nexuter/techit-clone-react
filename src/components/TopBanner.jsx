import { useState } from "react";

function TopBanner() {
  const [isClose, setIsClose] = useState(false);

  function onClickClose() {
    setIsClose(true);
  }

  return (
    <div className={`h-12 bg-purple-100 font-semibold ${isClose && "hidden"}`}>
      <div>
        <div>
          <span>Get more infomration at App School Open House</span>
          <img
            className="w-[52px]"
            src="./images/top_banner.webp"
            alt="top_banner"
          />
        </div>
      </div>
    </div>
  );
}

export default TopBanner;
