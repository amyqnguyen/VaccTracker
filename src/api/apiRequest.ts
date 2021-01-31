import axios from 'axios';
import { User } from './types/User';

axios.defaults.baseURL = '';

export async function apiAddUser(body: { email: string, name: string, role: 'patient'|'clinic' }) {
  axios.post('/v1/user', body);
}

export async function apiGetUserData(id: string) {
  const response = await axios.get<User>(`/v1/user/${id}`);
  return response.data;
}

export async function apiUpdatePatientData(id: string, body: { priority: string, postalCode: string }) {
  axios.post(`/v1/user/${id}`, body);
}

export async function apiGetWaitlist() {
  const response = await axios.get<User[]>(`/v1/user/list`);
  return response.data;
}

export async function apiGetVaccines(id: string) {
  const response = await axios.get(`/v1/clinic/${id}/vaccine`);
  return response.data;
}

export async function apiAddVaccines(id: string, body: { name: string, inventory: number }) {
  axios.post(`/v1/clinic/${id}/vaccine`, body);
}
