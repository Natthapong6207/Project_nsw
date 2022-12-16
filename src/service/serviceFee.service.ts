import axios from 'axios';
import { deflate } from 'zlib';
import { ServiceFee } from "../interfaces/ServiceFee";

const listConfigFee = async () => {
    const response = await axios.get<ServiceFee[]>(
        `${process.env.REACT_APP_BASE_API}/serviceFee/list`
    );
    console.log(response);
    return response;
}

const createConfigFee = async (newServiceFee: ServiceFee[]):
Promise<ServiceFee[]> => {
    const response = await axios.post(
    `${process.env.REACT_APP_BASE_API}/serviceFee/addServiceFee`, newServiceFee);
    console.log(response);
    return response.data;
}

const deleteConfigFee = async () => {
    const response = await axios.delete(
        `${process.env.REACT_APP_BASE_API}/serviceFee`
    );
    console.log(response);
    return response;
}

const serviceFeeService = {
    listConfigFee,
    createConfigFee,
    deleteConfigFee
}

export default serviceFeeService;