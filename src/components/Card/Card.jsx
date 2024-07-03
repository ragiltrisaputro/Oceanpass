import {
  Card as MaterialCard,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import { useNavigate } from 'react-router-dom';

export default function CustomCard(props) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/detail-informasi");
  };

  return (
    <MaterialCard className="w-full max-w-xs mx-auto mt-6 bg-[#A3D0E8]">
      <CardHeader color="blue-gray" className="relative h-40">
        <img
          src={props.cardImg}
          alt="card-image"
          className="object-cover w-full h-full rounded-t-md"
        />
      </CardHeader>
      <CardBody>
        <Typography className="mb-14 font-inter font-bold text-[16px]">
          Deskripsi : -
        </Typography>
        <Typography className="mb-4">Rp.000000</Typography>
        <Button
          onClick={handleClick}
          className="w-[70%] bg-[#154C79] rounded-2xl"
        >
          Pesan Sekarang
        </Button>
      </CardBody>
    </MaterialCard>
  );
}
