const atim = [
  {
    giuh: "https://global-mt.ru/upload/iblock/edc/9ontv28lh1vwqr0h6lpeehqzqknt1d04.jpg",
    textvok: "Дерматологическое оборудование",
    key: 1,
    buk: "hero",
  },

  {
    giuh: "https://global-mt.ru/upload/iblock/f8f/vn8gv9v0bjqhqnse659htc2scazkic71.png",
    textvok: "Ветеринарное оборудование",
    key: 2,
    buk: "hero",
  },

  {
    giuh: "https://global-mt.ru/upload/iblock/317/g3s84kzmdkqtf2ahr177i7bbcn2rjd7e.jpg",
    textvok: "Оборудование для анастезиологии",
    key: 4,
    buk: "hero",
  },

  {
    giuh: "https://global-mt.ru/upload/iblock/059/ut9bcpe3u359optfuxg0dl9t8fr5n6sz.jpg",
    textvok: "Оборудование для анастезиологии",
    key: 5,
    buk: "hero",
  },
  {
    giuh: "https://global-mt.ru/upload/iblock/aed/75r9qm64bjoy4w8quhleiavnkg1cetda.jpg",
    textvok: "Мебель для медецинских целей",
    key: 6,
    buk: "hero",
  },
  {
    giuh: "https://global-mt.ru/upload/iblock/41a/vk0dkx7krxuas1x8bc2n9ug5ktc3ku8i.jpg",
    textvok: "Дерматологическое оборудование",
    key: 3,
    buk: "hero",
  },
  {
    giuh: "https://global-mt.ru/upload/iblock/df4/du34d5hwercmuz7ejjikvac2i9adryvu.jpg",
    textvok: "Дерматологическое оборудование",
    key: 7,
    buk: "hero",
  },
  {
    giuh: "https://global-mt.ru/upload/iblock/116/6nv0hrh2aydponhruh6kfe6mwvzdtn3k.jpg",
    textvok: "Дерматологическое оборудование",
    key: 7,
    buk: "hero",
  },
  {
    giuh: "https://global-mt.ru/upload/iblock/6a4/tndt9akk2el5grhttqo52qtzsu5d9az6.jpg",
    textvok: "Дерматологическое оборудование",
    key: 7,
    buk: "hero",
  },
  {
    giuh: "https://global-mt.ru/upload/iblock/a16/13klcjhkuu4dlmg99af1a4kt54zsc10e.jpg",
    textvok: "Дерматологическое оборудование",
    key: 7,
    buk: "hero",
  },
  {
    giuh: "https://global-mt.ru/upload/iblock/994/up35t6hkl0i48yv6vzobk5q776fmkfo3.png",
    textvok: "Дерматологическое оборудование",
    key: 7,
    buk: "hero",
  },
  {
    giuh: "https://global-mt.ru/upload/iblock/b19/rv43y2v6z3danwhzzaziikmpnr2hzvei.jpg",
    textvok: "Дерматологическое оборудование",
    key: 7,
    buk: "hero",
  },
];

const slides = atim.map((item) => {
  return (
    <div className="container mx-auto">
      <div
        className={` hero.img border  p-2 w-[330px] rounded-xl`}
        key={item.giuh}
      >
        <div>
          <img
            className="w-[300px] h-[300px]"
            src={item.giuh}
            alt="Hello Tashkent"
          />
          <h1 className="p-3 font-medium">{item.textvok}</h1>
        </div>
      </div>
    </div>
  );
});

const VievAppe = () => {
  return (
    <div className="grid flex-wrap grid-cols-3 gap-12 mt-6 ml-12">
      {slides}
      <div></div>
    </div>
  );
};

export default VievAppe;
