import axios from 'axios';
import { deflate } from 'zlib';
import { ServiceFee } from "../interfaces/ServiceFee";




const listConfigFee = async () => {
    const response = await axios.get<ServiceFee[]>(
        `${process.env.REACT_APP_BASE_API}/serviceFee/list`
    );
        console.log(`${process.env.REACT_APP_BASE_API}/serviceFee/list`);
    return response;
}

const serviceFeeService = {
    listConfigFee
}

export default serviceFeeService;