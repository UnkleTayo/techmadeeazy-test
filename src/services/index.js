import axios from 'axios';
const DEVELOPER_LIST_API = `https://api.terawork.com/service-categories/sellers-services/computer-software-development`;

const CURRENCY_LIST_API = `https://api.terawork.com/resources`;

export const getDevList = async () => {
  try {
    const { data } = await axios.get(DEVELOPER_LIST_API);
    return data.data.service_search_results.hits;
  } catch (error) {
    throw new Error('Error processing request');
  }
};

export const getCurrencyList = async () => {
  try {
    const { data } = await axios.get(CURRENCY_LIST_API);
    return data.data.currencies;
  } catch (error) {
    throw new Error('Error processing request');
  }
};
