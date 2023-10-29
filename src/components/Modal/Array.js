import '../../App.css'
import React, { useState } from 'react'

const productData = [
     { id: 1, title: "Dozens of trucks carrying aid made their way into Gaza this week through the Rafah border crossing. What essential item did the convoys not include? Food, Fuel, Hygiene products, Medicine, or Water", url: "Fuel: The trucks did not include fuel. Israel has refused to allow the aid convoys to carry fuel into Gaza, the enclave it has besieged, saying fuel could aid the Hamas war effort. But the U.N. agency that aids Palestinians desperately needs fuel to run shelters where displaced Gazans have sought safety." },
     { id: 2, title: " Who said 'to ease epic suffering, make the delivery of aid easier and safer and facilitate the release of hostages, I reiterate my appeal for an immediate humanitarian cease-fire.'?,   Antonio Guterres, U.N. secretary general, Pres. Emmanuel Macron of France, P.M. Rishi Sunak of Britain, SoS Anthony Blinkin, P.M. Justin Trudeau of Canada", url: "It was Guterres. In a speech to the U.N. Security Council, the secretary general denounced Hamas and demanded that all its hostages be released, but also noted that the attack occurred after five decades of occupation and not 'in a vacuum'. Israel’s U.N. ambassador, Gilad Erdan, called for Guterres to resign." },
     { id: 3, title: "Who was elected speaker of the House of Representatives this week?: Gym Jordan, Kevin McHardon, Nancy Pelosi, Mike Johnson, Donald Trump", url: "It’s Representative Mike Johnson of Louisiana, a hard-right conservative elected to Congress in 2016. He played a leading role in recruiting House Republicans to support a lawsuit seeking to overturn the 2020 election results." },
     { id: 4, title: "A gunman armed with a military-style semiautomatic rifle killed 18 people at a bowling alley and a bar in which city on Wednesday? Allen, TX, Half Moon Bay, CA, Lewiston, ME, Louisville, KY, or,  Philidelphia, PA", url: "It’s Lewiston, a former mill town and Maine’s second-largest city. The shooting, which also injured 13 people, launched a manhunt that was ongoing as of Thursday night. A mass shooting has taken place in each of the above cities this year." },
     { id: 5, title: "Hurricane Otis made landfall early Wednesday morning as a Category 5 storm near which Mexican city? Acapulco, Mazatlan, Puerto Vallarta,Tampico, or Veracruz", url: "It’s Acapulco. Forecasters said the storm had “explosively intensified” by 110 miles per hour in 24 hours, far surpassing the standard definition of rapid intensification, which is when a storm grows by 35 m.p.h. in 24 hours." },
     { id: 6, title: "A flight from Washington State was diverted to Portland, Ore., this week after an off-duty pilot tried to do what? Cut holes in a life vest? Cut fuel to the plane’s engines? Offer drugs to the pilots?  Open an emergency door while in flight? Take control of the plane", url: "An airline spokeswoman said that the off-duty pilot tried to deploy the plane’s fire suppression system, which includes a mechanism that shuts off fuel to the engines. He was charged with more than 80 counts of attempted murder." },
     { id: 7, title: "product7", url: "url7" }
];
const Products = () => {
     const [showModal, setShowModal] = useState(false)
     const [activeObject, setActiveObject] = useState(null)

     function getClass(index) {
          return index === activeObject?.id ? 'active' : 'inactive'
     }

     const Modal = ({ object: { title, url } }) => (
          <div id='productModal' className="active">
               Modal
               <h2>{title}</h2>
               <span className='description'>{url}</span>
               <button onClick={() => setShowModal(false)}>Close</button>
          </div>
     )
     return (
          <>
          <ul className='list-menu'>
               {productData.map(({ id, title, url }) => (
                    <li
                    key={id}
                    onClick={()=> {
                         setActiveObject({id, title, url})
                         setShowModal(true)
                    }}
                    className={getClass(id)}
                    >
                         <h2>{title}</h2>
                    </li>
               ))}
          </ul>
          {showModal ? <Modal object={activeObject} /> : null}
          </>
     )
}
export default Products;