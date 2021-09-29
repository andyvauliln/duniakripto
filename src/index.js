import App from './components/app';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { setGlobal } from 'reactn';
setGlobal({
	lang: 'eng'
});
library.add(fab);
export default App;
