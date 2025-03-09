import React, { useState } from "react";

const Faq = () => {
  const [openFaq, setOpenFaq] = useState(null); // Track open question

  const faqs = [
    {
      id: 1,
      question: "How does Grammarly work?",
      answer:
        "Grammarly’s algorithms flag potential issues in the text and suggest context-specific corrections for grammar, wordiness, style, punctuation, and even plagiarism. Grammarly explains the reasoning behind each correction, so you can make an informed decision about whether, and how, to correct an issue.",
    },
    {
      id: 2,
      question: "What is a Grammarly account?",
      answer:
        "A Grammarly account is what you use to access your personalized text editor. With a Grammarly account, you can check your spelling and grammar online whenever you write on the web.",
    },
    {
      id: 3,
      question: "How do I create a Grammarly account?",
      answer:
        "To create a Grammarly account, you need to sign up on the Grammarly website. You can use your email address or sign up with your Google or Facebook account.",
    },
    {
      id: 4,
      question: "How do I use Grammarly?",
      answer:
        "You can use Grammarly by signing in to the Grammarly website or by downloading the Grammarly browser extension for Chrome, Safari, Firefox, or Edge. You can also download the Grammarly app for your phone or tablet.",
    },
  ];

  // Function to toggle FAQ
  const toggleFaq = (id) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <section className="max-w-2xl container my-10 p-6">
      <h2 className="mb-6 text-4xl font-semibold text-center">FAQ's</h2>
      <div className="flex flex-col space-y-4">
        {faqs.map((faq) => (
          <div key={faq.id} className="border-b border-gray-300 pb-3">
            <button
              onClick={() => toggleFaq(faq.id)}
              className="w-full text-left text-lg font-medium flex justify-between items-center py-3 cursor-pointer"
            >
              {faq.question}
              <i
                className={`ri-${
                  openFaq === faq.id ? "arrow-up" : "arrow-down"
                }-s-line text-xl text-white`}
              ></i>
            </button>
            {openFaq === faq.id && (
              <p className="text-gray-600 mt-2 transition-all duration-300">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faq;
