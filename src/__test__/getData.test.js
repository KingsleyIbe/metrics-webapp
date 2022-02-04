import '@testing-library/jest-dom/extend-expect';
import fetchedData from '../Mock/getData';

describe('test fetched data', () => {
  it('test fetching country name', async () => {
    await fetchedData().then((data) => expect(data.data[0].name).toBe('Afganistan'));
  });
  it('test fetched country code', async () => {
    await fetchedData().then((data) => expect(data.data[1].code).toBe('NG'));
  });

  it('test fetched cases recovered', async () => {
    await fetchedData().then((data) => expect(data.data[1].latest_data.recovered).toEqual(204553));
  });
});
