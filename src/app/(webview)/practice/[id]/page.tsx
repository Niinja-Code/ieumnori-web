// admin에서 대략적인 연습 정보 등록
// id값으로 프론트에서 분기처리

import CoffeeKiosk from "@/_components/(practice)/coffee";
import { notFound, redirect } from "next/navigation";

const PracticeDetail = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;

  if (id === "1") {
    return <CoffeeKiosk />;
  } else {
    notFound();
  }
};

export default PracticeDetail;
