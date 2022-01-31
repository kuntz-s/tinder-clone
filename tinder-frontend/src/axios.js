 import axios from 'axios'


 const instance =axios.create({
     baseURL:'https://kmer-tinder-backend.herokuapp.com'
 })

 export default instance;