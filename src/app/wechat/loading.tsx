export default function Loading() {
  return (
    <>
      <div className="page-head"><div className="wrap"><h2>正在载入</h2><p>LOADING</p></div></div>
      <main className="main">
        <div className="wrap">
          <div className="page-main page-loading" role="status" aria-live="polite">
            <span className="visually-hidden">页面正在载入</span>
            <i /><i /><i /><i />
          </div>
        </div>
      </main>
    </>
  );
}
