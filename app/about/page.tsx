export default function About() {
  return (
    <main>
      <h1 style={{ fontSize: "32px", marginBottom: "10px" }}>
        About MediCare
      </h1>

      <p style={{ maxWidth: "600px", margin: "0 auto 30px" }}>
        MediCare is a healthcare startup focused on delivering innovative
        medical solutions to improve people's quality of life.
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        <div style={cardStyle}>
          <h3>Our Mission</h3>
          <p>Providing accessible and affordable healthcare.</p>
        </div>

        <div style={cardStyle}>
          <h3>Our Vision</h3>
          <p>Healthcare for everyone, everywhere.</p>
        </div>

        <div style={cardStyle}>
          <h3>Our Values</h3>
          <p>Innovation, care, and trust.</p>
        </div>
      </div>
    </main>
  );
}

const cardStyle: React.CSSProperties = {
  background: "white",
  padding: "20px",
  borderRadius: "10px",
  width: "200px",
  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
};
