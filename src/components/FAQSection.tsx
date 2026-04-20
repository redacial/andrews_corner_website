import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

type FAQ = {
  question: string;
  answer?: string;
  answerJsx?: React.ReactNode;
};

const faqs: FAQ[] = [
  {
    question: "Can I reserve the space for a private event?",
    answerJsx: (
      <>
        <p>Andrew's Corner is available on most Saturdays and Sundays, 18:00-22:00 for private rental.</p>
        <p>Basic (200 euros): Our <Link to="/gallery?photo=main-room-3.jpg">main space</Link> seats up to 30-40 people comfortably. Large smart screen available for use.</p>
        <p>Basic + Refreshments (300 euros): Includes one drink per person from our menu.</p>
        <p>Wine and Cheese, please! (300+ euros): If you would like to add a glass of wine and a cheese tray or other simple food, talk to us! We'll work something out.</p>
        <p>The <Link to="/gallery?photo=seminar-1.jpg">Sinai Room</Link> downstairs is also available for private bookings during working hours for 25€/hour. Capacity: 12-15 people.</p>
        <p>*The reservation is confirmed when a non-refundable 20% down payment is received. Cash or IBAN transfer only at this time.</p>
      </>
    ),
  },
  {
    question: "Can I host an event at Andrew's Corner that is open to the public?",
    answer: `We love hosting events at Andrew's Corner during our working hours! We prioritise events that complement our purpose and core values, but all events are considered and are subject to the owner's discretion. Once approved, we will announce your event on our website, our social media outlets, and our in-house announcement board. Please note, attendees are expected to buy something from the menu.`,
  },
  {
    question: "Do you serve food? Can I bring my own food?",
    answer: `We do not allow outside food or drink. Please check our menu for what we offer.`,
  },
  {
    question: "Can I bring my laptop and/or my own book(s)?",
    answer: `Yes. We offer free wi-fi and plenty of plug-ins to our guests. There is no time limit for use. Please note, a purchase from the bar is required. Multiple purchases for long visits are appreciated. We are a privately owned library and receive no funding from the State or Church. Your drink helps us keep the lights on!`,
  },
  {
    question: "Do I have to be quiet?",
    answerJsx: (
      <>
        <p>Not in our main coffee shop area! It may be quiet at times, but this is also where events, meetings, lectures, and conversations take place. If you're looking for somewhere quieter, the <Link to="/gallery?photo=front-bookshelf-1.jpg">stacks room</Link> just off of the main coffee lounge area has space. The <Link to="/gallery?photo=basement-1.jpg">downstairs</Link> is designated a <Link to="/gallery?photo=basement-1.jpg">Quiet Zone</Link> at all times except for Mondays and Thursdays from 17:30-20:30.</p>
      </>
    ),
  },
  {
    question: "Can I borrow a book?",
    answer: `We do not lend books but we've made a very comfortable place to read them. Please enjoy our books on site with a cup of coffee and a croissant!`,
  },
  {
    question: "How can I find out if the library has a book I'm looking for?",
    answerJsx: (
      <>
        <p>Search our library catalogue on the <Link to="/library">Library Catalog page</Link>. Please be patient as there are still inconsistencies and gaps in our library management system. In the meantime, any of our baristas can direct you to the right shelf. Karly or Daniel can also help you.</p>
      </>
    ),
  },
  {
    question: "In what languages are the books written?",
    answer: `The bulk of the library is in English, but we are expanding our collection of books in modern Greek. We also have holdings in French, Russian, German, Italian, Spanish, Ancient Greek, Latin, Aramaic, Syriac and Hebrew among other languages.`,
  },
  {
    question: "Do you accept book donations?",
    answer: `We accept most books that fall in the "Humanities" domain. Due to limited space, we must be discerning. If your books are not added to our shelves, we put them in a "Give-away" box. If you donate upwards of 100 books, we will gratefully designate each book in our catalogue as coming from your collection.`,
  },
  {
    question: "Is Andrew's Corner affiliated with a church or religious organisation?",
    answer: `No. The books and property for Andrew's Corner are privately owned by Daniel Napier, who makes them available for all of us. The café is legally owned and operated by a Greek nonprofit called the Organisation for the Research and Dissemination of Theology and Philosophy. Although we are independent, we intentionally operate in grateful deference to Metropolitan Philotheos of Thessaloniki.`,
  },
  {
    question: "What languages are spoken at Andrew's Corner?",
    answer: `Our baristas are Greek natives and are also fluent in English. The owners are from America, so you will hear a lot of English, but we seem to attract an international crowd, so you might hear some other languages as well.`,
  },
  {
    question: "Who's Andrew?",
    answer: `The Apostle Andrew encapsulates our purpose and vision. In John's Gospel, Andrew is always introducing people to Jesus. The last time Andrew appears, he introduces some Greeks who come looking for Jesus (John 12:20ff). We think the world could use more Andrews.`,
  },
  {
    question: "Is Andrew's Corner pet friendly?",
    answer: `We love animals and will strive to make them as comfortable as possible outside our doors. However, due to the vulnerability of books and the potential allergies of our customers, we do not allow pets inside Andrew's Corner.`,
  },
];

const greekFaqs: FAQ[] = [
  { question: "[ Ελληνική ερώτηση 1 ]", answer: "[ Ελληνική απάντηση 1 ]" },
  { question: "[ Ελληνική ερώτηση 2 ]", answer: "[ Ελληνική απάντηση 2 ]" },
  { question: "[ Ελληνική ερώτηση 3 ]", answer: "[ Ελληνική απάντηση 3 ]" },
];

const FAQSection: React.FC = () => {
  const { language } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const activeFaqs = language === 'el' ? greekFaqs : faqs;

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="container faq-section">
      <h2>{language === 'el' ? 'Συχνές Ερωτήσεις' : 'Frequently Asked Questions'}</h2>
      <div className="faq-list">
        {activeFaqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <button className="faq-question" onClick={() => toggle(index)}>
              <span>{faq.question}</span>
              <span className="faq-icon">{openIndex === index ? '−' : '+'}</span>
            </button>
            {openIndex === index && (
              <div className="faq-answer">
                {faq.answerJsx
                  ? faq.answerJsx
                  : faq.answer!.split('\n').map((line, i) => (
                      line.trim() ? <p key={i}>{line}</p> : null
                    ))}
              </div>
            )}
          </div>
        ))}
      </div>
      <p className="faq-subtitle">
        {language === 'el'
          ? 'Δεν βρίσκετε αυτό που ψάχνετε; Επικοινωνήστε μαζί μας.'
          : <>Don't see what you're looking for? Email us: <a href="mailto:StAndrewsCorner@gmail.com">StAndrewsCorner@gmail.com</a></>}
      </p>
    </section>
  );
};

export default FAQSection;
