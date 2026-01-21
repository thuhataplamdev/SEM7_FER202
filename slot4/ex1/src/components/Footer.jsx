function Footer({ myProfile }) {
  return (
    <footer className="bg-dark text-light py-4 mt-1">
      <div className="container py-3">
        <div className="d-flex flex-column flex-md-row align-items-center justify-content-center gap-3 text-center">
          
          <img
            src={myProfile.avt}
            alt="avatar"
            className="rounded-circle border"
            style={{ width: 100, height: 100, objectFit: "cover" }}
          />

          <div className="d-flex flex-column">
            <div className="fw-semibold">{myProfile.name}</div>
            <a href={`mailto:${myProfile.email}`} className="text-decoration-none">
              {myProfile.email}
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;
