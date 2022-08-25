import axios, { AxiosRequestConfig } from 'axios';
import { useEffect, useState } from 'react';

export const useFetch = <T = unknown>(
	url: string,
	options?: AxiosRequestConfig<any>
) => {
	const [data, setData] = useState<T | null>(null);
	const [fetching, setFetching] = useState<boolean>(true);
	const [error, setError] = useState<Error | null>(null);

	useEffect(() => {
		axios
			.get('https://gc-estudio.herokuapp.com/api' + url, options)
			.then((res) => setData(res.data.data.attributes))
			.catch((err) => setError(err))
			.finally(() => setFetching(false));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return { data, fetching, error };
};
