"use client";

import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import { FC } from "react"
import { PuffLoader } from "react-spinners"
import Container from './Container';

interface LoaderProps {}

const Loader: FC<LoaderProps> = ({}) => {
  return (
 
    <div
      className="
      h-[70vh]
      flex 
      flex-col 
      justify-center 
      items-center 
    "
    >
      <PuffLoader size={200} color="red" />
    </div>
  )
}

export default Loader
