import React from 'react'

const images = [
  {
    name: "Olives",
    description: "Campagna Eolica 2022",
    src:"https://drive.google.com/uc?export=view&id=1umnUkKCqHbdsd8YRAKGeLMefNly2qg5Y"
  }, {
    name: "Olives",
    description: "Campagna Eolica 2022",
    src:"https://drive.google.com/uc?export=view&id=1umnUkKCqHbdsd8YRAKGeLMefNly2qg5Y"
  }, {
    name: "Olives",
    description: "Campagna Eolica 2022",
    src:"https://drive.google.com/uc?export=view&id=1umnUkKCqHbdsd8YRAKGeLMefNly2qg5Y"
  }, {
    name: "Olives",
    description: "Campagna Eolica 2022",
    src:"https://drive.google.com/uc?export=view&id=1umnUkKCqHbdsd8YRAKGeLMefNly2qg5Y"
  }, {
    name: "Olives",
    description: "Campagna Eolica 2022",
    src:"https://drive.google.com/uc?export=view&id=1umnUkKCqHbdsd8YRAKGeLMefNly2qg5Y"
  }, {
    name: "Olives",
    description: "Campagna Eolica 2022",
    src:"https://drive.google.com/uc?export=view&id=1umnUkKCqHbdsd8YRAKGeLMefNly2qg5Y"
  }
];
           

export default function Block2() {
  return (
      <>
              <section class="text-gray-600 body-font">
  <div class=" px-5 py-24 mx-auto">
  
    </div>
</section>
          {images.map((image, index) => {
            return (



    <div class="flex flex-wrap -m-4">
      <div class="lg:w-1/3 sm:w-1/2 p-4">
        <div class="flex relative">


         <img class="block object-cover object-center w-full h-full rounded-lg" src={image.src} alt={image.name} />
          <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Shooting Stars</h1>
            <p class="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          </div>
        </div>
      </div>
    </div>

            );
          })}
      </>
    )
  }