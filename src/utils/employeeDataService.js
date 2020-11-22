import axios from 'axios';

// gets user data
export function getUsers() {
  return axios.get('https://randomuser.me/api/?results=75&nat=us');
}
