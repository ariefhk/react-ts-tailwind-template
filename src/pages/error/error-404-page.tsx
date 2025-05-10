const Error404Page = () => {
  return (
    <div className="h-svh font-inter">
      <div className="m-auto flex h-full w-full flex-col items-center justify-center gap-2">
        <h1 className="text-[7rem] font-bold leading-tight">404</h1>
        <span className="font-medium">Ups! Halaman Tidak Ditemukan!</span>
        <p className="text-center text-muted-foreground">
          Kelihatannya halaman yang kamu cari tidak Ada <br />
          Atau sudah dihapus deh.
        </p>
      </div>
    </div>
  );
};

export default Error404Page;
