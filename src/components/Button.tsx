function Button({ title, onClick }: { title: string; onClick: () => void }) {
  return (
    <div
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        borderRadius: "5px",
        padding: "10px 15px",
        textAlign: "center",
        cursor: "pointer",
        border: "1px solid rgba(0, 0, 0, 0.4)",
      }}
      onClick={onClick}
    >
      {title}
    </div>
  );
}

export default Button;
