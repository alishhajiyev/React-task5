import React from 'react';
import Dice from './Dice'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)
  
function App() {
  return (
    <div>
      <Dice />
    </div>
  );
}
  
export default App;


