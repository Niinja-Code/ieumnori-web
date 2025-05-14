import useCoffeKioskStore from "@/stores/(practice)/coffeeKioskStore";
import S from "./styles.module.scss";

const RESULT_RECEIPT = [
  {
    id: 1,
    name: "아이스 아메리카노",
    quantity: 1,
    option: {
      moreSweet: false,
      lessSweet: false,
    },
  },
  {
    id: 2,
    name: "요거트 스무디",
    quantity: 1,
    option: {
      moreSweet: false,
      lessSweet: true,
    },
  },
];

const OPTION_LABEL: Record<string, string> = {
  moreSweet: "더 달게",
  lessSweet: "덜 달게",
};

const CoffeeKioskIntro = () => {
  const intro = useCoffeKioskStore((state) => state.intro);
  const toggleIntro = useCoffeKioskStore((state) => state.toggleIntro);
  return (
    intro && (
      <>
        <div className={S.container}>
          <div className={S.receiptWrap}>
            <h3 className={S.title}>주문목록</h3>
            <ul className={S.listWrap}>
              {RESULT_RECEIPT.map((item) => {
                const options = Object.entries(item.option)
                  .filter(([, value]) => value)
                  .map(([key]) => key);

                return (
                  <li key={item.id} className={S.order}>
                    <div className={S.mainOrder}>
                      <span>{item.name}</span>
                      <span>x {item.quantity}잔</span>
                    </div>
                    {options.map((optionKey) => (
                      <p key={optionKey} className={S.option}>
                        {OPTION_LABEL[optionKey]}
                      </p>
                    ))}
                  </li>
                );
              })}
            </ul>
          </div>
          <p className={S.desc}>
            주문목록과 미션을 잘 읽고 알맞게 주문해 보세요!
          </p>
          <p className={S.hint}>
            기억이 나지 않으면 상단의 힌트 버튼을 클릭해 보세요.
          </p>
          <button className={S.start} onClick={toggleIntro}>
            시작하기
          </button>
        </div>
        <div className={S.dimm} />
      </>
    )
  );
};

export default CoffeeKioskIntro;
