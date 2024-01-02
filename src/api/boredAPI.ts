import axios from 'axios';
import {Activity} from '../types/activityTypes';

const BASE_URL = 'https://www.boredapi.com/api';

export const getRandomActivity = async (type: string) => {
  let url = `${BASE_URL}/activity`;

  if (type !== 'random') {
    url += `?type=${type}`;
  }

  try {
    const response = await axios.get(url);
    return response.data as Activity;
  } catch (error) {
    console.error(error);
  }
};
