import Footer from "@/_components/common/footer";
import Header from "@/_components/common/header";

const WebLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default WebLayout;
