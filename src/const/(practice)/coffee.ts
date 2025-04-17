export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  isNew: boolean;
};

export type MenuCategory = {
  id: number;
  name: string;
  items: MenuItem[];
};

export const MENU_DATA: MenuCategory[] = [
  {
    id: 1,
    name: "커피",
    items: [
      {
        id: "coffee-01",
        name: "아메리카노",
        description: "진한 에스프레소와 깔끔한 물의 조화",
        price: 3000,
        image: "https://picsum.photos/300/300",
        isNew: false,
      },
      {
        id: "coffee-02",
        name: "카페라떼",
        description: "부드러운 우유와 진한 에스프레소",
        price: 3500,
        image: "https://picsum.photos/300/300",
        isNew: false,
      },
      {
        id: "coffee-03",
        name: "카푸치노",
        description: "풍부한 거품과 고소한 커피의 밸런스",
        price: 3700,
        image: "https://picsum.photos/300/300",
        isNew: false,
      },
      {
        id: "coffee-04",
        name: "콜드브루",
        description: "부드럽고 산미 적은 콜드브루 커피",
        price: 4000,
        image: "https://picsum.photos/300/300",
        isNew: false,
      },
      {
        id: "coffee-05",
        name: "헤이즐넛 아메리카노",
        description: "헤이즐넛 향이 은은한 아메리카노",
        price: 3300,
        image: "https://picsum.photos/300/300",
        isNew: true,
      },
    ],
  },
  {
    id: 2,
    name: "음료/논커피",
    items: [
      {
        id: "noncoffee-01",
        name: "초콜릿 라떼",
        description: "달콤하고 진한 핫초코",
        price: 4000,
        image: "https://picsum.photos/300/300",
        isNew: false,
      },
      {
        id: "noncoffee-02",
        name: "고구마 라떼",
        description: "달달하고 포근한 고구마 맛",
        price: 4200,
        image: "https://picsum.photos/300/300",
        isNew: false,
      },
      {
        id: "noncoffee-03",
        name: "흑임자 라떼",
        description: "고소한 흑임자의 진한 맛",
        price: 4300,
        image: "https://picsum.photos/300/300",
        isNew: true,
      },
      {
        id: "noncoffee-04",
        name: "그린티 라떼",
        description: "부드럽고 진한 녹차 라떼",
        price: 4500,
        image: "https://picsum.photos/300/300",
        isNew: false,
      },
      {
        id: "noncoffee-05",
        name: "바닐라 라떼",
        description: "바닐라 향 가득한 달콤한 라떼",
        price: 4300,
        image: "https://picsum.photos/300/300",
        isNew: false,
      },
    ],
  },
  {
    id: 3,
    name: "티/차",
    items: [
      {
        id: "tea-01",
        name: "얼그레이 티",
        description: "향긋한 베르가못 향의 홍차",
        price: 3300,
        image: "https://picsum.photos/300/300",
        isNew: false,
      },
      {
        id: "tea-02",
        name: "유자차",
        description: "상큼한 유자 과육이 들어간 전통차",
        price: 3500,
        image: "https://picsum.photos/300/300",
        isNew: false,
      },
      {
        id: "tea-03",
        name: "캐모마일",
        description: "은은하고 부드러운 허브차",
        price: 3400,
        image: "https://picsum.photos/300/300",
        isNew: false,
      },
      {
        id: "tea-04",
        name: "페퍼민트",
        description: "상쾌하고 깔끔한 맛의 허브티",
        price: 3400,
        image: "https://picsum.photos/300/300",
        isNew: false,
      },
      {
        id: "tea-05",
        name: "레몬 진저",
        description: "상큼함과 따뜻함을 동시에",
        price: 3600,
        image: "https://picsum.photos/300/300",
        isNew: true,
      },
    ],
  },
  {
    id: 4,
    name: "에이드",
    items: [
      {
        id: "ade-01",
        name: "레몬에이드",
        description: "톡 쏘는 청량감의 시트러스 음료",
        price: 3900,
        image: "https://picsum.photos/300/300",
        isNew: false,
      },
      {
        id: "ade-02",
        name: "자몽에이드",
        description: "달콤쌉쌀한 자몽이 상큼하게",
        price: 4200,
        image: "https://picsum.photos/300/300",
        isNew: false,
      },
      {
        id: "ade-03",
        name: "블루레몬에이드",
        description: "푸른 바다 같은 비주얼의 시원한 에이드",
        price: 4300,
        image: "https://picsum.photos/300/300",
        isNew: false,
      },
      {
        id: "ade-04",
        name: "딸기 에이드",
        description: "딸기 과육이 살아있는 탄산 음료",
        price: 4400,
        image: "https://picsum.photos/300/300",
        isNew: false,
      },
      {
        id: "ade-05",
        name: "청포도 에이드",
        description: "청포도의 청량함을 가득 담아",
        price: 4200,
        image: "https://picsum.photos/300/300",
        isNew: false,
      },
    ],
  },
  {
    id: 5,
    name: "스무디/쉐이크",
    items: [
      {
        id: "smoothie-01",
        name: "딸기 스무디",
        description: "달콤한 딸기의 상큼한 질감",
        price: 4500,
        image: "https://picsum.photos/300/300",
        isNew: false,
      },
      {
        id: "smoothie-02",
        name: "망고 스무디",
        description: "열대과일 망고의 진한 풍미",
        price: 4700,
        image: "https://picsum.photos/300/300",
        isNew: false,
      },
      {
        id: "smoothie-03",
        name: "초코 쉐이크",
        description: "초콜릿이 진하게 들어간 쉐이크",
        price: 4600,
        image: "https://picsum.photos/300/300",
        isNew: true,
      },
      {
        id: "smoothie-04",
        name: "바나나 쉐이크",
        description: "달콤한 바나나와 우유의 조화",
        price: 4400,
        image: "https://picsum.photos/300/300",
        isNew: false,
      },
      {
        id: "smoothie-05",
        name: "블루베리 스무디",
        description: "상큼한 블루베리가 가득",
        price: 4700,
        image: "https://picsum.photos/300/300",
        isNew: false,
      },
    ],
  },
  {
    id: 6,
    name: "디저트",
    items: [
      {
        id: "dessert-01",
        name: "티라미수",
        description: "촉촉한 시트에 크림이 가득한 티라미수",
        price: 4800,
        image: "https://picsum.photos/300/300",
        isNew: false,
      },
      {
        id: "dessert-02",
        name: "초코 케이크",
        description: "진한 초코가 녹아드는 꾸덕한 케이크",
        price: 5000,
        image: "https://picsum.photos/300/300",
        isNew: false,
      },
      {
        id: "dessert-03",
        name: "레몬 케이크",
        description: "상큼한 레몬 향이 가득한 케이크",
        price: 4700,
        image: "https://picsum.photos/300/300",
        isNew: false,
      },
      {
        id: "dessert-04",
        name: "허니브레드",
        description: "달콤한 꿀과 바삭한 토스트",
        price: 4900,
        image: "https://picsum.photos/300/300",
        isNew: true,
      },
      {
        id: "dessert-05",
        name: "치즈케이크",
        description: "꾸덕하고 부드러운 클래식 치즈케이크",
        price: 4500,
        image: "https://picsum.photos/300/300",
        isNew: false,
      },
    ],
  },
  {
    id: 7,
    name: "베이커리",
    items: [
      {
        id: "bakery-01",
        name: "크루아상",
        description: "겹겹이 바삭한 프렌치 크루아상",
        price: 2700,
        image: "https://picsum.photos/300/300",
        isNew: false,
      },
      {
        id: "bakery-02",
        name: "치즈 베이글",
        description: "쫄깃한 베이글 위 고소한 치즈",
        price: 3000,
        image: "https://picsum.photos/300/300",
        isNew: false,
      },
      {
        id: "bakery-03",
        name: "갈릭 바게트",
        description: "버터갈릭 향이 입안에 퍼지는 바게트",
        price: 2900,
        image: "https://picsum.photos/300/300",
        isNew: false,
      },
      {
        id: "bakery-04",
        name: "단팥빵",
        description: "달콤한 팥이 가득 찬 고전 인기빵",
        price: 2500,
        image: "https://picsum.photos/300/300",
        isNew: false,
      },
      {
        id: "bakery-05",
        name: "소시지 롤",
        description: "속이 꽉 찬 소시지를 바삭한 빵 속에",
        price: 3200,
        image: "https://picsum.photos/300/300",
        isNew: false,
      },
    ],
  },
];

export const CATEGORY_LIST = MENU_DATA.map(({ id, name }) => ({ id, name }));

export const NEW_MENU_DATA = MENU_DATA.flatMap(
  (category) => category.items
).filter((item) => item.isNew);
