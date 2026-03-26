import style from './CardBusiness.module.css';

const CardBusiness = () => {
   return (
      <div>

         <div>
            <img
               src="https://images.unsplash.com/photo-1509042239860-f550ce710b93"
               alt="Green Bean Roastery"
               loading="lazy"
            />

            <div>
               📍 Brooklyn, NY
            </div>
         </div>

         <div>

            <span>FAMILY OWNED</span>

            <h3>Green Bean Roastery</h3>

            <p>
               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus vero vitae ducimus error quaerat laborum, omnis dicta officiis non repellendus perferendis consequuntur aperiam neque quo commodi qui tempora fugiat quae.
            </p>

            <div>
               <div>
                  <span />
                  <span />
                  <span />
               </div>

               <span>2k+ local fans</span>
            </div>

         </div>
      </div>
   );
};

export default CardBusiness;