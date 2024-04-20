import Flex from "../core/Flexer";

const PageShell = ({ children }) => {
    return (
        <Flex
            as="main"
            wrap="nowrap"
            dir="col"
            justify="start"
            className="min-h-screen gap-24 p-page md:w-page relative mx-auto "
        >
            {children}
        </Flex>
    );
};

const Container = ({ children }) => {
    return <div className="md:w-page flex justify-center mx-auto">{children}</div>;
};

export default PageShell;
export { Container };
