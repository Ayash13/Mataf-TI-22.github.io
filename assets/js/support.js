AOS.init();

//  Tech Stacks cards

const techStackCards = document.querySelector(".techstack-box");
const techStack = [
  {
    langImage: "assets/images/sponsor-page/Dicoding2.png",
    langName: "DICODING",
    langDesc: "<li>Dicoding merupakan sebuah platform bagi developer Indonesia untuk belajar, membuat karya digital, meraih validasi industri atas karya tersebut, serta mencari pekerjaan di perusahaan mitra.</li>",
  },
  {
    langImage: "assets/images/sponsor-page/Esque2.jpg",
    langName: "ESQUE",
    langDesc: "<li>Esque Merupakan brand minuman kekinian dalam naungan PT Keberkahan Tujuan Utama, yang bergerak di bidang Food & Beverages. Berkomitmen untuk menginspirasi Anak Muda Indonesia untuk selalu meningkatkan ketaqwaan dengan harapan menjadi pemuda yang bermanfaat dan menebar kebahagiaan bagi sesama</li>",
  },
  {
    langImage: "assets/images/sponsor-page/Uvindo.png",
    langName: "Uvindo",
    langDesc: "<li>Seperti halnya dengan Ortindo, Ovindo merupakan digital printing dan grafika di Yogyakarta. Bergerak dibidang percetakan serta sudah menjadi partner terpecaya sejak tahun 1991. Ortindo memberikan pelayanan jasa cetak untuk wilayah Yogyakarta maupun seluruh Indonesia</li>",
  },
  {
    langImage: "assets/images/sponsor-page/Ortindo2.png",
    langName: "Ortindo",
    langDesc: "<li>Ortindo merupakan digital printing dan grafika di Yogyakarta. Bergerak dibidang percetakan serta sudah menjadi partner terpecaya sejak tahun 1991. Ortindo memberikan pelayanan jasa cetak untuk wilayah Yogyakarta maupun seluruh Indonesia.</li>",
  },
  
];

const displayTechStacksCards = () => {
  const entireCardTemplate =
  techStack.map((stack)=> {
      return `        
    <div class="row page-content techstackcards" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="0" data-aos-duration="400"> 
        <div class="tech_card">
            <div class="card_img">
                <img src ="${stack.langImage}" class="featured_image">
            </div>
            <div class="card_header">
                <header>
                    <div class="text-center langName">
                        <h4>${stack.langName}</h4>
                    </div>
                </header>
                <ul class="description">
                ${stack.langDesc}
            </ul>
            </div>
        </div>
    </div>
      `}).join('');
  techStackCards.innerHTML = entireCardTemplate;
};
// displayTechStacksCards(techStack)
document.addEventListener("DOMContentLoaded", displayTechStacksCards);
