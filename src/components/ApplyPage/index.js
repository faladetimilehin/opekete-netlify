import React from "react";
import { Card } from "reactstrap";

const ApplyPage = () => {
  return (
    <section className="wpo-blog-single-section section-padding">
      <div className="container">
        <div className="row">
          <div className="col col-lg-12 col-12">
            <div className="wpo-wpo-blog-content clearfix">
              <div className="post">

              <div class="accordion" id="accordionExample">
              <div class="card">
    <div class="card-header" id="headingOne">
      <h2 class="mb-0">
        <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          Collapsible Group Item #1
        </button>
      </h2>
    </div>

    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
      <div class="card-body">
        Some placeholder content for the first accordion panel. This panel is shown by default, thanks to the <code>.show</code> class.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <Card className="card"></Card>
    <h2 class="accordion-header card-header" id="headingOne">
      <button class="accordion-button btn btn-link btn-block text-left" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body card-body">
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  </div>


                <div className="accordion accordion-flush" id="highlightAccordion">
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="headingOne">
                      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      What our funding is about
                      </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                      <div class="accordion-body">
                          The Opekete Foundation is in memory of Late Mrs
                          Florence Bamidele Makanjuola who built a career in
                          teaching and nursing. Aside her passion for the
                          promoting female self dependence , Mrs Makanjuola in
                          her lifetime expressed dissatisfaction at the current
                          state of education and calibre of teachers available.
                          She also derived passion in encouraging young girls
                          who want to study nursing to do so, often trying to
                          get one of her grand daughters to study nursing
                          because she had the gift of caring for others. In the
                          spirit of acting on her desire to see better teachers
                          and nurses, Mrs Makanjuola set up the okpekete
                          foundation with a few students being beneficiaries. To
                          keep her dream alive, her children and grandchildren
                          have decided to keep continue with the scholarships
                          via the Florence Fund
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        class="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        What our funding is about
                      </button>
                    </h2>

                    <div
                      id="collapseOne"
                      class="accordion-collapse collapse show"
                      aria-labelledby="headingOne"
                      data-bs-parent="#highlightAccordion"
                    >
                      <div class="accordion-body">
                        <p>
                          The Opekete Foundation is in memory of Late Mrs
                          Florence Bamidele Makanjuola who built a career in
                          teaching and nursing. Aside her passion for the
                          promoting female self dependence , Mrs Makanjuola in
                          her lifetime expressed dissatisfaction at the current
                          state of education and calibre of teachers available.
                          She also derived passion in encouraging young girls
                          who want to study nursing to do so, often trying to
                          get one of her grand daughters to study nursing
                          because she had the gift of caring for others. In the
                          spirit of acting on her desire to see better teachers
                          and nurses, Mrs Makanjuola set up the okpekete
                          foundation with a few students being beneficiaries. To
                          keep her dream alive, her children and grandchildren
                          have decided to keep continue with the scholarships
                          via the Florence Fund
                        </p>
                      </div>
                    </div>
                  </div>

                  <h2>Scholarship Amount</h2>
                  <p>
                    Maximum of 200,000 per annum for each student. (Tuition to
                    be paid directly to the school){" "}
                  </p>

                  <h2>Requirements/ Qualifications</h2>
                  <p>To qualify, you must be:</p>
                  <ul>
                    <li>• Female</li>
                    <li>
                      • In senior secondary school or About to enter University
                      to study Nursing or Teaching.{" "}
                    </li>
                    <li>
                      • Attending a public secondary school or federal
                      government owned tertiary institution. Unable to afford
                      tuition - Write an essay on the extenuating circumstance
                      which you believe qualifies you for the scholarship.
                    </li>
                  </ul>
                  <h2>Academic Qualifications</h2>
                  <ul>
                    <li>
                      • Minimum of 4 Distinctions and 4 Merits or an average of
                      75% in the previous class
                    </li>
                    <li>
                      • To qualify, participants who are about move to SS1 must
                      show that they have had a minimum of 4 distinctions and 4
                      merits in their Junior WAEC with an average of 75%.
                    </li>
                  </ul>
                  <h2>Continued Qualification</h2>
                  <p>
                    Awardees are expected to maintain a minimum of 4
                    distinctions and 2 merits during the duration of their
                    studies or an average of 75%
                  </p>
                  <h2>Apply Now</h2>
                  <p>
                    We believe OPEKETE could be the perfect fit for you, If you
                    meet the required qualifications,
                    <a href="/scholarship" style={{ color: "#f0628a" }}>
                      click here to apply now{" "}
                    </a>{" "}
                    and upload your supporting documents. Application closes on
                    the 15th of August (to allow people to get their results
                  </p>

                  <h2>Selection </h2>
                  <p>
                    The submissions shall be screened by an independent
                    consultant{" "}
                  </p>

                  <h2>Announcement of Awardees</h2>
                  <p>
                    The Announcement of Awardees shall be made on or around the
                    15th of September
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplyPage;
