import { handleSearch } from './input';

const locationForm = document.getElementById('location-form');
locationForm.addEventListener('submit', handleSearch);
locationForm.addEventListener('search', handleSearch);
