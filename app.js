const reviews = [
  {
    id: 1,
    name: "Susan Smith",
    job: "web developer",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "Anna Johnson",
    job: "web designer",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "Peter Jones",
    job: "intern",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "Bill Anderson",
    job: "the boss",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

const userImg = document.querySelector(".user-img");
const userName = document.querySelector(".user-name");
const userOccupation = document.querySelector(".user-occupation");
const userReview = document.querySelector(".user-review");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".rnd-btn");

let reviewNum = 0;

window.addEventListener("DOMContentLoaded", () => {
  showReview(reviewNum);
});

const showReview = (reviewNum) => {
  const item = reviews[reviewNum];
  userImg.src = item.img;
  userName.textContent = item.name;
  userOccupation.textContent = item.job;
  userReview.textContent = item.text;
};

nextBtn.addEventListener("click", () => {
  ++reviewNum;
  if (reviewNum > reviews.length - 1) {
    reviewNum = 0;
  }
  showReview(reviewNum);
});

prevBtn.addEventListener("click", () => {
  --reviewNum;
  if (reviewNum < 0) {
    reviewNum = reviews.length - 1;
  }
  showReview(reviewNum);
});

randomBtn.addEventListener("click", () => {
  reviewNum = getRandomNumber();

  showReview(reviewNum);
});

const getRandomNumber = () => {
  return Math.floor(Math.random() * reviews.length);
};
