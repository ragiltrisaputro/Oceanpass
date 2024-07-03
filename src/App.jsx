import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home'
import BatalkanTiket from './pages/BatalkanTiket/BatalkanTiket';
import Informasi from './pages/Informasi/Informasi';
import PesananKu from './pages/PesananKu/PesananKu';
import Akun from './pages/Akun/Akun';
import Login from './pages/Login/Login';
import InformasiAkun from './pages/Informasi_Akun/InformasiAkun';
import DaftarPerjalanan from './pages/DaftarPerjalanan/DaftarPerjalanan';
import DetailInformasi from './pages/DetailInformasi/DetailInformasi';
import RincianPesanan from './pages/RincianPesanan/RincianPesanan';
import BatalkanTiketSukses from './pages/BatalkanTiketSukses/BatalkanTiketSukses';


function App() {

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/batalkan-tiket" element={<BatalkanTiket />} />
          <Route path="/informasi" element={<Informasi />} />
          <Route path='/informasi213' element={<InformasiAkun />} />
          <Route path='/pesanan-ku' element={<PesananKu />} />
          <Route path='/akun' element={<Akun />} />
          <Route path='/beranda' element={<Login />} />
          <Route path='/daftar-perjalanan' element={<DaftarPerjalanan />} />
          <Route path='/Detail-Informasi' element={<DetailInformasi/>}/>
          <Route path='/rincian-pesanan' element={<RincianPesanan/>}/>
          <Route path='/batalkan-tiket-sukses' element={<BatalkanTiketSukses/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
