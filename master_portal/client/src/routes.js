import Home from "./components/Home";
const Login = () => import ("./components/content/Login");
const FAQs = () => import ("./components/content/FAQs");
const TuyenSinh = () => import ("./components/content/TuyenSinh");
const TuyenSinhChiTiet = () => import ("./components/content/TuyenSinhChiTiet");
const Aboutus = () => import ("./components/content/Aboutus");
const Terms = () => import ("./components/content/Terms");
const Policy = () => import ("./components/content/Policy");
const Partner = () => import ("./components/content/Partner");
const Contact = () => import ("./components/content/Contact");
const Admin = () => import ("./components/content/Admin");
const Thanks = () => import ("./components/content/Thanks");
const TraCuuDeTai = () => import ("./components/content/TraCuuDeTai");
const TinTucDetails = () => import ("./components/content/TinTucDetails");


import News from "./components/content/News";
import ThongBao from "./components/content/ThongBao";
const DeTaiKhoaHoc = () => import ("./components/content/DeTaiKhoaHoc");
const SanPhamKhoaHoc = () => import ("./components/content/SanPhamKhoaHoc");
const GiaiThuongKhoaHoc = () => import ("./components/content/GiaiThuongKhoaHoc");
const DSThacSi = () => import ("./components/content/DSThacSi");
const ChuanDauRa = () => import ("./components/content/ChuanDauRa");
const lich = () => import ("./components/content/lich");

export const routes = [
  // { path: "*", redirect:'home' },
  { path: "/", name: "homepage", component: Home },
  { path: "/faqs", name: "faqs", component: FAQs },
  { path: "/login", name: "login", component: Login },
  { path: "/tuyensinh", name: "tuyensinh", component: TuyenSinh },
  { path: "/tuyensinhchitiet/:id", name: "tuyensinhchitiet", component: TuyenSinhChiTiet },
  { path: "/aboutus", name: "aboutus", component: Aboutus },
  { path: "/Terms", name: "terms", component: Terms },
  { path: "/Policy", name: "policy", component: Policy },
  { path: "/Partner", name: "partner", component: Partner },
  { path: "/Contact", name: "contact", component: Contact },
  { path: "/Admin", name: "admin", component: Admin },
  { path: "/Thanks", name: "thanks", component: Thanks },
  { path: "/TraCuuDeTai", name: "tracuudetai", component: TraCuuDeTai },
  { path: "/TinTucDetails/:id", name: "tintucdetails", component: TinTucDetails },



  { path: "/News", name: "news", component: News },
  { path: "/ThongBao", name: "thongbao", component: ThongBao },
  { path: "/DeTaiKhoaHoc", name: "detaikhoahoc", component: DeTaiKhoaHoc },
  { path: "/SanPhamKhoaHoc", name: "sanphamkhoahoc", component: SanPhamKhoaHoc },
  { path: "/GiaiThuongKhoaHoc", name: "giaithuongkhoahoc", component: GiaiThuongKhoaHoc },
  { path: "/DSThacSi", name: "dsthacsi", component: DSThacSi },
  { path: "/ChuanDauRa", name: "chuandaura", component: ChuanDauRa },
  { path: "/lich", name: "lich", component: lich },


];