import { useQuery } from 'react-query';
import { useDispatch } from 'react-redux';
import { setCurrencyList, setDevList } from '../features/devs/devSlice';
import { getCurrencyList, getDevList } from '../services';

const modifyDev = (data) =>
  data.map((dev) => {
    return {
      ...dev,
      isFavorite: false,
    };
  });

export const useGetDevData = () => {
  const dispatch = useDispatch();

  return useQuery({
    queryKey: ['getDevList', 1],
    queryFn: () => getDevList(),
    refetchOnWindowFocus: false,
    retry: false,
    select: modifyDev,
    onSuccess: (data) => {
      dispatch(setDevList(data));
    },
  });
};

export const useGetCurrency = () => {
  const dispatch = useDispatch();

  return useQuery({
    queryKey: ['getCurrencyList', 2],
    queryFn: () => getCurrencyList(),
    refetchOnWindowFocus: false,
    retry: false,
    onSuccess: (data) => {
      dispatch(setCurrencyList(data));
    },
  });
};

// export const useGetDonationTransactions = (id) => {
//   return useQuery(
//     'getdonationtransactions',
//     () => getPaymentLinkTransactions(id),
//     {
//       refetchOnWindowFocus: false,
//       retry: false,
//     }
//   );
// };
