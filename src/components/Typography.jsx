export const HeadingLLight = ({ text, mb, loading }) => {
  return (
    <>
      {loading ? (
        <div className={`h-10 ${mb} bg-semidark-blue w-40`}></div>
      ) : (
        <h1 className={`heading-l-light ${mb}`}>{text}</h1>
      )}
    </>
  );
};
