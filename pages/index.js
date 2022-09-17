import MainLayout from "../layouts/MainLayout";
export default function Home() {
  return (
    <MainLayout>
      <div className="text-center p-5">
        <img
          src="images/Scan2 2.jpeg"
          width="200"
          height="200"
          style={{ objectFit: "cover" }}
          class="rounded-circle"
        />
      </div>
      <div className="text-center">
        <h3>Nontapan Chanadee</h3>
        <p className="p-3">Student</p>
        <p>
          Hi, my name is Nontapan(Kla).
          <br />I am currently studying for a Bachelor’s degree in Computer
          Engineering at Chiang Mai University.
          <br />
          I am interested in music, football(soccer) and motorsport.
          <br />I am a coffee lover.
        </p>
      </div>
      <hr />

      <div className="text-center">
        <h4>My Skills</h4>
        <div className="d-flex justify-content-center p-4">
          <div
            style={{
              border: "groove",
              marginLeft: "auto",
              marginRight: "auto",
              padding: "15px",
            }}
          >
            <div className="fw-bold p-2">Music Production</div>
            <p>
              - Beatmaking
              <br />
              - Sound Design
              <br />- Arrangement
            </p>
            <img
              src="images/producer.jpg"
              width="320"
              height="200"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div
            style={{
              border: "groove",
              marginLeft: "auto",
              marginRight: "auto",
              padding: "15px",
            }}
          >
            <div className="fw-bold p-2">Live Musical Performance</div>
            <p>
              - Acoustic guitar/Electric guitar
              <br />
              - Electric bass
              <br />- Drum
            </p>
            <img
              src="images/live.jpg"
              width="320"
              height="200"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div
            style={{
              border: "groove",
              marginLeft: "auto",
              marginRight: "auto",
              padding: "15px",
            }}
          >
            <div className="fw-bold p-2">Sound Engineering</div>
            <p>
              - Recording
              <br />
              - Editing
              <br />- Mixing & Mastering
            </p>
            <img
              src="images/soundeng.jpg"
              width="320"
              height="200"
              style={{ objectFit: "cover" }}
            />
            <div class="p-1"></div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
