import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const OurStoryPage: React.FC = () => {
  const { language } = useLanguage();

  if (language === 'el') {
    return (
      <main>
        <section className="container our-story-section">
          <h2>Η Ιστορία του Andrew's Corner</h2>
          <div className="our-story-card">
            <div className="our-story-photo-wrap">
              <img
                src="/photos/Daniel_Karly.jpg"
                alt="Daniel and Karly Napier"
                className="our-story-photo"
              />
            </div>
            <div className="our-story-bio">
              <h3>Daniel & Karly Napier</h3>
              <p className="content-p">Η ελληνική έκδοση της ιστορίας έρχεται σύντομα.</p>
              <p className="content-p">
                Για περισσότερες πληροφορίες, επικοινωνήστε μαζί μας στο{' '}
                <a href="mailto:StAndrewsCorner@gmail.com">StAndrewsCorner@gmail.com</a>.
              </p>
            </div>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main>
      <section className="container our-story-section">
        <h2>The Story of Andrew's Corner</h2>

        <div className="our-story-card">
          <div className="our-story-photo-wrap">
            <img
              src="/photos/Daniel_Karly.jpg"
              alt="Daniel and Karly Napier, founding directors of Andrew's Corner"
              className="our-story-photo"
            />
          </div>

          <div className="our-story-bio">
            <h3>Daniel & Karly Napier</h3>
            <p className="content-p">
              Our primary collection was once the library for Austin Graduate School of Theology, in Austin, Texas. Daniel Napier (Ph.D. Vrije Universiteit Amsterdam), our founding director, is an alumnus who later served at Austin Grad as professor of Scripture and Theology. (For its final two years, Austin Grad was subsumed by and operated as Lipscomb University's Austin Center). Here's the story, in Daniel's own words, of how that library became part of Andrew's Corner.
            </p>
          </div>
        </div>

        <div className="our-story-body">
          <p className="content-p">
            In late 2018, we (Daniel and Karly Napier) relocated to Greece in order to work with those Middle Eastern refugees who were turning to Christ. For five years we ran an apprenticeship program to develop lay leaders among Middle Eastern converts to Christianity. While the refugees provided the occasion for our move, Greece herself, with her distinctive history and spiritual climate, also tugged at something deep within us.
          </p>

          <p className="content-p">
            When, in April of 2023, we learned that our beloved school was closing, our sorrow was suddenly accompanied by a thought that seemed to come from beyond us. What would happen to its excellent library so rich in biblical scholarship? A vision popped into our minds. How important could this resource be if it were situated in Thessaloniki, Greece?! It would be utterly unique and would make deep learning accessible for God's people, not only in our city, but throughout the Balkan region.
          </p>

          <p className="content-p">
            With this vision, we prayed with friends and then contacted the president of Lipscomb University. A week later the 28,000 volume graduate level library was donated to us. But there was a condition. We had to move it within the month. So, Daniel sent out an email requesting help from friends. A couple weeks later he flew to Austin where seventy-five volunteers showed up. Together they boxed up the books, dismantled the shelving, and loaded the library into two 40ft shipping containers. We had a library in a box – okay, two really big boxes – but what next? Where would we put it when it arrived in Thessaloniki?
          </p>

          <p className="content-p">
            We began to search for a location. At length, with the help of generous friends, we purchased our present location near the boardwalk – Spartis 12, Thessaloniki – and began the long process of renovating, setting up the library, and equipping the café. There was no money for any of it when we began. It was impossible. But it happened. We're grateful and amazed.
          </p>

          <p className="content-p">
            After the purchase, during the long process of setting up, we learned about Kyriakos Maximiadis. Kyriakos, the father of our friend Amy, was a saintly layman with a passionate vision for theological literacy and education. For forty years he advocated for the creation of a library and biblical study center in Thessaloniki. He asked people everywhere from Athens to Chicago to create such a place for his city. He prayed and advocated tirelessly for it over the course of decades. Nothing discernable happened. He entered into his rest in 2022 without any visible answer to his prayers.
          </p>

          <p className="content-p">
            But about a year after Kyriakos' death, we received the library and acquired our location. Only after the fact did we learn that Kyriakos had lived just a block away. We were located in the very neighborhood from which his prayers had ascended for forty years. "Others have labored," Jesus explains to his students, "and you have entered into their labors." (Jhn. 4:38) So it was then. So it is now and ever shall be. We're grateful to find ourselves as one link within a much longer chain of faithfulness.
          </p>

          <p className="content-p">
            Through an equally unlikely turn of events, we were introduced to Metropolitan Philotheos of Thessaloniki, who received us with a Christ-like kindness we'd never dared to hope for. As we shared a meal at my dining room table, I (Daniel) shared our hopes, in detail, for the initiative and asked for his guidance and blessing. At the time, the initiative was nameless – we didn't yet know what to call it. But something happened as I shared with Metropolitan Philotheos. I told him how the Apostle Andrew was the model and inspiration for our peculiar approach. We would introduce secular people to Jesus and then trust Jesus to guide them where he wants them. As I shared, suddenly the name was there. "Andrew's Corner!" – that's what we've been praying and hoping and building into existence for the last three years.
          </p>

          <p className="content-p">
            We've been delighted by the range of intelligent, talented, Jesus-loving friends who have settled in around Andrew's Corner. We're thrilled by the influx of secular people who are exploring and coming to faith in Jesus among us. Low-tech, hi-relation, face-to-face communities are rare nowadays and a real draw. But the magical part is encountering Jesus in the middle of it. We're unspeakably grateful to see that happening here.
          </p>

          <p className="content-p">
            The whole journey thus far has been a long string of impossibilities, sprinkled with occasional improbabilities. But it's happened. Obviously we're not the prime movers behind Andrew's Corner. God is doing something here. Others have labored. We're both entering into their labor and joining with God's work in this region. You can join in too.
          </p>
        </div>
      </section>
    </main>
  );
};

export default OurStoryPage;
