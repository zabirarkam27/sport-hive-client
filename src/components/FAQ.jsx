import React from "react";

const FAQ = () => {
  return (
    <div className="flex flex-col items-center justify-center my-10 px-4 md:px-10">
      <h1 className="mt-2 mb-8 text-4xl font-bold">FAQ</h1>
      <div className="flex flex-col lg:flex-row items-center gap-10 w-full max-w-7xl">
        <div className="flex justify-center w-full lg:w-1/2">
          <img
            src="https://equi-sports.web.app/assets/FAQq-CUkn8M7e.gif"
            alt="FAQ Illustration"
            className="w-full max-w-xs md:max-w-sm rounded-lg"
          />
        </div>
        <div className="w-full lg:w-1/2">
          <div className="join join-vertical w-full bg-base-100">
            <div className="collapse collapse-arrow join-item border border-base-300">
              <input type="radio" name="faq-accordion" defaultChecked />
              <div className="collapse-title font-semibold text-base md:text-lg">
                What is your return policy?
              </div>
              <div className="collapse-content text-sm md:text-base">
                We accept returns within 30 days of purchase, provided the items
                are unused and in their original packaging. To initiate a
                return, please visit our Returns page or contact customer
                service.
              </div>
            </div>

            <div className="collapse collapse-arrow join-item border border-base-300">
              <input type="radio" name="faq-accordion" />
              <div className="collapse-title font-semibold text-base md:text-lg">
                How do I track my order?
              </div>
              <div className="collapse-content text-sm md:text-base">
                Once your order ships, you’ll receive a confirmation email with
                a tracking number and link. You can also log in to your account
                on our website to check the status of your shipment.
              </div>
            </div>

            <div className="collapse collapse-arrow join-item border border-base-300">
              <input type="radio" name="faq-accordion" />
              <div className="collapse-title font-semibold text-base md:text-lg">
                What forms of payment do you accept?
              </div>
              <div className="collapse-content text-sm md:text-base">
                We accept major credit and debit cards (Visa, MasterCard,
                American Express), PayPal, and Apple Pay. All transactions are
                secure and encrypted.
              </div>
            </div>

            <div className="collapse collapse-arrow join-item border border-base-300">
              <input type="radio" name="faq-accordion" />
              <div className="collapse-title font-semibold text-base md:text-lg">
                How do I contact customer service?
              </div>
              <div className="collapse-content text-sm md:text-base">
                You can reach our customer service team by phone, email, or
                through the contact form on our website. We’re available to
                assist you Monday through Friday, 9am–5pm EST.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
