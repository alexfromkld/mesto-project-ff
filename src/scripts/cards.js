const kaliningradImage = new URL('../../images/kaliningrad.jpg', import.meta.url);
const ashdodImage = new URL('../images/ashdod.jpg', import.meta.url);
const haifaImage = new URL('../images/haifa.jpg', import.meta.url);
const kaunasImage = new URL('../images/kaunas.jpg', import.meta.url);
const batYamImage = new URL('../images/batyam.jpg', import.meta.url);
const telAvivImage = new URL('../images/tel-aviv.jpg', import.meta.url);

const initialCards = [
    {
      name: "Калининград",
      link: kaliningradImage,
    },
    {
      name: "Ашдод",
      link: ashdodImage,
    },
    {
      name: "Хайфа",
      link: haifaImage,
    },
    {
      name: "Каунас",
      link: kaunasImage,
    },
    {
      name: "Бат-ям",
      link: batYamImage,
    },
    {
      name: "Тель-Авив",
      link: telAvivImage,
    }
];
