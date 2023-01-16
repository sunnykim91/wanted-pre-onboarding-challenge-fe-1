import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store/RootStore';

export const useAppDispatch = () => useDispatch<AppDispatch>();
