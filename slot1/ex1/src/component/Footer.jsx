function Footer() {
  return (
    <footer style={styles.footer}>
        <h1>Trang này tạo bởi: &copy; hattt</h1>
        <p>Liên hệ:<b> thuha140105@gmail.com </b></p>
    </footer>
  );
}

const styles = {
  footer: {
    textAlign: "center",
    padding: "16px 0",
    backgroundColor: "#f2f2f2",
    color: "#555",
    marginTop: "20px",
  },
};

export default Footer;
