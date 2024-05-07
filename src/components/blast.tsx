export default function Blast() {
  return (
    <>
      <div className="p-4 text-color-text-darker grid grid-cols-2 gap-5 no-underline ">
        <div className="overflow-hidden w-full h-full rounded-tl-[50%] rounded-tr-[50%] rounded-br-[0.5rem] rounded-bl-[50%]">
          <img
            className="w-full h-full"
            src="/images/PH_197227_1_e4fe60fffb.webp"
          />
        </div>
        <div className="lg:mt-[70%] sm:mt-[60%] flex items-center ">
          <span className="g:text-4xl sm:text-lg font-bold block  absolute hover:hidden ">
            <svg
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </span>

          <div className="hover:ml-8">
            <p className="lg:text-base sm:text-xs">
              The Nytillverkad collection
            </p>
            <h2 className="lg:text-4xl sm:text-lg tracking-[0.06rem] font-bold break-words">
              A blast from the past
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}
