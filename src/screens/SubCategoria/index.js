import React from 'react';

import ChangeSubs from './changeSubs';

/**Mesmo funcionamento da Home, só muda um pouco o CSS */
function Subcategoria({ navigation }) {
   return (
      <ChangeSubs props2={navigation}/>
   );
}

export default Subcategoria;