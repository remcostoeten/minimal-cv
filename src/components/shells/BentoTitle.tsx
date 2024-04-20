import Flex from "../core/Flexer";

type BentoTitleProps = {
  children: React.ReactNode;
  icon: React.ReactNode;
  padding?: boolean;
  style?: React.CSSProperties;
  [x: string]: any; // for additional props
};

export default function BentoTitle({
  children,
  icon,
  padding = false,
  style,
  ...props
}: BentoTitleProps) {
  return (
    <Flex
      align="center"
      className={padding ? "p-24" : ""}
      style={style}
      {...props}
    >
      {icon}
      <h3 className="ml-4 text-[18px]">{children}</h3>
    </Flex>
  );
}
