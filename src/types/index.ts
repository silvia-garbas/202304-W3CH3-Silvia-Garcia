import { Footer } from '../components/footer';
import { Header } from '../components/header';
import { Main } from '../components/main';
import { PetsList } from '../components/pets.list';

new Header('#app', 'Adopta no compres');
new Main('#app');
new PetsList('main');
new Footer('#app', 'Esto es un pie');
