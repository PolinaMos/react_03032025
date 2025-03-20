export const Tab = ({ id, title, onClick, isActive }) => {
  return (
    <button key={id} disabled={isActive} onClick={onClick}>
      {title}
    </button>
  );
};
