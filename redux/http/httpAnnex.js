import axios from 'axios';
import {baseUrl } from './_config'

console.log('dk url test',baseUrl+'/users');
export const httpGetAnnex=()=> axios.get(baseUrl+'/users');

