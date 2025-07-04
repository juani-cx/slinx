import svgPaths from "./svg-e0oanmpbgm";

function MinHeight() {
  return <div className="h-px w-0" data-name="min-height" />;
}

function DividerHorizontal() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
      data-name="<Divider> | Horizontal"
    >
      <div
        className="flex items-center justify-center relative shrink-0"
        style={
          {
            "--transform-inner-width": "0",
            "--transform-inner-height": "1",
            width:
              "calc(1px * ((var(--transform-inner-height) * 0) + (var(--transform-inner-width) * 0)))",
          } as React.CSSProperties
        }
      >
        <div className="flex-none scale-x-[0%]">
          <MinHeight />
        </div>
      </div>
      <div className="h-0 relative shrink-0 w-full" data-name="Divider">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 312 1"
          >
            <line
              id="Divider"
              stroke="var(--stroke-0, #212121)"
              strokeOpacity="0.12"
              x2="312"
              y1="0.5"
              y2="0.5"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

function MinHeight1() {
  return <div className="h-2 shrink-0 w-px" data-name="min-height" />;
}

function SpacingVertical() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-4"
      data-name="Spacing | Vertical"
    >
      <MinHeight1 />
    </div>
  );
}

function Container() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <div
        className="basis-0 flex flex-col font-['Roboto:Medium',_sans-serif] font-medium grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[#212121] text-[16px] text-left tracking-[0.15px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[1.6]">What can I do for you</p>
      </div>
      <SpacingVertical />
    </div>
  );
}

function CustomIntegrationSwitch() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2 items-start justify-start overflow-clip p-0 relative shrink-0 w-full"
      data-name="_Custom / Integration Switch"
    >
      <Container />
      <div
        className="flex flex-col font-['Roboto:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#616161] text-[14px] text-left tracking-[0.15px] w-full"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[1.5]">on the users profile?</p>
      </div>
    </div>
  );
}

function CardContent() {
  return (
    <div className="relative shrink-0 w-full" data-name="<CardContent>">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-start p-[16px] relative w-full">
          <CustomIntegrationSwitch />
        </div>
      </div>
    </div>
  );
}

function Paper() {
  return (
    <div
      className="bg-[#f7f9fa] box-border content-stretch flex flex-col items-start justify-start overflow-clip p-0 relative rounded shadow-[0px_1px_3px_0px_rgba(0,0,0,0.12),0px_1px_1px_0px_rgba(0,0,0,0.14),0px_2px_1px_-1px_rgba(0,0,0,0.2)] shrink-0 w-full"
      data-name="<Paper>"
    >
      <CardContent />
    </div>
  );
}

function MinHeight2() {
  return <div className="h-2 shrink-0 w-px" data-name="min-height" />;
}

function SpacingVertical1() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-4"
      data-name="Spacing | Vertical"
    >
      <MinHeight2 />
    </div>
  );
}

function Container1() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <div
        className="basis-0 flex flex-col font-['Roboto:Medium',_sans-serif] font-medium grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[#212121] text-[16px] text-left tracking-[0.15px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[1.6]">Another suggestion</p>
      </div>
      <SpacingVertical1 />
    </div>
  );
}

function CustomIntegrationSwitch1() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2 items-start justify-start overflow-clip p-0 relative shrink-0 w-full"
      data-name="_Custom / Integration Switch"
    >
      <Container1 />
      <div
        className="flex flex-col font-['Roboto:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#616161] text-[14px] text-left tracking-[0.15px] w-full"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[1.5]">another clarification</p>
      </div>
    </div>
  );
}

function CardContent1() {
  return (
    <div className="relative shrink-0 w-full" data-name="<CardContent>">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-start p-[16px] relative w-full">
          <CustomIntegrationSwitch1 />
        </div>
      </div>
    </div>
  );
}

function Paper1() {
  return (
    <div
      className="bg-[#f7f9fa] box-border content-stretch flex flex-col items-start justify-start overflow-clip p-0 relative rounded shadow-[0px_1px_3px_0px_rgba(0,0,0,0.12),0px_1px_1px_0px_rgba(0,0,0,0.14),0px_2px_1px_-1px_rgba(0,0,0,0.2)] shrink-0 w-full"
      data-name="<Paper>"
    >
      <CardContent1 />
    </div>
  );
}

function Frame167() {
  return (
    <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start p-0 relative shrink-0 w-full">
      <DividerHorizontal />
      <Paper />
      {[...Array(2).keys()].map((_, i) => (
        <Paper1 key={i} />
      ))}
    </div>
  );
}

function Content() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-start min-h-6 min-w-6 overflow-clip px-0 py-4 relative shrink-0 w-full"
      data-name="Content"
    >
      <div
        className="basis-0 font-['Roboto:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px relative shrink-0 text-[#212121] text-[16px] text-left tracking-[0.15px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[24px]">A|</p>
      </div>
    </div>
  );
}

function LabelContainer() {
  return (
    <div
      className="absolute bg-[#ffffff] box-border content-stretch flex flex-row gap-2.5 h-0.5 items-center justify-start left-3 px-1 py-0 top-0"
      data-name="Label Container"
    >
      <div
        className="flex flex-col font-['Roboto:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1565c0] text-[12px] text-left text-nowrap tracking-[0.15px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="adjustLetterSpacing block leading-[12px] whitespace-pre">
          Enter a Prompt Here
        </p>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative rounded shrink-0 w-full"
      data-name="Input"
    >
      <div className="absolute border-2 border-[#1565c0] border-solid inset-0 pointer-events-none rounded" />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-start px-3 py-0 relative size-full">
          <Content />
          <LabelContainer />
        </div>
      </div>
    </div>
  );
}

function TextField() {
  return (
    <div
      className="box-border content-stretch flex flex-col h-[102px] items-start justify-start p-0 relative shrink-0 w-full"
      data-name="<TextField>"
    >
      <Input />
    </div>
  );
}

function Frame197() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[443px] items-start justify-start p-0 relative shrink-0 w-full">
      <Frame167 />
      <TextField />
    </div>
  );
}

function Frame145() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-6 items-start justify-start left-6 p-0 top-[78px] w-[312px]">
      <div
        className="font-['Roboto:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#212121] text-[14px] text-left text-nowrap tracking-[0.1px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="adjustLetterSpacing block leading-[1.57] whitespace-pre">{`Hello. We think we might help you with this task. `}</p>
      </div>
      <Frame197 />
    </div>
  );
}

function CloseOutlined() {
  return (
    <div
      className="absolute bottom-[95.271%] left-[86.667%] right-[6.667%] top-[2.365%]"
      data-name="CloseOutlined"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="CloseOutlined">
          <path
            d={svgPaths.p3fd9e500}
            fill="var(--fill-0, #616161)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame153() {
  return (
    <div className="absolute h-[1015px] left-[1560px] shadow-[0px_1px_5px_0px_rgba(0,0,0,0.12),0px_2px_2px_0px_rgba(0,0,0,0.14)] top-16 w-[360px]">
      <div className="absolute bg-[#ffffff] h-[1015px] left-0 top-0 w-[360px]" />
      <div
        className="absolute bottom-[94.975%] font-['Roboto:Medium',_sans-serif] font-medium leading-[0] left-[6.667%] right-[76.111%] text-[#212121] text-[16px] text-left text-nowrap top-[2.463%] tracking-[0.15px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="adjustLetterSpacing block leading-[1.6] whitespace-pre">
          AI Genie
        </p>
      </div>
      <Frame145 />
      <CloseOutlined />
    </div>
  );
}

function Group23() {
  return (
    <div className="absolute contents right-0 top-16">
      <Frame153 />
    </div>
  );
}

function MinWidth() {
  return <div className="size-10" data-name="min-width" />;
}

function Avatar() {
  return (
    <div
      className="bg-[#dcedef] box-border content-stretch flex flex-col items-center justify-center p-0 relative rounded-[100px] shrink-0"
      data-name="<Avatar>"
    >
      <div
        className="absolute flex flex-col font-['Roboto:Regular',_sans-serif] font-normal justify-center leading-[0] left-1/2 text-[#00acc1] text-[20px] text-center top-1/2 tracking-[0.14px] translate-x-[-50%] translate-y-[-50%] w-10"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="adjustLetterSpacing block leading-[20px]">LA</p>
      </div>
      <div className="flex h-[40px] items-center justify-center relative shrink-0 w-[40px]">
        <div className="flex-none rotate-[270deg]">
          <MinWidth />
        </div>
      </div>
    </div>
  );
}

function Typography() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-center min-h-6 px-1.5 py-0 relative shrink-0"
      data-name="Typography"
    >
      <div
        className="font-['Roboto:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#212121] text-[13px] text-left text-nowrap tracking-[0.16px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="adjustLetterSpacing block leading-[18px] whitespace-pre">
          Active
        </p>
      </div>
    </div>
  );
}

function Chip() {
  return (
    <div
      className="bg-[#b9f6ca] box-border content-stretch flex flex-row items-center justify-start max-h-6 min-h-6 overflow-clip px-1 py-[3px] relative rounded-[100px] shrink-0"
      data-name="<Chip>"
    >
      <Typography />
    </div>
  );
}

function Frame170() {
  return (
    <div className="box-border content-stretch flex flex-row gap-4 items-center justify-start p-0 relative shrink-0">
      <Avatar />
      <div className="font-['6.1.0:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[36px] text-[rgba(0,0,0,0.87)] text-left text-nowrap tracking-[-1.5px]">
        <p className="adjustLetterSpacing block leading-[1.167] whitespace-pre">
          Liam Aboot
        </p>
      </div>
      <Chip />
    </div>
  );
}

function DividerVertical() {
  return (
    <div
      className="h-[42px] relative shrink-0 w-px"
      data-name="<Divider> | Vertical"
    >
      <div className="absolute bottom-0 left-0 right-0 top-0">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 1 42"
        >
          <g id="<Divider> | Vertical">
            <g id="min-width"></g>
            <line
              id="Divider"
              stroke="var(--stroke-0, #212121)"
              strokeOpacity="0.12"
              x1="0.500002"
              x2="0.5"
              y1="2.18557e-08"
              y2="42"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame171() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start leading-[0] p-0 relative shrink-0 text-[#000000] text-left text-nowrap tracking-[0.15px]">
      <div
        className="font-['Roboto:Medium',_sans-serif] font-medium relative shrink-0 text-[16px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="adjustLetterSpacing block leading-[1.6] text-nowrap whitespace-pre">
          Hired date
        </p>
      </div>
      <div
        className="font-['Roboto:Regular',_sans-serif] font-normal relative shrink-0 text-[0px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="text-nowrap whitespace-pre">
          <span className="leading-[1.5] text-[14px]">{`09/09/2024 `}</span>
          <span
            className="adjustLetterSpacing font-['Roboto:Regular',_sans-serif] font-normal leading-[1.43] text-[12px] tracking-[0.17px]"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            (273 days ago)
          </span>
        </p>
      </div>
    </div>
  );
}

function Typography1() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-center min-h-6 px-1.5 py-0 relative shrink-0"
      data-name="Typography"
    >
      <div
        className="font-['Roboto:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#ffffff] text-[13px] text-left text-nowrap tracking-[0.16px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="adjustLetterSpacing block leading-[18px] whitespace-pre">
          Expires in 59 days
        </p>
      </div>
    </div>
  );
}

function Chip1() {
  return (
    <div
      className="bg-[#ef6c00] box-border content-stretch flex flex-row items-center justify-start max-h-6 min-h-6 overflow-clip px-1 py-[3px] relative rounded-[100px] shrink-0"
      data-name="<Chip>"
    >
      <Typography1 />
    </div>
  );
}

function Frame173() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0">
      <div
        className="font-['Roboto:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#000000] text-[16px] text-left text-nowrap tracking-[0.15px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="adjustLetterSpacing block leading-[1.6] whitespace-pre">
          Certification 1
        </p>
      </div>
      <Chip1 />
    </div>
  );
}

function Typography2() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-center min-h-6 px-1.5 py-0 relative shrink-0"
      data-name="Typography"
    >
      <div
        className="font-['Roboto:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#ffffff] text-[13px] text-left text-nowrap tracking-[0.16px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="adjustLetterSpacing block leading-[18px] whitespace-pre">
          Expired 20 days ago
        </p>
      </div>
    </div>
  );
}

function Chip2() {
  return (
    <div
      className="bg-[#ef5350] box-border content-stretch flex flex-row items-center justify-start max-h-6 min-h-6 overflow-clip px-1 py-[3px] relative rounded-[100px] shrink-0"
      data-name="<Chip>"
    >
      <Typography2 />
    </div>
  );
}

function Frame174() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0">
      <div
        className="font-['Roboto:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#000000] text-[16px] text-left text-nowrap tracking-[0.15px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="adjustLetterSpacing block leading-[1.6] whitespace-pre">
          Certification 2
        </p>
      </div>
      <Chip2 />
    </div>
  );
}

function Frame186() {
  return (
    <div className="[flex-flow:wrap] box-border content-center flex gap-4 items-center justify-start p-0 relative shrink-0">
      <Frame170 />
      <DividerVertical />
      <Frame171 />
      <DividerVertical />
      <Frame173 />
      <Frame174 />
    </div>
  );
}

function Frame184() {
  return (
    <div className="box-border content-stretch flex flex-row gap-1 items-center justify-start leading-[0] p-0 relative shrink-0 text-[#000000] text-[14px] text-left text-nowrap">
      <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold not-italic relative shrink-0">
        <p className="block leading-[22px] text-nowrap whitespace-pre">Phone</p>
      </div>
      <div
        className="font-['Roboto:Regular',_sans-serif] font-normal relative shrink-0 tracking-[0.15px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="adjustLetterSpacing block leading-[1.5] text-nowrap whitespace-pre">
          (487) 111-1111
        </p>
      </div>
    </div>
  );
}

function Frame183() {
  return (
    <div className="box-border content-stretch flex flex-row gap-1 items-center justify-start leading-[0] p-0 relative shrink-0 text-[#000000] text-[14px] text-left text-nowrap">
      <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold not-italic relative shrink-0">
        <p className="block leading-[22px] text-nowrap whitespace-pre">Email</p>
      </div>
      <div
        className="font-['Roboto:Regular',_sans-serif] font-normal relative shrink-0 tracking-[0.15px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="adjustLetterSpacing block leading-[1.5] text-nowrap whitespace-pre">
          ainnx@email.com
        </p>
      </div>
    </div>
  );
}

function Frame172() {
  return (
    <div className="box-border content-stretch flex flex-row gap-1 items-center justify-start leading-[0] p-0 relative shrink-0 text-[#000000] text-left text-nowrap tracking-[0.15px]">
      <div
        className="font-['Roboto:Medium',_sans-serif] font-medium relative shrink-0 text-[16px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="adjustLetterSpacing block leading-[1.6] text-nowrap whitespace-pre">
          OID
        </p>
      </div>
      <div
        className="font-['Roboto:Regular',_sans-serif] font-normal relative shrink-0 text-[14px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="adjustLetterSpacing block leading-[1.5] text-nowrap whitespace-pre">{` 2793571`}</p>
      </div>
    </div>
  );
}

function Frame175() {
  return (
    <div className="box-border content-stretch flex flex-row gap-1 items-center justify-start leading-[0] p-0 relative shrink-0 text-[#000000] text-[14px] text-left text-nowrap">
      <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold not-italic relative shrink-0">
        <p className="block leading-[22px] text-nowrap whitespace-pre">
          Badge Number
        </p>
      </div>
      <div
        className="font-['Roboto:Regular',_sans-serif] font-normal relative shrink-0 tracking-[0.15px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="adjustLetterSpacing block leading-[1.5] text-nowrap whitespace-pre">
          271659
        </p>
      </div>
    </div>
  );
}

function Frame176() {
  return (
    <div className="box-border content-stretch flex flex-row gap-1 items-center justify-start leading-[0] p-0 relative shrink-0 text-[#000000] text-[14px] text-left text-nowrap">
      <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold not-italic relative shrink-0">
        <p className="block leading-[22px] text-nowrap whitespace-pre">Clock</p>
      </div>
      <div
        className="font-['Roboto:Regular',_sans-serif] font-normal relative shrink-0 tracking-[0.15px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="adjustLetterSpacing block leading-[1.5] text-nowrap whitespace-pre">
          110033
        </p>
      </div>
    </div>
  );
}

function Frame177() {
  return (
    <div className="box-border content-stretch flex flex-row gap-1 items-center justify-start leading-[0] p-0 relative shrink-0 text-[#000000] text-[14px] text-left text-nowrap">
      <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold not-italic relative shrink-0">
        <p className="block leading-[22px] text-nowrap whitespace-pre">
          Company
        </p>
      </div>
      <div
        className="font-['Roboto:Regular',_sans-serif] font-normal relative shrink-0 tracking-[0.15px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="adjustLetterSpacing block leading-[1.5] text-nowrap whitespace-pre">
          In House
        </p>
      </div>
    </div>
  );
}

function Frame178() {
  return (
    <div className="box-border content-stretch flex flex-row gap-1 items-center justify-start leading-[0] p-0 relative shrink-0 text-[#000000] text-[14px] text-left text-nowrap">
      <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold not-italic relative shrink-0">
        <p className="block leading-[22px] text-nowrap whitespace-pre">
          Department
        </p>
      </div>
      <div
        className="font-['Roboto:Regular',_sans-serif] font-normal relative shrink-0 tracking-[0.15px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="adjustLetterSpacing block leading-[1.5] text-nowrap whitespace-pre">
          Dietary Services
        </p>
      </div>
    </div>
  );
}

function Frame179() {
  return (
    <div className="box-border content-stretch flex flex-row gap-1 items-center justify-start leading-[0] p-0 relative shrink-0 text-[#000000] text-[14px] text-left text-nowrap">
      <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold not-italic relative shrink-0">
        <p className="block leading-[22px] text-nowrap whitespace-pre">
          Position
        </p>
      </div>
      <div
        className="font-['Roboto:Regular',_sans-serif] font-normal relative shrink-0 tracking-[0.15px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="adjustLetterSpacing block leading-[1.5] text-nowrap whitespace-pre">
          Activities Assistant
        </p>
      </div>
    </div>
  );
}

function Frame185() {
  return (
    <div className="box-border content-stretch flex flex-row gap-1 items-center justify-start leading-[0] p-0 relative shrink-0 text-[#000000] text-[14px] text-left text-nowrap">
      <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold not-italic relative shrink-0">
        <p className="block leading-[22px] text-nowrap whitespace-pre">Type</p>
      </div>
      <div
        className="font-['Roboto:Regular',_sans-serif] font-normal relative shrink-0 tracking-[0.15px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="adjustLetterSpacing block leading-[1.5] text-nowrap whitespace-pre">
          Full Time
        </p>
      </div>
    </div>
  );
}

function Frame180() {
  return (
    <div className="box-border content-stretch flex flex-row gap-1 items-center justify-start leading-[0] p-0 relative shrink-0 text-[#000000] text-[14px] text-left text-nowrap">
      <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold not-italic relative shrink-0">
        <p className="block leading-[22px] text-nowrap whitespace-pre">
          Facility
        </p>
      </div>
      <div
        className="font-['Roboto:Regular',_sans-serif] font-normal relative shrink-0 tracking-[0.15px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="adjustLetterSpacing block leading-[1.5] text-nowrap whitespace-pre">
          Smartlinx
        </p>
      </div>
    </div>
  );
}

function Frame181() {
  return (
    <div className="box-border content-stretch flex flex-row gap-1 items-center justify-start leading-[0] p-0 relative shrink-0 text-[#000000] text-[14px] text-left text-nowrap">
      <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold not-italic relative shrink-0">
        <p className="block leading-[22px] text-nowrap whitespace-pre">PTO</p>
      </div>
      <div
        className="font-['Roboto:Regular',_sans-serif] font-normal relative shrink-0 tracking-[0.15px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="adjustLetterSpacing block leading-[1.5] text-nowrap whitespace-pre">
          65 / 12 / 3
        </p>
      </div>
    </div>
  );
}

function Frame189() {
  return (
    <div className="[flex-flow:wrap] box-border content-start flex gap-4 items-start justify-start p-0 relative shrink-0 w-full">
      <Frame184 />
      <Frame183 />
      <Frame172 />
      <Frame175 />
      <Frame176 />
      <Frame177 />
      <Frame178 />
      <Frame179 />
      <Frame185 />
      <Frame180 />
      <Frame181 />
    </div>
  );
}

function Frame188() {
  return (
    <div className="box-border content-stretch flex flex-col gap-6 items-start justify-start p-0 relative shrink-0 w-full">
      <Frame186 />
      <Frame189 />
    </div>
  );
}

function Frame187() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex flex-col gap-[37px] items-start justify-start p-[24px] relative rounded shrink-0 w-[1366px]">
      <Frame188 />
    </div>
  );
}

function Frame169() {
  return (
    <div className="box-border content-stretch flex flex-row gap-[794px] items-start justify-start p-0 relative shrink-0">
      <Frame187 />
    </div>
  );
}

function Container3() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-center px-4 py-[9px] relative shrink-0"
      data-name="Container"
    >
      <div
        className="capitalize font-['Roboto:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#1976d2] text-[14px] text-left text-nowrap tracking-[0.4px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="adjustLetterSpacing block leading-[24px] whitespace-pre">
          Profile
        </p>
      </div>
    </div>
  );
}

function Tab() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-center p-0 relative shrink-0"
      data-name="<Tab>"
    >
      <Container3 />
      <div className="absolute bottom-0 h-0 left-0 right-0" data-name="Line">
        <div className="absolute bottom-0 left-0 right-0 top-[-2px]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 75 2"
          >
            <line
              id="Line"
              stroke="var(--stroke-0, #1976D2)"
              strokeWidth="2"
              x2="75"
              y1="1"
              y2="1"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-center px-4 py-[9px] relative shrink-0"
      data-name="Container"
    >
      <div
        className="capitalize font-['Roboto:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#616161] text-[14px] text-left text-nowrap tracking-[0.4px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="adjustLetterSpacing block leading-[24px] whitespace-pre">
          Schedule
        </p>
      </div>
    </div>
  );
}

function Tab1() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-center p-0 relative shrink-0"
      data-name="<Tab>"
    >
      <Container4 />
    </div>
  );
}

function Container5() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-center px-4 py-[9px] relative shrink-0"
      data-name="Container"
    >
      <div
        className="capitalize font-['Roboto:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#616161] text-[14px] text-left text-nowrap tracking-[0.4px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="adjustLetterSpacing block leading-[24px] whitespace-pre">
          Timecard
        </p>
      </div>
    </div>
  );
}

function Tab2() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-center p-0 relative shrink-0"
      data-name="<Tab>"
    >
      <Container5 />
    </div>
  );
}

function Container6() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-center px-4 py-[9px] relative shrink-0"
      data-name="Container"
    >
      <div
        className="capitalize font-['Roboto:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#616161] text-[14px] text-left text-nowrap tracking-[0.4px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="adjustLetterSpacing block leading-[24px] whitespace-pre">
          Payroll
        </p>
      </div>
    </div>
  );
}

function Tab3() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-center p-0 relative shrink-0"
      data-name="<Tab>"
    >
      <Container6 />
    </div>
  );
}

function Container7() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <Tab />
      <Tab1 />
      <Tab2 />
      <Tab3 />
    </div>
  );
}

function Tabs() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start overflow-clip p-0 relative shrink-0"
      data-name="<Tabs>"
    >
      <Container7 />
    </div>
  );
}

function ListItemText() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px px-0 py-1 relative shrink-0"
      data-name="ListItem Text"
    >
      <div
        className="font-['Roboto:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#212121] text-[14px] text-left tracking-[0.15px] w-full"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[1.5]">Employee’s Details</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-start px-4 py-2 relative w-full">
          <ListItemText />
        </div>
      </div>
    </div>
  );
}

function Instance1() {
  return (
    <div
      className="bg-[rgba(25,118,210,0.08)] box-border content-stretch flex flex-col items-start justify-start overflow-clip p-0 relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full"
      data-name="Instance #1"
    >
      <Container8 />
    </div>
  );
}

function ListItemText1() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px px-0 py-1 relative shrink-0"
      data-name="ListItem Text"
    >
      <div
        className="font-['Roboto:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#212121] text-[14px] text-left tracking-[0.15px] w-full"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[1.5]">Job Details</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-start px-4 py-2 relative w-full">
          <ListItemText1 />
        </div>
      </div>
    </div>
  );
}

function Instance2() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start overflow-clip p-0 relative shrink-0 w-full"
      data-name="Instance #2"
    >
      <Container9 />
    </div>
  );
}

function ListItemText2() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px px-0 py-1 relative shrink-0"
      data-name="ListItem Text"
    >
      <div
        className="font-['Roboto:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#212121] text-[14px] text-left tracking-[0.15px] w-full"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[1.5]">Certification</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-start px-4 py-2 relative w-full">
          <ListItemText2 />
        </div>
      </div>
    </div>
  );
}

function Instance3() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start overflow-clip p-0 relative shrink-0 w-full"
      data-name="Instance #3"
    >
      <Container10 />
    </div>
  );
}

function ListItemText3() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px px-0 py-1 relative shrink-0"
      data-name="ListItem Text"
    >
      <div
        className="font-['Roboto:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#212121] text-[14px] text-left tracking-[0.15px] w-full"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[1.5]">Health</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-start px-4 py-2 relative w-full">
          <ListItemText3 />
        </div>
      </div>
    </div>
  );
}

function Instance4() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start overflow-clip p-0 relative shrink-0 w-full"
      data-name="Instance #4"
    >
      <Container11 />
    </div>
  );
}

function ListItemText4() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px px-0 py-1 relative shrink-0"
      data-name="ListItem Text"
    >
      <div
        className="font-['Roboto:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#212121] text-[14px] text-left tracking-[0.15px] w-full"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[1.5]">ACA</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-start overflow-clip px-4 py-2 relative shrink-0 w-[260px]"
      data-name="Container"
    >
      <ListItemText4 />
    </div>
  );
}

function Instance5() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start overflow-clip p-0 relative shrink-0 w-full"
      data-name="Instance #5"
    >
      <Container12 />
    </div>
  );
}

function ListItemText5() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px px-0 py-1 relative shrink-0"
      data-name="ListItem Text"
    >
      <div
        className="font-['Roboto:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#212121] text-[14px] text-left tracking-[0.15px] w-full"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[1.5]">Documents</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-start overflow-clip px-4 py-2 relative shrink-0 w-[260px]"
      data-name="Container"
    >
      <ListItemText5 />
    </div>
  );
}

function Instance6() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start overflow-clip p-0 relative shrink-0 w-full"
      data-name="Instance #6"
    >
      <Container13 />
    </div>
  );
}

function ListItemText6() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px px-0 py-1 relative shrink-0"
      data-name="ListItem Text"
    >
      <div
        className="font-['Roboto:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#212121] text-[14px] text-left tracking-[0.15px] w-full"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[1.5]">Notes / History</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-start overflow-clip px-4 py-2 relative shrink-0 w-[260px]"
      data-name="Container"
    >
      <ListItemText6 />
    </div>
  );
}

function Instance7() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start overflow-clip p-0 relative shrink-0 w-full"
      data-name="Instance #7"
    >
      <Container14 />
    </div>
  );
}

function Stack() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-col items-start justify-start p-0 relative rounded shrink-0 w-[200px]"
      data-name="<Stack>"
    >
      <Instance1 />
      <Instance2 />
      <Instance3 />
      <Instance4 />
      <Instance5 />
      <Instance6 />
      <Instance7 />
    </div>
  );
}

function Typography3() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col grow h-6 items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="<Typography>"
    >
      <div
        className="font-['Roboto:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#212121] text-[14px] text-left text-nowrap tracking-[0.15px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">
          Personal Info
        </p>
      </div>
    </div>
  );
}

function Typography4() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col grow h-6 items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="<Typography>"
    >
      <div
        className="font-['Roboto:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#616161] text-[14px] text-left text-nowrap tracking-[0.15px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">
          General information, Addresses
        </p>
      </div>
    </div>
  );
}

function ExpandMoreFilled() {
  return (
    <div className="relative shrink-0 size-6" data-name="ExpandMoreFilled">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="ExpandMoreFilled">
          <path
            d={svgPaths.p18b66300}
            fill="var(--fill-0, #212121)"
            fillOpacity="0.56"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Icon17() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-start justify-start p-0 relative shrink-0"
      data-name="<Icon>"
    >
      <ExpandMoreFilled />
    </div>
  );
}

function IconButton() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-center overflow-clip p-[8px] relative rounded-[100px] shrink-0"
      data-name="<IconButton>"
    >
      <Icon17 />
    </div>
  );
}

function AccordionExpandIcon() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row grow items-center justify-end min-h-px min-w-px p-0 relative shrink-0"
      data-name="Accordion Expand Icon"
    >
      <IconButton />
    </div>
  );
}

function Container15() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-start px-4 py-0 relative w-full">
          <Typography3 />
          <Typography4 />
          <AccordionExpandIcon />
        </div>
      </div>
    </div>
  );
}

function AccordionSummary() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-col items-start justify-start p-0 relative shadow-[0px_1px_3px_0px_rgba(0,0,0,0.12),0px_1px_1px_0px_rgba(0,0,0,0.14),0px_2px_1px_-1px_rgba(0,0,0,0.2)] shrink-0 w-full"
      data-name="AccordionSummary"
    >
      <Container15 />
    </div>
  );
}

function Accordion() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
      data-name="<Accordion>"
    >
      <AccordionSummary />
    </div>
  );
}

function Typography5() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col grow h-6 items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="<Typography>"
    >
      <div
        className="font-['Roboto:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#212121] text-[14px] text-left text-nowrap tracking-[0.15px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">
          Additional Info
        </p>
      </div>
    </div>
  );
}

function Typography6() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col grow h-6 items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="<Typography>"
    >
      <div
        className="font-['Roboto:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#616161] text-[14px] text-left text-nowrap tracking-[0.15px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">
          Hiring Details, ID’s
        </p>
      </div>
    </div>
  );
}

function ExpandMoreFilled1() {
  return (
    <div className="relative shrink-0 size-6" data-name="ExpandMoreFilled">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="ExpandMoreFilled">
          <path
            d={svgPaths.p18b66300}
            fill="var(--fill-0, #212121)"
            fillOpacity="0.56"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Icon18() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-start justify-start p-0 relative shrink-0"
      data-name="<Icon>"
    >
      <ExpandMoreFilled1 />
    </div>
  );
}

function IconButton1() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-center overflow-clip p-[8px] relative rounded-[100px] shrink-0"
      data-name="<IconButton>"
    >
      <Icon18 />
    </div>
  );
}

function AccordionExpandIcon1() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row grow items-center justify-end min-h-px min-w-px p-0 relative shrink-0"
      data-name="Accordion Expand Icon"
    >
      <IconButton1 />
    </div>
  );
}

function Container16() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-start px-4 py-0 relative w-full">
          <Typography5 />
          <Typography6 />
          <AccordionExpandIcon1 />
        </div>
      </div>
    </div>
  );
}

function AccordionSummary1() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-col items-start justify-start p-0 relative shadow-[0px_1px_3px_0px_rgba(0,0,0,0.12),0px_1px_1px_0px_rgba(0,0,0,0.14),0px_2px_1px_-1px_rgba(0,0,0,0.2)] shrink-0 w-full"
      data-name="AccordionSummary"
    >
      <Container16 />
    </div>
  );
}

function Typography7() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col grow h-6 items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="<Typography>"
    >
      <div
        className="font-['Roboto:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#212121] text-[14px] text-left text-nowrap tracking-[0.15px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">
          Consent
        </p>
      </div>
    </div>
  );
}

function Typography8() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col grow h-6 items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="<Typography>"
    >
      <div
        className="font-['Roboto:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#616161] text-[14px] text-left text-nowrap tracking-[0.15px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">
          Hiring Details, ID’s
        </p>
      </div>
    </div>
  );
}

function ExpandMoreFilled2() {
  return (
    <div className="relative shrink-0 size-6" data-name="ExpandMoreFilled">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="ExpandMoreFilled">
          <path
            d={svgPaths.p18b66300}
            fill="var(--fill-0, #212121)"
            fillOpacity="0.56"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Icon19() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-start justify-start p-0 relative shrink-0"
      data-name="<Icon>"
    >
      <ExpandMoreFilled2 />
    </div>
  );
}

function IconButton2() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-center overflow-clip p-[8px] relative rounded-[100px] shrink-0"
      data-name="<IconButton>"
    >
      <Icon19 />
    </div>
  );
}

function AccordionExpandIcon2() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row grow items-center justify-end min-h-px min-w-px p-0 relative shrink-0"
      data-name="Accordion Expand Icon"
    >
      <IconButton2 />
    </div>
  );
}

function Container17() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-start px-4 py-0 relative w-full">
          <Typography7 />
          <Typography8 />
          <AccordionExpandIcon2 />
        </div>
      </div>
    </div>
  );
}

function AccordionSummary2() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-col items-start justify-start p-0 relative shadow-[0px_1px_3px_0px_rgba(0,0,0,0.12),0px_1px_1px_0px_rgba(0,0,0,0.14),0px_2px_1px_-1px_rgba(0,0,0,0.2)] shrink-0 w-full"
      data-name="AccordionSummary"
    >
      <Container17 />
    </div>
  );
}

function Typography9() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col grow h-6 items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="<Typography>"
    >
      <div
        className="font-['Roboto:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#212121] text-[14px] text-left text-nowrap tracking-[0.15px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">
          Emergency Contact
        </p>
      </div>
    </div>
  );
}

function Typography10() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col grow h-6 items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="<Typography>"
    >
      <div
        className="font-['Roboto:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#616161] text-[14px] text-left text-nowrap tracking-[0.15px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">
          Hiring Details, ID’s
        </p>
      </div>
    </div>
  );
}

function ExpandMoreFilled3() {
  return (
    <div className="relative shrink-0 size-6" data-name="ExpandMoreFilled">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="ExpandMoreFilled">
          <path
            d={svgPaths.p18b66300}
            fill="var(--fill-0, #212121)"
            fillOpacity="0.56"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Icon20() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-start justify-start p-0 relative shrink-0"
      data-name="<Icon>"
    >
      <ExpandMoreFilled3 />
    </div>
  );
}

function IconButton3() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-center overflow-clip p-[8px] relative rounded-[100px] shrink-0"
      data-name="<IconButton>"
    >
      <Icon20 />
    </div>
  );
}

function AccordionExpandIcon3() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row grow items-center justify-end min-h-px min-w-px p-0 relative shrink-0"
      data-name="Accordion Expand Icon"
    >
      <IconButton3 />
    </div>
  );
}

function Container18() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-start px-4 py-0 relative w-full">
          <Typography9 />
          <Typography10 />
          <AccordionExpandIcon3 />
        </div>
      </div>
    </div>
  );
}

function AccordionSummary3() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-col items-start justify-start p-0 relative shadow-[0px_1px_3px_0px_rgba(0,0,0,0.12),0px_1px_1px_0px_rgba(0,0,0,0.14),0px_2px_1px_-1px_rgba(0,0,0,0.2)] shrink-0 w-full"
      data-name="AccordionSummary"
    >
      <Container18 />
    </div>
  );
}

function Typography11() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col grow h-6 items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="<Typography>"
    >
      <div
        className="font-['Roboto:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#212121] text-[14px] text-left text-nowrap tracking-[0.15px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">
          Benefits
        </p>
      </div>
    </div>
  );
}

function Typography12() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col grow h-6 items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="<Typography>"
    >
      <div
        className="font-['Roboto:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#616161] text-[14px] text-left text-nowrap tracking-[0.15px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">
          Accruals, Benefits Details
        </p>
      </div>
    </div>
  );
}

function ExpandMoreFilled4() {
  return (
    <div className="relative shrink-0 size-6" data-name="ExpandMoreFilled">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="ExpandMoreFilled">
          <path
            d={svgPaths.p18b66300}
            fill="var(--fill-0, #212121)"
            fillOpacity="0.56"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Icon21() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-start justify-start p-0 relative shrink-0"
      data-name="<Icon>"
    >
      <ExpandMoreFilled4 />
    </div>
  );
}

function IconButton4() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-center overflow-clip p-[8px] relative rounded-[100px] shrink-0"
      data-name="<IconButton>"
    >
      <Icon21 />
    </div>
  );
}

function AccordionExpandIcon4() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row grow items-center justify-end min-h-px min-w-px p-0 relative shrink-0"
      data-name="Accordion Expand Icon"
    >
      <IconButton4 />
    </div>
  );
}

function Container19() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-start px-4 py-0 relative w-full">
          <Typography11 />
          <Typography12 />
          <AccordionExpandIcon4 />
        </div>
      </div>
    </div>
  );
}

function AccordionSummary4() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-col items-start justify-start p-0 relative shadow-[0px_1px_3px_0px_rgba(0,0,0,0.12),0px_1px_1px_0px_rgba(0,0,0,0.14),0px_2px_1px_-1px_rgba(0,0,0,0.2)] shrink-0 w-full"
      data-name="AccordionSummary"
    >
      <Container19 />
    </div>
  );
}

function Frame194() {
  return (
    <div className="box-border content-stretch flex flex-col gap-6 items-start justify-start p-0 relative shrink-0 w-[1142px]">
      <Accordion />
      <AccordionSummary1 />
      <AccordionSummary2 />
      <AccordionSummary3 />
      <AccordionSummary4 />
    </div>
  );
}

function Frame195() {
  return (
    <div className="box-border content-stretch flex flex-row gap-6 items-start justify-start p-0 relative shrink-0">
      <Stack />
      <Frame194 />
    </div>
  );
}

function Container20() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col gap-6 items-start justify-start left-32 pb-0 pt-6 px-8 top-[122px] w-[1432px]"
      data-name="<Container>"
    >
      <Frame169 />
      <Tabs />
      <Frame195 />
    </div>
  );
}

function MenuOutlined() {
  return (
    <div className="relative shrink-0 size-6" data-name="MenuOutlined">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="MenuOutlined">
          <path
            d={svgPaths.p1d821780}
            fill="var(--fill-0, #616161)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Icon22() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-start justify-start p-0 relative shrink-0"
      data-name="<Icon>"
    >
      <MenuOutlined />
    </div>
  );
}

function IconButton5() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-center overflow-clip p-[8px] relative rounded-[100px] shrink-0"
      data-name="<IconButton>"
    >
      <Icon22 />
    </div>
  );
}

function Typography13() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="<Typography>"
    >
      <div
        className="font-['Roboto:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#212121] text-[16px] text-left text-nowrap tracking-[0.15px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="adjustLetterSpacing block leading-[1.6] whitespace-pre">
          Catalyst
        </p>
      </div>
    </div>
  );
}

function LeftSide() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row gap-4 grow items-center justify-start min-h-16 min-w-px p-0 relative shrink-0"
      data-name="Left Side"
    >
      <IconButton5 />
      <Typography13 />
    </div>
  );
}

function AutoAwesomeOutlined() {
  return (
    <div className="relative shrink-0 size-6" data-name="AutoAwesomeOutlined">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="AutoAwesomeOutlined">
          <g id="Vector">
            <path d={svgPaths.p30afd470} fill="var(--fill-0, #1976D2)" />
            <path d={svgPaths.p21d93000} fill="var(--fill-0, #1976D2)" />
            <path d={svgPaths.p187e7500} fill="var(--fill-0, #1976D2)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Icon23() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row items-start justify-start left-1/2 p-0 top-1/2 translate-x-[-50%] translate-y-[-50%]"
      data-name="<Icon>"
    >
      <AutoAwesomeOutlined />
    </div>
  );
}

function MinWidth6() {
  return <div className="size-10" data-name="min-width" />;
}

function Instance8() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-center p-0 relative rounded-[100px] shrink-0"
      data-name="Instance #1"
    >
      <Icon23 />
      <div className="flex h-[40px] items-center justify-center relative shrink-0 w-[40px]">
        <div className="flex-none rotate-[270deg]">
          <MinWidth6 />
        </div>
      </div>
    </div>
  );
}

function EventAvailableOutlined() {
  return (
    <div
      className="relative shrink-0 size-6"
      data-name="EventAvailableOutlined"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="EventAvailableOutlined">
          <path
            d={svgPaths.p6c27f00}
            fill="var(--fill-0, #1976D2)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Icon24() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row items-start justify-start left-1/2 p-0 top-1/2 translate-x-[-50%] translate-y-[-50%]"
      data-name="<Icon>"
    >
      <EventAvailableOutlined />
    </div>
  );
}

function MinWidth7() {
  return <div className="size-10" data-name="min-width" />;
}

function Instance9() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-center p-0 relative rounded-[100px] shrink-0"
      data-name="Instance #2"
    >
      <Icon24 />
      <div className="flex h-[40px] items-center justify-center relative shrink-0 w-[40px]">
        <div className="flex-none rotate-[270deg]">
          <MinWidth7 />
        </div>
      </div>
    </div>
  );
}

function CalendarMonthOutlined() {
  return (
    <div className="relative shrink-0 size-6" data-name="CalendarMonthOutlined">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="CalendarMonthOutlined">
          <path
            d={svgPaths.p962bd00}
            fill="var(--fill-0, #1976D2)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Icon25() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row items-start justify-start left-1/2 p-0 top-1/2 translate-x-[-50%] translate-y-[-50%]"
      data-name="<Icon>"
    >
      <CalendarMonthOutlined />
    </div>
  );
}

function MinWidth8() {
  return <div className="size-10" data-name="min-width" />;
}

function Instance10() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-center p-0 relative rounded-[100px] shrink-0"
      data-name="Instance #3"
    >
      <Icon25 />
      <div className="flex h-[40px] items-center justify-center relative shrink-0 w-[40px]">
        <div className="flex-none rotate-[270deg]">
          <MinWidth8 />
        </div>
      </div>
    </div>
  );
}

function AttachMoneyOutlined() {
  return (
    <div className="relative shrink-0 size-6" data-name="AttachMoneyOutlined">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="AttachMoneyOutlined">
          <path
            d={svgPaths.p2e033780}
            fill="var(--fill-0, #1976D2)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Icon26() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row items-start justify-start left-1/2 p-0 top-1/2 translate-x-[-50%] translate-y-[-50%]"
      data-name="<Icon>"
    >
      <AttachMoneyOutlined />
    </div>
  );
}

function MinWidth9() {
  return <div className="size-10" data-name="min-width" />;
}

function Instance11() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-center p-0 relative rounded-[100px] shrink-0"
      data-name="Instance #4"
    >
      <Icon26 />
      <div className="flex h-[40px] items-center justify-center relative shrink-0 w-[40px]">
        <div className="flex-none rotate-[270deg]">
          <MinWidth9 />
        </div>
      </div>
    </div>
  );
}

function PeopleFilled() {
  return (
    <div className="relative shrink-0 size-6" data-name="PeopleFilled">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="PeopleFilled">
          <path
            d={svgPaths.p25122200}
            fill="var(--fill-0, #1976D2)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Icon27() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row items-start justify-start left-1/2 p-0 top-1/2 translate-x-[-50%] translate-y-[-50%]"
      data-name="<Icon>"
    >
      <PeopleFilled />
    </div>
  );
}

function MinWidth10() {
  return <div className="size-10" data-name="min-width" />;
}

function Instance12() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-col items-center justify-center p-0 relative rounded-[100px] shrink-0"
      data-name="Instance #5"
    >
      <Icon27 />
      <div className="flex h-[40px] items-center justify-center relative shrink-0 w-[40px]">
        <div className="flex-none rotate-[270deg]">
          <MinWidth10 />
        </div>
      </div>
    </div>
  );
}

function MinWidth11() {
  return <div className="size-10" data-name="min-width" />;
}

function Instance13() {
  return (
    <div
      className="bg-[rgba(25,118,210,0.12)] box-border content-stretch flex flex-col items-center justify-center p-0 relative rounded-[100px] shrink-0"
      data-name="Instance #6"
    >
      <div
        className="absolute flex flex-col font-['Roboto:Regular',_sans-serif] font-normal justify-center leading-[0] left-1/2 text-[#1976d2] text-[20px] text-center top-1/2 tracking-[0.14px] translate-x-[-50%] translate-y-[-50%] w-10"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="adjustLetterSpacing block leading-[20px]">OP</p>
      </div>
      <div className="flex h-[40px] items-center justify-center relative shrink-0 w-[40px]">
        <div className="flex-none rotate-[270deg]">
          <MinWidth11 />
        </div>
      </div>
    </div>
  );
}

function Stack1() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-4 items-start justify-start p-0 relative shrink-0"
      data-name="<Stack>"
    >
      <Instance8 />
      <Instance9 />
      <Instance10 />
      <Instance11 />
      <Instance12 />
      <Instance13 />
    </div>
  );
}

function Toolbar() {
  return (
    <div className="relative shrink-0 w-full" data-name="<Toolbar>">
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-start px-6 py-0 relative w-full">
          <LeftSide />
          <Stack1 />
        </div>
      </div>
    </div>
  );
}

function Paper3() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-col items-start justify-center overflow-clip p-0 relative shrink-0 w-full"
      data-name="<Paper>"
    >
      <Toolbar />
    </div>
  );
}

function AppBar() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col items-start justify-start left-0 p-0 shadow-[0px_1px_5px_0px_rgba(0,0,0,0.12)] top-0 w-[1920px]"
      data-name="<AppBar>"
    >
      <Paper3 />
    </div>
  );
}

function Icon28() {
  return (
    <div className="relative shrink-0 size-5" data-name="Icon">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="Icon">
          <path
            d={svgPaths.p33817400}
            fill="var(--fill-0, #212121)"
            fillOpacity="0.56"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Icon29() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-start justify-start p-0 relative shrink-0"
      data-name="<Icon>"
    >
      <Icon28 />
    </div>
  );
}

function Container21() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-center px-4 py-[9px] relative shrink-0"
      data-name="Container"
    >
      <div
        className="capitalize font-['Roboto:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#616161] text-[14px] text-left text-nowrap tracking-[0.4px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="adjustLetterSpacing block leading-[24px] whitespace-pre">
          Create Shift - Eternal Blossom
        </p>
      </div>
      <Icon29 />
    </div>
  );
}

function Tab4() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-center p-0 relative shrink-0"
      data-name="<Tab>"
    >
      <Container21 />
    </div>
  );
}

function Icon30() {
  return (
    <div className="relative shrink-0 size-5" data-name="Icon">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="Icon">
          <path
            d={svgPaths.p33817400}
            fill="var(--fill-0, #212121)"
            fillOpacity="0.56"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Icon31() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-start justify-start p-0 relative shrink-0"
      data-name="<Icon>"
    >
      <Icon30 />
    </div>
  );
}

function Container22() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-center px-4 py-[9px] relative shrink-0"
      data-name="Container"
    >
      <div
        className="capitalize font-['Roboto:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#1976d2] text-[14px] text-left text-nowrap tracking-[0.4px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="adjustLetterSpacing block leading-[24px] whitespace-pre">
          Liam Aboot
        </p>
      </div>
      <Icon31 />
    </div>
  );
}

function Tab5() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-center p-0 relative shrink-0"
      data-name="<Tab>"
    >
      <Container22 />
      <div className="absolute bottom-0 h-0 left-0 right-0" data-name="Line">
        <div className="absolute bottom-0 left-0 right-0 top-[-2px]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 136 2"
          >
            <line
              id="Line"
              stroke="var(--stroke-0, #1976D2)"
              strokeWidth="2"
              x2="136"
              y1="1"
              y2="1"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Icon32() {
  return (
    <div className="relative shrink-0 size-5" data-name="Icon">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="Icon">
          <path
            d={svgPaths.p33817400}
            fill="var(--fill-0, #616161)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Icon33() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-start justify-start p-0 relative shrink-0"
      data-name="<Icon>"
    >
      <Icon32 />
    </div>
  );
}

function Container23() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-center px-4 py-[9px] relative shrink-0"
      data-name="Container"
    >
      <div
        className="capitalize font-['Roboto:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#616161] text-[14px] text-left text-nowrap tracking-[0.4px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="adjustLetterSpacing block leading-[24px] whitespace-pre">
          Olivia Anderson
        </p>
      </div>
      <Icon33 />
    </div>
  );
}

function Tab6() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-center p-0 relative shrink-0"
      data-name="<Tab>"
    >
      <Container23 />
    </div>
  );
}

function Icon34() {
  return (
    <div className="relative shrink-0 size-5" data-name="Icon">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="Icon">
          <path
            d={svgPaths.p33817400}
            fill="var(--fill-0, #616161)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Icon35() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-start justify-start p-0 relative shrink-0"
      data-name="<Icon>"
    >
      <Icon34 />
    </div>
  );
}

function Container24() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-center px-4 py-[9px] relative shrink-0"
      data-name="Container"
    >
      <div
        className="capitalize font-['Roboto:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#616161] text-[14px] text-left text-nowrap tracking-[0.4px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="adjustLetterSpacing block leading-[24px] whitespace-pre">
          Create Shift - Facility 2
        </p>
      </div>
      <Icon35 />
    </div>
  );
}

function Tab7() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-center p-0 relative shrink-0"
      data-name="<Tab>"
    >
      <Container24 />
    </div>
  );
}

function Icon36() {
  return (
    <div className="relative shrink-0 size-5" data-name="Icon">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="Icon">
          <path
            d={svgPaths.p33817400}
            fill="var(--fill-0, #616161)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Icon37() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-start justify-start p-0 relative shrink-0"
      data-name="<Icon>"
    >
      <Icon36 />
    </div>
  );
}

function Container25() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-center px-4 py-[9px] relative shrink-0"
      data-name="Container"
    >
      <div
        className="capitalize font-['Roboto:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#616161] text-[14px] text-left text-nowrap tracking-[0.4px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="adjustLetterSpacing block leading-[24px] whitespace-pre">
          Check Calculator
        </p>
      </div>
      <Icon37 />
    </div>
  );
}

function Tab8() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-center p-0 relative shrink-0"
      data-name="<Tab>"
    >
      <Container25 />
    </div>
  );
}

function Container26() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <Tab4 />
      <Tab5 />
      <Tab6 />
      <Tab7 />
      <Tab8 />
    </div>
  );
}

function Tabs1() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col items-start justify-start left-40 overflow-clip p-0 top-20"
      data-name="<Tabs>"
    >
      <Container26 />
    </div>
  );
}

function ExpandMoreOutlined() {
  return (
    <div className="relative size-4" data-name="ExpandMoreOutlined">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="ExpandMoreOutlined">
          <path
            d={svgPaths.p2a89f700}
            fill="var(--fill-0, #212121)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Dashboard() {
  return (
    <div className="relative shrink-0 size-6" data-name="dashboard">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="dashboard">
          <path
            d={svgPaths.p26ffbd00}
            fill="var(--fill-0, #1565C0)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame29() {
  return (
    <div className="box-border content-stretch flex flex-row gap-[22px] items-center justify-start p-0 relative shrink-0">
      <Dashboard />
    </div>
  );
}

function Frame16() {
  return (
    <div className="box-border content-stretch flex flex-col gap-1 items-center justify-center p-0 relative shrink-0">
      <Frame29 />
      <div
        className="font-['Roboto:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#212121] text-[12px] text-left text-nowrap tracking-[0.4px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="adjustLetterSpacing block leading-[1.66] whitespace-pre">
          Dashboard
        </p>
      </div>
    </div>
  );
}

function MedicalInformation() {
  return (
    <div className="relative shrink-0 size-6" data-name="medical_information">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="medical_information">
          <path
            d={svgPaths.p503f580}
            fill="var(--fill-0, #1565C0)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame35() {
  return (
    <div className="box-border content-stretch flex flex-col gap-1 items-center justify-center p-0 relative shrink-0 w-full">
      <MedicalInformation />
      <div
        className="font-['Roboto:Regular',_sans-serif] font-normal leading-[1.66] relative shrink-0 text-[#212121] text-[12px] text-center text-nowrap tracking-[0.4px] whitespace-pre"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="adjustLetterSpacing block mb-0">Workforce</p>
        <p className="adjustLetterSpacing block">Management</p>
      </div>
    </div>
  );
}

function Alarm() {
  return (
    <div className="relative shrink-0 size-6" data-name="alarm">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="alarm">
          <path
            d={svgPaths.p15535600}
            fill="var(--fill-0, #1565C0)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame30() {
  return (
    <div className="box-border content-stretch flex flex-col gap-1 items-center justify-center p-0 relative shrink-0 w-full">
      <Alarm />
      <div
        className="font-['Roboto:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#212121] text-[12px] text-left text-nowrap tracking-[0.4px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="adjustLetterSpacing block leading-[1.66] whitespace-pre">{`Time & Labour`}</p>
      </div>
    </div>
  );
}

function CalendarMonth() {
  return (
    <div className="relative shrink-0 size-6" data-name="calendar_month">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="calendar_month">
          <path
            d={svgPaths.p962bd00}
            fill="var(--fill-0, #1565C0)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame31() {
  return (
    <div className="box-border content-stretch flex flex-col gap-1 items-center justify-center p-0 relative shrink-0">
      <CalendarMonth />
      <div
        className="font-['Roboto:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#212121] text-[12px] text-left text-nowrap tracking-[0.4px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="adjustLetterSpacing block leading-[1.66] whitespace-pre">
          Schedule
        </p>
      </div>
    </div>
  );
}

function CalendarToday() {
  return (
    <div className="relative shrink-0 size-6" data-name="calendar_today">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="calendar_today">
          <path
            d={svgPaths.p6ea8c00}
            fill="var(--fill-0, #1565C0)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame32() {
  return (
    <div className="box-border content-stretch flex flex-col gap-1 items-center justify-center p-0 relative shrink-0">
      <CalendarToday />
      <div
        className="font-['Roboto:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#212121] text-[12px] text-left text-nowrap tracking-[0.4px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="adjustLetterSpacing block leading-[1.66] whitespace-pre">
          Operation
        </p>
      </div>
    </div>
  );
}

function BarChart() {
  return (
    <div className="relative shrink-0 size-6" data-name="bar_chart">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="bar_chart">
          <g id="Vector">
            <path d="M8 9H4V20H8V9Z" fill="var(--fill-0, #1565C0)" />
            <path d="M20 13H16V20H20V13Z" fill="var(--fill-0, #1565C0)" />
            <path d="M14 4H10V20H14V4Z" fill="var(--fill-0, #1565C0)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame33() {
  return (
    <div className="box-border content-stretch flex flex-col gap-1 items-center justify-center p-0 relative shrink-0">
      <BarChart />
      <div
        className="font-['Roboto:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#212121] text-[12px] text-left text-nowrap tracking-[0.4px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="adjustLetterSpacing block leading-[1.66] whitespace-pre">
          Reports
        </p>
      </div>
    </div>
  );
}

function FavoriteBorder() {
  return (
    <div className="relative shrink-0 size-6" data-name="favorite_border">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="favorite_border">
          <path
            d={svgPaths.p2291fe00}
            fill="var(--fill-0, #1565C0)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame34() {
  return (
    <div className="box-border content-stretch flex flex-col gap-1 items-center justify-center p-0 relative shrink-0">
      <FavoriteBorder />
      <div
        className="font-['Roboto:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#212121] text-[12px] text-left text-nowrap tracking-[0.4px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="adjustLetterSpacing block leading-[1.66] whitespace-pre">
          ACA
        </p>
      </div>
    </div>
  );
}

function Money() {
  return (
    <div className="relative shrink-0 size-6" data-name="money">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="money">
          <path
            d={svgPaths.p10b85700}
            fill="var(--fill-0, #1565C0)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame36() {
  return (
    <div className="box-border content-stretch flex flex-col gap-1 items-center justify-center p-0 relative shrink-0">
      <Money />
      <div
        className="font-['Roboto:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#212121] text-[12px] text-left text-nowrap tracking-[0.4px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="adjustLetterSpacing block leading-[1.66] whitespace-pre">
          Taxes
        </p>
      </div>
    </div>
  );
}

function AttachMoney() {
  return (
    <div className="relative shrink-0 size-6" data-name="attach_money">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="attach_money">
          <path
            d={svgPaths.p1b8edd00}
            fill="var(--fill-0, #1565C0)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame37() {
  return (
    <div className="box-border content-stretch flex flex-col gap-1 items-center justify-center p-0 relative shrink-0">
      <AttachMoney />
      <div
        className="font-['Roboto:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#212121] text-[12px] text-left text-nowrap tracking-[0.4px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="adjustLetterSpacing block leading-[1.66] whitespace-pre">
          Payrolls
        </p>
      </div>
    </div>
  );
}

function TextSnippet() {
  return (
    <div className="relative shrink-0 size-6" data-name="text_snippet">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="text_snippet">
          <path
            d={svgPaths.p335d9b00}
            fill="var(--fill-0, #1565C0)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame38() {
  return (
    <div className="box-border content-stretch flex flex-col gap-1 items-center justify-center p-0 relative shrink-0">
      <TextSnippet />
      <div
        className="font-['Roboto:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#212121] text-[12px] text-left text-nowrap tracking-[0.4px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="adjustLetterSpacing block leading-[1.66] whitespace-pre">
          Invoices
        </p>
      </div>
    </div>
  );
}

function ManageAccounts() {
  return (
    <div className="relative shrink-0 size-6" data-name="manage_accounts">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="manage_accounts">
          <g id="Vector">
            <path d={svgPaths.p181a7800} fill="var(--fill-0, #1565C0)" />
            <path d={svgPaths.p1c7f5680} fill="var(--fill-0, #1565C0)" />
            <path d={svgPaths.p11d19280} fill="var(--fill-0, #1565C0)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame39() {
  return (
    <div className="box-border content-stretch flex flex-col gap-1 items-center justify-center p-0 relative shrink-0">
      <ManageAccounts />
      <div
        className="font-['Roboto:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#212121] text-[12px] text-left text-nowrap tracking-[0.4px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="adjustLetterSpacing block leading-[1.66] whitespace-pre">
          User Basics
        </p>
      </div>
    </div>
  );
}

function Frame144() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-8 items-center justify-start left-[22px] p-0 top-[103px] w-[83px]">
      <Frame16 />
      <Frame35 />
      <Frame30 />
      <Frame31 />
      <Frame32 />
      <Frame33 />
      <Frame34 />
      <Frame36 />
      <Frame37 />
      <Frame38 />
      <Frame39 />
    </div>
  );
}

function Group20() {
  return (
    <div className="absolute contents left-0 top-16">
      <div className="absolute bg-[#ffffff] h-[1072px] left-0 shadow-[0px_1px_5px_0px_rgba(0,0,0,0.12),0px_2px_2px_0px_rgba(0,0,0,0.14),0px_3px_1px_-2px_rgba(0,0,0,0.2)] top-16 w-32" />
      <div className="absolute flex h-[16px] items-center justify-center left-[101px] top-[190px] w-[16px]">
        <div className="flex-none rotate-[270deg]">
          {[...Array(10).keys()].map((_, i) => (
            <ExpandMoreOutlined key={i} />
          ))}
        </div>
      </div>
      <div className="absolute flex h-[16px] items-center justify-center left-[101px] top-[286px] w-[16px]">
        <div className="flex-none rotate-[270deg]" />
      </div>
      <div className="absolute flex h-[16px] items-center justify-center left-[101px] top-[367px] w-[16px]">
        <div className="flex-none rotate-[270deg]" />
      </div>
      <div className="absolute flex h-[16px] items-center justify-center left-[101px] top-[448px] w-[16px]">
        <div className="flex-none rotate-[270deg]" />
      </div>
      <div className="absolute flex h-[16px] items-center justify-center left-[101px] top-[528px] w-[16px]">
        <div className="flex-none rotate-[270deg]" />
      </div>
      <div className="absolute flex h-[16px] items-center justify-center left-[101px] top-[608px] w-[16px]">
        <div className="flex-none rotate-[270deg]" />
      </div>
      <div className="absolute flex h-[16px] items-center justify-center left-[101px] top-[688px] w-[16px]">
        <div className="flex-none rotate-[270deg]" />
      </div>
      <div className="absolute flex h-[16px] items-center justify-center left-[101px] top-[768px] w-[16px]">
        <div className="flex-none rotate-[270deg]" />
      </div>
      <div className="absolute flex h-[16px] items-center justify-center left-[101px] top-[847px] w-[16px]">
        <div className="flex-none rotate-[270deg]" />
      </div>
      <div className="absolute flex h-[16px] items-center justify-center left-[101px] top-[927px] w-[16px]">
        <div className="flex-none rotate-[270deg]" />
      </div>
      <Frame144 />
    </div>
  );
}

function Base() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-center p-0 relative shrink-0"
      data-name="Base"
    >
      <div
        className="capitalize font-['Roboto:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#ffffff] text-[13px] text-left text-nowrap tracking-[0.46px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="adjustLetterSpacing block leading-[22px] whitespace-pre">
          Actions
        </p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div
      className="bg-[#1976d2] box-border content-stretch flex flex-col h-full items-center justify-center overflow-clip px-2.5 py-1 relative rounded shrink-0"
      data-name="<Button>"
    >
      <Base />
    </div>
  );
}

function IconLeft1() {
  return (
    <div
      className="absolute size-[18px] top-1/2 translate-x-[-50%] translate-y-[-50%]"
      data-name="Icon Left"
      style={{ left: "calc(50% - 1px)" }}
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 18 18"
      >
        <g id="Icon Left">
          <path
            d={svgPaths.p19104780}
            fill="var(--fill-0, white)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function MaskedIcon1() {
  return (
    <div className="h-6 min-h-6 relative shrink-0 w-4" data-name="Masked Icon">
      <IconLeft1 />
    </div>
  );
}

function Base1() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-center p-0 relative shrink-0"
      data-name="Base"
    >
      <MaskedIcon1 />
    </div>
  );
}

function Button1() {
  return (
    <div
      className="bg-[#1976d2] box-border content-stretch flex flex-col items-center justify-center overflow-clip px-2.5 py-1 relative rounded shrink-0"
      data-name="<Button>"
    >
      <Base1 />
    </div>
  );
}

function ButtonGroup() {
  return (
    <div
      className="absolute bg-[#1976d2] box-border content-stretch flex flex-row items-center justify-start left-[1422px] overflow-clip p-0 rounded shadow-[0px_1px_5px_0px_rgba(0,0,0,0.12),0px_2px_2px_0px_rgba(0,0,0,0.14),0px_3px_1px_-2px_rgba(0,0,0,0.2)] top-[349px]"
      data-name="<ButtonGroup>"
    >
      <div className="flex flex-row items-center self-stretch">
        <Button />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <div
          className="flex h-full items-center justify-center relative shrink-0"
          style={
            {
              "--transform-inner-width": "32",
              "--transform-inner-height": "32",
              width:
                "calc(1px * ((var(--transform-inner-height) * 1) + (var(--transform-inner-width) * 0)))",
            } as React.CSSProperties
          }
        >
          <div className="flex-none h-full rotate-[270deg]">
            <div className="h-full relative w-8" data-name="Vertical">
              <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
                <svg
                  className="block size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 32 1"
                >
                  <line
                    id="Vertical"
                    stroke="var(--stroke-0, #1565C0)"
                    x2="32"
                    y1="0.5"
                    y2="0.5"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Button1 />
    </div>
  );
}

export default function MainNavigationLight() {
  return (
    <div
      className="bg-[#f7f9fa] relative size-full"
      data-name="Main Navigation / Light"
    >
      <Group23 />
      <Container20 />
      <AppBar />
      <Tabs1 />
      <Group20 />
      <ButtonGroup />
    </div>
  );
}