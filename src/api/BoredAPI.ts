import axios from 'axios';
import {Activity} from '../types/activityTypes';

const BASE_URL = 'https://www.boredapi.com/api';

export const getRandomActivity = async (): Promise<Activity | undefined> => {
  try {
    const response = await axios.get(`${BASE_URL}/activity`);
    return response.data as Activity;
  } catch (error) {
    console.error(error);
  }
};
