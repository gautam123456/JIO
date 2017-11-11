export default function fetchData() {
    return new Promise((resolve) => {
      const data = [
        {
          img: '../styles/assets/1.jpg',
          title: 'Himalaya Men Intense Oil Clear Lemon Face Wash',
          id: '1',
          desc: `Easy returns & refunds Return products at doorstep and get refund in seconds.
          100% items delivered Get 150%. In botany, a fruit is the seed-bearing structure in
          flowering plants (also known as angiosperms) formed from the ovary after flowering.
          Fruits are the means by which angiosperms disseminate seeds. In botany, a fruit is
          the seed-bearing structure in flowering plants (also known as angiosperms) formed
          from the ovary after flowering. Fruits are the means by which angiosperms disseminate
          seeds.`
        },
        {
          img: '../styles/assets/2.jpg',
          title: 'Himalaya Men Intense Oil Clear Lemon Face Wash',
          id: '2',
          desc: `Easy returns & refunds Return products at doorstep and get refund in seconds.
          100% items delivered Get 150%. In botany, a fruit is the seed-bearing structure in
          flowering plants (also known as angiosperms) formed from the ovary after flowering.
          Fruits are the means by which angiosperms disseminate seeds. In botany, a fruit is
          the seed-bearing structure in flowering plants (also known as angiosperms) formed
          from the ovary after flowering. Fruits are the means by which angiosperms disseminate
          seeds.`
        },
        {
          img: '../styles/assets/3.jpg',
          title: 'Himalaya Men Intense Oil Clear Lemon Face Wash',
          id: '3',
          desc: `Easy returns & refunds Return products at doorstep and get refund in seconds.
          100% items delivered Get 150%. In botany, a fruit is the seed-bearing structure in
          flowering plants (also known as angiosperms) formed from the ovary after flowering.
          Fruits are the means by which angiosperms disseminate seeds. In botany, a fruit is
          the seed-bearing structure in flowering plants (also known as angiosperms) formed
          from the ovary after flowering. Fruits are the means by which angiosperms disseminate
          seeds.`
        }
      ];

      setTimeout(() => {
        resolve(data);
      }, 3000);

    })
}
