function KartuAngka({ judul, nilai }) {
  return (
    <div className="rounded border border-emerald-100 bg-white p-5">
      <p className="text-sm text-gray-500"> {judul} </p>
      <p className="mt-1 text-2xl font-bold text-emerald-800"> {nilai} </p>
    </div>
  );
}

export default KartuAngka;
