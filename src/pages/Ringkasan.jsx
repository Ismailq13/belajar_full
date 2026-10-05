import { useState } from "react";
import KartuAngka from "../components/KartuAngka.jsx";

const dataBulanan = {
  "2026-07": {
    label: "Juli 2026",
    donasi: 1234,
    transaksi: 1234,
    donatur: 1234,
    baru: 1234,
  },
  "2026-08": {
    label: "Agustus 2026",
    donasi: 1234,
    transaksi: 1234,
    donatur: 1234,
    baru: 1234,
  },
  "2026-09": {
    label: "September 2026",
    donasi: 1234,
    transaksi: 1234,
    donatur: 1234,
    baru: 1234,
  },
};

function formatRupiah(angka) {
  return "Rp" + angka.toLocaleString("id-ID");
}

function Ringkasan() {
  const [bulan, setBulan] = useState("2026-08");
  const data = dataBulanan[bulan];

  return (
    <div>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-emerald-900">Ringkasan</h1>
          <p className="mt-1 text-gray-600">Donasi masuk {data.label}</p>
        </div>

        <label className="flex flex-col text-sm text-gray-600">
          Pilih bulan
          <select
            value={bulan}
            onChange={(e) => setBulan(e.target.value)}
            className="mt-1 rounded-lg border border-emerald-200 bg-white px-3 py-2"
          >
            {Object.entries(dataBulanan).map(([kunci, isi]) => (
              <option key={kunci} value={kunci}>
                {isi.label}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
        <KartuAngka judul="Donasi masuk" nilai={formatRupiah(data.donasi)} />
        <KartuAngka judul="Transaksi" nilai={data.transaksi} />
        <KartuAngka judul="Donatur aktif" nilai={data.donatur} />
        <KartuAngka judul="Donatur baru" nilai={data.baru} />
      </div>
    </div>
  );
}
export default Ringkasan;
