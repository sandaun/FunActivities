import axios from 'axios';
import {getRandomActivity} from './boredApi';

jest.mock('axios');
const mockedAxios = axios;

describe('getRandomActivity', () => {
  it('fetches specific activity when tpye IS NOT "random"', async () => {
    const mockData = {
      data: {
        activity: 'Test Activity',
        type: 'education',
        participants: 1,
        price: 0,
        link: '',
        key: '12345',
      },
    };
    mockedAxios.get.mockResolvedValue(mockData);

    const result = await getRandomActivity('education');

    expect(mockedAxios.get).toHaveBeenCalledTimes(1);
    expect(mockedAxios.get).toHaveBeenCalledWith(
      'https://www.boredapi.com/api/activity?type=education',
    );
    expect(result).toEqual(mockData.data);
  });

  it('fetches a random activity when type IS "random"', async () => {
    const mockData = {
      data: {
        activity: 'Random Activity',
        type: 'random',
        participants: 1,
        price: 0,
        link: '',
        key: '12345',
      },
    };
    mockedAxios.get.mockResolvedValue(mockData);

    const result = await getRandomActivity('random');

    expect(mockedAxios.get).toHaveBeenCalledTimes(1);
    expect(mockedAxios.get).toHaveBeenCalledWith(
      'https://www.boredapi.com/api/activity',
    );
    expect(result).toEqual(mockData.data);
  });

  afterEach(() => {
    mockedAxios.get.mockReset();
  });
});
