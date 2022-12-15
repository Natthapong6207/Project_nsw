import React from 'react'
import { useAppSelector } from './store/store';
import FeeTable from './app/FeeTable'
import Appbar from './components/Appbar'
import { tableSelector } from './slices/tableSlice';
import { useSelector } from 'react-redux';

type Props = {}

export default function App({}: Props) {
const tableReducer = useSelector(tableSelector);

  return (
    <div>
        <Appbar/>
        <FeeTable/>
    </div>
  )
}
