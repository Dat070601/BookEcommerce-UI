const useLocalStorage = () => {
	const set = ({ key, value }) => {
		localStorage.setItem(key, value);
	};

	const get = ({ key }) => {
		const item = localStorage.getItem(key);
		return item;
	};

	return { get, set };
};

export default useLocalStorage;