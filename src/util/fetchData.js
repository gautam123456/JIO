export default function fetchData() {
    return new Promise((resolve) => {
      const data = [
        {
          img: '../styles/assets/1.jpg',
          title: 'Himalaya Men Intense Oil Clear Lemon Face Wash',
          id: '1',
          desc: `Easy returns & refunds Return products at doorstep and get refund in seconds.
          100% items delivered Get 150%.`
        },
        {
          img: '../styles/assets/2.jpg',
          title: 'Himalaya Men Intense Oil Clear Lemon Face Wash',
          id: '2',
          desc: `Easy returns & refunds Return products at doorstep and get refund in seconds.
          100% items delivered Get 150%.`
        },
        {
          img: '../styles/assets/3.jpg',
          title: 'Himalaya Men Intense Oil Clear Lemon Face Wash',
          id: '3',
          desc: `Easy returns & refunds Return products at doorstep and get refund in seconds.
          100% items delivered Get 150%.`
        }
      ];

      setTimeout(() => {
        resolve(data);
      }, 1000);

    })
}
