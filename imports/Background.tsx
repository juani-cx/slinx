import svgPaths from "./svg-a8u32spbny";

function Depth4Frame0() {
  return (
    <div className="relative shrink-0 size-6" data-name="Depth 4, Frame 0">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g clipPath="url(#clip0_13_16660)" id="Depth 4, Frame 0">
          <path
            clipRule="evenodd"
            d={svgPaths.p37adaff0}
            fill="var(--fill-0, #121417)"
            fillRule="evenodd"
            id="Vector - 0"
          />
          <g id="Depth 5, Frame 0"></g>
        </g>
        <defs>
          <clipPath id="clip0_13_16660">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Depth3Frame0() {
  return (
    <div className="relative shrink-0 size-12" data-name="Depth 3, Frame 0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-row items-center justify-start p-0 relative size-12">
        <Depth4Frame0 />
      </div>
    </div>
  );
}

function Depth3Frame1() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0"
      data-name="Depth 3, Frame 1"
    >
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-center justify-start p-0 relative w-full">
        <div className="css-bb2515 font-['Inter:Bold',_sans-serif] font-bold leading-[0] not-italic relative shrink-0 text-[#121417] text-[18px] text-left w-full">
          <p className="leading-[23px]">
            <span className="font-['Inter:Regular',_sans-serif] font-normal not-italic">{`SmartLinx `}</span>
            Go
          </p>
        </div>
      </div>
    </div>
  );
}

function Depth6Frame0() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full"
      data-name="Depth 6, Frame 0"
    >
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border overflow-clip relative size-full">
        <div className="absolute left-0 size-6 top-0" data-name="Vector - 0">
          <div className="absolute bottom-[9.379%] left-[12.505%] right-[12.508%] top-[9.375%]">
            <svg
              className="block size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 18 20"
            >
              <path
                clipRule="evenodd"
                d={svgPaths.p271ba400}
                fill="var(--fill-0, #121417)"
                fillRule="evenodd"
                id="Vector - 0"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Depth5Frame1() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0"
      data-name="Depth 5, Frame 0"
    >
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-center justify-start p-0 relative w-full">
        <Depth6Frame0 />
      </div>
    </div>
  );
}

function Depth4Frame1() {
  return (
    <div
      className="h-12 max-w-[480px] relative rounded-xl shrink-0"
      data-name="Depth 4, Frame 0"
    >
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-row gap-2 h-12 items-center justify-center max-w-inherit overflow-clip p-0 relative">
        <Depth5Frame1 />
      </div>
    </div>
  );
}

function Depth3Frame2() {
  return (
    <div className="relative shrink-0 w-12" data-name="Depth 3, Frame 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-row items-center justify-end p-0 relative w-12">
        <Depth4Frame1 />
      </div>
    </div>
  );
}

function Depth2Frame0() {
  return (
    <div
      className="bg-[#ffffff] relative shrink-0 w-full"
      data-name="Depth 2, Frame 0"
    >
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-between pb-2 pt-4 px-4 relative w-full">
          <Depth3Frame0 />
          <Depth3Frame1 />
          <Depth3Frame2 />
        </div>
      </div>
    </div>
  );
}

function Frame37381() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-col font-['Inter:Regular',_sans-serif] font-normal grow items-start justify-center leading-[0] min-h-px min-w-px not-italic order-2 p-0 relative shrink-0">
      <div className="flex flex-col justify-center relative shrink-0 text-[#ffffff] text-[14px] text-left w-[120px]">
        <p className="block leading-[16px]">Welcome, Liam</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[11.3391px] text-blue-100 text-center text-nowrap">
        <p className="block leading-[17.5px] whitespace-pre">
          Smartlinx Healthcare • Dietary Services
        </p>
      </div>
    </div>
  );
}

function Background() {
  return (
    <div
      className="bg-[#b9f6ca] box-border content-stretch flex flex-row items-center justify-center overflow-clip px-2 py-[2.75px] relative rounded-[6.75px] shrink-0"
      data-name="Background"
    >
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#2e7d32] text-[9.51562px] text-center text-nowrap">
        <p className="block leading-[14px] whitespace-pre">Active</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-start order-1 pb-0 pt-[3.5px] px-0 relative shrink-0"
      data-name="Container"
    >
      <Background />
    </div>
  );
}

function Container1() {
  return (
    <div
      className="box-border content-stretch flex flex-row-reverse items-center justify-between p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <Frame37381 />
      <Container />
    </div>
  );
}

function Container2() {
  return (
    <div
      className="box-border content-stretch flex flex-col font-['Inter:Regular',_sans-serif] font-normal items-start justify-start leading-[0] not-italic p-0 relative shrink-0 text-center text-nowrap w-full"
      data-name="Container"
    >
      <div className="flex flex-col justify-center relative shrink-0 text-[#ffffff] text-[24.4508px]">
        <p className="block leading-[31.5px] text-nowrap whitespace-pre">
          02:39 PM
        </p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[11.3391px] text-blue-100">
        <p className="block leading-[17.5px] text-nowrap whitespace-pre">
          Friday, July 4, 2025
        </p>
      </div>
    </div>
  );
}

function Background1() {
  return (
    <div
      className="bg-[#1976d2] relative shrink-0 w-full"
      data-name="Background"
    >
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-3.5 items-start justify-start pb-[21px] pt-[42px] px-[21px] relative w-full">
          <Container1 />
          <Container2 />
        </div>
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Heading 2"
    >
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#212121] text-[13.125px] text-left w-full">
        <p className="block leading-[21px]">Quick Actions</p>
      </div>
    </div>
  );
}

function Svg() {
  return (
    <div className="relative shrink-0 size-3.5" data-name="SVG">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 14 14"
      >
        <g id="SVG">
          <path
            d="M7 3.5V7L9.33333 8.16667"
            id="Vector"
            stroke="var(--stroke-0, white)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.16667"
          />
          <path
            d={svgPaths.pc012c00}
            id="Vector_2"
            stroke="var(--stroke-0, white)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.16667"
          />
        </g>
      </svg>
    </div>
  );
}

function Container3() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[11.5312px] text-center text-nowrap">
        <p className="block leading-[17.5px] whitespace-pre">Punch In/Out</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div
      className="absolute bg-[#1976d2] box-border content-stretch flex flex-col gap-1.5 h-[70px] items-center justify-center left-0 overflow-clip pl-[48.61px] pr-[48.62px] py-[7px] rounded-lg shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1)] top-0"
      data-name="Button"
    >
      <Svg />
      <Container3 />
    </div>
  );
}

function Svg1() {
  return (
    <div className="relative shrink-0 size-3.5" data-name="SVG">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 14 14"
      >
        <g id="SVG">
          <path
            d={svgPaths.p39a18f70}
            id="Vector"
            stroke="var(--stroke-0, #1976D2)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.16667"
          />
          <path
            d={svgPaths.p1944e800}
            id="Vector_2"
            stroke="var(--stroke-0, #1976D2)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.16667"
          />
          <path
            d={svgPaths.p38e50e00}
            id="Vector_3"
            stroke="var(--stroke-0, #1976D2)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.16667"
          />
          <path
            d={svgPaths.p28ce3890}
            id="Vector_4"
            stroke="var(--stroke-0, #1976D2)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.16667"
          />
          <path
            d="M12.25 12.25V12.2558"
            id="Vector_5"
            stroke="var(--stroke-0, #1976D2)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.16667"
          />
          <path
            d={svgPaths.p192e6000}
            id="Vector_6"
            stroke="var(--stroke-0, #1976D2)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.16667"
          />
          <path
            d="M1.75 7H1.75583"
            id="Vector_7"
            stroke="var(--stroke-0, #1976D2)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.16667"
          />
          <path
            d="M7 1.75H7.00583"
            id="Vector_8"
            stroke="var(--stroke-0, #1976D2)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.16667"
          />
          <path
            d="M7 9.33333V9.33917"
            id="Vector_9"
            stroke="var(--stroke-0, #1976D2)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.16667"
          />
          <path
            d="M9.33333 7H9.91667"
            id="Vector_10"
            stroke="var(--stroke-0, #1976D2)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.16667"
          />
          <path
            d="M12.25 7V7.00583"
            id="Vector_11"
            stroke="var(--stroke-0, #1976D2)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.16667"
          />
          <path
            d="M7 12.25V11.6667"
            id="Vector_12"
            stroke="var(--stroke-0, #1976D2)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.16667"
          />
        </g>
      </svg>
    </div>
  );
}

function Container4() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1976d2] text-[12.1078px] text-center text-nowrap">
        <p className="block leading-[17.5px] whitespace-pre">QR Punch</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div
      className="absolute bg-[#ffffff] h-[70px] left-[179.25px] rounded-lg top-0"
      data-name="Button"
    >
      <div className="box-border content-stretch flex flex-col gap-1.5 h-[70px] items-center justify-center overflow-clip px-[56.14px] py-2 relative">
        <Svg1 />
        <Container4 />
      </div>
      <div className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-lg shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Svg2() {
  return (
    <div className="relative shrink-0 size-3.5" data-name="SVG">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 14 14"
      >
        <g id="SVG">
          <path
            d="M4.66667 1.16667V3.5"
            id="Vector"
            stroke="var(--stroke-0, #1976D2)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.16667"
          />
          <path
            d="M9.33333 1.16667V3.5"
            id="Vector_2"
            stroke="var(--stroke-0, #1976D2)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.16667"
          />
          <path
            d={svgPaths.p24a2b500}
            id="Vector_3"
            stroke="var(--stroke-0, #1976D2)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.16667"
          />
          <path
            d="M1.75 5.83333H12.25"
            id="Vector_4"
            stroke="var(--stroke-0, #1976D2)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.16667"
          />
        </g>
      </svg>
    </div>
  );
}

function Container5() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1976d2] text-[11.5312px] text-center text-nowrap">
        <p className="block leading-[17.5px] whitespace-pre">
          Request Time Off
        </p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div
      className="absolute bg-[#ffffff] h-[70px] left-0 rounded-lg top-[80.5px]"
      data-name="Button"
    >
      <div className="box-border content-stretch flex flex-col gap-1.5 h-[70px] items-center justify-center overflow-clip px-[36.5px] py-2 relative">
        <Svg2 />
        <Container5 />
      </div>
      <div className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-lg shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Svg3() {
  return (
    <div className="relative shrink-0 size-3.5" data-name="SVG">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 14 14"
      >
        <g id="SVG">
          <path
            d="M7 1.16667V12.8333"
            id="Vector"
            stroke="var(--stroke-0, #1976D2)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.16667"
          />
          <path
            d={svgPaths.p231c2b00}
            id="Vector_2"
            stroke="var(--stroke-0, #1976D2)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.16667"
          />
        </g>
      </svg>
    </div>
  );
}

function Container6() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1976d2] text-[11.5312px] text-center text-nowrap">
        <p className="block leading-[17.5px] whitespace-pre">View Pay</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div
      className="absolute bg-[#ffffff] h-[70px] left-[179.25px] rounded-lg top-[80.5px]"
      data-name="Button"
    >
      <div className="box-border content-stretch flex flex-col gap-1.5 h-[70px] items-center justify-center overflow-clip pl-[59.25px] pr-[59.27px] py-2 relative">
        <Svg3 />
        <Container6 />
      </div>
      <div className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-lg shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[150.5px] relative shrink-0 w-full" data-name="Container">
      <Button />
      <Button1 />
      <Button2 />
      <Button3 />
    </div>
  );
}

function Svg4() {
  return (
    <div className="relative shrink-0 size-4" data-name="SVG">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="SVG">
          <path
            d="M5.33333 1.33333V4"
            id="Vector"
            stroke="var(--stroke-0, #212121)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.33333"
          />
          <path
            d="M10.6667 1.33333V4"
            id="Vector_2"
            stroke="var(--stroke-0, #212121)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.33333"
          />
          <path
            d={svgPaths.p3ee34580}
            id="Vector_3"
            stroke="var(--stroke-0, #212121)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.33333"
          />
          <path
            d="M2 6.66667H14"
            id="Vector_4"
            stroke="var(--stroke-0, #212121)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.33333"
          />
        </g>
      </svg>
    </div>
  );
}

function Heading3() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-[7px] items-center justify-start p-0 relative shrink-0 w-full"
      data-name="Heading 3"
    >
      <Svg4 />
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#212121] text-[13.125px] text-left text-nowrap">
        <p className="block leading-[21px] whitespace-pre">{`Today's Schedule`}</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[11.3391px] text-left text-neutral-950 text-nowrap">
        <p className="block leading-[17.5px] whitespace-pre">Morning Shift</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#616161] text-[9.84375px] text-left text-nowrap">
        <p className="block leading-[14px] whitespace-pre">Dietary Services</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <Container8 />
      <Container9 />
    </div>
  );
}

function Container11() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-end justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[11.3391px] text-neutral-950 text-nowrap text-right">
        <p className="block leading-[17.5px] whitespace-pre">
          7:00 AM - 3:00 PM
        </p>
      </div>
    </div>
  );
}

function Background2() {
  return (
    <div
      className="bg-[#4caf50] box-border content-stretch flex flex-row items-center justify-center overflow-clip px-2 py-[2.75px] relative rounded-[6.75px] shrink-0"
      data-name="Background"
    >
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[10.0078px] text-center text-nowrap">
        <p className="block leading-[14px] whitespace-pre">In Progress</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-[3.5px] items-end justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <Container11 />
      <Background2 />
    </div>
  );
}

function Background3() {
  return (
    <div
      className="bg-[#e3f2fd] relative rounded-[8.75px] shrink-0 w-full"
      data-name="Background"
    >
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-[118.35px] items-center justify-start pb-[10.5px] pt-[9.5px] px-[10.5px] relative w-full">
          <Container10 />
          <Container12 />
        </div>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[10.5px] items-start justify-start pb-[21px] pt-3.5 px-3.5 relative w-full">
          <Heading3 />
          <Background3 />
        </div>
      </div>
    </div>
  );
}

function BackgroundBorderShadow() {
  return (
    <div
      className="bg-[#ffffff] relative rounded-[12.75px] shrink-0 w-full"
      data-name="Background+Border+Shadow"
    >
      <div className="overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-start pb-px pt-2 px-px relative w-full">
          <Container13 />
        </div>
      </div>
      <div className="absolute border border-[rgba(0,0,0,0.01)] border-solid inset-0 pointer-events-none rounded-[12.75px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Svg5() {
  return (
    <div className="relative shrink-0 size-4" data-name="SVG">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="SVG">
          <path
            d={svgPaths.p1ce3c700}
            id="Vector"
            stroke="var(--stroke-0, #212121)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.33333"
          />
          <path
            d={svgPaths.p1a06de00}
            id="Vector_2"
            stroke="var(--stroke-0, #212121)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.33333"
          />
        </g>
      </svg>
    </div>
  );
}

function Heading4() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-[7px] items-center justify-start p-0 relative shrink-0"
      data-name="Heading 3"
    >
      <Svg5 />
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#212121] text-[12.9062px] text-left text-nowrap">
        <p className="block leading-[21px] whitespace-pre">
          Recent Notifications
        </p>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-7 items-center justify-center pb-[5.75px] pt-[4.25px] px-[10.5px] relative rounded-[6.75px] shrink-0"
      data-name="Button"
    >
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1976d2] text-[11.5312px] text-center text-nowrap">
        <p className="block leading-[17.5px] whitespace-pre">View All</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center relative size-full">
        <div
          className="box-border content-stretch flex flex-row items-center justify-between pl-0 py-0 relative w-full"
          style={{ paddingRight: "1.13687e-13px" }}
        >
          <Heading4 />
          <Button4 />
        </div>
      </div>
    </div>
  );
}

function Margin() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col h-3.5 items-start justify-start left-[7px] pb-0 pt-[7px] px-0 top-[7px] w-[7px]"
      data-name="Margin"
    >
      <div
        className="bg-[#1976d2] rounded-[3.35544e+07px] shrink-0 size-[7px]"
        data-name="Background"
      />
    </div>
  );
}

function Container15() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#212121] text-[11.3391px] text-left w-full">
        <p className="block leading-[17.5px]">Schedule Updated</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#616161] text-[9.67969px] text-left w-full">
        <p className="block leading-[14px]">
          Your weekend shift has been confirmed
        </p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start pb-0 pt-[3.5px] px-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#616161] text-[9.84375px] text-left w-full">
        <p className="block leading-[14px]">2 hours ago</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col items-start justify-start left-[24.5px] p-0 right-[7px] top-1.5"
      data-name="Container"
    >
      <Container15 />
      <Container16 />
      <Container17 />
    </div>
  );
}

function Container19() {
  return (
    <div className="h-[63px] relative shrink-0 w-full" data-name="Container">
      <Margin />
      <Container18 />
    </div>
  );
}

function Margin1() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col h-3.5 items-start justify-start left-[7px] pb-0 pt-[7px] px-0 top-[7px] w-[7px]"
      data-name="Margin"
    >
      <div
        className="bg-[#ff9800] rounded-[3.35544e+07px] shrink-0 size-[7px]"
        data-name="Background"
      />
    </div>
  );
}

function Container20() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#212121] text-[11.3391px] text-left w-full">
        <p className="block leading-[17.5px]">Time Off Approved</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#616161] text-[9.84375px] text-left w-full">
        <p className="block leading-[14px]">
          Your vacation request for Dec 15-16 approved
        </p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start pb-0 pt-[3.5px] px-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#616161] text-[10.0078px] text-left w-full">
        <p className="block leading-[14px]">1 day ago</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col items-start justify-start left-[24.5px] p-0 right-[7px] top-1.5"
      data-name="Container"
    >
      <Container20 />
      <Container21 />
      <Container22 />
    </div>
  );
}

function Container24() {
  return (
    <div className="h-[63px] relative shrink-0 w-full" data-name="Container">
      <Margin1 />
      <Container23 />
    </div>
  );
}

function Container25() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-[10.5px] items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <Container19 />
      <Container24 />
    </div>
  );
}

function Container26() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[10.5px] items-start justify-start pb-[21px] pt-3.5 px-3.5 relative w-full">
          <Container14 />
          <Container25 />
        </div>
      </div>
    </div>
  );
}

function BackgroundBorderShadow1() {
  return (
    <div
      className="bg-[#ffffff] relative rounded-[12.75px] shrink-0 w-full"
      data-name="Background+Border+Shadow"
    >
      <div className="overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-start p-px relative w-full">
          <Container26 />
        </div>
      </div>
      <div className="absolute border border-[rgba(0,0,0,0.01)] border-solid inset-0 pointer-events-none rounded-[12.75px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Container27() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-3.5 items-start justify-start px-[21px] py-3.5 relative w-full">
          <Heading2 />
          <Container7 />
          <BackgroundBorderShadow />
          <BackgroundBorderShadow1 />
        </div>
      </div>
    </div>
  );
}

function Background4() {
  return (
    <div
      className="bg-[#f7f9fa] box-border content-stretch flex flex-col items-start justify-start overflow-auto p-0 relative shrink-0 w-full"
      data-name="Background"
    >
      <Background1 />
      <Container27 />
    </div>
  );
}

function Svg6() {
  return (
    <div className="relative shrink-0 size-5" data-name="SVG">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="SVG">
          <path
            d={svgPaths.p275d2400}
            id="Vector"
            stroke="var(--stroke-0, #1976D2)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.66667"
          />
          <path
            d={svgPaths.p21a7e80}
            id="Vector_2"
            stroke="var(--stroke-0, #1976D2)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.66667"
          />
        </g>
      </svg>
    </div>
  );
}

function Container28() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1976d2] text-[10.0078px] text-center text-nowrap">
        <p className="block leading-[14px] whitespace-pre">Home</p>
      </div>
    </div>
  );
}

function Margin2() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start pb-0 pt-[3.5px] px-0 relative shrink-0"
      data-name="Margin"
    >
      <Container28 />
    </div>
  );
}

function Button5() {
  return (
    <div
      className="bg-[#e3f2fd] box-border content-stretch flex flex-col items-center justify-center px-[10.5px] py-[7px] relative rounded-[8.75px] shrink-0"
      data-name="Button"
    >
      <Svg6 />
      <Margin2 />
    </div>
  );
}

function Svg7() {
  return (
    <div className="relative shrink-0 size-5" data-name="SVG">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="SVG">
          <path
            d="M10 5V10L13.3333 11.6667"
            id="Vector"
            stroke="var(--stroke-0, #616161)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.66667"
          />
          <path
            d={svgPaths.p14d24500}
            id="Vector_2"
            stroke="var(--stroke-0, #616161)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.66667"
          />
        </g>
      </svg>
    </div>
  );
}

function Container29() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#616161] text-[10.0078px] text-center text-nowrap">
        <p className="block leading-[14px] whitespace-pre">Punch</p>
      </div>
    </div>
  );
}

function Margin3() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start pb-0 pt-[3.5px] px-0 relative shrink-0"
      data-name="Margin"
    >
      <Container29 />
    </div>
  );
}

function Button6() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-center px-[10.5px] py-[7px] relative rounded-[8.75px] shrink-0"
      data-name="Button"
    >
      <Svg7 />
      <Margin3 />
    </div>
  );
}

function Svg8() {
  return (
    <div className="relative shrink-0 size-5" data-name="SVG">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="SVG">
          <path
            d="M6.66667 1.66667V5"
            id="Vector"
            stroke="var(--stroke-0, #616161)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.66667"
          />
          <path
            d="M13.3333 1.66667V5"
            id="Vector_2"
            stroke="var(--stroke-0, #616161)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.66667"
          />
          <path
            d={svgPaths.p1da67b80}
            id="Vector_3"
            stroke="var(--stroke-0, #616161)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.66667"
          />
          <path
            d="M2.5 8.33333H17.5"
            id="Vector_4"
            stroke="var(--stroke-0, #616161)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.66667"
          />
        </g>
      </svg>
    </div>
  );
}

function Container30() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#616161] text-[10.0078px] text-center text-nowrap">
        <p className="block leading-[14px] whitespace-pre">Schedule</p>
      </div>
    </div>
  );
}

function Margin4() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start pb-0 pt-[3.5px] px-0 relative shrink-0"
      data-name="Margin"
    >
      <Container30 />
    </div>
  );
}

function Button7() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-center px-[10.5px] py-[7px] relative rounded-[8.75px] shrink-0"
      data-name="Button"
    >
      <Svg8 />
      <Margin4 />
    </div>
  );
}

function Svg9() {
  return (
    <div className="relative shrink-0 size-5" data-name="SVG">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="SVG">
          <path
            d={svgPaths.p1c3efea0}
            id="Vector"
            stroke="var(--stroke-0, #616161)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.66667"
          />
          <path
            d={svgPaths.p25877f40}
            id="Vector_2"
            stroke="var(--stroke-0, #616161)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.66667"
          />
        </g>
      </svg>
    </div>
  );
}

function Container31() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#616161] text-[9.67969px] text-center text-nowrap">
        <p className="block leading-[14px] whitespace-pre">Alerts</p>
      </div>
    </div>
  );
}

function Margin5() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start pb-0 pt-[3.5px] px-0 relative shrink-0"
      data-name="Margin"
    >
      <Container31 />
    </div>
  );
}

function Button8() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-center px-[10.5px] py-[7px] relative rounded-[8.75px] shrink-0"
      data-name="Button"
    >
      <Svg9 />
      <Margin5 />
    </div>
  );
}

function Svg10() {
  return (
    <div className="relative shrink-0 size-5" data-name="SVG">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="SVG">
          <path
            d="M10 1.66667V18.3333"
            id="Vector"
            stroke="var(--stroke-0, #616161)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.66667"
          />
          <path
            d={svgPaths.p3055a600}
            id="Vector_2"
            stroke="var(--stroke-0, #616161)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.66667"
          />
        </g>
      </svg>
    </div>
  );
}

function Container32() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#616161] text-[10.1719px] text-center text-nowrap">
        <p className="block leading-[14px] whitespace-pre">Pay</p>
      </div>
    </div>
  );
}

function Margin6() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start pb-0 pt-[3.5px] px-0 relative shrink-0"
      data-name="Margin"
    >
      <Container32 />
    </div>
  );
}

function Button9() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-center px-[10.5px] py-[7px] relative rounded-[8.75px] shrink-0"
      data-name="Button"
    >
      <Svg10 />
      <Margin6 />
    </div>
  );
}

function Container33() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-row gap-[24.5px] items-start justify-start pl-[12.22px] pr-[12.27px] py-0 relative w-full">
          <Button5 />
          <Button6 />
          <Button7 />
          <Button8 />
          <Button9 />
        </div>
      </div>
    </div>
  );
}

function Nav() {
  return (
    <div className="bg-[#ffffff] relative shrink-0 w-full" data-name="Nav">
      <div className="absolute border-[1px_0px_0px] border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-start pb-[3.5px] pt-[4.5px] px-[7px] relative w-full">
          <Container33 />
        </div>
      </div>
    </div>
  );
}

export default function Background5() {
  return (
    <div
      className="bg-[#f7f9fa] box-border content-stretch flex flex-col items-start justify-start p-0 relative size-full"
      data-name="Background"
    >
      <Depth2Frame0 />
      <Background4 />
      <Nav />
    </div>
  );
}