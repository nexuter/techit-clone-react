function Header() {
  return (
    <header className="sticky left-0 top-0 z-200 bg-white flex w-full h-16 border-b min-w-[360px]">
      <div className="max-w-screen mx-auto box-border self-center flex-1">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <button className="flex cursor-pointer items-center p-6 text-center">
              <img
                className="w-[108px]"
                src="./images/techit_logo.svg"
                alt="techit"
              />
            </button>
            <nav>
              <ul className="hidden lg:flex">
                <li className="flex flex-row items-center">
                  <div className="relative px-4 py-5 cursor-pointer font-semibold">
                    <span>테킷 스쿨</span>
                  </div>
                </li>
                <li className="flex flex-row items-center">
                  <hr className="h-5 w-[1px] border-l mx-1 flex border-none" />

                  <div className="relative px-4 py-5 cursor-pointer font-semibold">
                    <span>온보딩 트랙</span>
                    <span className="absolute right-0 top-2">
                      <span className="flex w-4 h-4 justify-center rounded-full bg-red-500 text-[10px] font-semibold text-white">
                        N
                      </span>
                    </span>
                  </div>
                </li>
                <li className="flex flex-row items-center">
                  <hr className="h-5 w-[1px] border-l mx-1 flex border-none" />

                  <div className="relative px-4 py-5 cursor-pointer font-semibold">
                    <span>스타트업 스테이션</span>
                  </div>
                </li>
                <li className="flex flex-row items-center">
                  <hr className="h-5 w-[1px] border-l mx-1 flex border-none" />
                  <div className="relative px-4 py-5 cursor-pointer font-semibold">
                    <span>이벤트</span>
                  </div>
                </li>
                <li className="flex flex-row items-center">
                  <hr className="h-5 w-[1px] border-l mx-2 flex border-gray-200" />
                  <div className="relative px-4 py-5 cursor-pointer font-semibold">
                    <span>기업 해커톤</span>
                  </div>
                </li>
              </ul>
            </nav>
          </div>
          <div className="flex items-center">
            <button className="flex items-center px-6 py-5 text-gray-500">
              <span className="relative font-semibold">로그인</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
