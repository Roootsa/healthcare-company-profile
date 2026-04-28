export default function Services() {
  return (
    <main>
      <h1
        style={{
          fontSize: "32px",
          marginBottom: "10px",
          textAlign: "center",
        }}
      >
        Our Services
      </h1>

      <p
        style={{
          textAlign: "center",
          maxWidth: "600px",
          margin: "0 auto 30px",
          color: "#555",
        }}
      >
        We provide modern healthcare solutions to make your life easier and healthier.
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
          <h3 style={titleStyle}>Online Consultation</h3>
          <p>Consult with doctors anytime, anywhere.</p>
        </div>

        <div style={cardStyle}>
          <h3 style={titleStyle}>Health Monitoring</h3>
          <p>Track your health in real-time.</p>
        </div>

        <div style={cardStyle}>
          <h3 style={titleStyle}>Medical Records</h3>
          <p>Secure and easy access to your data.</p>
        </div>
      </div>
    </main>
  );
}

const cardStyle: React.CSSProperties = {
  background: "white",
  padding: "20px",
  borderRadius: "12px",
  width: "230px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  textAlign: "center",
  transition: "transform 0.2s",
};

const titleStyle: React.CSSProperties = {
  marginBottom: "10px",
  color: "#2563eb",
};
