import axios from 'axios';
import { API_ENDPOINT } from './constants';
import { User } from './types/User';

export async function apiAddUser(body: { email: string, name: string, role: 'patient'|'clinic' }) {
  axios.put(`${API_ENDPOINT}/v1/user`, body);
}

export async function apiGetUserData(id: string) {
  const response = await axios.get<User>(`${API_ENDPOINT}/v1/user/${id}`);
  return response.data;
}

export async function apiUpdatePatientData(id: string, body: { priority: string, postalCode: string }) {
  axios.post(`${API_ENDPOINT}/v1/user/${id}`, body);
}

export async function apiGetWaitlist() {
  const response = await axios.get<User[]>(`${API_ENDPOINT}/v1/user/list`);
  return response.data;
}

export async function apiGetVaccines(id: string) {
  const response = await axios.get(`${API_ENDPOINT}/v1/clinic/${id}/vaccine`);
  return response.data;
}

export async function apiAddVaccines(id: string, body: { name: string, inventory: number }) {
  axios.post(`${API_ENDPOINT}/v1/clinic/${id}/vaccine`, body);
}

export async function authenticate() {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
    'Access-Control-Allow-Headers': 'Content-Type',
  }
  axios.get(`${API_ENDPOINT}/auth/google`, { headers });
}
