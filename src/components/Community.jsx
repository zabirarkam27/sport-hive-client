import React from "react";

const Community = () => {
  return (
    <div className="flex flex-col items-center justify-center my-10 px-4 md:px-10">
      <div className="flex flex-col lg:flex-row items-center gap-10 w-full max-w-7xl">
        <div className="flex justify-center w-full lg:w-1/2">
          <img
            src="https://equi-sports.web.app/assets/community-gi4UKJFa.gif"
            alt="FAQ Illustration"
            className="w-full max-w-xs md:max-w-sm rounded-lg"
          />
        </div>
        <div className="flex flex-col items-center">
          <h1 className="mt-2 mb-4 text-4xl font-bold">Join Our Community</h1>
          <p className="mb-6 text-lg">
            Get the latest news, updates, and exclusive offers!
          </p>
          <div className="join">
            <div>
              <label className="input validator join-item">
                <svg
                  className="h-[1em] opacity-50"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                    fill="none"
                    stroke="currentColor"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </g>
                </svg>
                <input type="email" placeholder="mail@site.com" required />
              </label>
              <div className="validator-hint hidden">
                Enter valid email address
              </div>
            </div>
            <button className="btn btn-neutral join-item">Join</button>
          </div>
          <p className="mt-4 text-sm">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Community;
