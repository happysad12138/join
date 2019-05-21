import React,{Component} from 'react'
import ReactLoading from 'react-loading';

const Loading = ({ type, color }) => (
	<ReactLoading type={"bars"} color={"#CDAA7D"} height={'10px'} width={'10px'} />
);

export default Loading;